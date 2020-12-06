const n = 5
let s = "$"
let g = " "

for (let i = 0; i < n; i++) {
    console.log(s.repeat(i+1) + g.repeat(n-i+1))
}