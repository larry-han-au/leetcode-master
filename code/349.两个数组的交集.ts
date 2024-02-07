/*
 * @lc app=leetcode.cn id=349 lang=typescript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
function intersection(nums1: number[], nums2: number[]): number[] {
  let intersect = nums1.filter(e => nums2.includes(e)) 
  return [...new Set(intersect)]
};
// @lc code=end

