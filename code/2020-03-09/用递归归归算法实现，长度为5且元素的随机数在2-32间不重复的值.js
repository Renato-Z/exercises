// 生成一个length为5的数组
let arr = new Array(5)
function fn() {
  // 生成2-32之间的随机数
  let random = Math.floor(Math.random() * 30) + 2
  if (!arr.some(n => n == random)) {
    arr.length--
    arr.unshift(random)
  }
  for (const n of arr) {
    if (n == undefined) fn()
  }
}
fn()
