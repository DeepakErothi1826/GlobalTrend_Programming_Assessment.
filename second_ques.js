function evaluateExp(express) {
    let result = 0;
    let currentNum = 0;
    let sign = 1; 

    for (let i = 0; i < express.length; i++) {
        let char = express.charAt(i);

        if (char >= '0' && char <= '9') {
            currentNum = currentNum * 10 + parseInt(char);
        } else if (char === '+') {
            result += sign * currentNum;
            sign = 1; 
            currentNum = 0; 
        } else if (char === '-') {
            result += sign * currentNum;
            sign = -1; 
            currentNum = 0;
        }
    }
    result += sign * currentNum;

    return result;
}

let val1 = "43-54+65-6"; 
let val2 = "23-54-12+16"; 

console.log(evaluateExp(val1)); 
console.log(evaluateExp(val2)); 