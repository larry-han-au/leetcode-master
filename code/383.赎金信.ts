/*
 * @lc app=leetcode.cn id=383 lang=typescript
 *
 * [383] 赎金信
 */

// @lc code=start
function canConstruct(ransomNote: string, magazine: string): boolean {
    const map = {}
    for(const rn of ransomNote) {
        map[rn] = map[rn] ? map[rn] + 1 : 1;
    }
    for(const m of magazine) {
        if(m in map) {
            map[m] && (map[m] = map[m] - 1)
        } 
    }
    return Object.values(map).every(e => e === 0)
};
// @lc code=end

