class Solution {
    public int jump(int[] nums) {
//         int res = 0;
        
//         int jump = 0, range = 0;

//         if(nums.length == 1){
//             return 0;
//         }
        
//         for (int i = 0; i < nums.length; i++){
//             jump = Math.max(nums[i]+i, jump);

//             if(i == nums.length -1){
//                     return res;
//                 }else if(i == range){
//                 res ++;
//                 range += jump;
                
//             }
//         }    
//         return res;
          int n=nums.length;
        if(n==1) return 0;
        int count=0;
        int far=0,range=0;
        for(int i=0;i<n;i++){
            far=Math.max(nums[i]+i,far);
            if(i==range){
                count++;
                range=far;
                if(range>=n-1){
                    return count;
                }
            }
           
        }
        return count;

    }
    
}