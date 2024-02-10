/*
 * @lc app=leetcode.cn id=454 lang=typescript
 *
 * [454] 四数相加 II
 */

// @lc code=start
function fourSumCount(nums1: number[], nums2: number[], nums3: number[], nums4: number[]): number {
    const map = {}
    let count = 0
    for(const num1 of nums1) {
        for(const num2 of nums2 ) {
            let temp = map[num1 + num2]
            map[num1 + num2] = temp ? temp + 1 : 1
        }
    }
    for(const num3 of nums3){
        for(const num4 of nums4) {
            count += map[0 - num4 - num3] || 0
        }
    }
    return count
};
// @lc code=end

