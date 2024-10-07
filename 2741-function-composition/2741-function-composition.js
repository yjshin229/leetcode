/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {

    return function(x) {
        if(functions.length === 0) return x
        let curr = x
        while(functions.length !== 0){
            const currFunc = functions.pop()
            curr = currFunc(curr)
        }
        return curr
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */