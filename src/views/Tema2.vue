<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Construcción de la experiencia de interacción
    p.mb-3 La construcción de la experiencia de interacción constituye un proceso fundamental en el desarrollo de productos multimedia, ya que determina la forma en que el usuario comprende el sistema, accede a la información y ejecuta acciones dentro del entorno digital. Esta experiencia no depende únicamente de la apariencia gráfica de la interfaz, sino que integra la organización funcional del contenido, la claridad en las rutas de navegación y la coherencia del comportamiento interactivo del producto.
    .row.align-items-center.justify-content-center.mb-5
      .col-xl
        .caja-tema1.mb-3(data-aos="fade-right")
          p.mb-0 Desde una perspectiva técnica, el diseño de la interacción implica #[b anticipar las decisiones que realizará el usuario durante su recorrido, prever posibles dificultades de uso y estructurar soluciones que faciliten el cumplimiento de tareas dentro del entorno multimedia].
        p.mb-5.mb-lg-0 En contextos reales de producción digital, este proceso se relaciona con la definición de escenarios de uso, la identificación de necesidades específicas y la organización progresiva de la información. Estos factores contribuyen a consolidar experiencias comprensibles, funcionales y orientadas a la continuidad del uso del sistema.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema2/img1.png', alt='').m-auto
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/img2.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Cuando la estructura de interacción se define de manera clara y consistente, se favorece la permanencia del usuario dentro del producto digital y se optimiza la ejecución de acciones como la exploración de contenidos, la selección de opciones o la gestión de funciones interactivas. En este sentido, la experiencia de interacción se estructura a partir de diversos componentes que orientan la organización funcional del entorno multimedia.
    p.mb-5 A continuación, se presenta un video que aborda los elementos esenciales de la experiencia de interacción en el diseño de productos digitales, con el propósito de comprender su impacto en la organización, navegación y uso de entornos multimedia.
    figure(data-aos="zoom-in").mb-5
      .video.mb-1
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption(data-aos="zoom-in") #[b Video].    
    .bg-2
      .px-5
        p.mb-5 A partir de un ejemplo aplicado en la plataforma digital de contenidos <i>Aura Flow</i>, es posible comprender cómo la organización visual de la interfaz contribuye a estructurar la interacción del usuario. En este entorno multimedia, la distribución funcional de los espacios facilita la exploración de contenidos, la ejecución de acciones de reproducción y la continuidad del recorrido dentro del sistema. A continuación, se describen las principales zonas funcionales y su aporte a la experiencia de navegación.
        .row.justify-content-center.mb-5
          .col-xl-8
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Figura 6.
              span Estructura funcional de la interfaz digital
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/img3.png', alt='Imagen  de estructura funcional de interfaz digital con menú lateral de navegación, área central con tarjetas de contenido, elementos gráficos interactivos y barra inferior de control de reproducción.').m-auto
        .row.align-items-center.mb-5
          .col-xl-auto
            figure(data-aos="fade-right").d-none.d-xl-block
              img(src="@/assets/curso/tema2/img4.png", alt="" ).m-auto
          .col-xl
            AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left")
              .row(titulo="Menú lateral").ajuste-cajaAcordion
                p.mb-3 Agrupa las opciones de acceso a bibliotecas, listas de reproducción y configuraciones generales. Esta organización permite localizar con rapidez las funciones principales del sistema y facilita el inicio del recorrido dentro de la interfaz digital.
              .row(titulo="Área central").ajuste-cajaAcordion
                p.mb-3 Integra tarjetas visuales que presentan recomendaciones, tendencias y listados temáticos. La disposición jerárquica de estos elementos favorece la exploración progresiva de la información y permite identificar con claridad las acciones disponibles, como reproducir contenidos o desplazarse entre secciones.
              .row(titulo="Elementos gráficos interactivos").ajuste-cajaAcordion
                p.mb-3 Incluyen botones de acción, iconos funcionales y miniaturas visuales que apoyan la interpretación del entorno digital. Estos recursos contribuyen a orientar la toma de decisiones durante la navegación y fortalecen la coherencia comunicativa del sistema multimedia.
              .row(titulo="Barra de reproducción").ajuste-cajaAcordion
                p.mb-3 Incorpora funciones operativas como pausar, avanzar o ajustar el volumen. Su ubicación fija dentro de la pantalla garantiza continuidad en la interacción, ya que permite gestionar el contenido sin interrumpir el recorrido por la interfaz.
              .row(titulo="Panel").ajuste-cajaAcordion
                p.mb-3 Espacio complementario de la interfaz ubicado en el costado derecho de la pantalla. Allí se agrupan elementos informativos y de interacción secundaria, como actividad reciente, sugerencias de contenido, notificaciones o accesos rápidos a funciones del sistema.
    p.mb-0 La articulación entre organización funcional, rutas de navegación claras y respuestas interactivas consistentes permite consolidar una experiencia de interacción comprensible y alineada con los objetivos comunicativos del producto multimedia. Estos principios se desarrollan posteriormente en procesos aplicados de diseño de experiencia de usuario, en los cuales se integran la definición del usuario objetivo, la identificación de tareas, la construcción de arquitecturas de información, el diseño de flujos de navegación y la elaboración de <i>wireframes</i> como representaciones estructurales de la interfaz.
    Separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.1 Identificación del usuario y tareas
    p.mb-3 El diseño de la experiencia de interacción inicia con la caracterización del usuario potencial, proceso que permite comprender sus necesidades, expectativas y formas de relacionarse con el entorno digital. #[b La definición de perfiles de uso implica analizar variables como la edad, el nivel de experiencia tecnológica, los objetivos de interacción, el contexto de acceso y las condiciones de conectividad]. Estos factores inciden directamente en la organización funcional del sistema y en la claridad del recorrido dentro de la interfaz.
    .row.align-items-center.justify-content-center.mb-5
      .col-xl
        .caja-tema1.mb-3(data-aos="fade-right")
          p En proyectos multimedia aplicados, la identificación de usuarios se materializa mediante la construcción de perfiles o arquetipos que representan comportamientos frecuentes. Estos referentes permiten anticipar las acciones principales que el usuario realizará dentro del producto digital, tales como:
          ul.fa-ul.estilo___ul.mb-0
            li.mb-0
              span.fa-li
                i.fas.fa-arrow-alt-circle-right
              | Consultar información.
            li.mb-0
              span.fa-li
                i.fas.fa-arrow-alt-circle-right
              | Acceder a contenidos audiovisuales.
            li.mb-0
              span.fa-li
                i.fas.fa-arrow-alt-circle-right
              | Gestionar funciones interactivas.
            li.mb-0
              span.fa-li
                i.fas.fa-arrow-alt-circle-right
              | Completar procesos específicos dentro del sistema.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema2/img5.png', alt='').m-auto
    p.mb-5 De esta manera, se favorece la planificación estratégica de la interacción y la priorización de funciones dentro del entorno multimedia. A continuación, se sintetizan los aspectos principales asociados al proceso de identificación del usuario y definición de tareas dentro del diseño de la experiencia de interacción.
    .bg-slider.mb-5
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                figure
                  img(src='@/assets/curso/tema2/img6.png', alt='' style="max-width: 500px").m-auto
              .col-xl-6
                h4 Caracterización del usuario
                p.mb-0 Permite comprender necesidades, expectativas y condiciones de uso del entorno digital.
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                figure
                  img(src='@/assets/curso/tema2/img7.png', alt='' style="max-width: 500px").m-auto
              .col-xl-6
                h4 Variables de perfil
                p.mb-0 Orientan decisiones relacionadas con edad, experiencia tecnológica, objetivos de interacción y conectividad.
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                figure
                  img(src='@/assets/curso/tema2/img8.png', alt='' style="max-width: 500px").m-auto
              .col-xl-6
                h4 Arquetipos de uso
                p.mb-0 Facilitan la anticipación de comportamientos y acciones frecuentes dentro del producto multimedia.
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                figure
                  img(src='@/assets/curso/tema2/img9.png', alt='' style="max-width: 500px").m-auto
              .col-xl-6
                h4 Definición de tareas
                p.mb-0 Establece prioridades funcionales y organiza los niveles de navegación dentro de la interfaz.
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                figure
                  img(src='@/assets/curso/tema2/img10.png', alt='' style="max-width: 500px").m-auto
              .col-xl-6
                h4 Contexto de acceso
                p.mb-0 Incide en la simplificación de rutas de interacción y en la optimización de la estructura del sistema.
    .bg-2
      .px-5
        .row.justify-content-center.align-items-center.mb-0
          .col-xl-7
            .caja-tema1-2.ajuste-caja-tema1-3.mb-3(data-aos="fade-right")
              p.mb-0 Por ejemplo, en una plataforma de contenidos como <i>Aura Flow</i>, puede identificarse un perfil de usuario que accede con el objetivo de explorar recomendaciones musicales y reproducir contenidos de manera inmediata. Esta característica influye en la priorización de tareas relacionadas con la búsqueda, la selección de contenido y la gestión de la reproducción, lo cual orienta la organización funcional de la interfaz y la estructuración de los flujos de navegación.
            .row.justify-content-center.align-items-center
              .col-xl-auto(data-aos="zoom-in")
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/tema2/img11.svg', alt='' style="max-width: 90px")
              .col-xl
                p.mb-4.mb-lg-0 Asimismo, la claridad en la definición de tareas facilita la organización funcional del sistema, ya que permite establecer qué acciones deben ocupar mayor jerarquía, cuáles requieren acceso directo y cuáles pueden ubicarse en niveles secundarios de navegación. Esta organización contribuye a optimizar la interacción y a fortalecer la continuidad del uso del producto digital.
          .col-xl-5
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Figura 7.
              span Identificación de perfil de usuario en interfaz digital
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/img12.png', alt='Ilustración de identificación de perfil de usuario en interfaz digital que integra representación del usuario, acciones principales de navegación.').m-auto
        Separador
        #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.2 Organización estructural del contenido
        p.mb-5 La organización estructural del contenido se desarrolla mediante la aplicación de principios de arquitectura de información, disciplina orientada a #[b clasificar, agrupar y jerarquizar los contenidos] dentro de un producto digital. Una arquitectura adecuada contribuye a que el usuario comprenda la lógica del sistema y pueda desplazarse de manera coherente entre las diferentes secciones, lo cual favorece la continuidad de la interacción y la ejecución eficiente de las tareas.
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema2/img13.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 En términos funcionales, este proceso implica definir #[b categorías principales, subniveles de contenido y relaciones entre las distintas áreas del producto multimedia]. La secuencia de navegación se construye considerando el orden en que el usuario necesita acceder a la información para cumplir sus objetivos, aspecto que permite estructurar recorridos claros, progresivos y orientados a la acción dentro del entorno digital.
    .caja-tema1-3.mb-5(data-aos="flip-up")
      .row.align-items-center
        .col-xl.col-md-10.order-2.order-lg-1
          p.mb-0 Asimismo, la organización estructural debe considerar #[b la profundidad de navegación, evitando rutas excesivamente extensas que puedan generar desorientación o interrupciones en el flujo de interacción]. La claridad en la jerarquía de contenidos favorece la permanencia del usuario y contribuye al logro eficiente de las tareas propuestas dentro del sistema multimedia.
        .col-xl-auto.col-md-2.order-1.order-lg-2.mb-3.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/tema1/img40.svg', alt='' style="width: 85px").m-auto
    p.mb-5 Los componentes fundamentales relacionados con la organización estructural del contenido y su función dentro de la arquitectura de información.
    .bg-slider.mb-5
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Arquitectura de información
                p.mb-0 Permite clasificar y jerarquizar los contenidos para facilitar la comprensión global del sistema.
              .col-xl-6
                figure
                  img(src='@/assets/curso/tema2/img15.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Categorías principales
                p.mb-0 Organizan los temas centrales y estructuran el acceso inicial a la información dentro del producto digital.
              .col-xl-6
                figure
                  img(src='@/assets/curso/tema2/img16.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Subniveles de contenido
                p.mb-0 Profundizan la información y establecen relaciones funcionales entre las distintas secciones.
              .col-xl-6
                figure
                  img(src='@/assets/curso/tema2/img17.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Secuencia de navegación
                p.mb-0 Define el orden lógico de acceso a los contenidos según los objetivos del usuario.
              .col-xl-6
                figure
                  img(src='@/assets/curso/tema2/img18.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Profundidad de navegación
                p.mb-0 Regula la extensión de las rutas de interacción para evitar desorientación y sobrecarga funcional.
              .col-xl-6
                figure
                  img(src='@/assets/curso/tema2/img19.png', alt='' style="max-width: 500px").m-auto
    .bg-2
      .px-5
        .row.justify-content-center.align-items-center.mb-0
          .col-xl-7
            .caja-tema1-2.ajuste-caja-tema1-3.mb-3(data-aos="fade-right")
              p.mb-0 La adecuada organización estructural del contenido permite consolidar entornos digitales coherentes, comprensibles y orientados a facilitar la experiencia de interacción. Estos principios constituyen la base para la construcción de mapas de sitio, flujos de navegación y representaciones estructurales que se desarrollan en los procesos de diseño de experiencia de usuario.
            p.mb-4.mb-lg-0 Un ejemplo aplicado puede reconocerse en la plataforma digital de contenidos <i>Aura Flow</i>, en la cual la arquitectura de información se organiza a partir de categorías principales como biblioteca, recomendaciones, listas personalizadas y exploración de contenidos. Estas secciones se integran en el menú de navegación y permiten estructurar el acceso progresivo a la información. A su vez, los subniveles de contenido se presentan mediante tarjetas jerarquizadas dentro del área central de la interfaz, lo que facilita la comprensión del sistema y optimiza el recorrido de interacción.
          .col-xl-5
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Figura 8.
              span Interfaz de recomendaciones personalizadas
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/img20.png', alt='Interfaz digital de recomendaciones personalizadas con menú de navegación, categorías principales y tarjetas jerarquizadas de contenidos audiovisuales. ').m-auto
        Separador
        #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.3 Representación estructural de la interfaz
        p.mb-5 La representación estructural de la interfaz se desarrolla mediante la elaboración de <i>wireframes</i>, los cuales constituyen esquemas funcionales que permiten definir la distribución de los elementos antes de su desarrollo gráfico definitivo. Estos recursos facilitan la organización preliminar de menús, botones, áreas de contenido y componentes interactivos, lo que contribuye a estructurar de manera coherente la experiencia de interacción dentro del producto multimedia.
        .row.align-items-center.justify-content-center.mb-5
          .col-xl.mb-4.mb-lg-0(data-aos="fade-right")
            .caja-tema1
              p.mb-0 En la práctica profesional, los #[i wireframes] favorecen la comunicación entre diseñadores, desarrolladores y demás integrantes del equipo de producción, ya que permiten validar la lógica de interacción antes de iniciar la fase de implementación técnica. Asimismo, posibilitan identificar posibles dificultades relacionadas con la comprensión del contenido, la accesibilidad de las funciones y la continuidad en el recorrido del usuario dentro del entorno digital.
          .col-xl-auto(data-aos="fade-left")
            figure
              img(src='@/assets/curso/tema2/img21.png', alt='').m-auto
    p.mb-5.text-center Los aspectos fundamentales asociados a la representación estructural de la interfaz y su aporte dentro del proceso de diseño interactivo son: 
    .bg-carrusel
      .px-5
        SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in").mb-5
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema2/img23.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Wireframes
            p.mb-0.text-center Permiten definir la distribución funcional de los componentes antes del desarrollo gráfico final.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema2/img24.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Organización preliminar
            p.mb-0.text-center Facilita la ubicación estratégica de menús, contenidos y elementos interactivos dentro de la interfaz.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema2/img25.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Validación de la interacción
            p.mb-0.text-center Contribuye a evaluar la lógica de uso y el recorrido del usuario antes de la implementación técnica.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema2/img26.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Comunicación del equipo
            p.mb-0.text-center Favorece la articulación entre diseñadores, desarrolladores y demás actores del proyecto multimedia.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema2/img27.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Relación estructura-funcionalidad
            p.mb-0.text-center Garantiza coherencia entre la disposición de los elementos y las tareas que el usuario debe ejecutar.
        .caja-tema2.mb-5(data-aos="flip-up")
          .row.align-items-center
            .col-xl-auto.col-md-2.mb-3.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/tema2/img28.svg', alt='' style="width: 85px").m-auto
            .col-xl.col-md-10
              p.mb-0 La representación estructural mediante #[i wireframes] constituye una etapa clave en la construcción de la experiencia de usuario, ya que permite anticipar decisiones de diseño, optimizar los flujos de navegación y consolidar la organización funcional del producto multimedia antes de su desarrollo visual definitivo.
    p.mb-5 Un ejemplo aplicado puede reconocerse en la planificación estructural de la interfaz de la plataforma de contenidos audiovisuales #[i Aura Flow]. En este caso, un #[i wireframe] permite definir la ubicación del menú lateral de navegación, la disposición jerárquica de las tarjetas de contenido en el área central y la integración de la barra de control multimedia en la franja inferior de la pantalla. Esta representación facilita analizar si la organización funcional de los componentes favorece la exploración de contenidos, la ejecución de acciones de reproducción y la continuidad de la interacción del usuario.
    .bg-2
      .px-5
        .row.justify-content-center.mb-5
          .col-xl-8
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Figura 9.
              span #[i Wireframe] estructural de la interfaz de la plataforma <i>Aura Flow</i>
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/img29.png', alt='Wireframe de interfaz digital que presenta esquema estructural con menú lateral, área central de contenidos y barra inferior de control multimedia. ').m-auto
        p.mb-0 En esta etapa, la relación entre estructura y funcionalidad adquiere especial relevancia, ya que la disposición de los elementos debe responder a las tareas que el usuario necesita realizar. Garantizar que las funciones estén disponibles de manera clara y organizada contribuye a optimizar la interacción y a fortalecer la usabilidad del producto digital.
    Separador
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.4 Diseño del flujo interactivo
    p.mb-5 El diseño del flujo interactivo describe la secuencia de acciones y decisiones que el usuario realiza durante su recorrido dentro del producto multimedia. Este proceso implica establecer rutas claras de navegación, prever transiciones coherentes entre pantallas y definir el comportamiento del sistema frente a las distintas acciones ejecutadas, con el fin de garantizar continuidad en la interacción.
    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/img30.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En contextos reales de producción digital, el flujo interactivo se representa mediante #[b diagramas funcionales que permiten identificar los posibles caminos de uso, incluyendo accesos directos, retornos, confirmaciones y procesos alternativos]. Esta planificación facilita el análisis de la coherencia estructural del sistema y contribuye a optimizar la experiencia de uso desde etapas tempranas del diseño.
    p.mb-5.text-center Los  componentes esenciales relacionados con el diseño del flujo interactivo y su función dentro de la experiencia de interacción.
    .bg-carrusel
      .px-5
        SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in").mb-5
          .tarjeta.color-acento-botones.ajuste--tarjeta-carrusel
            .row.justify-content-center.mb-3
              .col-12
                h4.mb-3.estilo-text Secuencia de acciones
            p.mb-5.text-center Define el orden lógico de las decisiones y tareas que el usuario realiza durante su recorrido.
          .tarjeta.color-acento-botones.ajuste--tarjeta-carrusel
            .row.justify-content-center.mb-3
              .col-12
                h4.mb-3.estilo-text Rutas de navegación
            p.mb-5.text-center Permiten desplazamientos coherentes entre secciones o pantallas del producto digital.
          .tarjeta.color-acento-botones.ajuste--tarjeta-carrusel
            .row.justify-content-center.mb-3
              .col-12
                h4.mb-3.estilo-text Transiciones del sistema
            p.mb-5.text-center Establecen continuidad funcional entre diferentes estados de interacción.
          .tarjeta.color-acento-botones.ajuste--tarjeta-carrusel
            .row.justify-content-center.mb-3
              .col-12
                h4.mb-3.estilo-text Caminos alternativos
            p.mb-5.text-center Facilitan accesos directos, retornos y confirmaciones durante el uso del entorno multimedia.
          .tarjeta.color-acento-botones.ajuste--tarjeta-carrusel
            .row.justify-content-center.mb-3
              .col-12
                h4.mb-3.estilo-text Coherencia estructural
            p.mb-5.text-center Garantiza que el sistema resulte organizado, comprensible y orientado a la acción del usuario.
        p.mb-5 La adecuada planificación del flujo interactivo permite consolidar experiencias de uso progresivas y consistentes. Asimismo, estos principios se integran en la elaboración de diagramas de navegación y representaciones estructurales que apoyan el diseño de la experiencia de usuario dentro de los procesos de producción multimedia.
        .caja-tema1-3.mb-5(data-aos="flip-up")
          .row.align-items-center
            .col-xl.col-md-10.order-2.order-lg-1
              p.mb-0 Un ejemplo aplicado puede reconocerse en la plataforma digital de contenidos <i>Aura Flow</i>, en la cual el flujo interactivo inicia con la exploración de categorías o recomendaciones destacadas en la pantalla principal. Posteriormente, el usuario puede acceder a listados de contenidos, seleccionar una pieza audiovisual y activar funciones de reproducción mediante la barra de control multimedia. Asimismo, el sistema permite retornar a secciones previas, continuar la exploración o acceder a nuevas sugerencias, lo que evidencia la existencia de rutas alternativas dentro del entorno digital.
            .col-xl-auto.col-md-2.order-1.order-lg-2.mb-3.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/tema1/img40.svg', alt='' style="width: 85px").m-auto
    .bg-3
      .px-5
        .row.justify-content-center.mb-5
          .col-xl-6
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Figura 10.
              span Diagrama de flujo del proceso de navegación en <i>Aura Flow</i>
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/img32.svg', alt='Diagrama de flujo interactivo de navegación con secuencia de acciones del usuario, rutas de acceso a contenidos y procesos de reproducción multimedia.').m-auto
    .row.align-items-center.justify-content-center.mb-5
      .col-xl.mb-4.mb-lg-0(data-aos="fade-right")
        .caja-tema1
          p.mb-0 La conexión lógica entre estas acciones contribuye a evitar interrupciones en el recorrido del usuario y fortalece la comprensión del funcionamiento general del sistema. De esta manera, el diseño del flujo interactivo permite que el producto multimedia se configure como un entorno organizado, predecible y funcional, lo cual favorece el cumplimiento de los objetivos comunicativos y formativos del proyecto.
      .col-xl-auto(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema2/img33.png', alt='').m-auto
    p.mb-5 En este video se desarrollará la construcción de la experiencia de usuario y el flujo de navegación dentro de un producto multimedia, integrando criterios de arquitectura de información, análisis de tareas y representación visual mediante <i>wireframes</i>. A través de un ejercicio práctico en tiempo real, se estructurará la propuesta UX desde la definición del usuario objetivo hasta la explicación de las decisiones de usabilidad que orientan la organización funcional del entorno digital.
    figure(data-aos="zoom-in").mb-0
      .video.mb-1
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption(data-aos="zoom-in") #[b Video]. Construcción de experiencia de usuario (UX) y flujo de navegación.
</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
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
