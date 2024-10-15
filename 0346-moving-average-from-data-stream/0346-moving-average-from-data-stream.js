/**
 * @param {number} size
 */
var MovingAverage = function(size) {
    this.size = size
    this.arr = [];

};

/** 
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function(val) {
    this.arr.push(val)
    
    let sum = 0
    let count = 0
    for(let i = this.arr.length -1 ; i >=0; i--){
        if(count === this.size) break
        
        count ++
        sum += this.arr[i]
    
    }
    console.log(sum)
    return sum / count
};

/** 
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */