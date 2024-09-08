class Solution {
    public void nextPermutation(int[] nums) {
        int index1 = -1;
        int index2 = -1;
        for(int i = nums.length-2;  i >= 0; i--){
            if(nums[i] < nums[i+1]){
                index1 = i;
                break;
            }
        }
            
        if(index1 == -1){
            reverse(nums, 0);
            return;
        }else{
            for(int i = nums.length-1;  i >= index1; i--){
                if(nums[i] > nums[index1]){
                    index2 = i;
                    break;
                }
                
            }
            swap(nums, index1, index2);
            reverse(nums, index1+1);
        }
    }
    
    void swap(int[] nums, int n1, int n2){
        int temp = nums[n1];
        nums[n1] = nums[n2];
        nums[n2] = temp;
    }
    
    void reverse(int[] nums, int start_index){
        int i=start_index;
        int j=nums.length-1;
        while(i<j){
            swap(nums,i,j);
            i++;
            j--;
        }
    }
}
    