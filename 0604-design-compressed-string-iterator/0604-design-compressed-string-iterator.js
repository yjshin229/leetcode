/**
 * @param {string} compressedString
 */
var StringIterator = function(compressedString) {
    this.arr = [];
    this.count = 0;
    this.current = ""
    this.compressedString = compressedString.split("");
};

/**
 * @return {character}
 */
StringIterator.prototype.next = function() {
    if(this.count){
        this.count --;
        return this.current
    }else{
        if(this.compressedString.length){
            this.current = this.compressedString.shift()
         
            let numStr = ""
            while(this.compressedString.length){
                let temp = parseInt(this.compressedString[0])
                if(isNaN(temp)){
                    break;
                }else{
                    numStr += this.compressedString.shift()
                }
            }
            this.count = parseInt(numStr) - 1
            return this.current
        }else{
            return " "
        }
    }
};

/**
 * @return {boolean}
 */
StringIterator.prototype.hasNext = function() {
    if(this.count){
        return true
    }else{
        if(this.compressedString.length){
            return true
        }else{
            return false
        }
    }
};

/** 
 * Your StringIterator object will be instantiated and called as such:
 * var obj = new StringIterator(compressedString)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */