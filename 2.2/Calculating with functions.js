const numbers = {
    ZERO:  0,
    ONE:   1,
    TWO:   2,
    THREE: 3,
    FOUR:  4,
    FIVE:  5,
    SIX:   6,
    SEVEN: 7,
    EIGHT: 8,
    NINE:  9,
  };

function zero(n) {
    return n ? Math.floor(eval('numbers.ZERO' + n)) : numbers.ZERO;
}
function one(n) {
    return n ? Math.floor(eval('numbers.ONE' + n)) : numbers.ONE;
}
function two(n) {
    return n ? Math.floor(eval('numbers.TWO' + n)) : numbers.TWO;
}
function three(n) {
    return n ? Math.floor(eval('numbers.THREE' + n)) : numbers.THREE;
}
function four(n) {
    return n ? Math.floor(eval('numbers.FOUR' + n)) : numbers.FOUR;
}
function five(n) {
    return n ? Math.floor(eval('numbers.FIVE' + n)) : numbers.FIVE;
}
function six(n) {
    return n ? Math.floor(eval('numbers.SIX' + n)) : numbers.SIX;
}
function seven(n) {
    return n ? Math.floor(eval('numbers.SEVEN' + n)) : numbers.SEVEN;
}
function eight(n) {
    return n ? Math.floor(eval('numbers.EIGHT' + n)) : numbers.EIGHT;
}
function nine(n) {
    return n ? Math.floor(eval('numbers.NINE' + n)) : numbers.NINE;
}

function plus(number) {
  return "+" + number;
}
function minus(number) {
  return "-" + number;
}
function times(number) {
  return "*" + number;
}
function dividedBy(number) {
  return "/" + number;
}
