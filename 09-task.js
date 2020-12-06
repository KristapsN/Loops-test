const n = 4
let s = "*"
let g = " "
let t = " | "


for (let i = 0; i <= n; i++) {
console.log(g.repeat(n-i) + s.repeat(i) + t + s.repeat(i)  )
}

