
var TwoSum = function() {
    this.nums = []
};

/** 
 * @param {number} number
 * @return {void}
 */
TwoSum.prototype.add = function(number) {
    this.nums.push(number)
};

/** 
 * @param {number} value
 * @return {boolean}
 */
TwoSum.prototype.find = function(value) {
    let set = new Set()
    for(const num of this.nums){
        let diff = value - num
        if(set.has(diff)){
            return true
        }else{
            set.add(num)
        }
    }

    return false
};

/** 
 * Your TwoSum object will be instantiated and called as such:
 * var obj = new TwoSum()
 * obj.add(number)
 * var param_2 = obj.find(value)
 */