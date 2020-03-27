const app = require('./app');

app.listen(process.env.port || 5000);
console.log("Server running");