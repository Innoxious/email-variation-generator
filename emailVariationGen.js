const getAlias = (email, variation) => {
    const mask = intToMask(variation, email.length - 1);
    let numPeriods = 0;
    for (let i = 0; i < mask.length; i++) {
        if (mask[i] == "0") {
            email = insertPeriod(email, i + numPeriods + 1);
            numPeriods++;
        }
    }
    return email;
};
const insertPeriod = (string, index) => `${string.slice(0, index)}.${string.slice(index)}`;
const intToMask = (integer, targetLength) => {
    const mask = integer.toString(2).padStart(targetLength, '0');
    return [...mask];
};
const generateAllAlias = (email) => {
    const numVariations = Math.pow(2, email.length - 1);
    let variations = new Array();
    for (let v = 0; v < numVariations; v++) {
        variations.push(getAlias(email, v));
    }
    return variations;
};
