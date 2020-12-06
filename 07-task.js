const n = 4
let s = "+"
let g = "-"
let l = "|"

for (let i = 0; i < n; i++) {
if (i === n-1 || i === 0){
    console.log(s + g.repeat(n-2) + s)
} else {
    console.log(l + g.repeat(n-2) + l)
}
}