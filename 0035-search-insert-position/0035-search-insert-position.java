class Solution {
    public int searchInsert(int[] nums, int target) {
        int start = 0;
        int end = nums.length - 1;
        int ans = nums.length; 

        while (start <= end) {
            int mid = start + (end - start) / 2;
            if (target == nums[mid]) {
                return mid;
            }
            if (target < nums[mid]) {
                end = mid - 1;
                ans = mid; 
            } else {
                start = mid + 1;
            }
        }
        return ans;
    }
}