/**
 * @param {number} turnedOn
 * @return {string[]}
 */
var readBinaryWatch = function(turnedOn) {
    let ans = []
    if(turnedOn === 9 || turnedOn === 10) return ans

    const getMinutes = (num) => {
        let min = []
        for(let i = 0; i <60; i++){
            let count = 0
            let temp = i
            while(temp !== 0){
                count += temp & 1
                temp = temp >>> 1
            }
            if(count === num){
                if(i < 10){
                    min.push("0" + i.toString())
                }else{
                    min.push(i.toString())
                }
            }
        }
        return min
    }

    for(let hour = 0; hour <12; hour ++){
        let count = 0
        let temp = hour
        while(temp !== 0){
            count += temp & 1
            temp = temp >>> 1
        }
        
        if(count <= turnedOn){
            if(turnedOn - count === 0){
                ans.push(`${hour}:00`)
            }else{
                let minutes = getMinutes(turnedOn - count)
                minutes.map((minute) => (
                    ans.push(`${hour}:${minute}`)
                ))
            }
        }
    }
    return ans
};