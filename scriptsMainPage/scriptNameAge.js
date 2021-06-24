let users = [
    {name: 'Ilya', age: 25,
        toString() {
            return this.name;
        }},
    {name: 'Viktor', age: 16},
    {name: 'Oleg', age: 22},
    {name: 'Valera', age: 45}
]

console.log(users);

function name() {
    setTimeout('alert(users[0])',3100)
}

var mouseClick = document.querySelector("[type='button']");
mouseClick.addEventListener('click', name)
