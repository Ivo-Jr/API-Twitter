import express, { json } from 'express';
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
    

// app.get('/teste', (request, response) => {

//     let obj = {};

//     T.get('https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=TechTudo&count=1', (err, data, response) => {

//         data.map(item => {
//             obj.name = item.user.name;
//             obj.texto = item.text;
//             obj.profileImage = item.user.profile_image_url;
//         });

//     });

//     setTimeout(() => {
//         return response.json([obj]);
//     }, 1000);
    
// });

function fetTwitter() {
    app.get('/teste', (request, response) => {
    
    console.log(getTwitter(), 'one')

    return response.json(getTwitter());

    });
};

function getTwitter() {
    let obj = {};

    const resp = T.get('https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=TechTudo&count=1', (err, data, response) => {
    
        data.map(item => {
            obj.name = item.user.name;
            obj.texto = item.text;
            obj.profileImage = item.user.profile_image_url;
        });
        console.log([obj], 'two');
        return obj
    });   
   
    console.log(resp);
   
    return resp;
};

async function showResult() {
    try {
        const fetTwitterResponse = await fetTwitter();
        const getTwitterResponse = await getTwitter();
        // console.log(fetTwitterResponse, 'thre');
        // console.log(getTwitterResponse, 'four');
        
    } catch (err) {
        console.log(err);
    }
}

showResult();




app.listen(8000, () => {
    console.log('Server running!');
});














        // var obj = data[0];
        // dt = {
        //     profileImage: obj.user.profile_image_url,
        //     name: obj.user.name,
        //     texto: obj.text,
        // };


    // T.get('https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=updateordienet&count=1', (err, data, response) => {
    
    //     data.map(item => {
    //         obj2.name2 = item.user.name;
    //         obj2.texto2 = item.text;
    //         obj2.profileImage2 = item.user.profile_image_url;
    //     });

    // //     // var obj = data[0];
    // //     // dt2 = {
    // //     //     profileImage2: obj.user.profile_image_url,
    // //     //     name2: obj.user.name,
    // //     //     texto2: obj.text,
    // //     // };
    // // });
    // });
        


