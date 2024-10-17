/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    let perimeter = 0
    for(let r = 0; r < grid.length; r ++){
        for(let c = 0; c < grid[r].length; c ++){
            if(grid[r][c] === 1){
                if(r === 0 || grid[r-1][c] === 0){
                perimeter ++;
            }
            if(r === grid.length -1 || grid[r+1][c] === 0){
                perimeter ++;
            }
            if(c === 0 || grid[r][c-1] === 0 ){
                perimeter ++
            }
            if(c === grid[r].length - 1 || grid[r][c+1] === 0){
                perimeter ++;
            }
            }
            
        }
    }
    return perimeter
};