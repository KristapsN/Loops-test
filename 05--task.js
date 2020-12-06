const n = 5
let s = "*"
let g = "."
let start = -1

for (let i = 0; i < n-1; i++) {
    if (n-(i*2) < 0){
        console.log(g.repeat((n+1)/2) + "*" + g.repeat((n+1)/2) )
        
    } else {

    console.log(g.repeat(i)+ s + g.repeat(n-(i*2))+ s+ g.repeat(i))
    }
}
for (let j = n-2; j > 0; j--) {
    

    console.log(g.repeat(j-1)+ s + g.repeat(start += 2)+ s+ g.repeat(j-1))
}