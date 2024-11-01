/**
 * @param {string} s
 * @param {number[][]} shift
 * @return {string}
 */
var stringShift = function(s, shift) {
    let fin = 0
    for (const [dir,amount] of shift){
        if(dir === 0){
            fin -= amount
        }else{
            fin += amount
        }
    }
    console.log(fin)

    const performShift = (shift) => {
        let temp = s.split("")
        if(shift < 0){
            while(shift < 0){
                let popped = temp.shift()
                temp.push(popped)
                shift ++
            }
        }else{
            while(shift > 0){
                let popped = temp.pop()
                temp.unshift(popped)
                shift --
            }
        }
        return temp.join("")
    }
    return performShift(fin)
};