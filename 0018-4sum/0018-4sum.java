// class Solution {
//     public List<List<Integer>> fourSum(int[] nums, int target) {
        
//         List<List<Integer>> res = new ArrayList<>();
//         Arrays.sort(nums);
        
//        if(nums.length < 4){
//             return res;
//         }else{
//             int prev = nums[nums.length-1];
//             for(int i = 0; i < nums.length; i++){
//                 if(i > 0 && nums[i] == nums[i-1]){
//                     continue;
//                 }
                
//                 int j = i + 1;
//                 int k = nums.length -1;
                
//                 while (j + 1 < k){
//                     int remain = target - (nums[i] + nums[j] + nums[k]);
//                     int l = binarySearch(nums, j, k, remain);
                    
//                     if ( l != -1 && nums[l] == remain){
//                         res.add(Arrays.asList(nums[i], nums[j], nums[k], nums[l]));
//                         j++;
                        
//                         while(nums[j] == nums[j-1] && j < k){
//                             j ++;
//                         }
//                     }else{
//                         if(remain < target){
//                             k --;
//                         }else{
//                             j ++;
//                         }
//                     }
//                 }
                
//                 prev = nums[i];
//             }
            
//         }
//         return res;
//     }
    
//     public int binarySearch(int[] nums, int start, int end, int target){
        
//         while (start <= end){
//             int mid = start + (end - start)/2;
//             if (nums[mid] == target){
//                 return mid;
//             }else if(nums[mid] > target){
//                 end = mid -1;
//             }else{
//                 start = mid + 1;
//             }
//         }
//         return -1;
//     }
// }

class Solution {
    public List<List<Integer>> fourSum(int[] nums, int target) {
        List<List<Integer>> res = new ArrayList<>();
        Arrays.sort(nums);
        
        if (nums.length < 4) {
            return res;
        }

        for (int i = 0; i < nums.length - 3; i++) {
            if (i > 0 && nums[i] == nums[i - 1]) {
                continue;  // skip duplicates for the first number
            }
            
            for (int j = i + 1; j < nums.length - 2; j++) {
                if (j > i + 1 && nums[j] == nums[j - 1]) {
                    continue;  // skip duplicates for the second number
                }

                int left = j + 1;
                int right = nums.length - 1;

                while (left < right) {
                    long sum = (long)nums[i] + nums[j] + nums[left] + nums[right];
                    
                    if (sum == target) {
                        res.add(Arrays.asList(nums[i], nums[j], nums[left], nums[right]));
                        
                        left++;
                        right--;

                        while (left < right && nums[left] == nums[left - 1]) {
                            left++;  // skip duplicates for the third number
                        }
                        
                        while (left < right && nums[right] == nums[right + 1]) {
                            right--;  // skip duplicates for the fourth number
                        }
                    } else if (sum < target) {
                        left++;
                    } else {
                        right--;
                    }
                }
            }
        }

        return res;
    }
}
