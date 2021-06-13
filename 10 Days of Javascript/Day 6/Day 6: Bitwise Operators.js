function getMaxLessThanK(n, k){
    let max = 0;
    let bit = -1;
    
    for(let i=1; i<n; i++){
        for(let j=i+1; j<=n; j++){
            bit = i & j;
            if(bit < k && bit > max)
                 max = bit;
        }
     } 
     return max;
 }