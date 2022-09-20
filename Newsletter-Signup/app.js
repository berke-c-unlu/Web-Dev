const mailchimp = require("@mailchimp/mailchimp_marketing");
const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req,res) {
    res.sendFile(__dirname + "/signup.html");
})


mailchimp.setConfig({
    apiKey: "578211d05089437edbe9c470bdbc9a35-us12",
    server: "us12",
})


app.post("/", function(req,res){
    const firstName = req.body.fName;
    const lastName = req.body.lName;
    const email = req.body.email;

    const listID = "cf3ec76ad0";

    const subbedUser = {
        firstName: firstName,
        lastName: lastName,
        email: email
    };

    async function run() {
        const response = await mailchimp.lists.addListMember(listId, {
            email_address: subscribingUser.email,
            status: "subscribed",
            merge_fields: {
                FNAME: subscribingUser.firstName,
                LNAME: subscribingUser.lastName
            }
        });
    }
    res.sendFile(__dirname + "/success.html");
});

app.listen(3000, function() {
    console.log("Server has started to listen on port 3000 successfully.");
})


// API KEY
// 

// ID
// 