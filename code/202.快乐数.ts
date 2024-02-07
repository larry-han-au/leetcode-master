/*
 * @lc app=leetcode.cn id=202 lang=typescript
 *
 * [202] 快乐数
 */

// @lc code=start
const calSqrSum = (val: number) => {
    return String(val).split("").reduce((prev ,cur) => prev + Math.pow(parseInt(cur), 2), 0);
}
function isHappy(n: number): boolean {
    let set = new Set();
    while(!set.has(n) && n !== 1) {
        set.add(n)
        n = calSqrSum(n)
    }
    return n === 1
};
// @lc code=end

