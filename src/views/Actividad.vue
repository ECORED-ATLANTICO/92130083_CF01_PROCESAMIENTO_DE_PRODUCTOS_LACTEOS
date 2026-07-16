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
      tema:
        'Verificando mis saberes: Cuestionario sobre BPM y derivados lácteos',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> evaluar la comprensión de los conceptos fundamentales sobre Buenas Prácticas de Manufactura, normatividad, procesos de elaboración de derivados lácteos y seguridad industrial, mediante la aplicación de un cuestionario de verdadero/falso con retroalimentación.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto: '¿Qué son las Buenas Prácticas de Manufactura (BPM)?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Un sistema de control de plagas exclusivo para plantas lácteas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El conjunto de principios y procedimientos que garantizan que los alimentos se produzcan en condiciones higiénicas adecuadas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Un tipo de envase especial para derivados lácteos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Un método de fermentación para yogur y kumis.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Correcto. Las BPM son la base fundamental para garantizar la inocuidad de los alimentos en toda la cadena productiva.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto:
            '¿Para qué producto específico establece requisitos el Decreto 616 de 2006?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Para todas las fábricas de alimentos en colombia.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Exclusivamente para la elaboración de yogur y kumis.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Para leche cruda, leche pasteurizada y productos lácteos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Para los sistemas de limpieza CIP en la industria alimentaria.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Muy bien. El Decreto 616 de 2006 es específico para leche cruda, leche pasteurizada y productos lácteos; la norma general para fábricas de alimentos es la Resolución 2674 de 2013.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto:
            '¿Cuál es la función principal de los POES (Procedimientos Operativos Estandarizados de Saneamiento)?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Describir detalladamente cómo realizar la limpieza y desinfección de equipos, superficies y áreas.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Establecer los parámetros de calidad para la leche cruda.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Definir el código de colores para la separación de residuos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Controlar la temperatura durante la pasteurización.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Correcto. Los POES son documentos fundamentales dentro de las BPM que estandarizan las tareas de saneamiento.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto: '¿En qué consiste el método de rotación PEPS?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Pasteurización estándar para productos sanos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                '"Primero en entrar, primero en salir", para evitar el vencimiento de materias primas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Procedimiento especial para el procesamiento de suero.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Prueba de estabilidad para productos sinéresis.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Así es. Este método organiza los productos en estanterías para que los más antiguos se utilicen primero.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto:
            '¿Cuál es la concentración y el tiempo de contacto adecuados para el hipoclorito de sodio como desinfectante en superficies en contacto con alimentos?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '50-100 ppm durante 2-3 minutos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '500-1000 ppm durante 30 minutos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '100-200 ppm durante 5-10 minutos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: '10-20 ppm durante 1 minuto.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Correcto. Usted ha aprendido las concentraciones y tiempos adecuados para los desinfectantes más comunes en la industria láctea.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto:
            '¿Cuáles son las bacterias específicas que debe contener el yogur hasta el momento del consumo y cuál es su recuento mínimo según la NTC 805?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                '<em>Lactobacillus acidophilus</em> y <em>Bifidobacterium</em> con 10⁵ UFC/g.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                '<em>Lactobacillus bulgaricus</em> y <em>Streptococcus thermophilus</em> con 10⁷ UFC/g.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                '<em>Propionibacterium shermanii</em> y <em>Leuconostoc</em> con 10⁶ UFC/g.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                '<em>Kluyveromyces marxianus</em> y <em>Saccharomyces</em> con 10⁴ UFC/g.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Muy bien. Esta es la especificación de la NTC 805 para yogur, garantizando sus propiedades probióticas.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto: '¿Cuál es la principal diferencia entre el kumis y el yogur?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El kumis se elabora con leche de cabra y el yogur con leche de vaca.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El kumis contiene levaduras y un contenido alcohólico (máximo 1,5 % v/v), además de fermentar a temperatura ambiente.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'El kumis no requiere pasteurización, mientras que el yogur sí.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El kumis tiene una textura más firme que el yogur.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente. Usted ha identificado correctamente las características distintivas del kumis frente al yogur.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto:
            '¿Cuál es la verdadera función del bicarbonato de sodio en la elaboración de arequipe?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Aumentar el contenido de azúcar y hacer el producto más dulce.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Actuar como conservante para prolongar la vida útil.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Neutralizar la acidez de la leche y evitar que se corte durante la concentración.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Dar color característico al arequipe.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Correcto. El bicarbonato neutraliza la acidez de la leche y evita que se corte durante la concentración, no endulza el producto.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto:
            'Según la NTC 443, ¿cuál es el contenido mínimo de grasa butírica y la humedad máxima que debe tener la mantequilla?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Grasa butírica mínima 70 % y humedad máxima 20 %.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Grasa butírica mínima 80 % y humedad máxima 16 %.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Grasa butírica mínima 85 % y humedad máxima 10 %.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Grasa butírica mínima 90 % y humedad máxima 5 %.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Muy bien. La NTC 443 específica para la mantequilla una grasa butírica mínima de 80 % y una humedad máxima de 16 %.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto:
            '¿Los elementos de protección personal (EPP) son necesarios en áreas de procesamiento de lácteos?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'No, porque la leche es un alimento natural y no representa riesgos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Sí, pero solo el calzado antideslizante.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Sí, solo cuando se manipulan productos químicos de limpieza.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Sí, son obligatorios para proteger al trabajador de riesgos físicos, químicos y biológicos.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Muy bien. Los EPP son obligatorios en toda planta de alimentos para proteger al trabajador de riesgos físicos, químicos y biológicos.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto:
            '¿Cuál es el proceso de elaboración y las condiciones de conservación de las panelitas de leche?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Se hornean a alta temperatura y se conservan en refrigeración.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Se concentra la mezcla de leche y azúcar hasta alcanzar un punto de cristalización controlada, y se conservan a temperatura ambiente en lugar seco.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Se fermentan con bacterias lácticas y se conservan en salmuera.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Se fríen en aceite caliente y se conservan en envases herméticos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Correcto, la reacción de Maillard es una reacción química entre aminoácidos y azúcares que ocurre con el calor, responsable del color dorado y el sabor tostado en productos horneados. La disolución del azúcar glass es una propiedad física.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto:
            '¿El sistema HACCP (Análisis de Peligros y Puntos Críticos de Control) puede implementarse sin tener una base sólida de BPM y POES?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Sí, el HACCP es independiente y puede aplicarse sin requisitos previos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Sí, pero solo para productos lácteos fermentados.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'No, las BPM y los POES son prerrequisitos fundamentales; sin ellos, el sistema HACCP no funciona.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'No, pero el HACCP puede reemplazar completamente a las BPM.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Correcto. Las BPM y los POES son prerrequisitos fundamentales; sin ellos, el sistema HACCP no funciona.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto:
            '¿Qué es el suero costeño y de dónde proviene tradicionalmente?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Un queso madurado de pasta dura, originario de la región Andina.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Un producto fermentado salado, obtenido a partir de suero de leche o leche descremada, tradicional de la costa Caribe colombiana.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Una bebida láctea endulzada con bajo contenido de grasa.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Un tipo de mantequilla clarificada típica del Caribe.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Correcto. El suero costeño es un derivado lácteo fermentado típico de la región Caribe.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto:
            '¿La Resolución 2674 de 2013 derogó completamente la Ley 9 de 1979?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Sí, la Ley 9 de 1979 fue completamente derogada por la Resolución 2674 de 2013.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Sí, la Resolución 2674 de 2013 es la única norma vigente en materia de alimentos en Colombia.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'No, la Ley 9 de 1979 sigue vigente como marco general; la Resolución 2674 de 2013 derogó parcialmente el Decreto 3075 de 1997.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'No, la Ley 9 de 1979 sigue vigente pero solo para productos lácteos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Muy bien. La Ley 9 de 1979 sigue vigente como marco general; la Resolución 2674 de 2013 derogó parcialmente el Decreto 3075 de 1997.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto:
            '¿A qué temperatura controlada debe realizarse el batido de la crema en el proceso de elaboración de mantequilla?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Entre 0 y 4 °C.', esCorrecta: false },
            { id: 'b', texto: 'Entre 8 y 12 °C.', esCorrecta: true },
            { id: 'c', texto: 'Entre 20 y 25 °C.', esCorrecta: false },
            { id: 'd', texto: 'Entre 35 y 40 °C.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Así es. La temperatura controlada entre 8 y 12 °C permite una correcta formación de los gránulos de grasa.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto:
            '¿Cuál es la principal diferencia entre el manjar blanco y el arequipe?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El manjar blanco tiene una textura más líquida y no contiene azúcar.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El manjar blanco se elabora con leche de cabra y el arequipe con leche de vaca.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El manjar blanco tiene textura más firme que el arequipe y sí contiene azúcar; a veces se le añade almidón.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'El manjar blanco no requiere cocción, mientras que el arequipe sí.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Correcto. El manjar blanco tiene textura más firme que el arequipe y sí contiene azúcar; a veces se le añade almidón.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto:
            '¿Las Normas Técnicas Colombianas (NTC) para derivados lácteos son de carácter obligatorio para todas las empresas del sector?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Sí, todas las NTC son de obligatorio cumplimiento por ley.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Sí, pero solo para las empresas que exportan sus productos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'No, las NTC son voluntarias, pero se vuelven obligatorias cuando son adoptadas por la autoridad sanitaria o cuando la empresa las declara.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'No, las NTC son solo recomendaciones sin ningún valor legal.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Muy bien. Las NTC son voluntarias, pero se vuelven obligatorias cuando son adoptadas por la autoridad sanitaria o cuando la empresa las declara.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto:
            '¿En qué consiste el sistema de limpieza CIP (<em>Cleaning In Place</em>)?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Un sistema de limpieza manual que utiliza cepillos y detergentes.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Un sistema automatizado que permite limpiar equipos cerrados como pasteurizadores sin necesidad de desmontarlos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Un método de desinfección química para superficies externas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Un sistema de control de plagas en plantas procesadoras.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente. La limpieza CIP es esencial en la industria láctea para garantizar la higiene de equipos cerrados.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto:
            '¿Cuáles son los materiales de envase permitidos por la normatividad colombiana para derivados lácteos?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Únicamente vidrio, por ser inerte y reutilizable.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Únicamente plástico, por ser económico y liviano.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Múltiples materiales: plástico (PEAD, PET, PP), vidrio, brick multicapa, hojalata, entre otros.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Únicamente envases de papel encerado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Correcto. Se permiten múltiples materiales: plástico (PEAD, PET, PP), vidrio, brick multicapa, hojalata, entre otros.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto:
            '¿Qué característica distingue al kéfir de otras leches fermentadas?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Se elabora exclusivamente con leche de cabra.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'No contiene bacterias, solo levaduras.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Se elabora con gránulos que contienen un consorcio de bacterias y levaduras, los cuales pueden reutilizarse.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Tiene una textura sólida similar al queso fresco.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Así es. Los gránulos de kéfir se reutilizan y crecen, lo que lo diferencia de otros fermentados.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        '¡Excelente! Lo felicito, ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
