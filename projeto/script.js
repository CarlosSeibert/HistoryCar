document.addEventListener("DOMContentLoaded", () => {
    const quadrado = document.querySelector(".quadrado");
    let inputCriado = false;
    let input;
  
    quadrado.style.position = "relative";
  
    quadrado.addEventListener("mouseenter", () => {
      if (!inputCriado) {
        input = document.createElement("input");
        input.type = "form";
        input.placeholder = "Digite aqui";
        input.className = "pesquisa";
  
        input.style.position = "absolute";
        input.style.top = "50%";
        input.style.left = "50%";
        input.style.transform = "translate(-50%, -50%)";
        input.style.padding = "1rem";
        input.style.fontSize = "1rem";
        input.style.width = "50%";
        input.style.border = "1px solid #555";
        input.style.borderRadius = "0.5rem";
        input.style.backgroundColor = "white";
        input.style.transition = "opacity 0.3s";
        input.style.opacity = "0";
  
        quadrado.appendChild(input);
        setTimeout(() => input.style.opacity = "1", 10);
        inputCriado = true;
      } else {
        input.style.display = "block";
        input.style.opacity = "1";
      }
    });
  
    quadrado.addEventListener("mouseleave", () => {
      if (input) {
        input.style.opacity = "0";
        setTimeout(() => {
          input.style.display = "none";
          input.value = "";
        }, 300);
      }
    });
  });
  