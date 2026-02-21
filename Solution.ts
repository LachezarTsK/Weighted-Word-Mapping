
function mapWordWeights(words: string[], weights: number[]): string {
    const mappedLettersForAllWords: string[] = new Array();
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

function calculateWordWeight(word: string, weights: number[]): number {
    let weight = 0;
    for (let i = 0; i < word.length; ++i) {
        weight += weights[word.codePointAt(i) - Util.ASCII_SMALL_CASE_A];
    }
    return weight % Util.ALPHABET_SIZE;
}

function mapWordWeightToLetter(wordWeight: number): string {
    return String.fromCodePoint(Util.ASCII_SMALL_CASE_Z - wordWeight);
}
