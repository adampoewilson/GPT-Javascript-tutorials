
// Array to store logged notes
const midiNotes = [];

// Function to log a note

function logNote(noteNum, velocity, noteName) {
    const entry = {
    note: noteNum,
    velocity: velocity,
    name: noteName,
    time: Date.now()
    }

    midiNotes.push(entry);

    console.log(`Logged: Note ${noteNum}, ${noteName}  at velocity ${velocity}`);
}

// Simulate note input
logNote(60,`middle C`, 100); // Middle C

logNote(64,`E`, 120); // E
logNote(67,`G`, 127); // G
