function vowelsAndConsonants(s) {
    var vow =['a','e','i','o','u']
    for (let v of s){
        if(vow.includes(v))
            console.log(v)
    }
    for (let v of s){
        if(!vow.includes(v))
            console.log(v)
    }
}
