
public class Solution {

    private static final int ALPHABET_SIZE = 26;

    public String mapWordWeights(String[] words, int[] weights) {
        StringBuilder mappedLettersForAllWords = new StringBuilder();
        for (String word : words) {
            int wordWeight = calculateWordWeight(word.toCharArray(), weights);
            char mappedLetter = mapWordWeightToLetter(wordWeight);
            mappedLettersForAllWords.append(mappedLetter);
        }
        return mappedLettersForAllWords.toString();
    }

    private static int calculateWordWeight(char[] word, int[] weights) {
        int weight = 0;
        for (char letter : word) {
            weight += weights[letter - 'a'];
        }
        return weight % ALPHABET_SIZE;
    }

    private static char mapWordWeightToLetter(int wordWeight) {
        return (char) ('z' - wordWeight);
    }
}
