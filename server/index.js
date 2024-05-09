const express = require('express');
const app = express();
const WServer = require('express-ws')(app);
const awss = WServer.getWss();

app.ws('/', (ws, req) => {
     msg = JSON.parse(msg);
    console.log("Connection has started");
    ws.send("You have successfully connected to websockets on server");
    ws.on('message', (msg) => {
        switch (msg.method) {
            case "connection":
                connectionHandler(ws, msg);
                break
        }
    })
})

const PORT = process.env.PORT || 7000;

app.listen(PORT, () => console.log(`The server has started on port ${PORT}`));

const connectionHandler = (ws, msg) => {
    ws.id = msg.id;
    broadcastConnection(ws, msg)
}

const broadcastConnection = (ws, msg) => {
    aWss.clients.forEach(client => {
        if (client.id === msg.id) {
            client.send(JSON.stringify(msg))
        }
    })
}