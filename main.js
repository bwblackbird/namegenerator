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
        const [word, order, meaning] = rows[i].split(',')
        if (word in wordsDictionary) {
            wordsDictionary[word].push([order, meaning]);
        } else {
            wordsDictionary[word] = [[order, meaning]];
        }    
    };
    console.log(wordsDictionary);
    return wordsDictionary;
};

// Name Generation
function findLength() {
    // find the number of words in the name
    let nameLength = document.getElementById("numWords").value;
    if (nameLength === "") {
        nameLength = 2;
        return nameLength;
    }
    else {
        return nameLength
    }
}

function filterWords() {
    // filter words based on their order in the name
    const allFront = [];
    const allEnd = [];
    const anyOrder = [];
    const invalidWords = [];
    for (const word in wordsDict) {
        const order = wordsDict[word][0][0]
        const meaning = wordsDict[word][0][1];
        if (order === 'front') {
            allFront.push([word, meaning]);
        } else if (order === 'end') {
            allEnd.push([word, meaning]);
        } else if (order === 'either') {
            anyOrder.push([word, meaning]);
            allFront.push([word, meaning]);
            allEnd.push([word, meaning]);
        }
        else {
            invalidWords.push([word, meaning]);
        }
    } 
    return [allFront, allEnd, anyOrder];
};

function generateNames() {
    // randomly generate names based on user input for the number of words per name
        // TODO: prohibit the same word from being used multiple times in one name
        // TODO: display the generated names in the output container
    const nameLength = findLength();
    const [allFront, allEnd, anyOrder] = filterWords();
    const generatedNames = {};
    for (let j = 0; j < 10; j++) {
        let name = '';
        let nameMeaning = '';
        let randomIndex = Math.floor(Math.random() * allFront.length);
        name += allFront[randomIndex][0];
        nameMeaning += allFront[randomIndex][1] + ' ';
        if (nameLength === 2) {
            randomIndex = Math.floor(Math.random() * allEnd.length);
            name += allEnd[randomIndex][0];
            nameMeaning += allEnd[randomIndex][1];
            generatedNames[name] = nameMeaning;
        }
        else {
            for (let i = 1; i < nameLength - 1; i++) {
                randomIndex = Math.floor(Math.random() * anyOrder.length);
                name += anyOrder[randomIndex][0];
                nameMeaning += anyOrder[randomIndex][1] + ' ';
            }
            randomIndex = Math.floor(Math.random() * allEnd.length);
            name += allEnd[randomIndex][0];
            nameMeaning += allEnd[randomIndex][1];
            generatedNames[name] = nameMeaning;
        }
    }
    console.log(generatedNames);
};

// Display Results
function displaynames() {
    // display the generated names in the output container
}

function clearnames() {
    // clear the output container
}
