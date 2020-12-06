const n = 5
let s = "*"
let g = " "

for (let i = 0; i < n; i++) {
if (i === n-1 || i === 0){
    console.log(s.repeat(n))
} else {
    console.log(s + g.repeat(n-2) + s)
}
}