//Basic Mathematical Operations
function basicOp(operation, value1, value2) {
    switch (operation) {
        case '+':
            return value1 + value2;
        case '-':
            return value1 - value2;
        case '*':
            return value1 * value2;
        case '/':
            if(value1===0 && value2===0)
            {
                return NaN;
            }
            else if(value2===0)
            {
                return "Division is not possible"
            }
            else
            {
                return value1 / value2;
            }
        default:
            return 0;
    }
}
