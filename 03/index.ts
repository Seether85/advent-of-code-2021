import { readFileSync } from 'fs'; // VSCode will complain, node will not

type sonarInput = string[];
type gammaRate = number[];
type epsilonRate  = number[];
type oxygenRate  = number[];
type CO2Rate  = number[];

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
        arrayGammaRate[i] = v >= sonarInput.length / 2 ? 1 : 0
    );

    return arrayGammaRate;
}

const epsilonRate = (sonarInput: sonarInput): epsilonRate => {
    return gammaRate(sonarInput).map(v => 
        v === 0 ? 1 : 0
    );
}

const computedGammaRate = gammaRate(input);
const computedEpsilonRate = epsilonRate(input);

const powerConsumption = parseInt(computedGammaRate.join(''), 2) *
                         parseInt(computedEpsilonRate.join(''), 2);

// First part
console.log(powerConsumption);


const oxygenRate = (sonarInput: sonarInput, evaluateFN: Function = gammaRate): oxygenRate => {
    let oxygenRate = [...sonarInput];

    let i = 0;
    while (oxygenRate.length > 1) {
        const tmpRate = evaluateFN(oxygenRate);
        oxygenRate = oxygenRate.filter(vs => parseInt(vs[i]) === tmpRate[i])
        i++;
    }

    return oxygenRate[0].split('').map(x => parseInt(x));
}

const CO2Rate = (sonarInput: sonarInput): CO2Rate => {
    return oxygenRate(sonarInput, epsilonRate);
}

// Second part
console.log( parseInt(oxygenRate(input).join(''), 2) * parseInt(CO2Rate(input).join(''), 2));