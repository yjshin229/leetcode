class Solution {
    public int[] searchRange(int[] nums, int target) {
            
        return new int[] {lowerSearch(nums, target), upperSearch(nums, target)};
    }
    
    public int lowerSearch(int[] nums, int target){
        int start = 0;
        int end = nums.length -1;
        int res = -1;
        
        while (start <= end){
            int mid = start + (end - start)/2;
            
            if(nums[mid] >= target){
                if(nums[mid] == target){
                    res = mid;
                }
                end = mid -1;
            }else{
                start = mid + 1;
            }
        }
        return res;
    }
    
    public int upperSearch(int[] nums, int target){
        int start = 0;
        int end = nums.length -1;
        int res = -1;
        
        while (start <= end){
            int mid = start + (end - start)/2;
            
            if(nums[mid] <= target){
                if(nums[mid] == target){
                    res = mid;
                }
                start = mid + 1;
            }else{
                end = mid - 1;   
            }
        }
        return res;
    }
}