const questions = [
  // Stilmittel
  {
    id: 1,
    text: "Welches Stilmittel liegt vor: \"Mit Herz und Hand\"?",
    subject: "stilmittel",
    options: ["Metapher", "Alliteration", "Anapher", "Ironie"],
    correctAnswer: 1,
    explanation: "Hier liegt eine Alliteration vor: Mehrere Wörter beginnen mit demselben Laut ('H')."
  },
  {
    id: 2,
    text: "Was ist eine Metapher?",
    subject: "stilmittel",
    options: [
      "Eine Übertreibung",
      "Ein bildhafter Ausdruck",
      "Eine Frage ohne Antwort",
      "Eine Wiederholung am Satzanfang"
    ],
    correctAnswer: 1,
    explanation: "Eine Metapher ist ein bildhafter Ausdruck, z. B. 'Ein Meer von Menschen'."
  },

  // Sprachanalyse – Wortebene
  {
    id: 3,
    text: "Was ist ein Neologismus?",
    subject: "wortebene",
    options: [
      "Ein veraltetes Wort",
      "Ein neues Wort oder eine Wortneuschöpfung",
      "Ein zusammengesetztes Wort",
      "Ein Wort mit mehreren Bedeutungen"
    ],
    correctAnswer: 1,
    explanation: "Ein Neologismus ist eine Wortneuschöpfung, z. B. 'Klickrate' oder 'Selfie'."
  },
  {
    id: 4,
    text: "Welches der folgenden Beispiele ist ein Oxymoron?",
    subject: "wortebene",
    options: [
      "leise Musik",
      "alter Greis",
      "bittersüß",
      "winzigklein"
    ],
    correctAnswer: 2,
    explanation: "'bittersüß' ist ein Oxymoron – es verbindet Gegensätze (bitter und süß) in einem Ausdruck."
  },
  {
    id: 11,
    text: "Was ist ein Anglizismus?",
    subject: "wortebene",
    options: [
      "Ein altes deutsches Wort",
      "Ein Fachbegriff aus der Grammatik",
      "Ein aus dem Englischen übernommenes Wort",
      "Ein Wort mit negativer Bedeutung"
    ],
    correctAnswer: 2,
    explanation: "Ein Anglizismus ist ein Wort, das aus dem Englischen in die deutsche Sprache übernommen wurde, z. B. 'downloaden'."
  },
  {
    id: 12,
    text: "Welcher Ausdruck enthält ein Fremdwort?",
    subject: "wortebene",
    options: [
      "Schnellstraße",
      "Argumentation",
      "Hausaufgabe",
      "Leserbrief"
    ],
    correctAnswer: 1,
    explanation: "'Argumentation' stammt aus dem Lateinischen (argumentatio) und ist ein Fremdwort."
  },

  // Sprachanalyse – Satzebene
  {
    id: 5,
    text: "Was gehört zur Satzebene?",
    subject: "satzebene",
    options: [
      "Nomen und Adjektive vergleichen.",
      "Rethorische Fragen.",
      "Absätze und Bilder.",
      "Die Wirkung von Neologismen."
    ],
    correctAnswer: 1,
    explanation: "Rethorische Fragen sind ein Stilmittel, das auf Satzebene sind."
  },

  // Sprachanalyse – Textebene
  {
    id: 6,
    text: "Was gehört zur Analyse auf Textebene?",
    subject: "textebene",
    options: ["Wortarten bestimmen", "Textstruktur untersuchen", "Zeichensetzung prüfen", "Zeitformen erkennen"],
    correctAnswer: 1,
    explanation: "Auf Textebene analysiert man z. B. Aufbau, Einleitung, Argumentationsstruktur etc."
  },

  // Fremdwörter
  {
    id: 7,
    text: "Was bedeutet das Fremdwort 'Kritik'?",
    subject: "fremdwoerter",
    options: ["Bewunderung", "Urteil/Bewertung", "Verbot", "Beleidigung"],
    correctAnswer: 1,
    explanation: "'Kritik' bedeutet eine Bewertung oder Beurteilung, nicht automatisch etwas Negatives."
  },
  {
    id: 8,
    text: "Was bedeutet 'Ironie'?",
    subject: "fremdwoerter",
    options: [
      "Etwas sagen, aber das Gegenteil meinen",
      "Etwas übertreiben",
      "Jemanden ausfragen",
      "Etwas wörtlich nehmen"
    ],
    correctAnswer: 0,
    explanation: "Ironie bedeutet, dass man das Gegenteil von dem meint, was man sagt – oft humorvoll."
  },

  // Textsorten – Kommentar und Reportage
  {
    id: 9,
    text: "Was ist typisch für einen Kommentar?",
    subject: "textsorten",
    options: ["Neutraler Bericht", "Persönliche Meinung", "Sachliche Darstellung", "Interview"],
    correctAnswer: 1,
    explanation: "Ein Kommentar enthält die persönliche Meinung des Autors."
  },
  {
    id: 10,
    text: "Welche Aussage trifft auf eine Reportage zu?",
    subject: "textsorten",
    options: [
      "Sie enthält keine wörtliche Rede",
      "Sie ist vollständig erfunden",
      "Sie beschreibt anschaulich und lebendig",
      "Sie ist immer anonym verfasst"
    ],
    correctAnswer: 2,
    explanation: "Reportagen sind lebendig und anschaulich geschrieben und oft vor Ort recherchiert."
  },
  {
    id: 13,
    text: "Wie ist ein Kommentar typischerweise aufgebaut?",
    subject: "textsorten",
    options: [
      "Interview – Hauptteil – Fazit",
      "Einleitung – Inhaltszusammenfassung – Textanalyse – Schluss",
      "Einleitung – Hauptteil – Quellen",
      "Titel – Gliederung – Inhaltsangabe"
    ],
    correctAnswer: 1,
    explanation: "Ein Kommentar besteht in der Regel aus Einleitung, Inhaltszusammenfassung, Textanalyse und Meinung am Schluss."
  },
  {
    id: 14,
    text: "Wodurch zeichnet sich ein Kommentar sprachlich aus?",
    subject: "textsorten",
    options: ["Erzählende Sprache", "Objektive Darstellung", "Subjektive Sprache und Meinung", "Fachbegriffe und Statistiken"],
    correctAnswer: 2,
    explanation: "Ein Kommentar enthält die subjektive Meinung des Autors und nutzt oft wertende Sprache."
  },
  {
    id: 15,
    text: "Welches Ziel verfolgt eine Reportage?",
    subject: "textsorten",
    options: ["Unterhaltung", "Belehrung", "Lebendige und anschauliche Darstellung eines Ereignisses", "Wissenschaftliche Erklärung"],
    correctAnswer: 2,
    explanation: "Die Reportage möchte ein Geschehen lebendig und anschaulich darstellen, meist mit Nähe zum Geschehen."
  },
  {
    id: 16,
    text: "Was enthält eine Reportage oft zusätzlich zur sachlichen Information?",
    subject: "textsorten",
    options: ["Witze", "Fiktive Beispiele", "Gefühlsbetonte Erzählungen und Eindrücke", "Tabellarische Daten"],
    correctAnswer: 2,
    explanation: "Neben sachlicher Information bietet die Reportage oft persönliche Eindrücke, Stimmungen und Beobachtungen."
  },
  {
    id: 17,
    text: "Welche Perspektive wird in einer Reportage oft verwendet?",
    subject: "textsorten",
    options: ["Allwissender Erzähler", "Ich-Perspektive", "Neutraler Erzähler", "Unbeteiligter Dritter"],
    correctAnswer: 1,
    explanation: "Die Ich-Perspektive sorgt für Nähe zum Geschehen und persönliche Eindrücke."
  },
  {
    id: 18,
    text: "Welche Funktion hat die Einleitung in einem Kommentar?",
    subject: "textsorten",
    options: ["Spannungsaufbau", "Thema vorstellen und Interesse wecken", "Schlussfolgerung vorwegnehmen", "Zitate sammeln"],
    correctAnswer: 1,
    explanation: "Die Einleitung führt ins Thema ein und weckt Interesse für die eigene Position."
  },
  {
    id: 19,
    text: "Was ist ein typisches Merkmal des Schlusses in einem Kommentar?",
    subject: "textsorten",
    options: ["Zusammenfassung der Inhalte", "Appell oder persönliche Meinung", "Statistische Analyse", "Interview mit dem Autor"],
    correctAnswer: 1,
    explanation: "Am Schluss eines Kommentars steht meist ein klarer Appell oder eine persönliche Wertung des Autors."
  },
  {
    id: 20,
    text: "Worauf liegt der Fokus in einer Reportage?",
    subject: "textsorten",
    options: ["Argumentation", "Erzählung mit Fakten und Eindrücken", "Meinungsäußerung", "Kritische Analyse"],
    correctAnswer: 1,
    explanation: "Eine Reportage erzählt ein Ereignis lebendig und kombiniert Fakten mit sinnlicher Beschreibung."
  },
  {
    id: 21,
    text: "Was unterscheidet die Sprache einer Reportage von der eines Kommentars?",
    subject: "textsorten",
    options: ["In der Reportage sind Interviews.", "Beide sind sachlich", "Kommentar: anschaulich – Reportage: nüchtern", "Beide nutzen nur Fachsprache"],
    correctAnswer: 0,
    explanation: "In einer Reportage sind oft Interviews und persönliche Eindrücke enthalten, während ein Kommentar nur auf den Autor bezogen bleibt."
  },
  {
    id: 22,
    text: "Wie wird der Leser in einer Reportage meist angesprochen?",
    subject: "textsorten",
    options: ["Direkt mit 'du'", "Indirekt durch persönliche Eindrücke", "Gar nicht", "Nur mit Fakten"],
    correctAnswer: 1,
    explanation: "Der Leser wird meist durch eindrucksvolle Schilderungen und Nähe zum Geschehen angesprochen."
  },
  {
    id: 23,
    text: "Welche Textsorte enthält typischerweise keine persönliche Meinung?",
    subject: "textsorten",
    options: ["Kommentar", "Reportage", "Nachricht", "Kolumne"],
    correctAnswer: 2,
    explanation: "Die Nachricht ist objektiv und enthält keine persönliche Meinung."
  },
  {
    id: 24,
    text: "Welche Aussage ist korrekt bezüglich einer Reportage?",
    subject: "textsorten",
    options: ["Sie verzichtet auf Stilmittel", "Sie nutzt subjektive Eindrücke zur Veranschaulichung", "Sie enthält keine wörtliche Rede", "Sie ist anonym verfasst"],
    correctAnswer: 1,
    explanation: "Reportagen verwenden oft subjektive Eindrücke und Stilmittel, um lebendige Bilder beim Leser hervorzurufen."
  },
  // Stilmittel
  {
    id: 26,
    text: "Welches Stilmittel liegt vor: „Der frühe Vogel fängt den Wurm“?",
    subject: "stilmittel",
    options: ["Metapher", "Sprichwort", "Personifikation", "Ironie"],
    correctAnswer: 1,
    explanation: "Das ist ein Sprichwort, das eine allgemeine Lebensweisheit ausdrückt."
  },
  {
    id: 27,
    text: "Was bewirkt eine Anapher?",
    subject: "stilmittel",
    options: ["Verstärkung durch Wiederholung", "Spannung durch Gegensatz", "Bildhafte Sprache", "Verkürzung des Satzes"],
    correctAnswer: 0,
    explanation: "Eine Anapher wiederholt Wörter am Satzanfang und verstärkt so die Aussage."
  },
  {
    id: 28,
    text: "Welches Stilmittel liegt vor: „Schwarze Milch der Frühe“?",
    subject: "stilmittel",
    options: ["Euphemismus", "Paradoxon", "Oxymoron", "Metapher"],
    correctAnswer: 2,
    explanation: "Ein Oxymoron verbindet Gegensätze – wie 'schwarz' und 'Milch'."
  },
  {
    id: 29,
    text: "Was ist eine Ellipse?",
    subject: "stilmittel",
    options: ["Eine Übertreibung", "Ein unvollständiger Satz", "Eine Frage ohne Antwort", "Ein Gleichnis"],
    correctAnswer: 1,
    explanation: "Eine Ellipse lässt Satzteile weg, die aber aus dem Kontext verstanden werden."
  },

  // Wortebene
  {
    id: 30,
    text: "Was ist ein Fachbegriff?",
    subject: "wortebene",
    options: ["Ein umgangssprachlicher Ausdruck", "Ein Begriff mit mehreren Bedeutungen", "Ein Begriff aus einem bestimmten Wissensgebiet", "Ein veraltetes Wort"],
    correctAnswer: 2,
    explanation: "Fachbegriffe gehören zu speziellen Wissensgebieten, z. B. 'Photosynthese'."
  },
  {
    id: 31,
    text: "Was bedeutet 'konnotiert'?",
    subject: "wortebene",
    options: ["Neutral", "Zusätzlich mit Bedeutung versehen", "Zufällig gewählt", "Falsch verwendet"],
    correctAnswer: 1,
    explanation: "Ein Wort ist konnotiert, wenn es neben der Hauptbedeutung noch eine Nebenbedeutung hat."
  },
  {
    id: 32,
    text: "Was ist ein Synonym für 'schön'?",
    subject: "wortebene",
    options: ["hässlich", "ansehnlich", "laut", "dunkel"],
    correctAnswer: 1,
    explanation: "'Ansehnlich' ist ein Synonym für 'schön'."
  },
  {
    id: 33,
    text: "Was ist ein Neologismus?",
    subject: "wortebene",
    options: ["Eine Wortneuschöpfung", "Ein veralteter Begriff", "Ein wissenschaftlicher Ausdruck", "Ein Zitat"],
    correctAnswer: 0,
    explanation: "Neologismen sind neue Wörter wie 'Klimakleber' oder 'Coronaparty'."
  },

  // Satzebene
  {
    id: 34,
    text: "Was ist ein Satzgefüge?",
    subject: "satzebene",
    options: ["Ein Satz ohne Verb", "Ein einfacher Hauptsatz", "Ein zusammengesetzter Satz aus Haupt- und Nebensatz", "Eine Satzreihe aus drei Hauptsätzen"],
    correctAnswer: 2,
    explanation: "Ein Satzgefüge besteht aus mindestens einem Haupt- und einem Nebensatz."
  },
  {
    id: 35,
    text: "Welcher Satz ist eine Satzreihe?",
    subject: "satzebene",
    options: ["Ich kam, sah und siegte.", "Weil ich müde war, schlief ich.", "Dass du kommst, freut mich.", "Wenn du willst, bleib hier."],
    correctAnswer: 0,
    explanation: "Drei Hauptsätze werden durch Kommata verbunden: das ist eine Satzreihe."
  },
  {
    id: 36,
    text: "Was ist ein einfacher Hauptsatz?",
    subject: "satzebene",
    options: ["Wir gingen nach Hause.", "Wenn es regnet, bleiben wir drinnen.", "Obwohl sie Hunger hatte, aß sie nichts.", "Der Hund, der bellte, war klein."],
    correctAnswer: 0,
    explanation: "'Wir gingen nach Hause.' ist ein einfacher Hauptsatz – Subjekt + Prädikat."
  },

  // Textebene
  {
    id: 37,
    text: "Was gehört zur Analyse auf Textebene?",
    subject: "textebene",
    options: ["Satzglieder bestimmen", "Erzählperspektive analysieren", "Wortarten bestimmen", "Rechtschreibung prüfen"],
    correctAnswer: 1,
    explanation: "Zur Textebene gehört u. a. die Erzählperspektive (Ich-Erzähler, auktorial etc.)."
  },
  {
    id: 38,
    text: "Was ist eine typische Funktion der Einleitung in einem Text?",
    subject: "textebene",
    options: ["Sie enthält die Schlussfolgerung.", "Sie weckt Interesse und stellt das Thema vor.", "Sie bringt die Hauptargumente.", "Sie erklärt Fachbegriffe."],
    correctAnswer: 1,
    explanation: "Die Einleitung soll das Interesse wecken und ins Thema einführen."
  },
  {
    id: 39,
    text: "Was versteht man unter einem Spannungsbogen?",
    subject: "textebene",
    options: ["Ein Fachbegriff aus der Physik", "Eine Zusammenfassung", "Die dramatische Struktur eines Textes", "Ein Diagramm"],
    correctAnswer: 2,
    explanation: "Ein Spannungsbogen beschreibt, wie Spannung in einem Text aufgebaut und gelöst wird."
  },

  // Fremdwörter
  {
    id: 40,
    text: "Was bedeutet 'These'?",
    subject: "fremdwoerter",
    options: ["Ein Beweis", "Eine Behauptung", "Ein Argument", "Ein Zitat"],
    correctAnswer: 1,
    explanation: "Eine These ist eine Behauptung, die im Text begründet oder widerlegt wird."
  },
  {
    id: 41,
    text: "Was bedeutet 'Interpretation'?",
    subject: "fremdwoerter",
    options: ["Ein Zitat", "Ein Inhaltsverzeichnis", "Eine Deutung eines Textes", "Ein Rechtsbegriff"],
    correctAnswer: 2,
    explanation: "Eine Interpretation ist die inhaltliche Deutung eines Textes."
  },
  {
    id: 42,
    text: "Was bedeutet 'Protagonist'?",
    subject: "fremdwoerter",
    options: ["Nebenfigur", "Gegenspieler", "Hauptfigur", "Autor"],
    correctAnswer: 2,
    explanation: "Der Protagonist ist die Hauptfigur in einer Erzählung oder einem Drama."
  },

  // Textsorten
  {
    id: 43,
    text: "Welche Textsorte stellt Meinungen dar?",
    subject: "textsorten",
    options: ["Kommentar", "Reportage", "Kurzgeschichte", "Erörterung"],
    correctAnswer: 0,
    explanation: "Ein Kommentar enthält persönliche Meinungen und Stellungnahmen."
  },
  {
    id: 44,
    text: "Welche Aussage trifft auf eine Kurzgeschichte zu?",
    subject: "textsorten",
    options: ["Sie hat ein offenes Ende.", "Sie ist meist länger als ein Roman.", "Sie ist eine Nachricht.", "Sie handelt meist von Tieren."],
    correctAnswer: 0,
    explanation: "Die Glosse ist eine oft satirische, pointierte Meinungsäußerung."
  },
  {
    id: 45,
    text: "Was ist typisch für eine Reportage?",
    subject: "textsorten",
    options: ["Reine Fakten", "Nur wörtliche Rede", "Erlebnisnahe Beschreibung", "Dialogform"],
    correctAnswer: 2,
    explanation: "Reportagen schildern Ereignisse möglichst anschaulich und mit Nähe zum Geschehen."
  },

  // Kurzgeschichte
  {
    id: 46,
    text: "Was ist typisch für den Anfang einer Kurzgeschichte?",
    subject: "kurzgeschichte",
    options: ["Langsame Einführung", "Wissenschaftlicher Einstieg", "Unmittelbarer Beginn", "Überschrift mit Zitat"],
    correctAnswer: 2,
    explanation: "Kurzgeschichten beginnen oft mitten im Geschehen (in medias res)."
  },
  {
    id: 47,
    text: "Was ist ein typisches Merkmal einer Kurzgeschichte?",
    subject: "kurzgeschichte",
    options: ["Viele Figuren", "Knappe Sprache und offenes Ende", "Lange Beschreibungen", "Kapitelstruktur"],
    correctAnswer: 1,
    explanation: "Kurzgeschichten sind knapp und haben häufig ein offenes Ende."
  },
  {
    id: 48,
    text: "Welche Zeitform wird in Kurzgeschichten häufig verwendet?",
    subject: "kurzgeschichte",
    options: ["Plusquamperfekt", "Futur I", "Präsens", "Konjunktiv"],
    correctAnswer: 2,
    explanation: "Das Präsens wird oft für die unmittelbare Wirkung verwendet."
  }
];
