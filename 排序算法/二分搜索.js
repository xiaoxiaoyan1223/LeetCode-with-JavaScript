function search(arr,target){
    let count=1;
    let start=0;
    let end=arr.length-1
    while(start<=end){
        //取中间值
        let mid=Math.floor((start+end)/2)
        let guess=arr[mid]
        if(guess==target){
            return mid;
        }
        if(guess>target){
            end=mid-1
        }
        if(guess<target){
            start=mid+1
        }
        count++
    }
    return -1;
}