import { input } from './input';


type Journey = {
    x: number,
    z: number
}

type AimedJourney = {
    x: number,
    z: number,
    aim: number
}


const computeJourney = (input: string[]): Journey => {
    let computedJourney: Journey = {x: 0, z: 0};

    const parseMove = (
        rawMove: string,
        ): Journey => {
            const [direction, value] = rawMove.split(' ');
    
            switch(direction) {
                case 'forward': { 
                    return {x: parseInt(value), z: 0}
                } 
                case 'down': { 
                    return {x: 0, z: parseInt(value)}
                }
                case 'up': { 
                    return {x: 0, z: -parseInt(value)}
                }
                default: { 
                    return {x: 0, z: 0}
                } 
            } 
    }

    const addMove = (rawMove: string): void => {
        const move = parseMove(rawMove);
        computedJourney = {
            x: computedJourney.x + move.x,
            z: computedJourney.z + move.z
        };
    }

    input.forEach(addMove);

    return computedJourney;
}

const computedJourney = computeJourney(input);

// First part
console.log(computedJourney.x * computedJourney.z);


const computeAimedJourney = (input: string[]): AimedJourney => {
    let computedAimedJourney: AimedJourney = {x: 0, z: 0, aim: 0};

    const computeAimedMove = (
        rawMove: string,
        journeySoFar: AimedJourney
        ): AimedJourney => {
            const [direction, value] = rawMove.split(' ');
    
            switch(direction) {
                case 'forward': { 
                    return {
                        x: journeySoFar.x + parseInt(value),
                        z: journeySoFar.z + journeySoFar.aim * parseInt(value),
                        aim: journeySoFar.aim
                    }
                } 
                case 'down': { 
                    return {
                        x: journeySoFar.x,
                        z: journeySoFar.z,
                        aim: journeySoFar.aim + parseInt(value)
                    }
                }
                case 'up': { 
                    return {
                        x: journeySoFar.x,
                        z: journeySoFar.z,
                        aim: journeySoFar.aim - parseInt(value)
                    }
                }
                default: { 
                    return {x: journeySoFar.x, z: journeySoFar.z, aim: journeySoFar.aim}
                } 
            } 
    }

    input.forEach(move => computedAimedJourney = computeAimedMove(move, computedAimedJourney));

    return computedAimedJourney;
}

const computedAimedJourney = computeAimedJourney(input);

// Second part
console.log(computedAimedJourney.x * computedAimedJourney.z);