let search = document.getElementById("search");
let click = document.getElementById("click");

click.addEventListener("click", () => {
    setTimeout('alert(search.value)',3000)
});