// kė ę°ė
function solution(i, j, k) {
    var answer = 0;
    let str = '';
    for(let start=i; start<=j; start++){
        str = str + start;
    }
    return str.split(k+'').length-1
    
}