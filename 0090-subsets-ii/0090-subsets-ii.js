/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    let ret = new Set()

    nums.sort((a,b) => a -b)

    const backTrack = (temp, remain) => {
        ret.add(JSON.stringify(temp))
        if(!remain.length){
            return
        }

        for(let i = 0; i<remain.length; i++){
            temp.push(remain[i])
            backTrack(temp, remain.slice(i+1))
            temp.pop()
        }
    }

    backTrack([], [...nums])
    return Array.from(ret).map(JSON.parse)
};