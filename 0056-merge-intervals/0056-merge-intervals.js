/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    
    intervals.sort((a, b) => (a[0] - b[0]));
    let idx = 0
    while(idx < intervals.length-1){
        if(intervals[idx][1] >= intervals[idx+1][0]){
            let temp = []
            if(intervals[idx][1] > intervals[idx+1][1]){
                temp = [intervals[idx][0], intervals[idx][1]]

            }else{
                temp = [intervals[idx][0], intervals[idx+1][1]]

            }
            intervals.splice(idx,2)
            intervals.splice(idx,0,temp)
        }else{
            idx ++;
        }
    }
    return intervals
};