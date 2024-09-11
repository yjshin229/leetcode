class Solution {
    public boolean isValidSudoku(char[][] board) {
        
        HashSet<Character>[] rows = new HashSet[9];
        HashSet<Character>[] cols = new HashSet[9];
        HashSet<Character>[] boxes = new HashSet[9];
        
        for(int i = 0; i < 9; i++){
            rows[i] = new HashSet<>();
            cols[i] = new HashSet<>();
            boxes[i] = new HashSet<>();
        }
        
        for (int r = 0; r < board.length; r ++){
            for (int c = 0; c < board[0].length; c++){
                if (board[r][c] == '.'){
                    continue;
                }else{
                    char value = board[r][c];
                    int boxNum = (r/3) * 3 + (c/3);
                    
                    if(rows[r].contains(value) || cols[c].contains(value) || boxes[boxNum].contains(value)){
                        return false;
                    }
                    
                    rows[r].add(value);
                    cols[c].add(value);
                    boxes[boxNum].add(value);
                }
            }
        }
        return true;
    }
}