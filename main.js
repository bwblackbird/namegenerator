// Global Variables
let wordsDict = {};

// Event Listeners
document.getElementById('fileInput').addEventListener('change', (event) => {
    readFile(event)
        .then(() => {
            console.log('File successfully read and parsed.');
            generateNames();
        })
        .catch((error) => console.error('Error:', error));
});
document.getElementById("generateButton").addEventListener("click", generateNames); 

// File Handling
function readFile(event) {
    // read the uploaded CSV file
    return new Promise((resolve, reject) => {
        const input = event.target;
        const reader = new FileReader();
        reader.onload = function(){
            const text = reader.result;
            wordsDict = parseCSV(text);
            resolve(wordsDict);
        };
        reader.onerror = (error) => {
            reject(console.error('Error reading file:', error.message || error));
        };
        reader.readAsText(input.files[0]);
    });
};

function parseCSV(text) {
    // parse the CSV file and store data in a dictionary
    const rows = text.split('\n').map(row => row.trim()); 
    const wordsDictionary = {};
    for (let i = 1; i < rows.length; i++) { // skip the header row
        const [word, meaning, order] = rows[i].split(',')
        if (word in wordsDictionary) {
            wordsDictionary[word].push([order, meaning]);
        } else {
            wordsDictionary[word] = [[order, meaning]];
        }    
    };
    return wordsDictionary;
};

// Name Generation
function filterWords() {
    // filter words based on their order in the name
};

function generateNames() {
    // randomly generate names based on user input for the number of words per name
};

// Display Results
function displaynames() {
    // display the generated names in the output container
}

function clearnames() {
    // clear the output container
}
