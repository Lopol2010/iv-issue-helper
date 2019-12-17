chrome.runtime.onMessage.addListener(function (msg) {

    let urlField = document.querySelector("#url-field") || document.querySelector(".form-control")
    urlField.value = msg.url

    let urlForm = document.querySelector("form[action^='/contest/']")
    urlForm.submit()
})

// document.onload = (e) => {
//     let form = document.querySelector(".report-issue-block form")
//     if (!form) {
//         //template is rejected make signal
//         let text = document.querySelector(".report-issue-text")
//         var c = ["red", "blue", "green"]
//         var i = 0
//         var loop = setInterval(()=>{
//             i = i > c.length-1 ? 0 : i
//             text.style.color = c[i]
//             i++
//         }, 100)
//     }
// }