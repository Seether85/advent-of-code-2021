import { readFileSync } from 'fs'; // VSCode will complain, node will not

type sonarInput = string[];
type gammaRate = number[];
type epsilonRate  = number[];

const input = readFileSync('./input.txt', 'utf-8').split('\r\n')


const gammaRate = (sonarInput: sonarInput): gammaRate => {
    let arrayGammaRate = new Array(sonarInput[0].length).fill(0);

    const digitSplitSonarInput = sonarInput.reduce((acc, curr) => {
        curr.split('').forEach((v, i) => {
            acc[i] += parseInt(v)
        });
        return acc;
    }, new Array(sonarInput[0].length).fill(0));
    
    digitSplitSonarInput.forEach((v, i) => 
        arrayGammaRate[i] = v > sonarInput.length / 2 ? 1 : 0
    );

    return arrayGammaRate;
}

const epsilonRate = (sonarInput: sonarInput): epsilonRate => {
    return gammaRate(sonarInput).map(v => 
        v === 0 ? 1 : 0
    );
}

const powerConsumption = parseInt(gammaRate(input).join(''), 2) * parseInt(epsilonRate(input).join(''), 2);

console.log(powerConsumption);