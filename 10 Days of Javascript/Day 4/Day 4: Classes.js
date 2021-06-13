class Polygon{
    constructor(sides){
        this.perimeter = function(){
            let peri =0;
            sides.forEach(s => {
                peri += s;
            })
            return peri           
        }
    }
}