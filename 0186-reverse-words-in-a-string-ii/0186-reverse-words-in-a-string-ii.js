/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseWords = function(s) {
    if(s.length === 1) return s

    let left = 0
    let right = s.length-1

    const swap = (left,right) => {
        const temp = s[left]
        s[left] = s[right]
        s[right] = temp
    }

    while(left <= right){
       swap(left,right)
       left ++;
       right --;
    }

    console.log(s)

    let start = 0

    for(let i = 0; i <s.length; i ++){
        if(s[i] === " " || i === s.length -1){
            let end
            if(i === s.length - 1) {
                end = i
            }else{
                end = i -1
            }
            
             while(start < end){
                swap(start, end)
                start ++;
                end --;
            }
            start = i + 1
        }
       
    }

    return s
};