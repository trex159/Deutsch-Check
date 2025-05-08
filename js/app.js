// Quiz-Status
let currentQuestionIndex = 0;
let userAnswers = [];
let quizStarted = false;

// DOM-Elemente
const quizContainer = document.getElementById('quiz-container');
const progressContainer = document.getElementById('quiz-progress');
const resultsContainer = document.getElementById('results-container');

// Copyright-Jahr automatisch setzen
const currentYearElement = document.getElementById('current-year');
if (currentYearElement) {
  currentYearElement.textContent = new Date().getFullYear();
}

// Set total number of questions dynamically
const totalQuestionsElement = document.getElementById('total-questions');
if (totalQuestionsElement) {
  totalQuestionsElement.textContent = questions.length;
}

// Shuffle-Funktion für Fragen
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
 
// Hole bis zu 15 zufällige Fragen aus allen verfügbaren Themen
function getRandomQuestions(maxCount = 15) {
  const count = Math.min(maxCount, questions.length); // Limit to available questions
  return shuffleArray([...questions]).slice(0, count);
}

// Formatierter Fachbegriff
function formatSubjectName(subject) {
  const map = {
    stilmittel: "Stilmittel",
    wortebene: "Wortebene",
    satzebene: "Satzebene",
    textebene: "Textebene",
    fremdwoerter: "Fremdwörter",
    textsorten: "Textsorten"
  };
  return map[subject] || subject.charAt(0).toUpperCase() + subject.slice(1);
}

// Fortschrittsbalken aktualisieren
function updateProgress() {
  const progress = (currentQuestionIndex / quizQuestions.length) * 100;
  progressContainer.innerHTML = `
    <div class="progress-header">
      <span>Frage ${currentQuestionIndex + 1} von ${quizQuestions.length}</span>
      <span>${Math.round(progress)}%</span>
    </div>
    <div class="progress-bar">
      <div class="progress-fill" style="width: ${progress}%"></div>
    </div>
  `;
}

// Frage anzeigen
function displayQuestion(question) {
  const optionLetters = ['A', 'B', 'C', 'D'];
  quizContainer.innerHTML = `
    <div class="question-card">
      <div class="question-header">
        <span class="subject-tag">${formatSubjectName(question.subject)}</span>
        <h3 class="question-text">${question.text}</h3>
      </div>
      <div class="options-container">
        ${question.options.map((option, index) => `
          <button class="option-button" data-index="${index}">
            <span class="option-letter">${optionLetters[index]}</span>
            <span>${option}</span>
          </button>
        `).join('')}
      </div>
    </div>
  `;

  document.querySelectorAll('.option-button').forEach(button => {
    button.addEventListener('click', () => handleAnswer(parseInt(button.dataset.index)));
  });
}

// Antwort verarbeiten
function handleAnswer(selectedIndex) {
  const question = quizQuestions[currentQuestionIndex];
  const isCorrect = selectedIndex === question.correctAnswer;

  userAnswers.push({
    questionId: question.id,
    selectedOption: selectedIndex,
    isCorrect,
    subject: question.subject
  });

  const buttons = document.querySelectorAll('.option-button');
  buttons.forEach(button => button.disabled = true);
  buttons[selectedIndex].classList.add(isCorrect ? 'correct' : 'incorrect');
  buttons[question.correctAnswer].classList.add('correct');

  const explanationDiv = document.createElement('div');
  explanationDiv.className = `p-4 mt-4 rounded-lg ${isCorrect ? 'bg-green-50' : 'bg-red-50'}`;
  explanationDiv.innerHTML = `
    <p class="font-medium ${isCorrect ? 'text-green-700' : 'text-red-700'}">${isCorrect ? 'Richtig!' : 'Falsch'}</p>
    <p class="mt-1 text-sm text-gray-700">${question.explanation}</p>
  `;
  document.querySelector('.options-container').appendChild(explanationDiv);

  setTimeout(() => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      currentQuestionIndex++;
      updateProgress();
      displayQuestion(quizQuestions[currentQuestionIndex]);
    } else {
      showResults();
    }
  }, 2000);
}

// Ergebnisse berechnen
function calculateResults() {
  const subjects = [...new Set(questions.map(q => q.subject))];
  const subjectScores = subjects.map(subject => {
    const subjectAnswers = userAnswers.filter(a => a.subject === subject);
    const correct = subjectAnswers.filter(a => a.isCorrect).length;
    const total = subjectAnswers.length;
    return {
      subject,
      correct,
      total,
      percentage: total > 0 ? (correct / total) * 100 : 0
    };
  });

  const strengths = subjectScores.filter(score => score.percentage >= 70).map(score => score.subject);
  const weaknesses = subjectScores.filter(score => score.percentage < 70).map(score => score.subject);

  return {
    overallScore: userAnswers.filter(a => a.isCorrect).length,
    totalQuestions: quizQuestions.length,
    subjectScores,
    strengths,
    weaknesses
  };
}

// ChatGPT-Prompt erzeugen
function generateChatGptPrompt(results) {
  const subjectScoreSummary = results.subjectScores
    .map(score => `${formatSubjectName(score.subject)}: ${score.correct}/${score.total} (${Math.round(score.percentage)}%)`)
    .join('\n');

  const weaknessesText = results.weaknesses.length > 0
    ? `Ich brauche Hilfe in folgenden Bereichen: ${results.weaknesses.map(formatSubjectName).join(', ')}.`
    : 'Ich war in allen Bereichen gut, möchte aber mein Wissen vertiefen.';

  return `Du bist jetzt "Herr Huthöfer II", du bist ein Deutschlehrer an einer Bayrischen Realschule, du bist Experte für Fragen zum TGA (=Textgebundener Aufsatz).
Ich habe ein Quiz im Fach Deutsch (9. Klasse Realschule Bayern) gemacht. Es ging um folgende Themen:

- Stilmittel (z. B. Metapher, Alliteration, Ironie...)
- Wortebene (z. B. Neologismus, Oxymoron, Anglizismus...)
- Satz- und Textebene (z. B. Hauptsatz/Nebensatz, Textaufbau, Rethorische Frage...)
- Fremdwörter (z. B. Kritik, Ironie, Argumentation...)
- Textsorten (Kommentar, Reportage)

Ich habe ${results.overallScore} von ${results.totalQuestions} Fragen richtig beantwortet (${Math.round((results.overallScore / results.totalQuestions) * 100)}%).

Ergebnisse nach Themen:
${subjectScoreSummary}

${weaknessesText}

Kannst du mir gezielte Erklärungen und passende Übungsaufgaben für diese Themen geben? Besonders zu den Bereichen, in denen ich Schwächen hatte. Welche Teilbereiche sollte ich außerdem weiter üben?`;
}

// Ergebnisse anzeigen
function showResults() {
  const results = calculateResults();
  const chatGptPrompt = generateChatGptPrompt(results);

  quizContainer.style.display = 'none';
  progressContainer.style.display = 'none';
  resultsContainer.style.display = 'block';

  resultsContainer.innerHTML = `
    <div class="results-header">
      <h2 class="text-2xl font-bold mb-2">Dein Ergebnis</h2>
      <div class="results-score">
        ${results.overallScore}/${results.totalQuestions}
        <span class="text-lg text-gray-500">(${Math.round((results.overallScore / results.totalQuestions) * 100)}%)</span>
      </div>
    </div>

    <div class="results-content">
      <div class="subject-scores">
        <h3 class="text-lg font-semibold mb-3">Leistung nach Themen</h3>
        ${results.subjectScores.map(score => `
          <div class="subject-score">
            <div class="subject-score-header">
              <span>${formatSubjectName(score.subject)}</span>
              <span>${score.correct}/${score.total} (${Math.round(score.percentage)}%)</span>
            </div>
            <div class="subject-progress-bar">
              <div class="subject-progress-fill ${score.percentage >= 80 ? 'good' : score.percentage >= 60 ? 'average' : 'poor'}"
                   style="width: ${score.percentage}%"></div>
            </div>
          </div>
        `).join('')}
      </div>

      <div class="feedback-section">
        <div class="feedback-card strengths">
          <h3>Stärken</h3>
          ${results.strengths.length > 0 
            ? `<ul class="feedback-list">${results.strengths.map(subject => `<li>${formatSubjectName(subject)}</li>`).join('')}</ul>`
            : '<p>Übe weiter – du wirst besser!</p>'
          }
        </div>

        <div class="feedback-card weaknesses">
          <h3>Verbesserungsbereiche</h3>
          ${results.weaknesses.length > 0
            ? `<ul class="feedback-list">${results.weaknesses.map(subject => `<li>${formatSubjectName(subject)}</li>`).join('')}</ul>`
            : '<p>Super! Du warst in allen Bereichen stark.</p>'
          }
        </div>
      </div>

      <div class="chatgpt-prompt">
        <h3 class="text-lg font-semibold mb-3">Lerne weiter mit ChatGPT</h3>
        <p class="text-sm text-gray-600 mb-3">Kopiere den folgenden Prompt und füge ihn bei ChatGPT ein:</p>
        <pre class="whitespace-pre-wrap text-sm text-gray-700 mb-2">${chatGptPrompt}</pre>
        <button class="copy-button" onclick="copyPrompt(this)">Kopieren</button>
      </div>

      <button onclick="startQuiz()" class="retry-button">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-repeat" viewBox="0 0 16 16">
          <path d="M11.534 7h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-2.1A5.5 5.5 0 1 1 8 1.5a.5.5 0 0 1 0 1 4.5 4.5 0 1 0 4.5 4.5H11.5a.5.5 0 0 1-.5-.5z"/>
          <path d="M4.466 9H1.5a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 1 0v2.1A5.5 5.5 0 1 1 8 14.5a.5.5 0 0 1 0-1 4.5 4.5 0 1 0-4.5-4.5H4.5a.5.5 0 0 1 .5.5z"/>
        </svg>
        Nochmal versuchen
      </button>
    </div>
  `;
}

// Prompt kopieren
function copyPrompt(button) {
  const prompt = button.previousElementSibling.textContent;
  navigator.clipboard.writeText(prompt);
  button.textContent = 'Kopiert!';
  button.classList.add('copied');
  setTimeout(() => {
    button.textContent = 'Kopieren';
    button.classList.remove('copied');
  }, 2000);
}

// Quiz starten
let quizQuestions;
function startQuiz() {
  quizQuestions = getRandomQuestions(); // Use the updated function
  currentQuestionIndex = 0;
  userAnswers = [];

  quizContainer.style.display = 'block';
  progressContainer.style.display = 'block';
  resultsContainer.style.display = 'none';

  updateProgress();
  displayQuestion(quizQuestions[currentQuestionIndex]);
}

// Quiz initial starten
startQuiz();
