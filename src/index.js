import x from './x'
import './index.less'
import './z.styl'
import jpg from './duck.jpg'

console.log('hello')
console.log(jpg);
let jpgDiv = document.getElementById("jpg")
jpgDiv.innerHTML = `
<img  src="${jpg}">
`
let btn = document.createElement('button')
btn.innerText = '懒加载'
let jpeg = document.getElementsByTagName('img')[0]
jpgDiv.insertBefore(btn, jpeg)
btn.onclick = () => {
    let lay = import('./lazy.js')
    lay.then((module) => {
        let fn = module.default
        fn()
    }, () => {

    })

}
// jpgDiv.appendChild(btn)
