function convertStringToArray(sentence: string): string[] {
  return sentence.split("");
}

function getUniqueLetters(sentence: string): Set<string> {
  const preparedString = convertStringToArray(sentence);
  return new Set(preparedString);
}

function getLetterCount(letter: string, sentence: string): number {
  const preparedString = convertStringToArray(sentence);
  const arrayOfLetters = preparedString.filter((sentenceLetter) => sentenceLetter === letter);
  return arrayOfLetters.length;
}

function buildString(letter: string, count: number): string {
  const preparedCount = count === 1 ? "" : count;
  return `${letter}${preparedCount}`;
}

function countLetters(sentence: string): Map<string, number> {
  const uniqLetters = getUniqueLetters(sentence);
  const lettersMap: Map<string, number> = new Map();

  uniqLetters.forEach((letter) => {
    const letterCount = getLetterCount(letter, sentence);
    lettersMap.set(letter, letterCount);
  });

  return lettersMap;
}

export function build(sentence: string): string {
  const uniqueLetters = countLetters(sentence);
  let outputString = "";

  uniqueLetters.forEach((value, key) => {
    outputString += buildString(key, value);
  });

  return outputString;
}
