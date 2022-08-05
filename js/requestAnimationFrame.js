// requestAnimationFrame
const ul = document.querySelector('#container')
const SUM = 100000

function cycle(piece) {
  const done = piece * index //已渲染数
  const remain = Math.min(piece, SUM - done) // 每次循环次数取切片容量与待渲染数中更小的一个
  //requestAnimationFrame解决闪屏问题
  window.requestAnimationFrame(() => {
    for (let i = 0; i < remain; i++) {
      const li = document.createElement('li')
      li.innerText = getRandom(SUM)
      ul.appendChild(li)
    }
    if (remain < piece) return //渲染终止条件
    index++
    cycle(piece)
  })
}

const piece = 50 //切片容量
let index = 0 //记录下一次切片起始位置
cycle(piece)
