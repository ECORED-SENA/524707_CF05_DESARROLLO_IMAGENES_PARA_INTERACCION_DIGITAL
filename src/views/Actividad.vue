<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Diseño visual, UX y producción de contenidos multimedia',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> Evaluar la comprensión y el uso adecuado de las herramientas básicas en la ventana <em>Board</em> del <em>software</em> EAGLE.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es el propósito principal de un wireframe en el diseño multimedia?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Definir el estilo gráfico final.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Representar la estructura básica y organización del contenido.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Producir elementos audiovisuales finales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Diseñar personajes y escenarios.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Qué elemento del diseño ayuda a guiar la mirada del usuario a través de una interfaz?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Textura.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Perspectiva.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Línea.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Saturación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Cuál es una característica fundamental de las imágenes vectoriales?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Se deforman al escalar.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Funcionan solo para fotografías.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Están compuestas por fórmulas matemáticas.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Usan exclusivamente formato JPG.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Cuál de los siguientes principios de diseño facilita establecer un orden visual claro?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Simulación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Armonía.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Distorsión.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Jerarquía.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            'La usabilidad en proyectos multimedia se refiere principalmente a:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La facilidad con la que el usuario completa tareas.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'La velocidad del dispositivo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El número de animaciones incluidas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La cantidad de colores usados.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Cuál es la finalidad principal del diseño visual en interfaces digitales?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Facilitar la interacción entre usuario y sistema multimedia.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Organizar la comunicación visual dentro del entorno digital.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Reducir el número de funciones disponibles al usuario.',
              esCorrecta: false,
            },

            {
              id: 'd',
              texto:
                'Eliminar la estructura funcional del producto multimedia.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Qué formato es adecuado para guardar imágenes con transparencia?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'BMP.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'MP3.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'PNG.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'GIF sin transparencia.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Qué elemento permite mantener coherencia estética en un producto digital?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Uso aislado de colores y tipografías diferentes.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Aplicación espontánea de imágenes sin organización previa.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Definición previa de una identidad gráfica institucional.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Eliminación de criterios compositivos en la interfaz.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            'El movimiento de cámara en el que la cámara rota sobre su eje vertical se llama:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Tilt.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Pan.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Zoom.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Corte.',
              esCorrecta: false,
            },
          ],
          nsaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto: 'En animación 2D, el “tweening” se refiere a:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Crear todos los fotogramas a mano.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Duplicar escenas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Generar fotogramas intermedios automáticamente.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Exportar secuencias.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            '¿Qué función cumple la jerarquía visual dentro de la interfaz digital?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Distribuir información sin considerar niveles de relevancia.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Ubicar todos los elementos con el mismo tamaño visual.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Permitir navegación aleatoria sin rutas funcionales claras.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Organizar los elementos según su importancia informativa.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            '¿Qué aspecto define la línea gráfica de un proyecto multimedia?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Uso libre de cualquier recurso visual disponible.',
              esCorrecta: false,
            },

            {
              id: 'b',
              texto: 'Eliminación de normas visuales durante el desarrollo.',
              esCorrecta: false,
            },

            {
              id: 'c',
              texto:
                'Aplicación de criterios funcionales sin identidad visual.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Conjunto de lineamientos técnicos sobre recursos visuales.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            '¿Qué propósito tiene el objetivo visual en una interfaz digital?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Disminuir la claridad en la navegación del usuario.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Orientar la atención hacia la acción principal prevista.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Eliminar contrastes cromáticos dentro de la pantalla.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Evitar la organización progresiva del recorrido digital.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            '¿Qué característica facilita la identificación rápida del contenido central?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Uso de escalas visuales sin relación jerárquica.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Distribución desordenada de elementos interactivos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Aplicación uniforme de tipografías sin contraste visual.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Jerarquía mediante escalas amplias y contrastantes.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            '¿Qué tipo de plano se usa para mostrar detalle facial o emociones?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Primer plano.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Plano general.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Plano aéreo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Plano secuencia.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },

        {
          id: 16,
          texto:
            '¿Qué característica distingue el uso de tipografía sans serif en pantalla?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Mayor complejidad visual en textos descriptivos extensos.',
            },
            {
              id: 'b',
              texto: 'Reducción de la legibilidad en entornos digitales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Aumento del contraste sin organización jerárquica textual.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Mejora la lectura funcional en contenidos digitales.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto:
            '¿Cuál de los siguientes elementos corresponde a un principio del diseño visual aplicado a interfaces digitales?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Resolución de pantalla.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Renderizado 3D.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Contraste.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Frecuencia de muestreo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto: 'En el lenguaje audiovisual, la continuidad se usa para:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Mantener fluidez entre los planos para evitar saltos bruscos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Cambiar el estilo de color entre escenas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Aumentar la saturación en posproducción.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Agregar personajes secundarios.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto:
            '¿Qué recurso gráfico sintetiza acciones dentro de la interfaz digital?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Imágenes decorativas sin relación con la navegación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Iconos funcionales asociados a tareas del sistema.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Textos extensos que sustituyen elementos visuales interactivos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Elementos gráficos sin coherencia con la línea visual.',
              esCorrecta: false,
            },
          ],

          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,

          texto:
            '¿Cuál afirmación corresponde correctamente al proceso de producción gráfica digital descrito en el Componente formativo?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La composición final debe realizarse solo con imágenes en alta resolución sin optimización.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La selección de medios de captura es irrelevante si la edición es digital.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La optimización de imágenes reduce peso sin afectar su uso en el proyecto multimedia.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Es obligatorio trabajar exclusivamente en formato SVG para todos los contenidos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
