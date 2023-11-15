
var RandomizedSet = function() {
    this.map = new Map()
    this.arr = []
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if(this.map.has(val)){
        return false
    }else{
        this.arr.push(val)
        this.map.set(val,this.arr.length-1)
        return true
    }
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
     if(this.map.has(val)){
        let index=this.map.get(val)
        let lastVal=this.arr[this.arr.length-1]
        //用最后一个元素替换要删除的元素
        this.arr[index]=lastVal
        this.arr.pop()
        this.map.set(lastVal,index)
        this.map.delete(val)
        return true
    }
    else{
        return false
    }
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
   let r=Math.floor(Math.random()*this.arr.length)
   return this.arr[r]
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */