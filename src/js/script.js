let pricing = document.querySelector('#pricing');
let backers = document.querySelector('#backers');
let days = document.querySelector('#days');
const timer = ms => new Promise(res => setTimeout(res, ms))

window.addEventListener('load', async () => {
    load("#pricing", 89700, 89914, 1, "$")
    load("#backers", 4800, 5007, 1, "")
    load("#days", 0, 56, 1, "")
    // load(backers, 5007, 100)
})


async function load(id, start, end, delay, sign) {
    // var i = 1
    // for (i; i <= max; i += plus) {
    //     await timer(.00000000001);
    //     loader.innerHTML = `$${i}`
    // }
    if (start === end) return
    var currect = start
    var PreStepTime = Math.abs(Math.floor(delay / (end - start)))
    var loader = document.querySelector(id)
    var increment = end > start ? 1 : -1;
    var Timer = setInterval(() => {
        currect += (increment)
        loader.innerHTML = `${sign}${currect}`
        if (currect === end) {
            clearInterval(Timer)
        }

    }, PreStepTime)
}






function about() {
    var id = document.querySelector('#about')
    id.scrollIntoView()
}

function getStarted() {
    var id = document.querySelector('#getStarted')
    id.scrollIntoView()
}