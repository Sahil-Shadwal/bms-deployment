import express from "express";
import { client } from "@repo/db/client";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.send("hii bitch");
});

app.post("/signup", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const user = await client.user.create({
        data: {
            name: username,
            password: password,
        },
    });
    res.json({
        message: "Signup successful",
        id: user.id,
    });
});

app.listen(3002);
