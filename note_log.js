
// Array to store logged notes
const midiNotes = [];

// Function to log a note

function logNote(noteNum, velocity) {
    const entry = {
    note: noteNum,
    velocity: velocity,
    time: Date.now()
    }

    midiNotes.push(entry);

    console.log(`Logged: Note ${noteNum}  at velocity ${velocity}`);
}

// Simulate note input
logNote(60, 100); // Middle C
logNote(64, 120); // E
logNote(67, 127); // G
