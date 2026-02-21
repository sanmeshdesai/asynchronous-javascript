// // Synchronous programming:


// // console.log('Preheat oven to 350°F (180°C). ');
// // console.log('Chop half the chocalate into chunks and melt in microwave.');
// // console.log('Mix butter & Sugar');
// // console.log('Beat in the egg and vanilla for 1-2 minutes.');
// // console.log('whisk in the melted chocolate.');
// // console.log('Fold in the other half of chocalate chunks, then transfer the batter to baking dish.');
// // console.log('Bake for 20-25 minutes, then let cool completely.');
// // console.log('Slice, serve and enjoy');



// // setTimeout(() => {
// //     console.log('1. Preheat oven to 350°F (180°C).');
// // }, 1000);

// // setTimeout(() => {  
// //     console.log('2. Chop half the chocalate into chunks and melt in microwave.');
// // }, 2000);

// // setTimeout(() => {
// //     console.log('3. Mix butter & Sugar');
// // }, 1500);

// // setTimeout(() => {
// //     console.log('4. Beat in the egg and vanilla for 1-2 minutes.');
// // }, 3000);

// // setTimeout(() => {
// //     console.log('5. whisk in the melted chocolate.');
// // }, 4000);

// // setTimeout(() => {
// //     console.log('6. Fold in the other half of chocalate chunks, then transfer the batter to baking dish.');
// // }, 3500);

// // setTimeout(() => {
// //     console.log('7. Bake for 20-25 minutes, then let cool completely.');
// // }, 1800);

// // setTimeout(() => {
// //     console.log('8. Slice, serve and enjoy');
// // }, 500);



// const showMessage = (callback) => {
//     console.log(callback);
// };

// const firstMessage = (callback) => {
//     setTimeout(() => {
//         showMessage('Hello');
//         callback();
//     }, 2000);
// }

// const secondMessage = (callback) => {
//     showMessage(('World'))
// };


// // firstMessage(secondMessage)


// //Promise
const promise = new Promise((resolve, reject) => {
    const allwentwell = true;

    if(allwentwell) {
        resolve('All things went well')
    } else {
        reject('Oops! something went wrong')
    }
});

console.log(promise)


// // const promise = new Promise((resolve, reject) => {
// //     const randomNumber = Math.floor(Math.random() * 10);
// //     setTimeout(() => {
// //         if (randomNumber < 4) {
// //             resolve('Well done! You gueessed right')
// //         } else {
// //             reject('Ooops you gueessed wrong')
// //         }
// //     })
// // });




// //then and catch to consume promise

// // promise.then((value) => {
// //     console.log(value);
// // }).catch((error) => {
// //     console.log(error);
    
// // });

// const promise1 = new Promise((resolve, reject) => {
//     resolve('Well done! Promise one is reolved')
// });

// const promise2 = new Promise((resolve, reject) => {
//     resolve('Well done! Promise two is reolved')
// });

// const promise3 = new Promise((resolve, reject) => {
//     reject('Well done! Promise three is rejected')
// });

// const promise4 = new Promise((resolve, reject) => {
//     resolve('Well done! Promise four is reolved')
// });

// promise1
// .then((value) => {
//     console.log(value);
//     return promise2   
// })
// .then((value) => {
//     console.log(value);
//     return promise3
// })
// .then((value) =>{
//     console.log(value);
//     return promise4
// })
// .catch((error) =>{
//     console.log(error);
    
// })

// //forth promise will not run after reject catch method called.


