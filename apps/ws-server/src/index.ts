import { WebSocket, WebSocketServer } from "ws";
import { client } from "@repo/db/client";
const server = new WebSocketServer({
    port: 3001,
});

server.on("connection", (socket) => {
    client.user.create({
        data: {
            name: Math.random().toString(),
            password: Math.random().toString(),
        },
    });
    socket.send("Hii there you are connected to the server!");
});
