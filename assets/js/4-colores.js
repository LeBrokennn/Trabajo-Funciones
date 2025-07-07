 const colores = {
      a: "pink",
      s: "orange",
      d: "skyblue",
      q: "purple",
      w: "gray",
      e: "brown"
    };

    const keyDiv = document.getElementById("key");
keyDiv.style.width  = "200px";
keyDiv.style.height = "200px";
keyDiv.style.margin = "5px";

    function pintarNegro(id) {
      document.getElementById(id).style.backgroundColor = "black";
    }

    document.getElementById("azul").addEventListener("click", () => pintarNegro("azul"));
    document.getElementById("rojo").addEventListener("click", () => pintarNegro("rojo"));
    document.getElementById("verde").addEventListener("click", () => pintarNegro("verde"));
    document.getElementById("amarillo").addEventListener("click", () => pintarNegro("amarillo"));

    document.addEventListener("keydown", function (event) {
      const color = colores[event.key];
      if (["a", "s", "d"].includes(event.key)) {
        keyDiv.style.backgroundColor = color;
      } else if (["q", "w", "e"].includes(event.key)) {
        const nuevoDiv = document.createElement("div");
        nuevoDiv.style.width = "200px";
        nuevoDiv.style.height = "200px";
        nuevoDiv.style.margin = "5px";
        nuevoDiv.style.backgroundColor = color;
        document.getElementById("container").appendChild(nuevoDiv);
      }
    });

    console.log(colores);