class Solution {
    public int search(int[] nums, int target) {
        int index = -1;
        int pivot = pivotSearch(nums);
        index = targetSearch(nums, pivot, nums.length-1, target);
        if (index != -1){
            return index;
        }
        index = targetSearch(nums, 0, pivot - 1, target);
        
        return index;
    }
    
    private int pivotSearch(int[] nums){
        int start = 0;
        int end = nums.length - 1;
        
        while(start < end){
            int mid = start + (end - start) / 2;
            if(nums[mid]>nums[end]){
                start = mid + 1;
            }else{
                end = mid;
            }
        }
        return end;
        
    }
    
    
    private int targetSearch(int[] nums, int start, int end, int target){
        int index = -1;
        while(start <= end){
            int mid = start + (end - start) / 2;
            if(nums[mid] == target){
                return mid;
            }
            if(nums[mid] > target){
                end = mid - 1;
            }else{
                start = mid + 1;
            }
        }
        return index;
        
    }
    
}