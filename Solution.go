
package main
import "strings"

const ALPHABET_SIZE = 26

func mapWordWeights(words []string, weights []int) string {
    mappedLettersForAllWords := strings.Builder{}
    for _, word := range words {
        wordWeight := calculateWordWeight(word, weights)
        mappedLetter := mapWordWeightToLetter(wordWeight)
        mappedLettersForAllWords.WriteByte(mappedLetter)
    }
    return mappedLettersForAllWords.String()
}

func calculateWordWeight(word string, weights []int) int {
    weight := 0
    for _, letter := range word {
        weight += weights[letter - 'a']
    }
    return weight % ALPHABET_SIZE
}

func mapWordWeightToLetter(wordWeight int) byte {
    return 'z' - byte(wordWeight)
}
