import { computed, effect, signal } from '@preact/signals-react';

export const EffectApp = () => {

    const nombre = signal("React");
    const apellido = signal("Code");

    // `nombreCompleto` es una señal computada que depende de `nombre` y `apellido`:
    const nombreCompleto = computed(() => `${nombre.value} ${apellido.value}`);

    // Muestra: cada vez que cambie nombreCompleto:
    effect(() => console.log(nombreCompleto.value));
    // Muestra:: "React Code"

    // Actualizando `nombre` actualiza `nombreCompleto`, que dispara el efecto:
    nombre.value = "Sergie";
    // Muestra:: "Sergie Code"

}
