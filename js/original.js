//original DOM render
const prevStamp = Date.now(),
  ul = document.querySelector('#container'),
  SUM = 100000

for (let i = 0; i < SUM; i++) {
  const li = document.createElement('li')
  li.innerText = getRandom(SUM)
  ul.appendChild(li)
}

//timing for js:100+ms
console.log(`timing for js:${+new Date() - prevStamp}ms`)

//timing for render:3000+ms
setTimeout(() => {
  console.log(`timing for render:${+new Date() - prevStamp}ms`)
}, 0)
