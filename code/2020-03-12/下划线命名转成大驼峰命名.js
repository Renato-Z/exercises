var str = "underline_nam"
function toBigHump(str) {
  let newStr = ""
  // 替换首字母
  let arr = str.split("_")
  for (let n of arr) {
    newStr += n.substr(0, 1).toUpperCase() + n.slice(1)
  }
  return newStr
}
toBigHump(str)
