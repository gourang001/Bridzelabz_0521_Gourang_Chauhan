function evalRPN(tokens) {
    const stack = [];

    for (let token of tokens) {
        if (['+', '-', '*', '/'].includes(token)) {
            const b = stack.pop();
            const a = stack.pop();
            let result;

            switch (token) {
                case '+':
                    result = a + b;
                    break;
                case '-':
                    result = a - b;
                    break;
                case '*':
                    result = a * b;
                    break;
                case '/':
                    result = Math.trunc(a / b);
                    break;
            }
            stack.push(result);
        } 
        else{
            stack.push(Number(token));
        }
    }

    return stack.pop();
}


const tokens = ["2", "1", "+", "3", "*"];
console.log(evalRPN(tokens)); 
