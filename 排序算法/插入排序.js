function insert(arr){
    for(let i=1;i<arr.length;i++){
        let temp=arr[i];
        let j=i-1;
        //在已经排好的队列中从后向前的扫描
        while(j>=0&&arr[j]>temp){
            //已排序的元素大于新元素，将该元素移动到下一位置
            arr[j+1]=arr[j];
            j--
        }
        arr[j+1]=temp;
    }
    return arr
}