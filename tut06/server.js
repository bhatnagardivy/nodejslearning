const express = require('express');
const app = express();
const path = require('path');

// Initialize the port to 5001.
const PORT = process.env.PORT || 5001;

// Get method
app.get(/^\/$|\/index(.html)?/, (req, res) => {
    // Method 1
    // res.sendFile('./views/index.html', { root: __dirname });

    // Method 2
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get(/^\/new-page(.html)?/, (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'new-page.html'));
});

app.get(/^\/old-page(.html)?/, (req, res) => {
    res.redirect(301, 'new-page.html');
});

// Route Handlers
app.get(/^\/hello(.html)?/, (req, res, next) => {
    console.info("Attempted to load hello.html");
    next()
}, (req, res) => {
    res.send("Hello World");
});

app.get(/\/*/, (req,res) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(PORT, () => {
    console.info(`Server running on port ${PORT}`);
});