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
    options: ["Witze", "Subjektive Meinung des Autors", "Gefühlsbetonte Erzählungen und Eindrücke", "Tabellarische Daten"],
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
  }
];
