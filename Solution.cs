
using System;

public class Solution
{
    private static readonly int ALPHABET_SIZE = 26;

    public string MapWordWeights(string[] words, int[] weights)
    {
        StringBuilder mappedLettersForAllWords = new StringBuilder();
        foreach (string word in words)
        {
            int wordWeight = CalculateWordWeight(word, weights);
            char mappedLetter = MapWordWeightToLetter(wordWeight);
            mappedLettersForAllWords.Append(mappedLetter);
        }
        return mappedLettersForAllWords.ToString();
    }

    private static int CalculateWordWeight(string word, int[] weights)
    {
        int weight = 0;
        foreach (char letter in word)
        {
            weight += weights[letter - 'a'];
        }
        return weight % ALPHABET_SIZE;
    }

    private static char MapWordWeightToLetter(int wordWeight)
    {
        return (char)('z' - wordWeight);
    }
}
