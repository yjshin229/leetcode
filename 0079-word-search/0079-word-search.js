/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    
    
    const backTrack = (r, c, index) => {
        if(index === word.length){
            return true;
        }
        
        if(r < 0 || r >= board.length || c < 0 || c >= board[0].length || board[r][c] !== word[index]){
            return false;
        }
        
        const temp = board[r][c]
        board[r][c] = ""
        
        const found = backTrack(r-1,c,index+1) || 
                    backTrack(r+1,c,index+1) || 
                    backTrack(r,c-1, index +1) || 
                    backTrack(r, c+1, index+1)
        
        
        board[r][c] = temp;
        return found;
    }
        
        for(let r = 0; r < board.length; r ++){
            for(let c = 0; c <board[0].length; c++){
                if(backTrack(r,c,0)){
                    return true;
                }
            }
        }
    return false;
};