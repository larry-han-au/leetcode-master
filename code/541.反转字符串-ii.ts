/*
 * @lc app=leetcode.cn id=541 lang=typescript
 *
 * [541] 反转字符串 II
 */

// @lc code=start
function reverseKTo2K(start: number, end: number, sArr: string[]) {
    let i = start;
    let j = end > sArr.length - 1 ? sArr.length - 1 : end;
    console.log(i, j)
    while(i < j) {
        const temp = sArr[j]
        sArr[j] = sArr[i]
        sArr[i] = temp
        i++
        j--
    }
}

function reverseStr(s: string, k: number): string {
    let sArr = s.split("")
    for(let i = 0; i * k < sArr.length; i = i + 2) {
        
        reverseKTo2K(i * k, k * (i + 1) - 1, sArr)
    }
    return sArr.join("")
};
// @lc code=end

