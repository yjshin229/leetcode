class Solution {
    public int removeDuplicates(int[] nums) {
        int arraySize = nums.length;
        int replace = 1;
        for( int i = 1 ; i <arraySize; i ++){
            if(nums[i-1] != nums[i]){
                nums[replace] = nums[i];
                replace ++;
            }
        }
        return replace;
    }
}