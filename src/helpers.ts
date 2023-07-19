export const shuffle = (array: any[]) => {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

export const successByProbability = (probability: number) => {
  const random = Math.random() * 100;

  const decimalRandom = Math.floor(random * 1000) / 1000;

  if (probability >= decimalRandom) {
    return true;
  } else {
    return false;
  }
};

export const getRandomIntFromInterval = (min: number, max: number) => {
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  return randomNumber;
};
