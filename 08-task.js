const n = 4
let s = "* "
let g = " "
let start = 0

for (let i = 1; i <= n; i++) {
console.log(g.repeat(n-i) + s.repeat(i)  )
}

for (let j = n; j > 1; j--) {
    console.log(g.repeat(start +=1) + s.repeat(j-1)  )
    }