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
    restaurarCantidadesIndividuales();
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
    restaurarCantidadesIndividuales();
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
    restaurarCantidadesIndividuales();
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
    restaurarCantidadesIndividuales();
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
  agregar_Carrito.forEach((btn) => {
    btn.addEventListener("click", () => {
      // PARA SABER A QUE CARD PERTENECE EL BOTON
      // QUE DIMOS CLICK
      const card = btn.closest(`.${unidad_Card}`);
      // PARA PASAR A LA CARTILLA DEL CARRITO MODAL
      const rutaCompleta = card.querySelector(`.${unidad_Card} img`).src;
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
      // const etiqueta_Contador_Clase = card.querySelector(
      //   ".etiqueta_Contador_Total"
      // );
      mensajeFlotante(cantidad, producto);
      // ESTA FUNCION ES PARA MANTENER LA CANTIDAD POR PRODUCTO
      grabarCantidadIndividualProducto(card, producto, cantidad);
      // ESTA FUNCION ES PARA EL CARRITO MODAL
      guardarCantidadCard(card, cantidad, rutaCompleta);
      // RESTAURAR CANTIDAD A 1 DESPUES DE AGREGAR AL CARRITO
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
// UN ARRAY DE OBJETOS EN EL GLOBAL
// PARA GUARDAR UN OBJETO POR CADA CARD AGREGADA AL CARRITO
let listas_Card_Productos = [];
// FUNCION QUE GUARDA EL DETALLE DE CADA CARD AGREGADA AL CARRITO
// ARGUMENTOS -> LA CARD EN DONDE ESTOY (di click) Y SU CANTIDAD RESPECTIVA
function guardarCantidadCard(card, agregarCantidad, rutaCompleta) {
  // ELIMINAR http://127.0.0.1:5500/ DE LA RUTA COMPLETA
  // SOLO OBTENER img/proteina2.png POR EJEMPLO
  const rutaRelativa = rutaCompleta.split(window.location.origin + "/")[1];
  // OBTENGO EL NOMBRE DEL PRODUCTO
  const producto = card.querySelector(".nombreProducto");
  // OBTENER EL PRECIO DEL PRODUCTO
  const precio = card.querySelector(".precio_Card"); // S/29.99
  // solo obtener el valor numerico
  // todos los precios tienen el mismo formato -> S/29.99
  // SPLIT DEVUELVE UN ARRAY ["S", "29.99"]
  // Obtenemos el segundo elemento del array
  const precio_Formateado = precio.textContent.split("/")[1]; //29.99
  // CALCULAMOS MONTO A PAGAR CANTIDAD ELEGIDA POR PRECIO UNITARIO
  const totalPagar =
    parseInt(agregarCantidad.textContent) * parseFloat(precio_Formateado);
  // CREAMOS OBJETO QUE GUARDA EL DETALLE DE LA CARD AGREGADA
  // ESTO ME SERVIRA PARA EL CARRITO MODAL
  const detalle_Producto = {
    // ruta relativa de la imagen
    imagen: rutaRelativa,
    // Eliminar espacios en blanco al inicio y final
    nombreProducto: producto.textContent.trim(),
    cantidad: parseInt(agregarCantidad.textContent),
    precioProducto: parseFloat(precio_Formateado),
    monto_Precio_Cantidad: parseFloat(totalPagar.toFixed(2)),
  };
  listas_Card_Productos.push(detalle_Producto);
  // GUARDAR EN EL localStorage
  localStorage.setItem(
    "detalle_Producto",
    JSON.stringify(listas_Card_Productos)
  );
}
/*********************** ELIMINAR REGISTROS EN EL localStorage **************************/
// localStorage.removeItem("detalle_Producto");
// localStorage.removeItem("cantidad_por_producto");
/**********************************************************************/

// OBTENER LOS REGISTROS
function obtenerRegistros() {
  // EVALUAMOS SI EXISTE LA CLAVE
  const existe_Clave = localStorage.getItem("detalle_Producto");
  if (existe_Clave) {
    // SI EXISTE -> CONVERTIMOS LA CADENA A ARRAY
    // OBTENEMOS EL ARRAY DE OBJETOS
    listas_Card_Productos = JSON.parse(existe_Clave);
  } else {
    // SI NO EXISTE -> EL ARRAY ES VACIO
    listas_Card_Productos = [];
  }
  // LLAMAR A LA FUNCION QUE REDUCE LAS CANTIDADES
  // TODAS LAS COINCIDENCIAS DE PRODUCTOS A UN SOLO REGISTRO
  // SUMANDO LAS CANTIDADES Y MONTOS POR PRODUCTO
  // ESTE RESUMEN ME SIRVE PARA PINTAR EL CARRITO MODAL
  reducir_Coincidencias(listas_Card_Productos);
}
// FUNCION QUE REDUCE LAS CANTIDADES DE CADA PRODUCTO
// SEGUN COINCIDENCIA POR NOMBRE
function reducir_Coincidencias(registros) {
  // PASO 1: Agrupar en un objeto todas las cantidades
  // por nombre producto que sera la clave
  const agrupando_Coincidencias = registros.reduce((acc, registro) => {
    // Si en el objeto acumulador
    // no existe el nombre del producto como clave
    if (!acc[registro.nombreProducto]) {
      // creamos la clave y su valor inicial
      // un array vacio
      acc[registro.nombreProducto] = [];
    }
    // Ya que existe insertamos un objeto
    // para costruir la cartilla
    // que ira en el carrito modal
    acc[registro.nombreProducto].push({
      cantidad: registro.cantidad,
      precioUnitario: registro.precioProducto,
      monto: registro.monto_Precio_Cantidad,
      rutaImagen: registro.imagen,
    });
    return acc; // retornamos objeto
  }, {});
  // CREAR UN ARRAY DE RESUMEN
  // CON TODAS LAS CARTILLAS A MOSTRAR
  let resumen = [];
  // CANTIDAD TOTAL DEL CARRITO
  let total_Cantidad_General = 0;
  // PASO 2: sumar todas las cantidades
  // y montos de un mismo producto
  for (let producto in agrupando_Coincidencias) {
    // Sumando cantidades y montos por cada producto
    let total_Cantidades = 0; // inicializo en cero
    let total_Montos = 0; // inicializo en cero
    agrupando_Coincidencias[producto].forEach((objeto) => {
      // sumar cantidades de un mismo producto
      // sumar montos de un mismo producto
      total_Cantidades = total_Cantidades + parseInt(objeto.cantidad);
      total_Montos = total_Montos + parseFloat(objeto.monto);
    });
    // SUMAR AL TOTAL GENERAL DEL CARRITO
    total_Cantidad_General = total_Cantidad_General + total_Cantidades;
    // CONSTRUIR EL RESUMEN POR CADA PRODUCTO
    resumen.push({
      // ruta de la imagen de la 1era coincidencia
      imagen: agrupando_Coincidencias[producto][0].rutaImagen,
      nombre: producto, // nombre del producto
      // precio unitario de la 1era coincidencia
      precio_Unitario: agrupando_Coincidencias[producto][0].precioUnitario,
      cantidad: total_Cantidades, // cantidad total
      total: total_Montos, // monto total
    });
  }
  // Pintar la cantidad total en el icono del carrito
  const cantidadCarrito = document.querySelector(".cantidad_Carrito");
  cantidadCarrito.textContent = total_Cantidad_General;
  // LLAMAR A LA FUNCION QUE PINTA EL CARRITO MODAL
  pintarCarritoModal(resumen);
}
// FUNCION QUE CREAR CARTILLAS EN EL CARRITO MODAL
function pintarCarritoModal(resumen) {
  // OBTENER EL CONTENEDOR DEL CARRITO MODAL
  const contenido = document.querySelector(".contenido_Carrito");
  // ELIMINAR EL CONTENIDO ANTERIOR PARA EVITAR DUPLICADOS
  contenido.innerHTML = "";
  // SI NO HAY PRODUCTOS
  if (resumen.length === 0) {
    contenido.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f">
        <path d="M240-80q-33 0-56.5-23.5T160-160v-480q0-33 23.5-56.5T240-720h80q0-66 47-113t113-47q66 0 113 47t47 113h80q33 0 56.5 23.5T800-640v480q0 33-23.5 56.5T720-80H240Zm0-80h480v-480h-80v80q0 17-11.5 28.5T600-520q-17 0-28.5-11.5T560-560v-80H400v80q0 17-11.5 28.5T360-520q-17 0-28.5-11.5T320-560v-80h-80v480Zm160-560h160q0-33-23.5-56.5T480-800q-33 0-56.5 23.5T400-720ZM240-160v-480 480Z"/>
      </svg>
      <p>Tu carrito está vacío</p>
      <p>Agrega productos para comenzar</p>
    `;
    return;
  }
  // SI HAY PRODUCTOS → CREAR UNA CARD POR CADA UNO
  resumen.forEach((item) => {
    const cardHTML = `
      <div class="card_carrito">
        <div class="imagen_Carrito"><img src="${
          item.imagen
        }" alt="imagen producto"></div>
        <div class="detalle_Carrito">
          <p class="carrito_nombre">${item.nombre}</p>
          <p class="carrito_precio_unitario"><span>S/${
            item.precio_Unitario
          }</span> c/u</p>
          <div class="opciones_Carrito">
            <span class="restar">-</span>
            <p class="cantidad">${item.cantidad}</p>
            <span class="adicionar">+</span>
          </div>
        </div>
        <p class="carrito_total">Total:</br><span>S/${item.total.toFixed(
          2
        )}</span></p>
      </div>
    `;
    // Agregar la card al contenedor del carrito modal
    contenido.insertAdjacentHTML("beforeend", cardHTML);
  });
  // LLAMAR A LA FUNCION QUE MANEJA LAS OPCIONES DEL CARRITO
  opciones_Carrito(resumen);
}
// FUNCION QUE GRABA LA CANTIDAD INDIVIDUAL POR PRODUCTO

// function grabarCantidadIndividualProducto(card, producto, cantidad) {
//   const etiqueta_Contador = card.querySelector(".etiqueta_Contador_Total");
//   // Eliminar espacios en blanco al inicio y final trim()
//   const producto_Nombre = producto.textContent.trim();
//   // CREO OBJETO QUE GUARDA EL NOMBRE Y LA CANTIDAD
//   const objeto_Producto = {
//     nombreProducto: producto_Nombre,
//     cantidadProducto: parseInt(cantidad.textContent),
//   };
//   // VALIDAR SI EXISTE EL PRODUCTO EN EL ARRAY DE REGISTROS
//   let existe = registros.some((objeto) => {
//     return objeto.nombreProducto === objeto_Producto.nombreProducto
//       ? true
//       : false;
//   });
//   // SI EXISTE -> ACTUALIZAR LA CANTIDAD
//   if (existe === true) {
//     // RECORRO EL ARRAY PARA ENCONTRAR ESE OBJETO
//     // DONDE COINCIDE nombreProducto
//     // Y ACTUALIZAR LA CANTIDAD
//     registros.forEach((objeto) => {
//       objeto.nombreProducto === objeto_Producto.nombreProducto
//         ? (objeto.cantidadProducto += parseInt(cantidad.textContent))
//         : null;
//       // ACTUALIZAR LA ETIQUETA EN EL HTML
//       etiqueta_Contador.textContent = objeto.cantidadProducto;
//     });
//   } else {
//     // SI NO EXISTE -> AGREGAR EL OBJETO AL ARRAY
//     registros.push(objeto_Producto);
//     etiqueta_Contador.textContent = objeto_Producto.cantidadProducto;
//   }
//   // existe.cantidadProducto += parseInt(cantidad.textContent);

//   // GUARDO EL OBJETO EN EL localStorage
//   localStorage.setItem("registros", JSON.stringify(registros));
//   // mostraryValidarEnConsola();
// }
// FUNCION QUE RESTAURA LA CANTIDAD INDIVIDUAL POR PRODUCTO
// Clave fija y esquema simple: { "Nombre producto": cantidad }
const KEY_CANTIDADES = "cantidad_por_producto";
function grabarCantidadIndividualProducto(card, producto, cantidad) {
  // Normalizar nombre
  const nombre =
    typeof producto === "string"
      ? producto.trim()
      : (producto && producto.textContent && producto.textContent.trim()) || "";

  // Normalizar cantidad (acepta nodo DOM o número)
  const valor =
    typeof cantidad === "number"
      ? cantidad
      : Number(
          cantidad && cantidad.textContent ? cantidad.textContent : cantidad
        ) || 0;

  if (!nombre) return;

  // Leer almacenamiento y convertir a mapa
  let mapa = {};
  try {
    mapa = JSON.parse(localStorage.getItem(KEY_CANTIDADES) || "{}");
  } catch (e) {
    mapa = {};
  }

  // Acumular la cantidad (si quieres sumar) o asignar (si prefieres reemplazar)
  // Aquí sumamos:
  mapa[nombre] = (Number(mapa[nombre]) || 0) + valor;

  // Guardar
  localStorage.setItem(KEY_CANTIDADES, JSON.stringify(mapa));

  // Actualizar UI: etiqueta específica del card (si existe)
  if (card) {
    const etiqueta = card.querySelector(".etiqueta_Contador_Total");
    if (etiqueta) etiqueta.textContent = mapa[nombre];
  }

  return mapa[nombre]; // devuelve la cantidad actualizada
}
function restaurarCantidadesIndividuales() {
  // Leer el mapa guardado por grabarCantidadIndividualProducto
  let raw = localStorage.getItem(KEY_CANTIDADES);
  if (!raw) return; // nada que restaurar

  let mapa = {};
  try {
    mapa = JSON.parse(raw) || {};
  } catch (e) {
    // si el JSON está corrupto, evitar romper la app
    console.warn("Error parseando cantidades guardadas:", e);
    return;
  }

  // Seleccionar todas las tarjetas y aplicar la cantidad si existe en el mapa
  const cards = document.querySelectorAll(
    ".unidad_Clase, .unidad_Membresia, .unidad_Suplementos, .unidad_Equipamiento"
  );

  cards.forEach((card) => {
    const producto = card.querySelector(".nombreProducto");
    if (!producto) return;
    const nombre = producto.textContent.trim();

    // buscar en el mapa por nombre exacto
    if (mapa.hasOwnProperty(nombre)) {
      const cantidadGuardada = Number(mapa[nombre]) || 0;

      // Actualizar la etiqueta de contador (En carrito: X)
      const etiqueta = card.querySelector(".etiqueta_Contador_Total");
      if (etiqueta) etiqueta.textContent = cantidadGuardada;

      // (Opcional) también actualizar la cantidad visible en la card
      // si prefieres mostrar cuántas se han seleccionado para volver a añadir
      const cantidadElem = card.querySelector(".cantidad");
      if (cantidadElem) {
        // No sobreescribimos a 1; dejamos la cantidad base en 1.
        // Si prefieres que el campo muestre la cantidad guardada, descomenta:
        // cantidadElem.textContent = cantidadGuardada;
      }
    }
  });
}
// FUNCION QUE MANEJA LAS OPCIONES DEL CARRITO MODAL
function opciones_Carrito(resumen) {
  // OBTENER TODOS LOS MENU OPCIONES DEL CARRITO MODAL
  const contenido_Carrito = document.querySelector(".contenido_Carrito");
  // PUNTUALIZAR TODOS LOS BOTONES ADICIONAR
  const opciones_Carrito = contenido_Carrito.querySelectorAll(
    ".opciones_Carrito .adicionar"
  );
  // RECORRER TODOS LOS BOTONES ADICIONAR
  opciones_Carrito.forEach((btnSumar) => {
    // IDENTIFICAR A QUE CARTILLA PERTENECE EL BOTON
    const cartilla = btnSumar.closest(".card_carrito");
    // OBTENER EL NOMBRE DEL PRODUCTO DE ESA CARTILLA
    // SERA MI FORMA PARA BUSCARLO EN EL ARRAY RESUMEN DEL CARRITO
    const nombreProducto =
      cartilla.querySelector(".carrito_nombre").textContent;
    // RECORRER EL ARRAY RESUMEN PARA ENCONTRAR EL PRODUCTO
    resumen.forEach((detalle_Producto) => {
      // EL NOMBRE DEL PRODUCTO EN CARTILLA
      // BUSCARLO EN EL ARRAY RESUMEN
      if (detalle_Producto.nombre === nombreProducto) {
        // ENCONTRADO -> OBTENER LA CANTIDAD ACTUAL
        let cantidad = detalle_Producto.cantidad;
        // AGREGAR EVENTO AL BOTON SUMAR
        btnSumar.addEventListener("click", () => {
          // INCREMENTAR LA CANTIDAD EN 1
          cantidad++;
          // ACTUALIZAR LA CANTIDAD EN LA ETIQUETA DE LA CARTILLA
          const etiquetaCantidad = cartilla.querySelector(".cantidad");
          etiquetaCantidad.textContent = cantidad;
        });
      }
    });
  });
  // console.log(resumen);
  // resumen.forEach((producto) => {
  //   console.log(producto);
  // });
}
