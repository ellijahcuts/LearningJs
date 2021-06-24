
let minNum = [13, -9, 61, 22, -54, -89];
let min = minNum[0];
let max = minNum[0];

for (let i = 1; i < minNum.length; i++) {
    if(minNum[i] < min){
        min = minNum[i];
    }
    if(minNum[i] > max){
        max = minNum[i];
    }
}
console.log(minNum)
document.querySelector('#massive').value = minNum;
document.querySelector('#max').value = max;
document.querySelector('#min').value = min;

