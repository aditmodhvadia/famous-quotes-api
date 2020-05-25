class Quote {
  text: String;
  author: String;
  sourceUrl: String;
  constructor(text: String, author: String, source: String = "") {
    this.text = text;
    this.author = author;
    this.sourceUrl = source;
  }
}

export const quotes: Array<Quote> = [
  new Quote("Code never lies.", "Linus Torvalds"),
  new Quote("Talk is cheap, show me the code.", "Linus Torvalds"),
  new Quote(
    "Vini vidi vici.",
    "Julius Ceasar",
    "https://en.wikipedia.org/wiki/Veni,_vidi,_vici",
  ),
  new Quote(
    "It has become appallingly obvious that our technology has exceeded our humanity.",
    "Albert Einstein",
    "",
  ),
  new Quote(
    "Most piece of tech can be fixed with the restart button.",
    "Adit Modhvadia",
  ),
];
