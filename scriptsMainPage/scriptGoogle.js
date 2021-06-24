document.getElementById("search").onchange = function() {
 let yandex = document.getElementById("search").value;

 if (yandex.toLowerCase() === "google") {
  alert("Яндекс круче, но это не точно");
 }
else {
  alert(search.value);
 }
}