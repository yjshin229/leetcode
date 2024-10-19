/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
    let res = ""
    let temp = [...score].sort((a,b) => b-a)
    let medal = 1
    for(const num of temp){
        let idx = score.indexOf(num)
        if(medal === 1){
            score[idx] = "Gold Medal"
        }else if(medal === 2){
            score[idx] = "Silver Medal"
        }else if(medal === 3){
            score[idx] = "Bronze Medal"
        }else{
            score[idx] = medal.toString()
        }
        medal++;
    }
    return score
};