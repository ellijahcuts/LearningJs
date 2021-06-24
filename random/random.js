document.querySelector('#randomButton').onclick = function () {
    let length = document.querySelector("#length").value;
    let min = document.querySelector("#min").value;
    let max = document.querySelector("#max").value;

    let result = [];
    for (let i = 0; i< length; i++){
    result.push(randomInteger(min, max))
    }
    console.log(result)
    document.querySelector('#out-input').value = result;
    document.querySelector('#out-max').value = (Math.max(...result));
    return result

}

function randomInteger(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
}