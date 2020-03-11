let str = " a haa hsa hh h  h  "
function delStr(str, del) {
  str = str.slice(0, str.lastIndexOf(del)) + str.slice(str.lastIndexOf(del) + 1)
}
delStr(str, " ")
