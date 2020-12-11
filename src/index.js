import express from 'express';
import Twit from 'twit'; 
// import dotenv from 'dotenv';
// dotenv.config();
require('dotenv').config()


const app = express();

app.use(express.json());

let name = "";
let profileImage = "";
let text = "";


var T = new Twit({
        consumer_key: process.env.CONSUMER_K,
        consumer_secret: process.env.CONSUMER_S,
        access_token: process.env.ACCESS_T,
        access_token_secret: process.env.ACCESS_T_S,
        timeout_ms: 60 * 1000,
        strictSSL: true,
})
    



app.get('/teste', (request, response) => {
    // console.log(process.env)
    T.get('https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=TechTudo&count=1', (err, data, response) => {
        for( let dados of data)(
            console.log(dados)
        )
    })
    // T.get('https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=updateordienet&count=1', (err, data, response) => {
    //     for( let dados of data)(
    //         console.log(dados)
    //     )
    // })
    
    return response.sendStatus(200)
});


app.listen(8000, () => {
    console.log('Server running!')
});