function sides(literals, ...expressions) {
    let area = expressions[0];
    let peri = expressions[1];
    
    let s1 = (peri + Math.sqrt((peri*peri) - (16*area)))/4;
    let s2 = (peri - Math.sqrt((peri*peri) - (16*area)))/4;
    
    const arr = [s1,s2];
    return (arr.sort((a,b) => a-b));
}