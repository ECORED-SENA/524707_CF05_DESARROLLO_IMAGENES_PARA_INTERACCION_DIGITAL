export default {
  global: {
    Name: 'Diseño visual, UX y producción de contenidos multimedia',
    Description:
      'Este componente aborda los fundamentos del diseño visual, la experiencia de usuario (UX) y los procesos de producción gráfica, audiovisual y animada necesarios para integrar contenidos digitales en proyectos multimedia. El aprendiz comprenderá principios técnicos, narrativos y estéticos, y desarrollará <i>wireframes</i>, mockups, guiones y piezas visuales alineadas a las especificaciones técnicas del proyecto.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Desarrollo visual de interfaces digitales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Imagen corporativa y línea gráfica del proyecto',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Definición del objetivo visual de la interfaz',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Construcción de la estructura gráfica',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Aplicación de criterios cromáticos y tipográficos',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Integración de recursos gráficos',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo: 'Construcción aplicada en productos multimedia',
            hash: 't_1_6',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Construcción de la experiencia de interacción',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Identificación del usuario y tareas',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Organización estructural del contenido',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Representación estructural de la interfaz',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Diseño del flujo interactivo',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Producción de contenidos audiovisuales y animados',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Planificación narrativa y técnica',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Producción audiovisual aplicada',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Desarrollo de animaciones funcionales',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Integración preliminar de recursos multimedia',
            hash: 't_3_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Animación funcional',
      significado:
        'movimiento gráfico que indica cambios, acciones o transiciones en la interfaz.',
    },
    {
      termino: 'Arquitectura de información',
      significado:
        'proceso de clasificar y organizar contenidos para facilitar la navegación.',
    },
    {
      termino: 'Experiencia de usuario (UX)',
      significado:
        'percepción y respuesta del usuario al interactuar con un entorno digital.',
    },
    {
      termino: 'Flujo interactivo',
      significado:
        'secuencia de acciones que realiza el usuario dentro del sistema.',
    },
    {
      termino: 'Identidad visual',
      significado:
        'conjunto de elementos gráficos que permiten reconocer un proyecto multimedia.',
    },
    {
      termino: 'Interfaz digital',
      significado:
        'espacio gráfico donde el usuario interactúa con un sistema o producto multimedia.',
    },
    {
      termino: 'Jerarquía visual',
      significado:
        'organización de elementos según su importancia dentro de la pantalla.',
    },
    {
      termino: 'Línea gráfica',
      significado:
        'normas visuales que orientan el uso coherente de colores, tipografías e imágenes.',
    },
    {
      termino: 'Retícula',
      significado:
        'estructura de columnas y módulos que facilita ordenar el contenido.',
    },
    {
      termino: '<i>Wireframe</i>',
      significado:
        'esquema básico que representa la distribución funcional de una interfaz.',
    },
  ],
  referencias: [
    {
      referencia:
        'Adobe. (2024). Ayuda de Premiere Pro (escritorio). Centro de ayuda de Adobe.',
      link: '',
    },
    {
      referencia: 'Autodesk. (2026). Autodesk Latinoamérica.',
      link: '',
    },
    {
      referencia: 'Blender Foundation. (2026). Blender: software de animación.',
      link: '',
    },
    {
      referencia: 'Dragonframe. (2026). Tutoriales de Dragonframe.',
      link: 'https://www.dragonframe.com/es/tutorials/',
    },
    {
      referencia: 'Garrett, J. J. (2011). The elements of user experience.',
      link:
        'https://www.academia.edu/33276128/The_Elements_of_User_Experience_Jesse_James_Garrett',
    },
    {
      referencia:
        'ISO. (2019). ISO 9241-210: Ergonomics of human-system interaction — Human-centred design for interactive systems.',
      link: '',
    },
    {
      referencia:
        'Lasseter, J. (1987). Principles of traditional animation applied to 3D computer animation.',
      link: 'https://dl.acm.org/doi/10.1145/37401.37407',
    },
    {
      referencia:
        'Morgan, K. (2004). Information visualization: perception for design (2nd ed.).',
      link:
        'https://www.researchgate.net/publication/224285723_Information_Visualization_Perception_for_Design_Second_Edition',
    },
    {
      referencia:
        'World Wide Web Consortium (W3C). (2025, mayo 6). Web content accessibility guidelines (WCAG) 2.1.',
      link: 'https://www.w3.org/TR/WCAG21/',
    },
    {
      referencia:
        'Zambrano Carbo, L. E. (2015). La estructura de las historias: la propuesta de Robert McKee.',
      link:
        'https://www.academia.edu/11276761/4_LA_ESTRUCTURA_DE_LAS_HISTORIAS_LA_PROPUESTA_DE_ROBERT_MCKEE',
    },
    {
      referencia:
        'Zettl, H. (2017). Sight, sound, motion: applied media aesthetics.',
      link: 'https://faculty.cengage.com/works/9781305578906',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable del ecosistema',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Jorge David Barbosa Losada',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cielo Damaris Angulo Rodriguez',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Alejandro Delgado Acosta',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristhian Giovanni Gordillo Segura',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Juan Pablo Rojas Polania',
          cargo: 'Animador y productor audiovisual',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Carlos Eduardo Garavito Parada',
          cargo: 'Animador y productor audiovisual',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Maria Carolina Tamayo Lopez',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'German Acosta Ramos',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Aixa Natalia Sendoya Fernández',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Ricardo Oliveros Zambrano',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Anyerson Wilfredo Pizo Ossa',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
