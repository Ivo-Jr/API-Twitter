import express from 'express';
import Twit from 'twit'; 
require('dotenv').config()

const app = express();

app.use(express.json());


var T = new Twit({
        consumer_key: process.env.CONSUMER_K,
        consumer_secret: process.env.CONSUMER_S,
        access_token: process.env.ACCESS_T,
        access_token_secret: process.env.ACCESS_T_S,
        timeout_ms: 60 * 1000,
        strictSSL: true,
});
    

app.get('/teste', async (request, response) => {

    var dt = {};
    var dt2 = {};


    T.get('https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=TechTudo&count=1', (err, data, response) => {

        var obj = data[0];
        dt = {
            profileImage: obj.user.profile_image_url,
            name: obj.user.name,
            texto: obj.text,
        };
    });

    T.get('https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=updateordienet&count=1', (err, data, response) => {
    
        var obj = data[0];
        dt2 = {
            profileImage2: obj.user.profile_image_url,
            name2: obj.user.name,
            texto2: obj.text,
        };
    });
        
    setTimeout(() => {
        return response.json([dt, dt2]);
    }, 1000);
    
});

        // data.map(item => {
        //     profileImage = item.user.profile_image_url;
        //     name = item.user.name;
        //     texto = item.text;
        // });

        // temp['name'] = name;
        // temp['texto'] = texto;
        // temp['profileImage'] = profileImage;
        // });
  
    
    // T.get('https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=updateordienet&count=1', (err, data, response) => {
    
    //     data.map(item => {
    //         name2 = item.user.name;
    //         texto2 = item.text;
    //         profileImage2 = item.user.profile_image_url;
    //     });
        
    //     // arr.push({name2, texto2, profileImage2});
    // });    
    

    
    // return response.json([temp]);


app.listen(8000, () => {
    console.log('Server running!')
});