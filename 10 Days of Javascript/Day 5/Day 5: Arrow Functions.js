function modifyArray(nums) {
    return (nums.map(p => {
        if(p%2 == 0)
            return p*2;
        else 
            return p*3;
    }))
}
