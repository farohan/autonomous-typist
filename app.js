//Listing all SVOs and declaring everything (including my genius)
const subjects = ['I', 'He', 'She', 'We', 'It', 'They'];
const verbs_past = ['saw', 'greeted', 'welcomed', 'loved', 'hated', 'admired'];
const objects = ['me', 'him', 'her', 'us', 'it', 'them'];
const reasons = ['just because', 'for it was customary', 'because 2 + 2 = 4', 'for it was the right thing to do'];
const characters = document.getElementById('characters');
let paper = document.getElementById('paper');
let sentence;
const paragraph = [];

//The function that writes everything
let sentenceMaker = function() {
    for (let i = 1; i <= 10; i++) {
        let randomSubject = subjects[Math.floor(Math.random() * subjects.length)]; //randomizing the SVOs
        let randomVerb = verbs_past[Math.floor(Math.random() * verbs_past.length)];
        let randomObject = objects[Math.floor(Math.random() * objects.length)];
        let randomReason = reasons[Math.floor(Math.random() * reasons.length)];
        sentence = `${randomSubject} ${randomVerb} ${randomObject} ${randomReason}.`;
        paragraph.push(sentence);
    }

    //Writing them on the paper
    paper.innerHTML = paragraph.join(' ');
    //Finding how many characters there are on the paper
    characters.innerHTML = `Characters: ${paper.value.length}`;
}

//clears all writing
function clearAllWriting() {
    paper.innerHTML = 'All writing has been cleared!';
}

//copies writing to clipboard
function copyWriting() {
    paper.select();
    paper.setSelectionRange(0, 99999); //For mobile devices

    document.execCommand('copy'); 
    alert(`You just copied: ${paper.value}`);
}

