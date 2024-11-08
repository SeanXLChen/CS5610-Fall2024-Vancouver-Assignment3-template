const app = require('./serverImplementation');

const port = 5001; // Your port number, you can change it if you want

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});