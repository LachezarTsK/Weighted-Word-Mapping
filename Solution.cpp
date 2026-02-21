
#include <vector>
#include <string>
#include <algorithm>
using namespace std;

class Solution {

    static const int ALPHABET_SIZE = 26;

public:
    string mapWordWeights(const vector<string>& words, const vector<int>& weights) const {
        string mappedLettersForAllWords;
        for (const auto& word : words) {
            int wordWeight = calculateWordWeight(word, weights);
            char mappedLetter = mapWordWeightToLetter(wordWeight);
            mappedLettersForAllWords.push_back(mappedLetter);
        }
        return mappedLettersForAllWords;
    }

private:
    static int calculateWordWeight(const string& word, const vector<int>& weights) {
        int weight = 0;
        for (const auto& letter : word) {
            weight += weights[letter - 'a'];
        }
        return weight % ALPHABET_SIZE;
    }

    static char mapWordWeightToLetter(int wordWeight) {
        return 'z' - wordWeight;
    }
};
