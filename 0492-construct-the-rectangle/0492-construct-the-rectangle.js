/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function(area) {
    let length = 1
    let ret = [area, 1]
    while(length <= area / length){
        if(area % length === 0){
            if((area / length) - length < ret[0] - ret[1]){
                ret[0] = area / length
                ret[1] = length
            }
        }
        length ++ ;
    }

    return ret
    
};