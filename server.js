// server.js
const express = require('express');
const app = express();
const port = 3000;

// Serve static files (like your HTML page) from the 'public' directory
app.use(express.static('public'));

// API endpoint to trigger audio playback
app.get('/play-audio', (req, res) => {
    console.log('Received request to play audio');
    console.log('Query parameters:', req.query);
    res.send('Audio playback triggered');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
