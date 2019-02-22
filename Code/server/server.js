require("dotenv").config();
const cors = require("cors");
const Pusher = require("pusher");
const express = require("express");
const bodyParser = require("body-parser");
// ------------------------------
// Create express app
// ------------------------------
const app = express();
// ------------------------------
// Load the middlewares
// ------------------------------
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const pusher = new Pusher({
    appId: '720452',// `${process.env.PUSHER_APP_ID}`,
    key: 'b7cdf5708804f578b662',// `${process.env.PUSHER_API_KEY}`,
    secret: 'b75fab3cd68f6555b186',// `${process.env.PUSHER_API_SECRET}`,
    cluster: 'ap2',// `${process.env.PUSHER_APP_CLUSTER}`,
    encrypted: true
});
// -------------------------------
// Create app routes
// -------------------------------
app.post("/update", function (req, res) {
    // -------------------------------
    // Trigger pusher event
    // ------------------------------
    console.log('post');
    pusher.trigger("events-channel", "new-like", {
        likes: `${req.body.likes}`
    });
});
app.listen("3120");
console.log("Listening on localhost:3120");