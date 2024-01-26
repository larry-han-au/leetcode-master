// 左闭右闭 [start, end]
function search1(nums: number[], target: number): number {
    let start = 0;
    let end = nums.length - 1
    while(start <= end) {
        // let mid = Math.floor((end + start) / 2)
        const mid = start + ((end - start) >> 1);
        if(nums[mid] === target) {
            return mid
        } else if(nums[mid] > target) {
            end = mid - 1 // 因为mid不等于，就直接跳过
        } else {
            start = mid + 1
        }
    }
    return -1;
};


// 左闭右开 [start, end)

function search2(nums: number[], target: number): number {
    let start = 0;
    let end = nums.length // 初始化的时候，因为是开区间，所以得用length不是length - 1
    while(start < end) {
        let mid = Math.floor((end + start) / 2) 
        if(nums[mid] === target) {
            return mid
        } else if(nums[mid] > target) {
            end = mid 
        } else {
            start = mid + 1
        }
    }
    return -1;
};



// 因为这里用floor除，意味着相邻两个 a, a + 1 
// 会落在a，所以当start = a, end = a + 1
// 所以选择[a, b) 而不是（a, b]
const nums = [2,5]
console.log(search1(nums, 2))
