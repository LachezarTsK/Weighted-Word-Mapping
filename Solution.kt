
class Solution {

    private companion object {
        const val ALPHABET_SIZE = 26
    }

    fun mapWordWeights(words: Array<String>, weights: IntArray): String {
        val mappedLettersForAllWords = StringBuilder()
        for (word in words) {
            val wordWeight = calculateWordWeight(word, weights)
            val mappedLetter = mapWordWeightToLetter(wordWeight)
            mappedLettersForAllWords.append(mappedLetter)
        }
        return mappedLettersForAllWords.toString()
    }

    private fun calculateWordWeight(word: String, weights: IntArray): Int {
        var weight = 0
        for (letter in word) {
            weight += weights[letter - 'a']
        }
        return weight % ALPHABET_SIZE
    }

    private fun mapWordWeightToLetter(wordWeight: Int): Char {
        return 'z' - wordWeight
    }
}
