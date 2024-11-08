/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function(title) {
    let titleArr = title.split(" ")

    for(let i = 0; i < titleArr.length; i++){
        let current = titleArr[i].toLowerCase()
        if(current.length >= 3){
            current = current.substring(0,1).toUpperCase() + current.substring(1)
        }
        titleArr[i] = current
    }

    return titleArr.join(" ")
};