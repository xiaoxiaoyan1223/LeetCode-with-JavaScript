class Queue{
            #item={}
            // 队尾
            #count=0
            // 队头
            #lowCount=0
            // 出队
            #dequeue(){
                if(this.isEmpty()){
                    return undefined
                }
                let item=this.#item[this.#lowCount]
                delete this.#item[this.#lowCount]
                this.#lowCount++
                return item
            }
            // 入队
            #enqueue(element){
                this.#item[this.#count]=element
                this.#count++
            }
            // 判断是否为空
            isEmpty(){
                return this.#count-this.#lowCount===0
            }
            // 获取队列长度
            size(){
                return this.#count-this.#lowCount
            }
            // 获取队头元素
            front(){
                if(this.isEmpty()){
                    return undefined
                }
                return this.#item[this.#lowCount]
            }
            // 获取队尾元素
            back(){
                if(this.isEmpty()){
                    return undefined
                }
                return this.#item[this.#count-1]
            }
            // 清空队列
            clear(){
                this.#item={}
                this.#count=0
                this.#lowCount=0
            }
            // 打印队列
            print(){
                if(this.isEmpty()){
                    return undefined
                }
                let str=''
                for(let i=this.#lowCount;i<this.#count;i++){
                    str+=this.#item[i]+' '
                }
                return str
            }
            
        }
