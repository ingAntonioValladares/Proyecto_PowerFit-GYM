// DÍA 4 — DOM Avanzado + Eventos + Manipulación Dinámica
// Hoy vas a enfocarte en interactividad visual y dinámica real en la página,
// algo que luego React automatiza, pero primero debes dominarlo con JS puro.

// 🎯 Objetivos del Día
// Dominar eventos (click, input, change, submit, keyup, etc.).
// Crear, modificar y eliminar elementos en el DOM.
// Manejar clases, atributos y estilos desde JS.
// Entender bubbling y capturing.
// Introducción a delegación de eventos.

// 🧩 Temas a Estudiar
// 1️⃣ addEventListener()
// 2️⃣ event.target, event.preventDefault()
// 3️⃣ classList.add(), .remove(), .toggle()
// 4️⃣ createElement(), appendChild(), insertBefore(), remove()
// 5️⃣ Delegación de eventos → usar un padre que escuche por los hijos.
// 6️⃣ Uso de dataset para enviar info dentro del DOM.

// 🧪 Ejercicios Prácticos Obligatorios
// | Ejercicio | Descripción                                                           |
// | --------- | --------------------------------------------------------------------- |
// | 1         | Crea una lista y un input. Agrega elementos con un botón.             |
// | 2         | Permite eliminar cualquier elemento con un botón dentro de cada ítem. |
// | 3         | Crea un modo oscuro con `classList.toggle()`                          |
// | 4         | Crea un contador que aumente y disminuya con botones.                 |
// | 5         | Crea una mini galería y cambia la imagen principal al hacer click.    |

// 📌 Mini Reto del Día
// Crea un pequeño "Carrito visual" donde al presionar Agregar:
// Se muestre en pantalla la lista de productos
// Se pueda eliminar dando click a un ❌
// Se muestre el total actualizado

// 🧠 Consejo del Día
// "React hace el DOM por ti, pero solo lo dominarás si primero entiendes cómo
// manipularlo tú mismo."

/* MANIPULACION DEL DOM */
document.addEventListener("DOMContentLoaded", () => {
  // hamburguesa();
  // cerrarNavegacionModal();
  carrito();
  cerrarCarritoModal();
  nuestras_Membresias();
  nuestras_Clases();
  nuestros_Suplementos();
  nuestros_Equipamientos();
});

// CERRAR MODAL CARRITO
function cerrarCarritoModal() {
  const body = document.querySelector("body");
  const carrito_Modal = document.querySelector(".carrito_Modal");
  const cerrarModal = document.querySelector(".cerrar_Carrito_Modal");
  cerrarModal.addEventListener("click", () => {
    carrito_Modal.style.display = "none";
    // body.classList.remove("overlay");
  });
}
/* CARRITO */
function carrito() {
  const carrito = document.querySelector(".carrito");
  carrito.addEventListener("click", () => {
    const carrito_Modal = document.querySelector(".carrito_Modal");
    carrito_Modal.style.display = "flex";
    obtenerRegistros();
    // body.classList.add("overlay");
  });
}
/* CREANDO CONTENIDOS PARA CADA CATEGORIA */
/*--------------- MEMBRESIAS ------------------*/
function nuestras_Membresias() {
  const membresias = [
    {
      nombre: "Membresía Básica",
      detalle: "Acceso ilimitado al área de pesas y cardio",
      precio: 29.99,
      src: "img/gym1.jpeg",
    },
    {
      nombre: "Membresía Premium",
      detalle: "Acceso completo + clases grupales + nutrición",
      precio: 49.99,
      src: "img/gym2.jpeg",
    },
    {
      nombre: "Membresía VIP",
      detalle: "Todo incluido + entrenador personal + spa",
      precio: 79.99,
      src: "img/gym3.jpeg",
    },
    {
      nombre: "Pase de Día",
      detalle: "Acceso por un día a todas las instalaciones",
      precio: 15.0,
      src: "img/gym4.jpeg",
    },
  ];
  const membresia = document.querySelector(".membresia");
  const body = document.querySelector("body");
  membresia.addEventListener("click", () => {
    // EVALUAR SI EXISTE CONTENIDO CLASES
    let existe_Clases = document.querySelector(".contenido_Clases");
    let existe_Suplementos = document.querySelector(".contenido_Suplementos");
    let existe_Equipamiento = document.querySelector(".contenido_Equipamiento");
    // SI EXISTE EN EL BODY
    if (body.contains(existe_Clases)) {
      // REMOVER CONTENIDO CLASES
      existe_Clases.remove();
    }
    if (body.contains(existe_Suplementos)) {
      // REMOVER CONTENIDO SUPLEMENTOS
      existe_Suplementos.remove();
    }
    if (body.contains(existe_Equipamiento)) {
      // REMOVER CONTENIDO EQUIPAMIENTO
      existe_Equipamiento.remove();
    }
    // EN EL 1ER CLICK existe = false;
    // porque el elemento se crea o recien existe dentro del if
    // Variable auxiliar que obtiene el selector
    let existe = document.querySelector(".contenidoMembresia");
    // Si el selector NO esta dentro del body
    if (body.contains(existe) === false) {
      // Crea el div
      const contenido_Membresias = document.createElement("div");
      contenido_Membresias.classList.add("contenidoMembresia");
      contenido_Membresias.classList.add("contenedor");
      membresias.forEach((valor) => {
        const membresia = document.createElement("div");
        membresia.classList.add("unidad_Membresia");
        membresia.innerHTML = `
        <span class="etiqueta_Categoria">Membresía</span>
        <p class="etiqueta_Contador">En carrito:<span class="etiqueta_Contador_Total"> 0</span> </p>
        <div class="imagen_Membresia"><img src=${valor.src} alt="imagen membresía" /></div> 
        <p class="nombreProducto"><strong>${valor.nombre} </strong> </p>
        <p>${valor.detalle}</p>
        <p class="precio_Card">S/${valor.precio}</p>
        <div class="opciones">
        <span class="restar">-</span>
        <p class="cantidad">1</p>
        <span class="adicionar">+</span>
        </div>
        <a class="boton"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M440-600v-120H320v-80h120v-120h80v120h120v80H520v120h-80ZM280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM40-800v-80h131l170 360h280l156-280h91L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68.5-39t-1.5-79l54-98-144-304H40Z"/></svg> Agregar al carrito</a>
        `;
        contenido_Membresias.appendChild(membresia);
      });
      body.appendChild(contenido_Membresias);
    }
    // LLAMAR A LA FUNCION
    // CUANDO EXISTE CONTENIDO MEMBRESIA
    // PORQUE LAS CLASES adicionar, restar y cantidad existen
    // recien en este momento del click
    adicionar_Restar("unidad_Membresia");
    agregar_Productos_Carrito("unidad_Membresia");
    // restaurarCantidadesIndividuales();
  });
}
/*------------------- CLASES -------------------*/
function nuestras_Clases() {
  const clases = [
    {
      nombre: "Yoga",
      detalle: "Clase de yoga para todos los niveles - 60 min",
      precio: 12.99,
      src: "img/clase1.jpeg",
    },
    {
      nombre: "Spinning",
      detalle: "Clase intensiva de ciclismo indoor - 45 min",
      precio: 15.99,
      src: "img/clase2.jpeg",
    },
    {
      nombre: "CrossFit",
      detalle: "Entrenamiento funcional de alta intensidad - 60 min",
      precio: 18.99,
      src: "img/clase3.jpeg",
    },
    {
      nombre: "Zumba",
      detalle: "Baile fitness divertido y energético - 60 min",
      precio: 12.99,
      src: "img/clase4.jpeg",
    },
    {
      nombre: "Pilates",
      detalle: "Fortalecimiento y flexibilidad - 50 min",
      precio: 14.99,
      src: "img/clase5.jpeg",
    },
    {
      nombre: "Boxing",
      detalle: "Clase de boxeo y acondicionamiento - 60 min",
      precio: 16.99,
      src: "img/clase6.jpeg",
    },
  ];
  const clase = document.querySelector(".clase");
  const body = document.querySelector("body");
  clase.addEventListener("click", () => {
    // EVALUAR SI EXISTE CONTENIDO CLASES
    let existe_Membresias = document.querySelector(".contenidoMembresia");
    let existe_Suplementos = document.querySelector(".contenido_Suplementos");
    let existe_Equipamiento = document.querySelector(".contenido_Equipamiento");
    // SI EXISTE EN EL BODY MEMBRESIAS
    if (body.contains(existe_Membresias)) {
      // REMOVERLO
      existe_Membresias.remove();
    }
    if (body.contains(existe_Suplementos)) {
      // REMOVERLO
      existe_Suplementos.remove();
    }
    if (body.contains(existe_Equipamiento)) {
      // REMOVERLO
      existe_Equipamiento.remove();
    }
    // LOGICA PARA EVITAR QUE DUPLIQUE CONTENIDO CLASES
    // SIN IMPORTAR LA CANTIDAD DE CLICKS
    let existe = document.querySelector(".contenido_Clases");
    if (body.contains(existe) === false) {
      const contenido_Clases = document.createElement("div");
      contenido_Clases.classList.add("contenido_Clases");
      contenido_Clases.classList.add("contenedor");
      clases.forEach((valor) => {
        const clase = document.createElement("div");
        clase.classList.add("unidad_Clase");
        clase.innerHTML = `
        <span class="etiqueta_Categoria">Clase</span>
        <p class="etiqueta_Contador">En carrito:<span class="etiqueta_Contador_Total"> 0</span> </p>
        <div class="imagen_Clase"><img src=${valor.src} alt="imagen clases" /></div>
        <p class="nombreProducto"><strong>${valor.nombre} </strong> </p>
        <p>${valor.detalle}</p>
        <p class="precio_Card">S/${valor.precio}</p>
        <div class="opciones">
        <span class="restar">-</span>
        <p class="cantidad">1</p>
        <span class="adicionar">+</span>
        </div>
        <a class="boton"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M440-600v-120H320v-80h120v-120h80v120h120v80H520v120h-80ZM280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM40-800v-80h131l170 360h280l156-280h91L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68.5-39t-1.5-79l54-98-144-304H40Z"/></svg> Agregar al carrito</a>
        `;
        contenido_Clases.appendChild(clase);
      });
      body.appendChild(contenido_Clases);
    }
    // LLAMAR A LA FUNCION
    // PORQUE AQUI EXISTE EL CONTENIDO DE CLASES
    adicionar_Restar("unidad_Clase");
    agregar_Productos_Carrito("unidad_Clase");
    // restaurarCantidadesIndividuales();
  });
}
/*------------------- SUPLEMENTOS -------------------*/
function nuestros_Suplementos() {
  const proteinas = [
    {
      nombre: "Proteína Whey",
      detalle: "Proteína de suero 2 lbs - Chocolate",
      precio: 45.99,
      src: "img/proteina1.png",
    },
    {
      nombre: "Creatina",
      detalle: "Creatina monohidratada 300g",
      precio: 25.99,
      src: "img/proteina2.png",
    },
    {
      nombre: "Pre-Workout",
      detalle: "Energía y enfoque - 30 porciones",
      precio: 35.99,
      src: "img/proteina3.png",
    },
    {
      nombre: "BCAA",
      detalle: "Aminoácidos ramificados - 60 porciones",
      precio: 30.99,
      src: "img/proteina4.png",
    },
    {
      nombre: "Multivitamínico",
      detalle: "Complejo vitamínico completo - 90 cápsulas",
      precio: 20.99,
      src: "img/proteina5.png",
    },
  ];
  const body = document.querySelector("body");
  const suplementos = document.querySelector(".suplementos");
  suplementos.addEventListener("click", () => {
    // SI EXISTE CONTENIDO MEMBRESIAS O CLASES
    // REMOVERLAS
    let existe_Clases = document.querySelector(".contenido_Clases");
    let existe_Membresias = document.querySelector(".contenidoMembresia");
    let existe_Equipamiento = document.querySelector(".contenido_Equipamiento");
    if (body.contains(existe_Clases)) {
      existe_Clases.remove();
    }
    if (body.contains(existe_Membresias)) {
      existe_Membresias.remove();
    }
    if (body.contains(existe_Equipamiento)) {
      existe_Equipamiento.remove();
    }
    // LOGICA PARA EVITAR CREAR CONTENIDO SUPLEMENTOS MAS DE UNA VEZ
    // SIN IMPORTAR LA CANTIDAD DE CLICKS
    let existe = document.querySelector(".contenido_Suplementos");
    if (body.contains(existe) === false) {
      const contenido_Suplementos = document.createElement("div");
      contenido_Suplementos.classList.add("contenido_Suplementos");
      contenido_Suplementos.classList.add("contenedor");
      proteinas.forEach((valor) => {
        const proteina = document.createElement("div");
        proteina.classList.add("unidad_Suplementos");
        proteina.innerHTML = `
        <span class="etiqueta_Categoria">Suplementos</span>
        <p class="etiqueta_Contador">En carrito:<span class="etiqueta_Contador_Total"> 0</span> </p>
        <div class="imagen_Suplementos"><img src=${valor.src} alt="imagen suplementos" /></div>
        <p class="nombreProducto"><strong>${valor.nombre} </strong> </p>
        <p>${valor.detalle}</p>
        <p class="precio_Card">S/${valor.precio}</p>
        <div class="opciones">
        <span class="restar">-</span>
        <p class="cantidad">1</p>
        <span class="adicionar">+</span>
        </div>
        <a class="boton"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M440-600v-120H320v-80h120v-120h80v120h120v80H520v120h-80ZM280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM40-800v-80h131l170 360h280l156-280h91L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68.5-39t-1.5-79l54-98-144-304H40Z"/></svg> Agregar al carrito</a>
        `;
        contenido_Suplementos.appendChild(proteina);
      });
      body.appendChild(contenido_Suplementos);
    }
    adicionar_Restar("unidad_Suplementos");
    agregar_Productos_Carrito("unidad_Suplementos");
    // restaurarCantidadesIndividuales();
  });
}
/*------------------- EQUIPAMIENTO -------------------*/
function nuestros_Equipamientos() {
  const equipos = [
    {
      nombre: "Guantes de Entrenamiento",
      detalle: "Guantes profesionales con soporte de muñeca",
      precio: 25.99,
      src: "img/equipamiento1.png",
    },
    {
      nombre: "Botella Shaker",
      detalle: "Botella mezcladora 700ml con compartimento",
      precio: 12.99,
      src: "img/equipamiento2.png",
    },
    {
      nombre: "Banda de Resistencia",
      detalle: "Set de 5 bandas elásticas de diferentes resistencias",
      precio: 35.99,
      src: "img/equipamiento3.png",
    },
    {
      nombre: "Toalla Deportiva",
      detalle: "Toalla de microfibra absorbente y compacta",
      precio: 15.99,
      src: "img/equipamiento4.png",
    },
    {
      nombre: "Mat de Yoga",
      detalle: "Colchoneta antideslizante 6mm con bolsa",
      precio: 40.99,
      src: "img/equipamiento5.png",
    },
    {
      nombre: "Mancuernas Ajustables",
      detalle: "Par de mancuernas de 2.5 a 12.5 kg",
      precio: 85.99,
      src: "img/equipamiento6.png",
    },
  ];
  const body = document.querySelector("body");
  const equipamiento = document.querySelector(".equipamiento");
  equipamiento.addEventListener("click", () => {
    let existe_Clases = document.querySelector(".contenido_Clases");
    let existe_Membresias = document.querySelector(".contenidoMembresia");
    let existe_Suplementos = document.querySelector(".contenido_Suplementos");
    if (body.contains(existe_Clases)) {
      existe_Clases.remove();
    }
    if (body.contains(existe_Membresias)) {
      existe_Membresias.remove();
    }
    if (body.contains(existe_Suplementos)) {
      existe_Suplementos.remove();
    }
    // LOGICA PARA EVITAR DUPLICIDAD DE CONTENIDO EQUIPAMIENTO
    let existe = document.querySelector(".contenido_Equipamiento");
    if (body.contains(existe) === false) {
      const contenido_Equipamiento = document.createElement("div");
      contenido_Equipamiento.classList.add("contenido_Equipamiento");
      contenido_Equipamiento.classList.add("contenedor");
      equipos.forEach((valor) => {
        const equipos = document.createElement("div");
        equipos.classList.add("unidad_Equipamiento");
        equipos.innerHTML = `
        <span class="etiqueta_Categoria">Equipamiento</span>
        <p class="etiqueta_Contador">En carrito:<span class="etiqueta_Contador_Total"> 0</span> </p>
        <div class="imagen_Equipamiento"><img src=${valor.src} alt="imagen equipamiento" /></div>
        <p class="nombreProducto"><strong>${valor.nombre} </strong> </p>
        <p>${valor.detalle}</p>
        <p class="precio_Card">S/${valor.precio}</p>
        <div class="opciones">
        <span class="restar">-</span>
        <p class="cantidad">1</p>
        <span class="adicionar">+</span>
        </div>
        <a class="boton"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M440-600v-120H320v-80h120v-120h80v120h120v80H520v120h-80ZM280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM40-800v-80h131l170 360h280l156-280h91L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68.5-39t-1.5-79l54-98-144-304H40Z"/></svg> Agregar al carrito</a>
        `;
        contenido_Equipamiento.appendChild(equipos);
      });
      body.appendChild(contenido_Equipamiento);
    }
    adicionar_Restar("unidad_Equipamiento");
    agregar_Productos_Carrito("unidad_Equipamiento");
    // restaurarCantidadesIndividuales();
  });
}
// CONSTRUCCIÓN DE MENSAJE FLOTANTE DEL SISTEMA
// QUE NOTIFICA AL USUARIO LO QUE ESTA AGREGANDO Y LA CANTIDAD
function mensajeFlotante(cantidad, producto) {
  const mensaje_Sistema_Agregar = document.createElement("div");
  mensaje_Sistema_Agregar.classList.add("mensaje_Sistema_Agregaste");
  // EMPEZAMOS A CONTRUIR MENSAJE FLOTANTE
  // CHECK
  const spanCheck = document.createElement("span");
  spanCheck.textContent = "✔️";
  // AGREGAR CHECK AL MENSAJE FLOTANTE
  mensaje_Sistema_Agregar.appendChild(spanCheck);
  // CREAR DETALLE
  const contenido_Mensaje = document.createElement("div");
  contenido_Mensaje.classList.add("detalle_Mensaje");
  contenido_Mensaje.innerHTML = `
      <p>Producto agregado <span>${cantidad.textContent} x ${producto.textContent}</span></p>
      `;
  // AGREGAR DETALLE AL MENSAJE FLOTANTE
  mensaje_Sistema_Agregar.appendChild(contenido_Mensaje);
  // CREAR CONTENEDOR DE NOTIFICACIONES
  const contenedor_Mensajes = document.querySelector(
    ".contenedor_Notificaciones"
  );
  // LIMITE DE NOTIFICACIONES (FIFO)
  const limite = 3;
  // SI EL CONTENEDOR TIENE 3 O MAS NOTIFICACIONES FLOTANTES
  if (contenedor_Mensajes.children.length >= limite) {
    // REMUEVE EL PRIMERO
    contenedor_Mensajes.removeChild(contenedor_Mensajes.firstElementChild);
  }
  // AGREGAR EL NUEVO MENSAJE
  contenedor_Mensajes.appendChild(mensaje_Sistema_Agregar);
  // setTimeout
  setTimeout(() => {
    // remover mensaje despues de 2 segundos
    mensaje_Sistema_Agregar.remove();
  }, 2500);
}
// LOGICA PARA AGREGAR PRODUCTOS AL CARRITO
// PRINCIPALMENTE CANTIDAD
// AUN FALTA DETALLE DEL CARRITO
function agregar_Productos_Carrito(unidad_Card) {
  const agregar_Carrito = document.querySelectorAll(".boton");
  // const cantidad_Carrito = document.querySelector(".cantidad_Carrito");
  // let total_Carrito = 0;
  agregar_Carrito.forEach((btn) => {
    let total_Card = 0;
    btn.addEventListener("click", () => {
      const card = btn.closest(`.${unidad_Card}`);
      // Tenemos el mismo boton en todas las card de todas las categorias
      // todos tienen -> class="boton"
      // por ende si en el body tengo por ejemplo:
      // contenido_Membresia -> ignorar los botones de clases,suplementos,equipamiento para evitar null
      // contenido_Clases -> ignorar los botones de membresia,suplementos,equipamiento para evitar null
      // etc ...
      // para evitar error de null hacer querySelector a un CONTENIDO QUE NO EXISTE en el body
      // recuerda que hago esto porque tengo el mismo boton en todas las card de todas las categorias
      if (!card) return; // si el boton no pertenece a la categoria

      const cantidad = card.querySelector(".cantidad");
      const producto = card.querySelector(".nombreProducto");
      const etiqueta_Contador_Clase = card.querySelector(
        ".etiqueta_Contador_Total"
      );
      mensajeFlotante(cantidad, producto);
      // ACUMULAR CANTIDAD POR CADA CARD
      total_Card = total_Card + parseInt(cantidad.textContent);
      etiqueta_Contador_Clase.textContent = total_Card;
      // FUNCION QUE GUARDA LA CANTIDAD INDIVIDUAL POR PRODUCTO
      // PARA CAMBIAR DE CATEGORIA Y QUE NO SE PIERDA LA CANTIDAD
      // grabarCantidadIndividualProducto(card, total_Card);
      // pretendp guardar la cantidad para que se quede a pesar
      // de cambiar a otra categoria?
      // GUARDAR LA CANTIDAD DE LA CARD ACTUAL en el localStorage
      // LLAMAR A LA FUNCION QUE GUARDA LA CANTIDAD POR CARD
      // ESTA FUNCION ES PARA EL CARRITO MODAL
      guardarCantidadCard(card, total_Card);
      // ACUMULAR CANTIDAD DE TODAS LAS CARD
      // total_Carrito = total_Carrito + parseInt(cantidad.textContent);
      // ASIGNAR LA CANTIDAD TOTAL DE TODAS LAS CARD AL CARRITO MODAL
      // cantidad_Carrito.textContent = total_Carrito;

      // VOLVER A UNO LA CANTIDAD
      cantidad.textContent = 1;
    });
  });
}
// LOGICA PARA AUMENTAR O DISMINUIR CANTIDAD POR CADA CARD O PRODUCTO
function adicionar_Restar(unidad_Card) {
  const botones_Adicionar = document.querySelectorAll(".adicionar");
  const botones_Restar = document.querySelectorAll(".restar");

  // TENEMOS TODOS LOS BOTONES ADICIONAR
  botones_Adicionar.forEach((btn) => {
    btn.addEventListener("click", () => {
      // PARA SABER A QUE CARD PERTENECE EL BOTON
      // QUE DIMOS CLICK
      const card = btn.closest(`.${unidad_Card}`);
      // probar const card = btn.closest(`.${unidad_Card} btn`)
      // Tal vez evitemos validar el if(!card) return;
      // porque solo cogemos los botones del card perteneciente a la categoria que di click
      // aun no lo compruebo
      if (!card) return;
      // CUANDO SABEMOS EL CARD
      // OBTENEMOS LA CANTIDAD DEL HTML
      const cantidad = card.querySelector(".cantidad");
      // se incrementa en uno al dar click
      let valor = parseInt(cantidad.textContent);
      valor++;
      // lo introducimos al hmtl
      cantidad.textContent = valor;
    });
  });
  // TENEMOS TODOS LOS BOTONES RESTAR
  botones_Restar.forEach((btn) => {
    btn.addEventListener("click", () => {
      const card = btn.closest(`.${unidad_Card}`);
      if (!card) return;
      const cantidad = card.querySelector(".cantidad");
      let valor = parseInt(cantidad.textContent);
      // evaluamos que el valor al menos sea 1
      if (valor > 1) {
        // para recien hacer la resta
        valor--;
        // lo introducimos al html
        cantidad.textContent = valor;
      }
    });
  });
}
// el array debe existir en el global
// para guardar la cantidad de todas las card de una categoria
// para evitar que se sobrescriban los datos
let lista_Card = [];
// FUNCION QUE GUARDA LAS CANTIDADES INDIVIDUALES POR CARD
// TODO LO QUE NECESITO PARA LLENAR EL MODAL CARRITO EN UN OBJETO
// ARGUMENTOS -> LA CARD EN DONDE ESTOY (di click) Y SU CANTIDAD RESPECTIVA
function guardarCantidadCard(card, total_Card) {
  // OBTENGO EL NOMBRE DEL PRODUCTO
  const producto = card.querySelector(".nombreProducto");
  // OBTENER EL PRECIO DEL PRODUCTO
  const precio = card.querySelector(".precio_Card"); // S/29.99
  // solo obtener el valor numerico
  // todos los precios tienen el mismo formato S/29.99
  // SPLIT DEVUELVE UN ARRAY ["S", "29.99"]
  // Obtenemos el segundo elemento del array
  const precio_Formateado = precio.textContent.split("/")[1]; //29.99
  // CALCULAMOS MONTO A PAGAR CANTIDAD ELEGIDA POR PRECIO UNITARIO
  const totalPagar = total_Card * parseFloat(precio_Formateado);
  // CREAMOS OBJETO QUE GUARDA DOS PROPIEDADES
  const cantidad_Producto = {
    // Eliminar espacios en blanco al inicio y final trim()
    nombreProducto: producto.textContent.trim(),
    cantidad: total_Card,
    precioProducto: parseFloat(precio_Formateado),
    monto_Precio_Cantidad: parseFloat(totalPagar.toFixed(2)),
  };
  lista_Card.push(cantidad_Producto);
  // Guardar la lista actualizada en localStorage
  localStorage.setItem("cantidad_Producto", JSON.stringify(lista_Card));
  // obtenerRegistros();
}

// ELIMINAR TODOS LOS REGISTROS PARA VALIDACIONES
// localStorage.removeItem("cantidad_Producto");
// localStorage.removeItem("cantidadProducto");

// OBTENER LOS REGISTROS DEL localStorage
function obtenerRegistros() {
  // EVALUAMOS SI EXISTE LA CLAVE
  const existe_Clave = localStorage.getItem("cantidad_Producto");
  if (existe_Clave) {
    // SI EXISTE -> CONVERTIMOS LA CADENA A ARRAY
    // OBTENEMOS EL ARRAY DE OBJETOS
    lista_Card = JSON.parse(existe_Clave);
  } else {
    // SI NO EXISTE -> EL ARRAY ES VACIO
    lista_Card = [];
  }
  // MOSTRAR EN CONSOLA PARA VERIFICAR
  console.table(lista_Card);
  // LLAMAR A LA FUNCION QUE REDUCE LAS CANTIDADES
  // COINCIDENCIA DE PRODUCTOS POR NOMBRE
  reducir_Cantidades_Producto(lista_Card);
}
// AL CARGAR LA PAGINA OBTENER REGISTROS
// obtenerRegistros();
// FUNCION QUE REDUCE LAS CANTIDADES DE CADA PRODUCTO
// SEGUN SU NOMBRE
function reducir_Cantidades_Producto(registros) {
  // PASO 1: Primero agrupar todas las cantidades por producto
  // correccion un objeto con tres propiedades -> nombreProducto, [cantidades], [montos]
  const agrupando_Cantidades = registros.reduce((acc, registro) => {
    // Si en el objeto acumulador
    // no existe el nombre del producto como propiedad
    if (!acc[registro.nombreProducto]) {
      // creamos la propiedad y su valor un array vacio
      acc[registro.nombreProducto] = [];
    }
    // Ya que existe insertamos cantidades y montos
    // dentro del array de cada producto
    // un objeto por cada registro que detalla cantidad y monto reducido
    acc[registro.nombreProducto].push({
      cantidades: [registro.cantidad],
      montos: [registro.monto_Precio_Cantidad],
    }); // retornamos objeto
    return acc;
  }, {});
  // PASO 2: despues sumar todas las cantidades por producto
  for (let propiedad in agrupando_Cantidades) {
    console.log(`Producto: ${propiedad}`);
    // Sumando cantidades y montos por cada producto
    // agrupando_Cantidades[propiedad] -> array con objetos
    // propiedad cantidades con su array
    // propiedad montos con su array
    // todo lo reduce a un total por producto
    let total_Cantidades = 0; // inicializo en cero
    let total_Montos = 0; // inicializo en cero
    agrupando_Cantidades[propiedad].forEach((objeto) => {
      console.log(objeto);
      // Este bucle da vueltas
      // por cada registro de un determinado producto suma cantidades
      // por cada registro de un determinado producto suma montos
      // y asi para cada producto
      total_Cantidades = total_Cantidades + parseInt(objeto.cantidades);
      total_Montos = total_Montos + parseFloat(objeto.montos);
    });
    console.log(`CANTIDAD: ${total_Cantidades}`);
    console.log(`MONTO: ${total_Montos}`);
  }
  // AQUÍ TERMINA LA REDUCCIÓN DE CANTIDADES Y MONTOS
}
// FUNCION QUE GRABA LA CANTIDAD INDIVIDUAL POR PRODUCTO
function grabarCantidadIndividualProducto(card, total_Card) {
  // OBTENGO EL NOMBRE DEL PRODUCTO
  const producto = card.querySelector(".nombreProducto");
  // Eliminar espacios en blanco al inicio y final trim()
  const producto_Nombre = producto.textContent.trim();
  // CREO OBJETO QUE GUARDA EL NOMBRE Y LA CANTIDAD
  const objeto_Producto = {
    nombre: producto_Nombre,
    cantidad: total_Card,
  };
  // GUARDO EL OBJETO EN EL localStorage
  localStorage.setItem("cantidadProducto", JSON.stringify(objeto_Producto));
}
// FUNCION QUE RESTAURA LA CANTIDAD INDIVIDUAL POR PRODUCTO
function restaurarCantidadesIndividuales() {
  // EVALUAMOS SI EXISTE LA CLAVE
  const existe_Clave = localStorage.getItem("cantidadProducto");
  if (existe_Clave) {
    // SI EXISTE -> CONVERTIMOS LA CADENA A OBJETO
    const objeto_Producto = JSON.parse(existe_Clave);
    // BUSCAMOS EN EL DOM LA CARD QUE COINCIDA CON EL NOMBRE
    // DEL OBJETO OBTENIDO
    const cards = document.querySelectorAll(
      ".unidad_Clase, .unidad_Membresia, .unidad_Suplementos, .unidad_Equipamiento"
    );
    // RECORREMOS CADA CARD
    cards.forEach((card) => {
      // OBTENEMOS EL NOMBRE DEL PRODUCTO DE LA CARD
      const producto = card.querySelector(".nombreProducto");
      // ELIMINAR ESPACIOS EN BLANCO AL INICIO Y FINAL TRIM()
      const producto_Nombre = producto.textContent.trim();
      // COMPARAR NOMBRES
      if (producto_Nombre === objeto_Producto.nombre) {
        // SI COINCIDEN OBTENER LA ETIQUETA DONDE VA LA CANTIDAD
        const etiqueta_Contador_Clase = card.querySelector(
          ".etiqueta_Contador_Total"
        );
        // ASIGNAR LA CANTIDAD GUARDADA
        etiqueta_Contador_Clase.textContent = objeto_Producto.cantidad;
      }
    });
  }
}
/* CODIGO QUE REPETI PERO IDENTIFIQUE UN PROCESO DE ABSTRACCION 
   QUE ME PERMITE OPTIMIZAR TODO */
// CLASES -> LOGICA PARA AUMENTAR CANTIDAD O DISMINUIRLA
// function adicionar_Restar_Clases() {
//   const boton_adicionar = document.querySelectorAll(".adicionar");
//   const boton_restar = document.querySelectorAll(".restar");

//   boton_adicionar.forEach((btn) => {
//     btn.addEventListener("click", () => {
//       const card = btn.closest(".unidad_Clase");
//       const cantidad = card.querySelector(".cantidad");
//       // AUMENTAMOS DE UNO EN UNO
//       let sumar = 1;
//       sumar = sumar + parseInt(cantidad.textContent);
//       cantidad.textContent = sumar;
//     });
//   });
//   boton_restar.forEach((btn) => {
//     btn.addEventListener("click", () => {
//       const card = btn.closest(".unidad_Clase");
//       const cantidad = card.querySelector(".cantidad");
//       if (parseInt(cantidad.textContent) > 1) {
//         let restar = parseInt(cantidad.textContent);
//         restar--;
//         cantidad.textContent = restar;
//       }
//     });
//   });
// }
// CLASES -> LOGICA PARA AGREGAR CANTIDAD AL CARRITO
// function agregar_Productos_Carrito_Clases() {
//   const agregar_Carrito = document.querySelectorAll(".boton");
//   const cantidad_Carrito = document.querySelector(".cantidad_Carrito");
//   let total_Carrito = 0;
//   agregar_Carrito.forEach((btn) => {
//     let total_Card = 0;
//     btn.addEventListener("click", () => {
//       const card = btn.closest(".unidad_Clase");
//       const cantidad = card.querySelector(".cantidad");
//       const producto = card.querySelector(".nombreProducto");
//       const etiqueta_Contador_Clase = card.querySelector(
//         ".etiqueta_Contador_Total"
//       );
//       mensajeFlotante(cantidad, producto);
//       // ACUMULAR CANTIDAD POR CADA CARD
//       total_Card = total_Card + parseInt(cantidad.textContent);
//       etiqueta_Contador_Clase.textContent = total_Card;
//       // ACUMULAR CANTIDAD DE TODAS LAS CARD
//       total_Carrito = total_Carrito + parseInt(cantidad.textContent);
//       // ASIGNAR LA CANTIDAD TOTAL DE TODAS LAS CARD AL CARRITO MODAL
//       cantidad_Carrito.textContent = total_Carrito;
//       // VOLVER A UNO LA CANTIDAD
//       cantidad.textContent = 1;
//     });
//   });
// }
// MEMBRESIA -> LOGICA PARA AUMENTAR CANTIDAD O DISMINUIRLA
// function adicionar_Restar_Membresia() {
//   const botones_Adicionar = document.querySelectorAll(".adicionar");
//   const botones_Restar = document.querySelectorAll(".restar");

//   // TENEMOS TODOS LOS BOTONES ADICIONAR
//   botones_Adicionar.forEach((btn) => {
//     btn.addEventListener("click", () => {
//       // PARA SABER A QUE CARD PERTENECE EL BOTON
//       // QUE DIMOS CLICK
//       const card = btn.closest(".unidad_Membresia");
//       // CUANDO SABEMOS EL CARD
//       // OBTENEMOS LA CANTIDAD DEL HTML
//       const cantidad = card.querySelector(".cantidad");
//       // se incrementa en uno al dar click
//       let valor = parseInt(cantidad.textContent);
//       valor++;
//       // lo introducimos al hmtl
//       cantidad.textContent = valor;
//     });
//   });
//   botones_Restar.forEach((btn) => {
//     btn.addEventListener("click", () => {
//       // console.log(btn);
//       const card = btn.closest(".unidad_Membresia");
//       const cantidad = card.querySelector(".cantidad");
//       let valor = parseInt(cantidad.textContent);
//       // evaluamos que el valor al menos sea 1
//       if (valor > 1) {
//         // para recien hacer la resta
//         valor--;
//         // lo introducimos al html
//         cantidad.textContent = valor;
//       }
//     });
//   });
// }
// MEMBRESIA -> LOGICA PARA AGREGAR CANTIDAD AL CARRITO
// function agregar_Productos_Carrito_Membresia() {
//   const boton_Agregar = document.querySelectorAll(".boton");
//   // CONTADOR PARA EL TOTAL DEL CARRITO MODAL
//   let total_Carrito = 0;
//   boton_Agregar.forEach((btn) => {
//     // CONTADOR PERSONAL PARA CADA CARD
//     let total_Etiqueta = 0;
//     btn.addEventListener("click", () => {
//       // Idientificar la card a la que pertenece el boton
//       // el nodo raiz
//       // Hago esto porque quiero la cantidad, y el nombre del producto
//       // de dicha card
//       const card = btn.closest(".unidad_Membresia");
//       // obtener la cantidad
//       const cantidad = card.querySelector(".cantidad");
//       // Obtener el nombre del producto
//       const producto = card.querySelector(".nombreProducto");
//       // CREAR MENSAJE FLOTANTE PARA INFORMAR CANTIDAD AGREGADA
//       mensajeFlotante(cantidad, producto);
//       // sumamos todas las cantidades a la variable total_Carrito
//       total_Carrito = total_Carrito + parseInt(cantidad.textContent);
//       // CARRITO MODAL FLOTANTE
//       // Obtenemos el contador del modal carrito
//       const cantidadTotalCarrito = document.querySelector(".cantidad_Carrito");
//       // asignamos el total
//       cantidadTotalCarrito.textContent = total_Carrito;
//       // Asignar cantidad a la etiqueta carrito de la card
//       const etiqueta_Contador = card.querySelector(".etiqueta_Contador_Total");
//       // Acumula cantidad de manera individual por cada card
//       total_Etiqueta = total_Etiqueta + parseInt(cantidad.textContent);
//       etiqueta_Contador.textContent = total_Etiqueta;
//       // finalmente volver a 1 la cantidad de todas las card
//       cantidad.textContent = 1;
//       // ASIGNAR LOS DETALLES DEL PRODUCTO AL CARRITO MODAL
//     });
//   });
// }

/* MENU HAMBURGUESA FUNCIONAL PERO PREFERI COLOCAR EL CARRITO EN LA NAVEGACION */
// Solo descomentar las funciones y en el dom para que funcione
// Poner en otro lugar el carrito para visualizar
// HAMBURGUESA
// function hamburguesa() {
//   const body = document.querySelector("body");
//   const hamburguesa = document.querySelector(".hamburguesa");
//   hamburguesa.addEventListener("click", () => {
//     const navegacion_Modal = document.querySelector(".navegacion_Modal");
//     navegacion_Modal.style.display = "flex";
//     // body.classList.add("overlay");
//   });
// }
// CERRAR MODAL HAMBURGUESA
// function cerrarNavegacionModal() {
//   const body = document.querySelector("body");
//   const navegacion_Modal = document.querySelector(".navegacion_Modal");
//   const cerrarModal = document.querySelector(".cerrarModal");
//   cerrarModal.addEventListener("click", () => {
//     navegacion_Modal.style.display = "none";
//     // body.classList.remove("overlay");
//   });
// }
