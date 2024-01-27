/*
 * @lc app=leetcode.cn id=59 lang=typescript
 *
 * [59] 螺旋矩阵 II
 */

// @lc code=start
function generateMatrix(n: number): number[][] {
    const matrix = new Array(n).fill(1).map(i => new Array(n))
    let num = 1;
    for(let i = 0; i * 2 < n; i = i + 1) {
        // fill ith row, col changes
        for(let j = i; j < n - i - 1; j++ ) {
            matrix[i][j] = num++;
        }
        // fill n - i col, row changes
        for(let j = i; j < n - i - 1; j++ ) {
            matrix[j][n - i - 1] = num++;
        }
        // fill n - i row, col reverse changes
        for(let j = i; j < n - i - 1; j++ ) {
            matrix[n - i - 1][n - j -1] = num++;
        }
        // fill i col, row reverse changes
        for(let j = i; j < n - i - 1; j++ ) {
            matrix[n - 1 - j][i] = num++;
        }
        
    }
    if(n % 2 == 1) matrix[n >> 1][n >> 1] = Math.pow(n, 2);
    return matrix
};

// @lc code=end

