/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    //方向判重
    let rows={}
    let columns={}
    let boxes={}
    for(let i=0;i<9;i++){
        for(let j=0;j<9;j++){
            let num=board[i][j]
            if(num!='.'){
                let boxIndex=parseInt((i/3))*3+parseInt(j/3)
                if(rows[i+'-'+num] || columns[j+'-'+num] || boxes[boxIndex+'-'+num]){//重复检测
                    return false;
                }
                // 方向 + 数字 组成唯一键值，若出现第二次，即为重复
              	// 更新三个对象
                rows[i+'-'+num] = true;
                columns[j+'-'+num] = true;
                boxes[boxIndex+'-'+num] = true;
            }
        }
    }
            return true


};