class Solution {
    public int removeElement(int[] nums, int val) {
        int numSize = nums.length;
        int nonRemoved = 0;
        for ( int i = 0 ; i < numSize; i++){
            if( nums[i] != val){
                nums[nonRemoved] = nums[i];
                nonRemoved ++;
            }
        }
        return nonRemoved;
    }
}