<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Desarrollo visual de interfaces digitales
    p.mb-3 El desarrollo visual de interfaces digitales implica la construcción intencional de entornos gráficos orientados a facilitar la interacción entre el usuario y el sistema multimedia. En contextos reales de producción digital, la interfaz debe responder de manera articulada a criterios comunicativos, funcionales y tecnológicos. Esta integración orienta decisiones relacionadas con la estructura visual, la identidad gráfica, la jerarquía informativa y la claridad en la navegación, con el propósito de favorecer la comprensión del entorno y la continuidad de la interacción.
    .row.align-items-center.justify-content-center
      .col-xl
        .caja-tema1.mb-3(data-aos="fade-right")
          p.mb-0 En los proyectos multimedia contemporáneos, las interfaces requieren adaptarse a múltiples dispositivos y condiciones de uso. Esta exigencia implica considerar resoluciones variables, modalidades de interacción táctil o mediante cursor, tiempos de atención reducidos y diversidad de perfiles de usuario. En consecuencia, el diseño visual se configura como #[b un sistema organizado de elementos gráficos] que orienta la interpretación del contenido y facilita el recorrido dentro del entorno digital.
        p.mb-5.mb-lg-0 En este marco, resulta pertinente comprender que la configuración visual de la interfaz se fundamenta en la definición previa de una identidad gráfica del proyecto multimedia.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema1/img1.png', alt='').m-auto
    .bg-1
      .px-5
        Separador
        #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.1 Imagen corporativa y línea gráfica del proyecto
        p.mb-5 La imagen corporativa en los productos multimedia digitales se refiere al conjunto de características visuales que permiten identificar y #[b diferenciar un proyecto dentro de su contexto comunicativo]. Esta identidad se construye mediante la integración coherente de elementos como el uso del color, la selección tipográfica, los estilos gráficos, la iconografía y la forma en que estos componentes se articulan en la interfaz.
        .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema1/img3.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 La definición de una imagen corporativa contribuye a establecer coherencia visual en todas las pantallas del producto digital y facilita el reconocimiento del estilo del proyecto durante la interacción. En este sentido, la identidad visual no cumple únicamente una función estética, sino que también aporta a la claridad comunicativa y a la organización funcional de la información dentro del entorno multimedia.
        p.mb-5 A partir de esta identidad se configura la línea gráfica del proyecto, entendida como el conjunto de lineamientos técnicos que orientan la aplicación consistente de los recursos visuales. Estos lineamientos permiten garantizar continuidad en el desarrollo del producto digital y facilitan la integración progresiva de nuevos contenidos sin afectar la coherencia visual del sistema. En este contexto, los principales aspectos regulados por la línea gráfica pueden sintetizarse así:
        .row.align-items-center.mb-5
          .col-xl-4(data-aos="fade-right")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/tema1/img4.png', alt='' style="max-width: 350px").m-auto
          .col-xl-8(data-aos="fade-left")
            SlyderF(columnas="col-lg-6 col-xl-6")
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/tema1/img5.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Paleta cromática principal y secundaria
                p.mb-0.text-center Define la identidad visual del proyecto y contribuye a diferenciar niveles de información y navegación.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/tema1/img6.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Jerarquía tipográfica
                p.mb-0.text-center Organiza los contenidos textuales y facilita la lectura en pantalla.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/tema1/img7.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Estilo de iconos e ilustraciones
                p.mb-0.text-center Mantiene unidad estética y favorece la comprensión de acciones o secciones.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/tema1/img8.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Criterios de composición visual
                p.mb-0.text-center Regulan la distribución equilibrada de los elementos gráficos en la interfaz.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/tema1/img9.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Relación entre imágenes y elementos interactivos
                p.mb-0.text-center Permite coherencia entre los recursos visuales y las funciones de navegación.
        p.mb-5 La aplicación sistemática de estos lineamientos fortalece la identidad del proyecto y contribuye #[b a mejorar la experiencia de interacción del usuario, al propiciar entornos digitales organizados, consistentes y funcionales]. 
        .row.align-items-center.justify-content-center
          .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
            figure
              img(src='@/assets/curso/tema1/img10.png', alt='').m-auto
          .col-xl
            .caja-tema1.mb-3.ajuste-caja-tema1(data-aos="fade-left")
              p.mb-0 Como ejemplo aplicado, a través de este apartado se revisará la interfaz de una plataforma digital de contenidos audiovisuales como <i>#[b Aura Flow]</i>, con el fin de comprender la manera en que la línea gráfica se concreta en el entorno de interacción. En este caso, se analizará el uso constante de una paleta cromática definida, la organización jerárquica de los textos y la integración coherente de iconos y recursos gráficos presentes en las diferentes pantallas del sistema. Este análisis permitirá reconocer cómo se consolida una identidad visual estable que favorece la navegación y la comprensión del contenido.
    Separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2 Definición del objetivo visual de la interfaz
    p.mb-5 En el diseño de interfaces digitales, el objetivo visual constituye un principio organizador que orienta la disposición de los elementos gráficos y funcionales dentro de la pantalla. Su definición se establece a partir de la identificación de la acción principal que se espera del usuario, el contenido que requiere mayor relevancia y la secuencia de interacción prevista. Estas decisiones permiten estructurar una jerarquía clara, facilitar la comprensión del entorno digital y optimizar la experiencia de uso.
    .row.align-items-center.justify-content-center.mb-5
      .col-xl
        .caja-tema1.ajuste-caja-tema1-1.mb-3(data-aos="fade-right")
          p.mb-0 La construcción del objetivo visual implica #[b seleccionar escalas, contrastes, tipografías y ubicaciones estratégicas] que favorezcan la lectura funcional de la interfaz. De este modo, la organización compositiva contribuye a dirigir la atención hacia las tareas prioritarias y a consolidar recorridos de navegación coherentes y progresivos.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema1/img11.png', alt='').m-auto
    .bg-2
      .px-5
        p.mb-5.text-center A continuación, se presentan los elementos que estructuran el objetivo visual y su aporte en la interacción digital.
        .row.align-items-center.mb-5
          .col-xl-4(data-aos="fade-right")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/tema1/img13.png', alt='' style="max-width: 350px").m-auto
          .col-xl-8(data-aos="fade-left")
            SlyderF(columnas="col-lg-6 col-xl-6")
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/tema1/img14.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Acción principal claramente definida
                p.mb-0.text-center Orienta la interacción hacia la tarea prioritaria.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/tema1/img15.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Jerarquía mediante escalas amplias
                p.mb-0.text-center Facilita la identificación rápida del contenido central.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/tema1/img16.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Contrastes cromáticos diferenciados
                p.mb-0.text-center Permite distinguir funciones principales y secundarias.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/tema1/img17.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Organización progresiva del recorrido
                p.mb-0.text-center Favorece la continuidad de la navegación.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/tema1/img18.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Composición limpia y equilibrada
                p.mb-0.text-center Contribuye a la comprensión global de la interfaz.
        .row.justify-content-center
          .col-xl-8
            p.mb-5.text-center La relación entre estos elementos evidencia que el objetivo visual no se limita a resaltar un componente aislado, sino que integra decisiones estratégicas sobre distribución espacial, peso tipográfico y contraste funcional.
    .caja-tema1-1.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/tema1/img19.svg" style="max-width: 60px").m-auto
      .col
        h3 Ejemplo de aplicación del objetivo visual en una interfaz digital
    p.mb-5 Un ejemplo aplicado se reconoce en la interfaz de la plataforma musical digital <i>#[b Aura Flow]</i>, en la que la pantalla inicial integra un menú lateral de navegación, una zona central con recomendaciones destacadas y un panel informativo complementario. La distribución jerárquica de las tarjetas de contenido, el uso de contrastes suaves y la ubicación estratégica de los controles de reproducción contribuyen a que el usuario identifique con rapidez las opciones principales y continúe su experiencia dentro del sistema.
    .row.justify-content-center.mb-5
      .col-xl-8
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Figura 1.
          span Interfaz de la plataforma musical digital <i>Aura Flow</i>
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/tema1/img20.jpg', alt='Ilustración de interfaz de plataforma musical digital con menú lateral de navegación, área central con tarjetas de contenidos recomendados, panel informativo complementario, encabezado superior con buscador y barra de control de reproducción en la parte inferior. ').m-auto
    p.mb-5.text-center Para comprender de manera estructurada los elementos presentes en este tipo de interfaz, se presenta la siguiente síntesis conceptual.
    .row.align-items-center.mb-5
      .col-xl-auto
        figure(data-aos="fade-right").d-none.d-xl-block
          img(src="@/assets/curso/tema1/img21.png", alt="" ).m-auto
      .col-xl
        AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left")
          .row(titulo="Menú de navegación lateral").ajuste-cajaAcordion
            p.mb-3 Permite el acceso organizado a secciones principales como biblioteca, listas o contenidos destacados.
          .row(titulo="Área central de contenidos").ajuste-cajaAcordion
            p.mb-3 Prioriza información relevante mediante tarjetas jerarquizadas que orientan la selección del usuario.
          .row(titulo="Panel informativo complementario").ajuste-cajaAcordion
            p.mb-3 Presenta actividad reciente o sugerencias que amplían la interacción dentro de la plataforma.
          .row(titulo="Barra de control inferior").ajuste-cajaAcordion
            p.mb-3 Facilita la gestión inmediata de acciones como reproducción, pausa o avance de contenido.
          .row(titulo="Encabezado superior").ajuste-cajaAcordion
            p.mb-3 Integra buscador, perfil y accesos rápidos que optimizan la exploración del entorno digital.
    .row.justify-content-center.mb-5
      .col-xl-8
        p.mb-0 Esta organización evidencia cómo la disposición coherente de los componentes gráficos contribuye a disminuir la carga cognitiva y a fortalecer la orientación del usuario dentro de sistemas multimedia complejos.
    .row.align-items-center.justify-content-center.mb-0
      .col-xl
        .caja-tema1.mb-3(data-aos="fade-right")
          p.mb-0 En una plataforma orientada a la reproducción de contenidos musicales y a la exploración de recomendaciones, el objetivo visual se concreta en la priorización de un bloque central que concentra la acción principal. Este componente adquiere protagonismo mediante dimensiones amplias y la inclusión de un botón de activación claramente diferenciado.
        p Los elementos secundarios se organizan en zonas periféricas con tamaños menores y contrastes cromáticos más suaves. Esta disposición facilita la identificación de funciones complementarias y contribuye a una experiencia de uso continua. Asimismo, la selección de una paleta cromática contrastante y una tipografía jerarquizada permite reconocer con claridad las diferentes secciones de la interfaz. En este contexto, el objetivo visual integra decisiones relacionadas con:
        p.mb-4.mb-lg-0 La articulación de estos factores fortalece la orientación del usuario dentro de la interfaz y favorece la ejecución eficiente de las tareas previstas.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema1/img22.png', alt='').m-auto
    Separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.3 Construcción de la estructura gráfica
    p.mb-5 En el desarrollo de interfaces digitales, la construcción de la estructura gráfica constituye una etapa fundamental para organizar el contenido de manera #[b lógica y funcional]. Este proceso inicia con la definición de una retícula base que permite distribuir los elementos visuales en columnas y módulos, lo cual favorece la coherencia compositiva y la claridad en la jerarquización informativa.
    .row.align-items-center.justify-content-center.mb-3
      .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema1/img23.svg', alt='').m-auto
      .col-xl(data-aos="fade-left")
        .caja-tema1-2
          p.mb-0 Una estructura gráfica basada en una retícula de doce columnas facilita la adaptación del diseño a diferentes tamaños de pantalla. Gracias a esta organización modular, los contenidos pueden reorganizarse sin afectar la continuidad visual del conjunto, lo que resulta especialmente relevante en entornos digitales responsivos y multiplataforma.
    .row.align-items-center.justify-content-center.mb-5
      .col-xl.mb-4.mb-lg-0(data-aos="fade-right")
        .caja-tema1.ajuste-caja-tema1-2
          p.mb-0 Asimismo, la estructura gráfica debe considerar el recorrido visual natural del usuario dentro de la pantalla. En la mayoría de los casos, la atención inicial se concentra en la zona superior izquierda y se desplaza progresivamente hacia el centro y la parte inferior. La ubicación estratégica de los elementos prioritarios en estas áreas contribuye a orientar la interacción y a mejorar la comprensión del contenido.
      .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/tema1/img24.svg', alt='').m-auto
      .col-xl
        figure(data-aos="fade-left")
          img(src='@/assets/curso/tema1/img25.svg', alt='' style="max-width: 90px")
        p.mb-0 Otro aspecto determinante en la construcción estructural es la relación entre los espacios ocupados y los espacios vacíos. El uso equilibrado del espacio negativo permite reducir la saturación visual, facilita la organización perceptiva de la información y resalta los componentes interactivos más relevantes.
    p.mb-5 A continuación, se sintetizan los principales aspectos asociados a la construcción de la estructura gráfica.
    .bg-slider.mb-5
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Retícula base
                p.mb-0 Organiza el contenido en columnas y módulos, lo que facilita la jerarquización y la coherencia del diseño.
              .col-xl-6
                figure
                  img(src='@/assets/curso/tema1/img27.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Adaptabilidad del diseño
                p.mb-0 Permite reorganizar los contenidos en distintos tamaños de pantalla sin perder consistencia gráfica.
              .col-xl-6
                figure
                  img(src='@/assets/curso/tema1/img28.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Recorrido visual del usuario
                p.mb-0 Orienta la ubicación estratégica de elementos prioritarios para favorecer la interacción y la comprensión.
              .col-xl-6
                figure
                  img(src='@/assets/curso/tema1/img29.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Espacio negativo
                p.mb-0 Reduce la saturación visual y resalta los componentes interactivos esenciales.
              .col-xl-6
                figure
                  img(src='@/assets/curso/tema1/img30.png', alt='' style="max-width: 500px").m-auto
    p.mb-5 En la construcción de la estructura gráfica también intervienen principios compositivos ampliamente utilizados en el diseño multimedia. Estos conceptos permiten organizar el espacio visual de manera estratégica y contribuyen a mejorar la claridad funcional de la interfaz digital.
    TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
      .py-3.py-md-4(titulo="Regla de tercios")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/tema1/img31.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Regla de tercios
            p.mb-0 División del espacio en tres partes iguales, tanto horizontal como verticalmente, para ubicar elementos relevantes en los puntos de intersección.
      .py-3.py-md-4(titulo="Retícula de columnas")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/tema1/img32.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Retícula de columnas
            p.mb-0 Estructura utilizada en diseño <i>web</i> e interfaces que permite organizar contenidos en bloques ordenados y jerarquizados.
      .py-3.py-md-4(titulo="Márgenes y <i>paddings</i>")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/tema1/img33.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Márgenes y #[i paddings]
            p.mb-0 Espacios que separan el contenido de los bordes o de otros elementos, lo que favorece la organización visual y la legibilidad.
    .caja-tema1-1.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/tema1/img19.svg" style="max-width: 60px").m-auto
      .col
        h3 Ejemplo aplicado en una interfaz digital
    p.mb-5 La construcción de la estructura gráfica puede comprenderse a partir del análisis de la interfaz de la plataforma de reproducción musical digital <i>#[b Aura Flow]</i>. En este tipo de entorno, la retícula base organiza la pantalla mediante un sistema de columnas que permite distribuir los elementos de manera ordenada y coherente.
    .bg-2
      .px-5
        .row.justify-content-center.mb-5
          .col-xl-6
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Figura 2.
              span Retícula estructural aplicada a la interfaz digital de <i>Aura Flow</i>
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/img34.jpg', alt='Diagrama de estructura gráfica de interfaz digital basado en retícula de columnas que organiza panel lateral de navegación, zona central de contenidos y barra inferior de reproducción extendida.').m-auto
        p.mb-5 A partir de esta retícula, el espacio se divide en módulos claramente definidos. Un conjunto de columnas se destina al panel lateral de navegación, mientras que la zona central ocupa una mayor extensión para alojar las tarjetas de contenido musical. Esta asignación modular posibilita estructurar la interfaz sin afectar la consistencia del diseño.
        .row.justify-content-center.mb-0
          .col-xl-10
            .caja-tema1.mb-3(data-aos="zoom-in")
              .row.align-items-center
                .col-xl-auto.mb-4.mb-lg-0
                  figure
                    img(src='@/assets/curso/tema1/img35.svg', alt='').m-auto
                .col-xl
                  p.mb-0 De forma complementaria, otros módulos permiten integrar paneles informativos o secciones adicionales que se ajustan dentro de la misma retícula sin generar rupturas en la organización general. La barra de reproducción, ubicada en la franja inferior, se extiende a lo largo de todas las columnas, lo que evidencia el uso de la retícula como sistema integrador del conjunto gráfico.
            p.mb-0 Asimismo, la presencia de márgenes y #[i paddings] entre los distintos módulos contribuye a delimitar las áreas funcionales y a mantener una separación constante entre los elementos. Gracias a esta estructura basada en columnas, la interfaz puede reorganizar sus componentes en diferentes resoluciones de pantalla sin perder continuidad compositiva.
    Separador
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.4 Aplicación de criterios cromáticos y tipográficos
    p.mb-5 La aplicación del color en interfaces digitales cumple una función comunicativa y operativa dentro del entorno multimedia. Su uso coherente permite orientar la interacción y facilitar la identificación de acciones disponibles. Por ejemplo, la utilización constante de un color específico en los botones de acción contribuye a que el usuario reconozca con rapidez las opciones que le permiten continuar su recorrido dentro del sistema.
    .row.justify-content-center.align-items-center.mb-5
      .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema1/img36.png', alt='' style="max-width: 500px").m-auto
      .col-xl
        .caja-tema1.mb-3(data-aos="fade-left")
          p.mb-0 En proyectos multimedia reales, resulta pertinente definir una paleta cromática estructurada en colores principales, secundarios y de apoyo. Asimismo, es necesario establecer variantes que respondan a estados interactivos como selección, desplazamiento o confirmación. Esta organización cromática fortalece la coherencia visual del producto digital y favorece la interpretación de las acciones que el usuario puede realizar.
        .row.justify-content-center.align-items-center
          .col-xl-auto(data-aos="zoom-in")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/tema1/img37.svg', alt='' style="max-width: 90px")
          .col-xl
            p.mb-0 En relación con la #[b tipografía], la selección de combinaciones funcionales entre títulos y textos descriptivos contribuye a organizar la información de manera clara y progresiva. Una familia tipográfica #[b #[i sans serif]] suele emplearse en contenidos digitales debido a su legibilidad en pantalla. Las variaciones en el peso, el tamaño y la disposición del texto permiten diferenciar niveles jerárquicos y estructurar el contenido de forma comprensible.
    p.mb-5 Además, es fundamental considerar aspectos técnicos como la interlínea, el espaciado entre caracteres y la longitud de los bloques textuales. Estos factores influyen de manera directa en la comodidad de lectura y en la percepción de orden dentro de la interfaz, lo que favorece una experiencia de interacción más organizada y eficiente.
    .caja-tema1-1.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/tema1/img19.svg" style="max-width: 60px").m-auto
      .col
        h3 Ejemplo aplicado en una interfaz digital
    p.mb-5 La aplicación de criterios cromáticos y tipográficos puede comprenderse a partir del análisis de la interfaz de la plataforma de reproducción musical digital <i>#[b Aura Flow]</i>. En este entorno, el sistema cromático se define a partir de un color principal que se utiliza de manera constante en los botones de acción asociados a la reproducción de contenido. Esta repetición permite asociar determinadas tonalidades con funciones específicas dentro del entorno digital.
    .row.justify-content-center.align-items-center.mb-5
      .col-xl-7
        .caja-tema1-2.ajuste-caja-tema1-3.mb-3(data-aos="fade-right")
          p.mb-0 De forma complementaria, se emplean colores secundarios para diferenciar zonas informativas o estados interactivos. Por ejemplo, variaciones tonales más suaves se integran en tarjetas de recomendaciones musicales o en paneles de actividad reciente, mientras que tonalidades más contrastantes se destinan a acciones que requieren confirmación o activación directa. Esta organización contribuye a mantener coherencia visual y facilita la interpretación funcional de los elementos.
        .row.justify-content-center.align-items-center
          .col-xl-auto(data-aos="zoom-in")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/tema1/img38.svg', alt='' style="max-width: 90px")
          .col-xl
            p.mb-4.mb-lg-0 En relación con la tipografía, la interfaz incorpora una familia <i>sans serif</i> que favorece la legibilidad en pantalla. Los títulos de secciones, como recomendaciones o tendencias, presentan mayor tamaño y peso tipográfico, lo que permite reconocer con claridad la organización informativa del contenido. Los textos descriptivos asociados a cada tarjeta musical utilizan tamaños menores y espaciados controlados, lo cual favorece una lectura progresiva dentro del entorno digital.
      .col-xl-5
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Figura 3.
          span Sistema cromático y tipográfico definido para la interfaz de la plataforma digital <i>Aura Flow</i>
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/tema1/img39.jpg', alt='Esquema de sistema cromático y tipográfico aplicado a interfaz digital con paleta de colores principal y secundaria, botones de acción destacados y estilos de texto jerarquizados para títulos y descripciones. ').m-auto
    .caja-tema1-3.mb-5(data-aos="flip-up")
      .row.align-items-center
        .col-xl.col-md-10.order-2.order-lg-1
          p.mb-0 Asimismo, la interlínea y el espaciado entre caracteres se ajustan para evitar densidad visual excesiva en zonas con mayor cantidad de información. Gracias a la articulación coherente entre sistema cromático y criterios tipográficos, la interfaz mantiene consistencia gráfica y favorece la continuidad de la interacción del usuario dentro de la plataforma.
        .col-xl-auto.col-md-2.order-1.order-lg-2.mb-3.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/tema1/img40.svg', alt='' style="width: 85px").m-auto
    .bg-2
      .px-5
        .row.justify-content-center.mb-0
          .col-xl-6
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Figura 4.
              span Jerarquía de estilos tipográficos definidos para la interfaz de la plataforma digital <i>Aura Flow</i>
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/img41.jpg', alt='Tabla visual de jerarquía tipográfica en interfaz digital que presenta variaciones de tamaño, peso y espaciado en títulos, subtítulos y textos descriptivos. ').m-auto
        Separador
        #t_1_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.5 Integración de recursos gráficos
        p.mb-5 En el desarrollo visual de interfaces digitales, la configuración cromática, tipográfica y estructural se complementa mediante la integración de diversos r#[b ecursos gráficos, entre los que se incluyen iconos funcionales, imágenes de contenido, ilustraciones vectoriales, elementos compositivos y componentes interactivos]. Estos recursos permiten sintetizar información, orientar la navegación y fortalecer la identidad visual del proyecto dentro del entorno multimedia.
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema1/img42.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 En la producción multimedia aplicada, la integración de recursos gráficos implica su selección, organización y articulación estratégica dentro de la interfaz digital. Su incorporación debe responder de manera coherente a la estructura gráfica definida, a los criterios cromáticos y tipográficos establecidos y a la línea visual del proyecto. De esta manera, los elementos visuales no se integran como componentes aislados, sino como parte de un sistema gráfico que contribuye a la claridad funcional y comunicativa del producto digital.
    .row.justify-content-center
      .col-xl-10
        .caja-tema1-4.mb-5(data-aos="zoom-in")
          p.mb-4 En la interfaz de la plataforma <i>#[b Aura Flow]</i>, la integración de recursos gráficos facilita la exploración de #[b contenidos audiovisuales y favorece la comprensión de las acciones disponibles dentro del sistema]. Por ejemplo, los iconos asociados a funciones como reproducción, búsqueda o configuración sintetizan acciones esenciales del entorno digital, lo cual reduce la carga textual y contribuye a una interacción más ágil.
          .row.justify-content-center.mb-4
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Figura 5.
                span Integración compositiva de recursos gráficos e interactivos en la interfaz digital de la plataforma <i>Aura Flow</i>
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema1/img43.jpg', alt='Ilustración de integración de recursos gráficos en interfaz digital con iconos funcionales de reproducción y navegación, miniaturas de contenidos audiovisuales, elementos vectoriales de control y distribución compositiva equilibrada.').m-auto
          p.mb-0 Asimismo, las imágenes utilizadas como miniaturas de contenido permiten contextualizar la información presentada y establecer una relación inmediata con el usuario. Estos recursos se organizan dentro de la retícula de la interfaz respetando proporciones y jerarquías visuales, lo que contribuye al equilibrio compositivo de la pantalla y a la continuidad del recorrido de navegación.
    .row.align-items-center.justify-content-center.mb-5
      .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema1/img44.png', alt='').m-auto
      .col-xl
        p Las ilustraciones vectoriales integradas en elementos de control y navegación garantizan consistencia gráfica y adaptabilidad a diferentes resoluciones. Esta característica resulta especialmente relevante en productos multimedia diseñados para múltiples dispositivos, ya que favorece la claridad funcional incluso en entornos de pantalla reducida.
        .caja-tema1(data-aos="zoom-in")
          p.mb-0 De igual manera, la composición equilibrada de los recursos gráficos en <i>#[b Aura Flow]</i> permite identificar con facilidad zonas funcionales como el panel de navegación, el área de contenidos destacados y la barra de control multimedia. Esta organización contribuye a disminuir la carga cognitiva del usuario y a fortalecer la continuidad de la interacción dentro del entorno digital.
    p.mb-5 A continuación, se sintetizan algunos recursos gráficos presentes en la interfaz analizada y su aporte dentro de la producción multimedia.
    .row.justify-content-center.mb-5
      .col-lg-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .tarjeta--boton.p-5.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema1/img45.svg', alt="" style="max-width: 90px").m-auto
          h3.text-center Iconos de reproducción y navegación
          p.mb-0.text-center Facilitan la comprensión funcional de acciones dentro del sistema.
      .col-lg-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .tarjeta--boton.p-5.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema1/img46.svg', alt="" style="max-width: 90px").m-auto
          h3.text-center Miniaturas de contenidos audiovisuales
          p.mb-0.text-center Contextualizan la información y orientan la exploración del usuario.
      .col-lg-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .tarjeta--boton.p-5.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema1/img47.svg', alt="" style="max-width: 90px").m-auto
          h3.text-center Elementos vectoriales de interfaz
          p.mb-0.text-center Garantizan consistencia visual y adaptación a diferentes dispositivos.
      .col-lg-3.col-md-9(data-aos="zoom-in")
        .tarjeta--boton.p-5.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema1/img48.svg', alt="" style="max-width: 90px").m-auto
          h3.text-center Distribución compositiva equilibrada
          p.mb-0.text-center Organiza la información y mejora la claridad funcional de la pantalla.
    p.mb-5 Este análisis permite comprender que la integración articulada de recursos gráficos contribuye a consolidar una interfaz digital coherente con los objetivos comunicativos del producto multimedia y orientada a optimizar la interacción del usuario.
    .row.justify-content-center.align-items-center
      .col-xl
        .caja-tema1.ajuste-caja-tema1-1.mb-4.mb-lg-0(data-aos="fade-right")
          p.mb-0 La integración de la identidad gráfica, la definición del objetivo visual, la organización estructural de la interfaz, la aplicación de criterios cromáticos y tipográficos y la incorporación de recursos gráficos permiten consolidar entornos digitales coherentes y funcionales. Estos componentes se articulan para orientar la interacción del usuario, estructurar la información y favorecer la continuidad de la experiencia dentro del producto multimedia.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema1/img49.png', alt='').m-auto
    Separador
    #t_1_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.6 Construcción aplicada en productos multimedia
    p.mb-5 En el desarrollo de productos multimedia interactivos, la definición de una línea gráfica constituye un proceso fundamental para garantizar coherencia visual, claridad comunicativa y continuidad en la experiencia de interacción del usuario. En este videotutorial se presentará un ejercicio aplicado orientado a la construcción de una línea gráfica institucional, tomando como referencia criterios de identidad visual del SENA. A través de la demostración práctica se explicará la selección de la paleta cromática, la definición de estilos tipográficos, la organización compositiva de los elementos gráficos y la integración de recursos visuales dentro de una interfaz digital. Este recorrido permitirá comprender cómo los principios del diseño visual se concretan en decisiones técnicas que orientan la producción de contenidos multimedia funcionales y coherentes.

    figure(data-aos="zoom-in").mb-0
      .video.mb-1
        iframe(width="560" height="315" src="https://www.youtube.com/embed/9vqulWUg8dg?si=oQnIzIF7xJv7kQDM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption(data-aos="zoom-in") #[b  Video ] Diseño visual aplicado a una interfaz real. 
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
