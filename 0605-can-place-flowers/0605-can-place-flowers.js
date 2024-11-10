/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    if(flowerbed.length === 1 && !flowerbed[0] && n === 1) return true
    let count = n
    for(let i = 0; i < flowerbed.length; i++){
        if(count === 0) return true
        if(flowerbed[i] === 1) continue
        if(i === 0 && flowerbed[i + 1] === 0){
            flowerbed[i] = 1
            count --;
        }else if(i === flowerbed.length - 1 && flowerbed[i-1]=== 0){
            flowerbed[i] = 1
            count --;
        }else if(flowerbed[i-1] === 0 && flowerbed[i+1] === 0){
            flowerbed[i] = 1
            count --;
        }
    }
    if(!count)return true
    return false
};