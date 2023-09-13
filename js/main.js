const palabras = [
    { inicial: "A", palabra: "Avión", descripcion: "Medio de transporte aéreo." },
    { inicial: "B", palabra: "Ballena", descripcion: "Un mamífero marino gigante." },
    { inicial: "C", palabra: "Camión", descripcion: "Vehículo grande para transporte de carga." },
    { inicial: "D", palabra: "Dados", descripcion: "Objeto que se usa en la generala." },
    { inicial: "E", palabra: "Escalera", descripcion: "Si pasas por debajo dicen que te da mala suerte." },
    { inicial: "F", palabra: "Faro", descripcion: "Torre que sirve para señalizar a embarcaciones." },
    { inicial: "G", palabra: "Gato", descripcion: "Animal domestico. Persigue ratones." },
    { inicial: "H", palabra: "Hielo", descripcion: "Agua congelada." },
    { inicial: "I", palabra: "Isla", descripcion: "Terreno rodeado de agua." },
    { inicial: "J", palabra: "Jabali", descripcion: "Chancho salvaje." },
    { inicial: "K", palabra: "Kilo", descripcion: "Unidad de medida de objetos." },
    { inicial: "L", palabra: "Linterna", descripcion: "Objeto que se usa para alumbrar." },
    { inicial: "M", palabra: "Milanesa", descripcion: "Bife rebozado, se come con pure." },
    { inicial: "N", palabra: "Noche", descripcion: "Contrario a DÍA." },
    { inicial: "O", palabra: "Orquesta", descripcion: "Grupo de personas que tocan muchos instrumentos a la vez." },
    { inicial: "P", palabra: "Pantera", descripcion: "Parecido al Leopardo, pero negro." },
    { inicial: "Q", palabra: "Queso", descripcion: "Se come con salame en la picada." },
    { inicial: "R", palabra: "Raiz", descripcion: "Parte de la planta que esta bajo tierra." },
    { inicial: "S", palabra: "Saxo", descripcion: "Intrumento de viento que tocaba Lisa Simpson." },
    { inicial: "T", palabra: "Tornado", descripcion: "Remolino de viento." },
    { inicial: "U", palabra: "Urano", descripcion: "Planeta mas chico del sistema solar." },
    { inicial: "V", palabra: "Viejo", descripcion: "Que pasó mucho tiempo." },
    { inicial: "W", palabra: "Wiro", descripcion: "Instrumeno de percución que se utiliza mucho en la cumbia." },
    { inicial: "X", palabra: "Xavier", descripcion: "Nombre del profesor pelado y en silla de ruedas de los XMEN." },
    { inicial: "Y", palabra: "Yerba", descripcion: "No puede faltar en el mate." },
    { inicial: "Z", palabra: "Zorro", descripcion: "Pelicula conocica como ... y el sabueso ." },

    
  ];
  
  let puntaje = 0;
  
  function jugarPasapalabras() {
    for (const palabraInfo of palabras) {
      const respuesta = prompt(`Palabra que comienza con "${palabraInfo.inicial}": ${palabraInfo.descripcion}`);
  
      if (respuesta !== null) {
        const palabraAdivinada = respuesta.toLowerCase() === palabraInfo.palabra.toLowerCase();
  
        if (palabraAdivinada) {
          alert("¡Correcto!");
          puntaje++;
        } else {
          alert("Incorrecto. La respuesta correcta es: " + palabraInfo.palabra);
        }
      } else {
        alert("Pasapalabras para esta palabra.");
      }
    }
  
    if (puntaje === palabras.length) {
  alert(`¡Felicidades! Adivinaste todas las palabras. Puntaje perfecto: ${puntaje}`);
} else if (puntaje >= palabras.length - 1) {
  alert(`¡Bien hecho! Tu puntaje final es: ${puntaje}`);
} else if (puntaje >= palabras.length / 2) {
    alert(`¡Sigue practicando! Tu puntaje final es: ${puntaje}`);
} else {
  alert(`¡Sos malisimo! Tu puntaje final es: ${puntaje}`);
}
  }

  const iniciarJuego = confirm("¡Bienvenido al juego Pasapalabras! EMPEZAR ROSCO");
  if (iniciarJuego) {
    jugarPasapalabras();
  }