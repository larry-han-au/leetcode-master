/*
 * @lc app=leetcode.cn id=150 lang=typescript
 *
 * [150] 逆波兰表达式求值
 */

// @lc code=start
function calVal(val1, val2, op) {
    if(op === '+') {
        return val1 + val2
    } else if (op === '-') {
        return val1 - val2
    } else if (op === '*') {
        return val1 * val2
    } else {
        return (val1 / val2 < 0 ? Math.ceil : Math.floor)(val1 / val2) // 主要是这一部分，零向除法
    }
}

function evalRPN(tokens: string[]): number {
    const stack: number[] = []
    for(let i = 0; i < tokens.length; i++){
        if(!isNaN(parseInt(tokens[i]))) {
            stack.push(parseInt(tokens[i]))
        } else {
            const val2 = stack.pop()
            const val1 = stack.pop()
            const val = calVal(val1, val2, tokens[i])
            stack.push(val)
        }
    }
    return stack[0]
};
// @lc code=end

