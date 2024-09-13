class Solution {
    public void rotate(int[][] matrix) {
        int length = matrix.length;
        int top = 0;
        int bottom = length -1;
        
        while(top<bottom){
            for (int i = 0; i< length; i ++){
                int temp = matrix[top][i];
                matrix[top][i] = matrix[bottom][i];
                matrix[bottom][i] = temp;
            }
            top ++;
            bottom --;
        }
     

        for(int r = 0; r <length; r++){
            for(int c = r+1; c < matrix[0].length; c ++){
                int temp = matrix[r][c];
                matrix[r][c] = matrix[c][r];
                matrix[c][r] = temp;
            }
        }
    }
}