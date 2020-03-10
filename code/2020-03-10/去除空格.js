// 写一个方法去掉字符串中的空格，要求传入不同的类型分别能去掉前、后、前后、中间的空格
var str = "    hah  hha "
// 这里简化参数：前=>1  后=>2 前后=>3  中间=>4
function strTrim(val, place) {
  if (place == 3) str = val.trim()
  if (place == 1) str = val.trimStart()
  if (place == 2) str = val.trimEnd()
  if (place == 4) {
    var start = "",
      end = ""
    for (const n of str) {
      if (n != " ") break
      start += " "
    }
    for (const n of str
      .split("")
      .reverse()
      .join("")) {
      if (n != " ") break
      end += " "
    }
    var center = str.split(" ").join("")
    str = start + center + end
  }
  return str
}
strTrim(str, 4)
console.log(str)
console.log(str.length)
