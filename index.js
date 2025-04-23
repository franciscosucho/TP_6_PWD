function crearClave() {
    const largo = parseInt(document.getElementById("tam").value);
    const incluirMayus = document.getElementById("mayus").checked;
    const incluirNum = document.getElementById("num").checked;
    const incluirSimbolos = document.getElementById("simbolos").checked;
    let base = "abcdefghijklmnopqrstuvwxyz";
    if (incluirMayus) base += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (incluirNum) base += "0123456789";
    if (incluirSimbolos) base += "!@#$%^&*()_+";
    let resultado = "";
    for (let i = 0; i < largo; i++) {
      resultado += base.charAt(Math.floor(Math.random() * base.length));
    }
    document.getElementById("claveGenerada").value = resultado;
    verificarSeguridad(resultado);
  }
  
  function verificarSeguridad(clave) {
    const nivelSeguridad = document.getElementById("nivelSeguridad");
    const longitud = clave.length;
    const tieneMayus = /[A-Z]/.test(clave);
    const tieneNum = /\d/.test(clave);
    const tieneSimbolos = /[!@#$%^&*()_+]/.test(clave);
  
    let puntaje = 0;
    if (longitud >= 8) puntaje++;
    if (tieneMayus) puntaje++;
    if (tieneNum) puntaje++;
    if (tieneSimbolos) puntaje++;
  
    if (puntaje <= 1) {
      nivelSeguridad.textContent = "Nivel: Débil 🔴";
      nivelSeguridad.className = "debil";
    } else if (puntaje === 2 || puntaje === 3) {
      nivelSeguridad.textContent = "Nivel: Medio 🟡";
      nivelSeguridad.className = "media";
    } else {
      nivelSeguridad.textContent = "Nivel: Fuerte 🟢";
      nivelSeguridad.className = "segura";
    }
  }
  
  document.getElementById("generar").addEventListener("click", crearClave);
  document.getElementById("copiar").addEventListener("click", () => {
    const campo = document.getElementById("claveGenerada");
    campo.select();
    document.execCommand("copy");
    alert("¡Clave copiada al portapapeles!");
  });
  document.getElementById("tam").addEventListener("input", (e) => {
    document.getElementById("tamValor").textContent = e.target.value;
  });