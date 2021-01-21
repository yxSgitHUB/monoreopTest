/**
 * @param type
 * @param a {number}
 * @param b {number}
 * @returns {string}
 */
export default function (type, a, b) {
    switch (type) {
        case "+":
            return Math.min(a + b,100);
        case "-":
            return Math.min(a - b,100);
        case "*":
            return Math.min(a * b,100);
        case "/":
            return Math.min(a / b,100);
        default:
            return null;
    }
}