import { sonarInput } from "./input";


const countDrops = (sonarInput: number[]): number => {
  const reducer = (
    drops: number,
    currentValue: number,
    currentIndex: number,
    sonarInput: number[]
  ): number => {
    return currentValue > sonarInput[currentIndex - 1] ? drops + 1 : drops;
  };

  return sonarInput.reduce(reducer, 0);
};

// First part
console.log(countDrops(sonarInput));

const arrangeDropsByTriplets = (sonarInput: number[]): number[] => {
  const sumTriplet = (
    currentValue: number,
    currentIndex: number,
    sonarInput: number[]
  ): number => {
    return (
      currentValue + sonarInput[currentIndex + 1] + sonarInput[currentIndex + 2]
    );
  };

  return sonarInput.map(sumTriplet);
};

// Second part
console.log(countDrops(arrangeDropsByTriplets(sonarInput)));
