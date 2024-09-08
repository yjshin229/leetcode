class Solution {
    public int threeSumClosest(int[] nums, int target) {
        Arrays.sort(nums);
        int current = nums[0] + nums[1] + nums[2]; 
        for (int i = 0; i < nums.length; i++) {
            
            int j = i + 1;
            int k = nums.length - 1;
            
            while(j < k){
                int total = nums[i] + nums[j] + nums[k];
                if(total > target){
                    k --;
                }else if(total < target){
                    j ++;
                }else{
                    return target;
                }
                
                if(Math.abs(total - target) < Math.abs(current - target)){
                        current = total;
                }
                
            }
        }
        return current;
    }
    

}