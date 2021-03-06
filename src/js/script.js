// let pricing = document.querySelector('#pricing');
// let backers = document.querySelector('#backers');
// // let pricing = document.querySelector('#pricing');
// const timer = ms => new Promise(res => setTimeout(res, ms))

// window.addEventListener('load', async () => {
//     load("#pricing",0, 89914, 1)
//     // load(backers, 5007, 100)
// })


// async function load(id, start, end, delay) {
//     // var i = 1
//     // for (i; i <= max; i += plus) {
//     //     await timer(.00000000001);
//     //     loader.innerHTML = `$${i}`
//     // }
//     if (start === end) return
//     var PreStepTime = Math.abs(Math.floor(delay / (end - start)))
//     var loader = document.querySelector(id)
//     var increment = end > start ? 1 : -1;
//     var currect = start
//     var Timer = setInterval(() => {
//         currect += increment + 40
//         loader.innerHTML = currect
//         if (currect === end) {
//             clearInterval(Timer)
//         }
//     }, PreStepTime)




// }






function about() {
    var id = document.querySelector('#about')
    id.scrollIntoView() 
}