import express from "express"

const HOST = express();
const PORT = 8080;

HOST.listen(PORT, () => {
    console.log("Initializing server at port 8080.");
});