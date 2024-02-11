/*
 * @lc app=leetcode.cn id=1047 lang=typescript
 *
 * [1047] 删除字符串中的所有相邻重复项
 */

// @lc code=start
function removeDuplicates(s: string): string {
    const stack: string[] = []
    for(let i = 0; i < s.length; i++) {
        if(stack.length === 0) {
            stack.push(s[i])
        } else {
            if(s[i] === stack[stack.length - 1]) {
                stack.pop()
            } else {
                stack.push(s[i])
            }
       }
    }
    return stack.join("")
};

//一次过，感觉不错哦
// @lc code=end

