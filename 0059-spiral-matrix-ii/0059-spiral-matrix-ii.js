/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    let res = new Array(n)
    .fill().map(() => new Array(n).fill(0));
    
    let count = 1
    let r = 0
    let c = 0
    
    let moveX = 1
    let moveY = 0;
    
    const changeMoveDirection = () => {
        let temp = moveX
        moveX = -1 * moveY
        moveY = temp
    }
    while(count <= n*n){
        //move right
        if(moveX === 1 && moveY === 0){
            if(res[r][c] === 0){
                res[r][c] = count
                count ++
            }
           
            if(c === n-1 || res[r][c+1] !== 0){
                changeMoveDirection();
                r++;
            }else{
               c++; 
            }
            
        // move down    
        }else if(moveX === 0 && moveY === 1){
            if(res[r][c] === 0){
                res[r][c] = count
                count ++
            }
           
            if( r === n -1 || res[r+1][c] !== 0){
                changeMoveDirection();
                c --;
            }else{
                r++; 
            }
        //move left   
        }else if(moveX === -1 && moveY === 0){
            if(res[r][c] === 0){
                res[r][c] = count
                count ++
            }
           
            if( c === 0 || res[r][c-1] !== 0){
                changeMoveDirection();
                r --;
            }else{
                c --; 
            }
            
        //move up
        }else{
            if(res[r][c] === 0){
                res[r][c] = count
                count ++
            }
           
            if( r === 0 || res[r-1][c] !== 0){
                changeMoveDirection();
                c++;
            }else{
                r --; 
            }
        }
            
    }
    return res
};