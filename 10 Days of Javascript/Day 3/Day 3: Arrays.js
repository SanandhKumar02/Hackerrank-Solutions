function getSecondLargest(nums) {

    nums.sort((a,b) => b-a);
    let a = nums.shift();
    
    while(a === nums[0]){
        a = nums.shift();
    }
    a = nums.shift();
    
    return(a);
}