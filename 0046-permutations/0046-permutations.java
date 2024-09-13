class Solution {
    public List<List<Integer>> permute(int[] nums) {
        List<List<Integer>> res = new ArrayList<>();
        
        if(nums.length == 1){
            res.add(new ArrayList<>(Arrays.asList(nums[0])));
            return res;
        }
        backTrack(res, new ArrayList<>(), nums);
        return res;
    }
    
    private void backTrack(List<List<Integer>> res, List<Integer> temp, int[] nums){
        if (temp.size() == nums.length){
            res.add(new ArrayList<>(temp));
        }else{
            for(int i = 0; i <nums.length; i++){
                if(temp.contains(nums[i])){
                    continue;
                }
                temp.add(nums[i]);
                backTrack(res, temp, nums);
                temp.remove(temp.size()-1);
            }
        }
    }
}