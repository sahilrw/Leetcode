// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

// Example 1:
// Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6
// Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.

// Example 2:
// Input: height = [4,2,0,3,2,5]
// Output: 9

// my solution
var trap = function(height) {
    const n = height.length;
    if (n <= 2) return 0;

    // init arr to store max height
    const leftMax = new Array(n).fill(0);
    const rightMax = new Array(n).fill(0);

    // calc max height on left
    leftMax[0] = height[0];
    for (let i = 1; i < n; i++){
        leftMax[i] = Math.max(leftMax[i - 1], height[i])
    }

    // calc max height on right
    rightMax[n - 1] = height[n - 1];
    for (let i = n - 2; i >= 0; i--){
        rightMax[i] = Math.max(rightMax[i + 1], height[i])
    }

    let totalWater = 0;
    for (let i = 0; i < n; i++){
        totalWater += Math.min(leftMax[i], rightMax[i]) - height[i]
    }

    return totalWater;
};