// Event Listeners
document.getElementById('fileInput').addEventListener('change', readFile);
document.getElementById("generateButton").addEventListener("click", generateNames); 

// File Handling
function readFile(event) {
    const input = event.target;
    const reader = new FileReader();
    reader.onload = function(){
        const text = reader.result;
        const parsedData = parseCSV(text);
        console.log(parsedData);
    };
    reader.onerror = (error) => {
        console.error('Error reading file:', error.message || error);
    };
    reader.readAsText(input.files[0]);
};

function parseCSV(text) {
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
    // filter words into arrays based on order (frontOnly, endOnly, anyOrder)
}
function generateNames() {
    // randomly generate names based on user input for the number of words per name
}

// Display Results
function displaynames() {
    // display the generated names in the output container
}

function clearnames() {
    // clear the output container
}
