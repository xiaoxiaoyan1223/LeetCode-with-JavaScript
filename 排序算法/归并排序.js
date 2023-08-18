function mergeSort(arr){
    if(arr.length<2) return arr
    let mid=Math.floor(arr.length/2)
    let merge=function(leftArr,rightArr){
        let resultArr=[]
        while(leftArr.length&&rightArr.length){
            resultArr.push(leftArr[0]<=rightArr[0]?leftArr[0].shift():rightArr[0].shift())
        }
        return resultArr.concat(leftArr).concat(resultArr)
    }
    return merge(
        mergeSort(arr.slice(0,mid)),
        mergeSort(arr.slice(mid))  
    )
}