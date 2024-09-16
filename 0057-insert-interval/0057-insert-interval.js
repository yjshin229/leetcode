/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    
    if(intervals.length === 0) return [newInterval]
    
    intervals.push(newInterval)
    intervals.sort((a,b) => a[0] -b[0])
    
    let idx = 0
    
    while(idx < intervals.length -1){

        
        if(intervals[idx][1] >= intervals[idx+1][0]){
            
            let temp =[Math.min(intervals[idx][0] , intervals[idx+1][0]), Math.max(intervals[idx][1] , intervals[idx+1][1])]
            // if(intervals[idx][1] > intervals[idx+1][1]){
            //     temp = [intervals[idx][0], intervals[idx][1]]
            // }else{
            //     temp = [intervals[idx][0], intervals[idx+1][1]]
            // }
            intervals.splice(idx,2)
            intervals.splice(idx, 0, temp)
        }else{
            idx ++;
        }
        
    }
    return intervals
};