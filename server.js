import app from "./app.js";

const PORT = 3000;
const HOST = "localhost";

app.listen(PORT, HOST, (err) => {
    if (err) {
        console.log(err.message);
    }else{
        console.log(`http://${HOST}:${PORT}`);
    }
});