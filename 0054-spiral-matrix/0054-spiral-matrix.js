/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    
    let direction = 'right'
    let r = 0
    let c = 0
    const cellNum = matrix.length * matrix[0].length
    
    let res = []
    let count = 0;
    
     const right = () => {
        for(let i = c; i < matrix[0].length; i++){
            if(matrix[r][i] === ""){
                continue;
            }
            res.push(matrix[r][i]);
            c = i
             matrix[r][i] = ""
            count ++;
        }
         direction = 'down'
         r ++;
    }
     const left = () => {
        for(let i = c; i >= 0; i--){
            if(matrix[r][i] === ""){
                continue;
            }
            res.push(matrix[r][i]);
            c = i
            matrix[r][i] = ""
            count ++;
        }
         direction = 'up'
         r --;
    }
      const down = () => {
        for(let i = r; i < matrix.length; i++){
            if(matrix[i][c] === ""){
                continue;
            }
            res.push(matrix[i][c]);
            r = i
            matrix[i][c] = ""
            count ++;
        }
          direction = 'left'
          c--;
    }
       const up = () => {
        for(let i =r; i >= 0; i--){
            if(matrix[i][c] === ""){
                continue;
            }
            res.push(matrix[i][c]);
            r = i
            matrix[i][c] = ""
            count ++;
        }
           direction = 'right'
           c++;
    }
    
    while(count !== cellNum){
        switch(direction){
            case 'right' : 
                right();
                break;
            case 'left':
                left();
                break;
            case 'down': 
                down()
                break;
            case 'up':
                up();
                break;
        }
    }
    
    return res;
   
    
    
};