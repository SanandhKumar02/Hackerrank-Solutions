function getCount(objects) {
    let count=0;
    objects.forEach(p => {
        if(p.x == p.y)
            count++;
    })
    return count;
}
