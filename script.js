

document.addEventListener("DOMContentLoaded", function() {
    let celdas = document.querySelectorAll("td");

    celdas.forEach(function(celda) {
        celda.addEventListener("mouseover", function() {
            this.style.weight = "Bold";
            console.log("Has pasado el cursor por: " + this.innerText);
        });

        celda.addEventListener("mouseout", function() {
            this.style.backgroundColor = "";
        });
    });
});
