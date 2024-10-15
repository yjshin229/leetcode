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
    let sum = 0
    if(this.arr.length < this.size){
        this.arr.push(val)
    }else{
        this.arr.shift()
        this.arr.push(val)
    }
    
    for(const num of this.arr){
        sum += num
    }
    console.log(sum)
    return sum / this.arr.length
};

/** 
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */