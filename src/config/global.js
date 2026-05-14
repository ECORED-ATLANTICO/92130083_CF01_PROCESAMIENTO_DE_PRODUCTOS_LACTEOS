export default {
  global: {
    Name:
      'Buenas Prácticas de Manufactura BPM, empaque de s y elaboración de derivados lácteos.',
    Description:
      'Este componente formativo aborda los fundamentos para la producción de derivados lácteos fermentados, integrando Buenas Prácticas de Manufactura (BPM), higiene, seguridad industrial y uso adecuado de envases. Incluye procesos tecnológicos para elaborar productos como yogur, kumis y mantequilla, junto con la normatividad colombiana, puntos críticos de control y técnicas de verificación para asegurar la inocuidad y calidad.',
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
        titulo: 'BPM y normatividad en productos lácteos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Importancia de los derivados lácteos',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Concepto de BPM e inocuidad',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Principales normas en Colombia (visión práctica)',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Relación con POES y HACCP',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Condiciones sanitarias en la producción',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Instalaciones y equipos',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Higiene del personal',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Limpieza y desinfección (POES)',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Control de contaminación cruzada',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Manejo de materias primas (recepción y almacenamiento)',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Elaboración de derivados lácteos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Fermentados (yogur, kumis, suero costeño)',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Dulces (arequipe, manjar blanco, panelitas)',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Mantequilla (proceso básico)',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Empaque y control básico de calidad',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Tipos de envases y conservación',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Condiciones de almacenamiento',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Registros básicos de proceso',
            hash: 't_4_3',
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
      /*{
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },*/
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
  complementario: [
    {
      tema: '',
      referencia: '',
      tipo: '',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Bacterias lácticas',
      significado:
        'Microorganismos que fermentan la lactosa produciendo ácido láctico, utilizados en leches fermentadas.',
    },
    {
      termino: 'BPM (Buenas Prácticas de Manufactura)',
      significado:
        'Conjunto de principios y procedimientos para garantizar la inocuidad y calidad de los alimentos.',
    },
    {
      termino: '<em>Buttermilk</em>',
      significado:
        'Suero de mantequilla, líquido remanente después del batido de la crema.',
    },
    {
      termino: 'Cadena de frío',
      significado:
        'Sistema de mantenimiento de temperatura controlada desde la producción hasta el consumo.',
    },
    {
      termino: 'Contaminación cruzada',
      significado:
        'Transferencia de contaminantes de una fuente a un alimento inocuo.',
    },
    {
      termino: 'Crioscopia',
      significado:
        'Prueba que mide el punto de congelación de la leche, utilizada para detectar adulteración por adición de agua.',
    },
    {
      termino: 'Desinfección',
      significado:
        'Proceso que elimina microorganismos de superficies mediante agentes químicos o físicos.',
    },
    {
      termino: 'Envase primario',
      significado: 'Material en contacto directo con el alimento.',
    },
    {
      termino: 'EPP (Elementos de Protección Personal)',
      significado:
        'Equipos que protegen al trabajador contra riesgos laborales.',
    },
    {
      termino: 'ETA (Enfermedades Transmitidas por Alimentos)',
      significado:
        'Enfermedades causadas por consumo de alimentos contaminados.',
    },
    {
      termino: 'Fermentación láctica',
      significado:
        'Proceso metabólico de conversión de lactosa en ácido láctico.',
    },
    {
      termino: 'HACCP',
      significado:
        'Sistema de análisis de peligros y puntos críticos de control.',
    },
    {
      termino: 'Inocuidad',
      significado: 'Garantía de que un alimento no causará daño al consumidor.',
    },
    {
      termino: 'Limpieza',
      significado:
        'Eliminación de suciedad visible mediante acción mecánica, agua y detergente.',
    },
    {
      termino: 'Manipulador de alimentos',
      significado:
        'Toda persona que interviene directamente en la elaboración, envasado, almacenamiento, transporte o expendio de alimentos.',
    },
    {
      termino: 'No conformidad',
      significado: 'Incumplimiento de un requisito especificado.',
    },
    {
      termino: 'PCC (Punto Crítico de Control)',
      significado:
        'Etapa del proceso donde se puede aplicar una medida de control esencial para prevenir, eliminar o reducir un peligro.',
    },
    {
      termino: 'PEPS (Primero en Entrar, Primero en Salir)',
      significado:
        'Método de rotación de inventarios que utiliza primero los productos más antiguos.',
    },
    {
      termino: 'POES (Procedimientos Operativos Estandarizados de Saneamiento)',
      significado:
        'Protocolos escritos que describen cómo llevar a cabo las tareas de limpieza y desinfección de manera estandarizada.',
    },
    {
      termino: 'Sinéresis',
      significado:
        'Separación de suero en productos fermentados, defecto textural no deseado.',
    },
  ],
  referencias: [
    {
      referencia:
        'COLOMBIA. CONGRESO DE LA REPÚBLICA. (1979). <em>Ley 9 de 1979. Por la cual se dictan Medidas Sanitarias</em>. Diario Oficial No. 35.308.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=1177',
    },
    {
      referencia:
        'COLOMBIA. MINISTERIO DE SALUD Y PROTECCIÓN SOCIAL. (2013). <em>Resolución 2674 de 2013. Por la cual se reglamenta el artículo 126 del Decreto-ley 019 de 2012 y se dictan otras disposiciones</em>.',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/resolucion-2674-de-2013.pdf',
    },
    {
      referencia:
        'COLOMBIA. MINISTERIO DE SALUD Y PROTECCIÓN SOCIAL. (2006). <em>Decreto 616 de 2006. Por el cual se reglamenta la leche cruda, la leche pasteurizada y los productos lácteos</em>.',
      link:
        'https://www.invima.gov.co/biblioteca/decreto-616-2006-requisitos-leche-consumo-humano',
    },
    {
      referencia:
        'COLOMBIA. MINISTERIO DE SALUD Y PROTECCIÓN SOCIAL. (2014). <em>Resolución 412 de 2014. Por la cual se establece el sistema de inspección, vigilancia y control para la leche cruda y productos lácteos</em>.',
      link:
        'https://convergenciacnoa.org/wp-content/uploads/2017/07/Resolucion-412.pdf',
    },
    {
      referencia:
        'COLOMBIA. MINISTERIO DE SALUD. (1997). <em>Decreto 3075 de 1997. Por el cual se reglamenta parcialmente la Ley 9 de 1979 y se dictan otras disposiciones</em>.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=3337',
    },
    {
      referencia:
        'INSTITUTO COLOMBIANO DE NORMAS TÉCNICAS Y CERTIFICACIÓN (ICONTEC). (2015). <em>NTC 805: Yogur. Especificaciones</em>. Bogotá: ICONTEC.',
      link: '',
    },
    {
      referencia:
        'INSTITUTO COLOMBIANO DE NORMAS TÉCNICAS Y CERTIFICACIÓN (ICONTEC). (2016). <em>NTC 1507: Kumis. Especificaciones</em>. Bogotá: ICONTEC.',
      link: '',
    },
    {
      referencia:
        'INSTITUTO COLOMBIANO DE NORMAS TÉCNICAS Y CERTIFICACIÓN (ICONTEC). (2017). <em>NTC 443: Mantequilla. Especificaciones</em>. Bogotá: ICONTEC.',
      link: '',
    },
    {
      referencia:
        'INSTITUTO COLOMBIANO DE NORMAS TÉCNICAS Y CERTIFICACIÓN (ICONTEC). (2018). <em>NTC 1307: Arequipe. Especificaciones</em>. Bogotá: ICONTEC.',
      link: '',
    },
    {
      referencia:
        'INSTITUTO COLOMBIANO DE NORMAS TÉCNICAS Y CERTIFICACIÓN (ICONTEC). (2005). <em>NTC 4973: Suero costeño. Especificaciones</em>. Bogotá: ICONTEC.',
      link: '',
    },
    {
      referencia:
        'INSTITUTO NACIONAL DE VIGILANCIA DE MEDICAMENTOS Y ALIMENTOS (INVIMA). (2023). <em>Lineamientos para la implementación de las Buenas Prácticas de Manufactura (BPM)</em>.',
      link:
        'https://www.invima.gov.co/biblioteca/lineamientos-certificados-bpm-cvl-registro-sanitario',
    },
    {
      referencia:
        'ORGANIZACIÓN DE LAS NACIONES UNIDAS PARA LA ALIMENTACIÓN Y LA AGRICULTURA (FAO). (2016). <em>Sistemas de Calidad e Inocuidad de los Alimentos: Manual de capacitación sobre higiene de los alimentos y sobre el sistema de Análisis de Peligros y de Puntos Críticos de Control (APPCC)</em>.',
      link: 'https://www.fao.org/3/y5307s/y5307s00.htm',
    },
    {
      referencia:
        'SERVICIO NACIONAL DE APRENDIZAJE (SENA). (2026). <em>Manual de Buenas Prácticas de Manufactura para la industria láctea</em>. Repositorio SENA.',
      link: '',
    },
    {
      referencia:
        'TAMIME, A. Y., & ROBINSON, R. K. (2007). <em>Yogur: ciencia y tecnología</em>. Zaragoza: Acribia.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Responsable del Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Miguel de Jesús Paredes Maestre',
          cargo: 'Responsable de la línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Yina Paola Castro Zarate',
          cargo: 'Experto Temático',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jesus Antonio Vecino Valero',
          cargo: 'Evaluador Instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Luis Gabriel Urueta',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Alexander Donado Molinares',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Alexander Rafael Acosta Bedoya',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Laura Daniela Burgos Rueda',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jonathan Adié Villafañe',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Karine Isabel Ospino Fritz',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
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
