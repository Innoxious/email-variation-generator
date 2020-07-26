const getAlias = (email: string, variation: number): string => {
    const mask = intToMask(variation, email.length - 1);
    let numPeriods = 0;

    for (let i = 0; i < mask.length; i++){
        if (mask[i] == "0"){
            email = insertPeriod(email, i + numPeriods + 1);
            numPeriods++;
        }
    }
    
    return email;
}

const insertPeriod = (string: string, index: number): string => 
    `${string.slice(0, index)}.${string.slice(index)}`


const intToMask = (integer: number, targetLength: number): Array<string> => {
    const mask = integer.toString(2).padStart(targetLength, '0');

    return [... mask];
}

const generateAllAlias = (email: string): Array<string> => {
    const numVariations = Math.pow(2, email.length - 1);
    let variations = new Array<string>();
    for (let v = 0; v < numVariations; v++) {
        variations.push(getAlias(email, v));
    }

    return variations;
} 