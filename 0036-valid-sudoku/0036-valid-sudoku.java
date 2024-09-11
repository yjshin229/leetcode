class Solution {
    public boolean isValidSudoku(char[][] board) {
        // hashset to check duplicates for each row, col, box
        HashSet<Character>[] rows = new HashSet[9];
        HashSet<Character>[] cols = new HashSet[9];
        HashSet<Character>[] boxes = new HashSet[9];
        
        //initiate empty hashSets to each index
        for(int i = 0; i < 9; i++){
            rows[i] = new HashSet<>();
            cols[i] = new HashSet<>();
            boxes[i] = new HashSet<>();
        }
        
        //check each sudoku cells
        for (int r = 0; r < board.length; r ++){
            for (int c = 0; c < board[0].length; c++){
                if (board[r][c] == '.'){
                    continue;
                }else{
                    char value = board[r][c];
                    // i.e) if row = 1 and col = 3 => box = 1
                    int boxNum = (r/3) * 3 + (c/3);
                    
                    //check for duplicates in all hashSet 
                    if(rows[r].contains(value) || cols[c].contains(value) || boxes[boxNum].contains(value)){
                        return false;
                    }
                    
                    //if no duplicates add the value to the hashSet
                    rows[r].add(value);
                    cols[c].add(value);
                    boxes[boxNum].add(value);
                }
            }
        }
        return true;
    }
}