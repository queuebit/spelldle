import wordBank from "./word-bank.json";

export function getRandomWord() {
  const randomIndex = Math.floor(Math.random() * wordBank.length);
  return wordBank[randomIndex];
}

export enum LetterState {
  Miss,
  Present,
  Match,
}

export function computeGuess(guess: string, answerString: string) {
  const result: LetterState[] = [];

  if (guess.length !== answerString.length) {
    return result;
  }

  const guessArray = guess.split("");
  const answerArray = answerString.split("");

  const answerLetterCount: Record<string, number> = {};

  answerArray.forEach((l) => {
    if (Object.keys(answerLetterCount).includes(l)) {
      answerLetterCount[l]++;
    } else {
      answerLetterCount[l] = 1;
    }
  });

  guessArray.forEach((letter, index) => {
    if (letter == answerArray[index]) {
      result.push(LetterState.Match);
    } else if (answerArray.includes(letter)) {
      result.push(LetterState.Present);
    } else {
      result.push(LetterState.Miss);
    }
  });

  // TODO: this is a hand-wavey green solution
  result.forEach((naiveResult, rIndex) => {
    if (naiveResult !== LetterState.Present) {
      return;
    }

    const guessLetter = guessArray[rIndex];

    answerArray.forEach((answerLetter, aIndex) => {
      if (answerLetter !== guessLetter) {
        return;
      }

      if (result[aIndex] === LetterState.Match) {
        result[rIndex] = LetterState.Miss;
      }

      if (answerLetterCount[guessLetter] <= 0) {
        result[rIndex] = LetterState.Miss;
      }

      answerLetterCount[guessLetter]--;
    });
  });

  return result;
}
