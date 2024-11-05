function analyzeSentence(sentence) {
    // Initialize counters
    let lengthCounter = 0; // To count the total number of characters
    let wordCounter = 0;   // To count the number of words
    let vowelCounter = 0;  // To count the number of vowels

    // Define a regular expression for vowels
    const vowelsRegex = /[aeiouAEIOU]/;

    // Split the sentence into characters
    for (let i = 0; i < sentence.length; i++) {
        const char = sentence[i];

        // Count the length of the sentence
        lengthCounter++;

        // Count vowels using regex
        if (vowelsRegex.test(char)) {
            vowelCounter++;
        }

        // Count words (only if there's a space or if it's the last character before the period)
        if (char === ' ' || (i === sentence.length - 1 && char === '.')) {
            wordCounter++;
        }
    }

    // Adjust word count for the last word if sentence ends with a period
    if (sentence.endsWith('.')) {
        wordCounter++; // Count the last word before the period
    }

    // Output the results
    console.log("Length of the sentence:", lengthCounter);
    console.log("Number of words:", wordCounter);
    console.log("Number of vowels:", vowelCounter);
}

// Example usage
const inputSentence = "This is an example sentence.";
analyzeSentence(inputSentence + "."); // Ensure it ends with a period
