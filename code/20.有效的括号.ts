/*
 * @lc app=leetcode.cn id=20 lang=typescript
 *
 * [20] 有效的括号
 */

// @lc code=start
function isValid(s: string): boolean {
    const map = {"[": "]", "(" : ")", "{" : "}"}
    const stack: string[] = []
    for(let i = 0 ; i < s.length; i++) {
        if(['(', '{', '['].includes(s[i])) {
            stack.push(s[i])
        } else {
            const left = stack.pop()
            if(left && map[left] === s[i]) { // 检查stack是否为空且，是否配对
                continue
            }else{
                return false // 如果stackj为空，或者无法配对
            }
        }
    }
    return stack.length === 0 // check if stack is empty
};
// @lc code=end

