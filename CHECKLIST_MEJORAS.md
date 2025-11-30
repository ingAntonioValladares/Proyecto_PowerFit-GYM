# Checklist de mejoras — Carrito (mejoras-futuras-carrito)

Este archivo recoge un conjunto de mejoras recomendadas para el sistema de carrito actual, ordenadas por prioridad y con un plan de refactor/despliegue en PRs separados.

---

## Objetivo

Tener un backlog claro, seguro y aplicable por pasos pequeños para mejorar la robustez, mantenibilidad y UX del carrito sin introducir regresiones.

---

## Prioridad alta (correcciones que mejoran estabilidad)

1. Centralizar sincronización (single source of truth)

   - Descripción: Implementar `updateProductQuantity(nombre, cantidad)` y `changeProductQuantity(nombre, delta)` que manejen DOM + localStorage + recalculo de totales.
   - Beneficio: Evita duplicación, reduce errores de sincronía.
   - PR: `mejoras-futuras-carrito/pr-01-centralizar-sincronizacion`

2. Recalcular total en tiempo real

   - Descripción: Cuando se cambia una cantidad desde el modal o cards, recalcular y mostrar el total global e icono inmediatamente.
   - Beneficio: Mejor UX y consistencia.
   - PR: `mejoras-futuras-carrito/pr-02-total-en-tiempo-real`

3. Limpieza consistente al eliminar (cantidad = 0)
   - Descripción: Cuando cantidad llega a 0, limpiar todas las estructuras (detalle_Producto y cantidad_por_producto) de forma consistente.
   - Beneficio: Evita entradas huérfanas en storage y mantiene UI sincronizada.
   - PR: `mejoras-futuras-carrito/pr-03-limpieza-cero`

---

## Prioridad media (refactor + usabilidad)

4. Reducir duplicados y tener API Storage

   - Descripción: Implementar utilidades `readCart()`, `writeCart()` y `readQuantities()`, `writeQuantities()` para acceder a localStorage centralizadas.
   - Beneficio: Manejo de errores, encapsulación y pruebas.
   - PR: `mejoras-futuras-carrito/pr-04-api-storage`

5. Actualizar campo `.cantidad` en la card cuando corresponda

   - Descripción: Opcionalmente mostrar la cantidad guardada en la propia card (no solo en la etiqueta). Añadir toggle de comportamiento.
   - Beneficio: Mejora la claridad del usuario.
   - PR: `mejoras-futuras-carrito/pr-05-sync-cantidad-card`

6. Mejora en nombres y consistencia de claves en storage
   - Descripción: Unificar o documentar las claves (`detalle_Producto`, `cantidad_por_producto`, `registros`) y migrar a nombres coherentes.
   - Beneficio: Evita confusión y errores.
   - PR: `mejoras-futuras-carrito/pr-06-unificar-keys-storage`

---

## Prioridad baja (UX y tests)

7. Animaciones y transiciones al quitar item

   - Descripción: Añadir animación suave cuando se elimina una cartilla para mejorar experiencia.
   - PR: `mejoras-futuras-carrito/pr-07-animacion-eliminar`

8. Botón de refrescar y debug helper

   - Descripción: Añadir botón temporal para llamar `obtenerRegistros()` y `restaurarCantidadesIndividuales()` sin recargar.
   - Beneficio: Útil para debugging y QA.
   - PR: `mejoras-futuras-carrito/pr-08-debug-button`

9. Tests unitarios / E2E
   - Descripción: Añadir tests que comprueben la API de storage, la función de reducción de carrito, y los handlers de UI.
   - Beneficio: Evitar regresiones en el futuro.
   - PR: `mejoras-futuras-carrito/pr-09-tests`

---

## Consideraciones de implementación

- Cada PR debe ser pequeño, con cambios bien documentados y pruebas manuales claras (pasos para reproducir).
- Probar los flujos: añadir, sumar, restar, eliminar, cambiar categorías, recargar y restaurar desde localStorage.
- Asegurar compatibilidad regresiva: si algo falla, tener forma de fall-back (feature flag o pruebas automatizadas).

---

## Tareas operativas antes de empezar cualquier PR

- Crear rama por PR basada en `mejoras-futuras-carrito`.
- Hacer tests manuales antes y después.
- Abrir PR con descripción: objetivo, archivos modificados, pasos de prueba.

---

Fin de checklist.
