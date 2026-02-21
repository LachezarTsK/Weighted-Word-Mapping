
/**
 * @param {string[]} words
 * @param {number[]} weights
 * @return {string}
 */
var mapWordWeights = function (words, weights) {
    const mappedLettersForAllWords = new Array();
    for (let word of words) {
        const wordWeight = calculateWordWeight(word, weights);
        const mappedLetter = mapWordWeightToLetter(wordWeight);
        mappedLettersForAllWords.push(mappedLetter);
    }
    return mappedLettersForAllWords.join('');
};

class Util {
    static ALPHABET_SIZE = 26;
    static ASCII_SMALL_CASE_A = 97;
    static ASCII_SMALL_CASE_Z = 122;
}

/**
 * @param {string} word
 * @param {number[]} weights
 * @return {number}
 */
function calculateWordWeight(word, weights) {
    let weight = 0;
    for (let i = 0; i < word.length; ++i) {
        weight += weights[word.codePointAt(i) - Util.ASCII_SMALL_CASE_A];
    }
    return weight % Util.ALPHABET_SIZE;
}

/**
 * @param {number} wordWeight
 * @return {string}
 */
function mapWordWeightToLetter(wordWeight) {
    return String.fromCodePoint(Util.ASCII_SMALL_CASE_Z - wordWeight);
}
