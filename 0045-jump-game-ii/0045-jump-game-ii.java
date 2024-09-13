class Solution {
    public int jump(int[] nums) {
        int res = 0;
        
        int jump = 0, range = 0;

        if(nums.length == 1){
            return 0;
        }
        
        for (int i = 0; i < nums.length; i++){
            jump = Math.max(nums[i]+i, jump);
            if(i == range){
                res ++;
                range = jump;
                if(range >= nums.length -1){
                    return res;
                }
            }
        }    
        return res;

    }
    
}