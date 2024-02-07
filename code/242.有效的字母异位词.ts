/*
 * @lc app=leetcode.cn id=242 lang=typescript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
function isAnagram(s: string, t: string): boolean {
    let alphabetList = new Array(26).fill(0);
    for(let i = 0 ; i < s.length; i++) {
        alphabetList[s.charCodeAt(i) - 'a'.charCodeAt(0)]++; 
    }
    // console.log(alphabetList)
    for(let i = 0 ; i < t.length; i++) {
        alphabetList[t.charCodeAt(i) - 'a'.charCodeAt(0)]--; 
    }
    return alphabetList.every(e =>  e === 0)
};
// @lc code=end

