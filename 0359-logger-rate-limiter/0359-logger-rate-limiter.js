
var Logger = function() {
    this.Logger = []
    this.map = {}
};

/** 
 * @param {number} timestamp 
 * @param {string} message
 * @return {boolean}
 */
Logger.prototype.shouldPrintMessage = function(timestamp, message) {
    if(!this.map[message]){
        console.log(this.map[message])
        this.map[message] = timestamp + 10
        return true
    }else if(this.map[message] > timestamp){

        return false
    }else{
        this.map[message] = timestamp + 10
        return true
    }
};

/** 
 * Your Logger object will be instantiated and called as such:
 * var obj = new Logger()
 * var param_1 = obj.shouldPrintMessage(timestamp,message)
 */