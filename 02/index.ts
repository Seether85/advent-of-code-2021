import { input } from './input';


type Journey = {
    x: number,
    z: number
}

type Move = {
    move: string
}

const computeJourney = (input: string[]): Journey => {
    let computedJourney: Journey = {x: 0, z: 0};

    const addMove = (rawMove: string): void => {
        const move = parseMove(rawMove);
        computedJourney = {
            x: computedJourney.x + move.x,
            z: computedJourney.z + move.z
        };
    }

    const parseMove = (
        rawMove: string,
        ): Journey => {
            const [direction, value] = rawMove.split(' ');

            switch(direction) {
                case 'forward': { 
                    return {x: parseInt(value), z: 0}
                    break; 
                } 
                case 'down': { 
                    return {x: 0, z: parseInt(value)}
                    break; 
                }
                case 'up': { 
                    return {x: 0, z: -parseInt(value)}
                    break; 
                }
                default: { 
                    return {x: 0, z: 0}
                    break; 
                } 
            } 
    }

    input.forEach(addMove);

    return computedJourney;
}

const computedJourney = computeJourney(input);

console.log(computedJourney.x * computedJourney.z);