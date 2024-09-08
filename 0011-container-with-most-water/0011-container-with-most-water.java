class Solution {
    public int maxArea(int[] height) {
        int current_area = 0;
        int max_area = 0;
        int start_index = 0;
        int end_index = height.length-1;
        
        while(start_index != end_index){
            int l = end_index - start_index;
            int h = Math.min(height[start_index], height[end_index]);
            
            current_area = l * h;
            if(height[start_index] > height[end_index]){
               end_index --;
               
            }else if(height[start_index] < height[end_index]){                
                start_index ++;

            }else{
                start_index ++;
            }
            
             if(current_area > max_area){
                    max_area = current_area;
                }
        }
        
        return max_area;
    }
}