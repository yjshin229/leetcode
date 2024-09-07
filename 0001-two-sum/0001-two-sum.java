class Solution {
    public int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> complements = new HashMap<>();
        int arrSize = nums.length;
        for(int i = 0 ; i < arrSize; i++){
            int diff = target - nums[i];
            if(complements.containsKey(diff)){
                return new int[]{i, complements.get(diff)};
            }
            complements.put(nums[i], i);
        }
        return null;
    }
}