// async function main() {
//    try{

//     if(await getResultado(5) > 10) {
//         console.log(`${num} É maior que 10`);
//         if(await getResultado(3) < 10) {
//             console.log(`${num} É menor que 10`);
//         }
//     }
     
//     } catch(err) {
//         console.log('deu erro');
//         console.log(err);
//     }
// }

// main();

// function getResultado(par) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve (num = (par * 2.5));
//         }, 3000);
//     });
// }


// const divDelayed = (a, b) => new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (b == 0)
//         reject('O valor de B não pode ser zero!');

//         resolve(a/b);
//     }, 2000);
// });

// divDelayed(10, 1)
//     .then(res => console.log(`Sucesso: ${res}`))
//     .catch(err => console.log(err));


// async function myAsync() {
//     try{
//         const delay = await divDelayed(a, b);
        
//         console.log(delay)
//     } catch (err) {
//         console.log('Erro:', err)
//     }

// }

// divDelayed(10, 2)

function bestRockBand(band) {
    return new Promise((resolve, reject) => {
        if (band == 'Queen') {
            resolve({
                success: true,
                bandName: band,
                msg: band + ' is the best band ever!'
            })
        } else {
            reject({
                success: false,
                msg: 'I\'m not so sure!'
            })
        }
    })
}

function bestRockSong(response) {
    return new Promise((resolve, reject) => {
        if(response.success) {
            resolve('Bohemian Rhapsody by ' + response.bandName);
        } else {
            reject('Do you know Queen?');
        }
    });
};

// bestRockBand('Queen')
//     .then(response => {
//         console.log('Checking the answer...');
//         return bestRockSong(response);
//     })
//     .then(response => {
//         console.log('Finoung the best song...');
//         console.log(response);
//     })
//     .catch(err => {
//         console.log(err);
//     });

async function doTHeJob() {
    try {
        const bestRockBandResponse = await bestRockBand('Queen');
        console.log(bestRockBandResponse);
        const bestRockSongResponse = await bestRockSong(bestRockBandResponse);
        console.log(bestRockSongResponse);
    } catch(err) {
        console.log(err.msg);
    }

};

doTHeJob();
