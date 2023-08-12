/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    var sum=0;
      const n=mat.length
      for(let i=0;i<n;i++){
          for(let j=0;j<n;j++){
              if(i==j ||i+j==n-1){
                  sum+=mat[i][j]
              }
          }
      }
      return sum
};