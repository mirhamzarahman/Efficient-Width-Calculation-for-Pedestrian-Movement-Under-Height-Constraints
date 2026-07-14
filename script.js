const fs = require("fs").readFileSync(0, "utf8").trim().split(/\s+/).map(Number);

const n = fs[0];
const h = fs[1];

let width = 0;

for (let i = 2; i < n + 2; i++) {
    if (fs[i] > h) {
        width += 2;
    } else {
        width += 1;
    }
}

console.log(width);
