class Solution {
    public List<List<Integer>> permuteUnique(int[] nums) {
        List<List<Integer>> res = new ArrayList<>();
        boolean[] used = new boolean[nums.length];
        
        Arrays.sort(nums);
        if(nums.length == 1){
            res.add(new ArrayList<>(Arrays.asList(nums[0])));
            return res;
        }
        
        backTrack(res, new ArrayList<>(), nums, used);
        return res;
    }
    
    private void backTrack(List<List<Integer>> res, List<Integer> temp, int[] nums, boolean[] used){
        if(temp.size() == nums.length){
            res.add(new ArrayList<>(temp));
        }else{
            for(int i = 0; i < nums.length; i++){
                if(used[i] || i > 0 && nums[i] == nums[i-1] && used[i-1]){
                    continue;
                }
                temp.add(nums[i]);
                used[i] = true;
                backTrack(res, temp, nums, used);
                temp.remove(temp.size()-1);
                used[i] = false;
            }
        }
    }
}