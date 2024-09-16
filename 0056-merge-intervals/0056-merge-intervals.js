/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    
    intervals.sort((a, b) => (a[0] - b[0]));
    let start = 0
    let end = intervals.length-1;
    while(start < intervals.length-1){
        if(intervals[start][1] >= intervals[start+1][0]){
            let temp = []
            if(intervals[start][1] > intervals[start+1][1]){
                temp = [intervals[start][0], intervals[start][1]]

            }else{
                temp = [intervals[start][0], intervals[start+1][1]]

            }
            intervals.splice(start,2)
            intervals.splice(start,0,temp)
            end --;
        }else{
            start ++;
        }
    }
    return intervals
};