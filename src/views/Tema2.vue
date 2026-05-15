<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.overflow-hidden
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Condiciones sanitarias en la producción

    .bloque-texto-t.justify-content-center.align-items-center.mb-0(data-aos="zoom-in-right")
      .bloque-texto-t__img.mb-0
        img(src='@/assets/curso/tema2/img_1.png')
      .bloque-texto-t__texto.col-10.mb-0
        p.mb-0 Para la elaboración de derivados lácteos, es fundamental garantizar condiciones sanitarias adecuadas durante todo el proceso. Esto no solo asegura la calidad del producto, sino que también permite cumplir con la normatividad colombiana vigente.

    p.mb-5(data-aos="zoom-in-right") Las normas establecen requisitos relacionados con la higiene, las instalaciones, los procesos y el control de calidad, los cuales deben aplicarse de manera práctica en cada etapa de la producción.

    Separador

    .bg_img_6.mb-0

      #t_2_1.titulo-segundo.color-acento-contenido
        .h2(data-aos="fade-right") 2.1 Instalaciones y equipos
      .mb-0 

      p.mb-5(data-aos="zoom-in-right") Las instalaciones para el procesamiento de derivados lácteos deben diseñarse y mantenerse de forma que faciliten la limpieza, eviten la contaminación y aseguren un flujo adecuado del proceso. 

      .row.justify-content-center.align-items-center.mb-5
        .col-12.col-lg-8.order-2.order-lg-1
          .cajon.color-acento-contenido.p-4.mb-3(data-aos="zoom-in-right")
            p.mb-0 Las áreas deben estar organizadas de manera lógica (recepción, procesamiento y almacenamiento), evitando cruces que generen contaminación. Los equipos y utensilios deben ser de materiales aptos para contacto con alimentos, como acero inoxidable o plásticos grado alimenticio, en buen estado y de fácil limpieza y desinfección. 
          .tarjeta.color-terciario-10.p-4.rounded-3.mb-0(data-aos="zoom-in-right")
            p.mb-0 A continuación, se presentan los principales requisitos que deben cumplir las plantas de derivados lácteos.
        .col-12.col-lg-4.order-1.order-lg-2.mb-3.mb-lg-0(data-aos="flip-left")
          figure(data-aos="zoom-out-up")
            img(src='@/assets/curso/tema2/img_3.png', class="img-fluid")

      .titulo-sexto.color-acento-contenido(data-aos="zoom-in-right")
        h5 Tabla 2.
        |  Requisitos específicos para plantas de derivados lácteos
    .tabla-a.mb-5(data-aos="flip-left")
      table
        caption 
          p.mb-0 Nota. SENA, (2026). 
        thead
          tr
            th.col-auto.col-lg-3 Elemento
            th.col-auto.col-lg-auto Requisito
            th.col-auto.col-lg-3 Frecuencia de verificación
        tbody
          tr
            td.text-start Pisos.
            td.text-start Impermeables, antideslizantes, pendiente ≥1 % hacia drenajes, sin grietas.
            td.text-start Diario.
          tr
            td.text-start Paredes.
            td.text-start Lisas, color claro, lavables, ángulos redondeados.
            td.text-start Semanal.
          tr
            td.text-start Techos.
            td.text-start Evitar condensación; si son falsos, accesibles para limpieza.
            td.text-start Mensual.
          tr
            td.text-start Iluminación.
            td.text-start Mínimo 540 lux en áreas de proceso; lámparas con cubierta protectora.
            td.text-start Mensual.
          tr
            td.text-start Ventilación.
            td.text-start Presión positiva en zonas limpias, filtros de aire clase HEPA si es necesario.
            td.text-start Trimestral.
          tr
            td.text-start Drenajes.
            td.text-start Rejillas removibles, sifón para evitar malos olores.
            td.text-start Semanal.
          tr
            td.text-start Equipos.
            td.text-start Acero inoxidable AISI 304 o 316, superficies lisas, fácil desmontaje, calibración periódica.
            td.text-start Según plan de mantenimiento.

    p.mb-5(data-aos="zoom-in-right") Los requisitos presentados anteriormente permiten identificar las condiciones básicas que deben cumplir las instalaciones y los equipos en una planta de derivados lácteos. Sin embargo, para su adecuada aplicación, es necesario comprender con mayor detalle el propósito de cada uno de estos elementos.

    .row.justify-content-center.align-items-center.mb-0
      .col-12.col-lg-5.mb-3.mb-lg-0(data-aos="zoom-in-right")
        figure
          img(src='@/assets/curso/tema2/img_4.png', class="img-fluid")
      .col-12.col-lg-7
        .cajon.color-acento-contenido.p-4.mb-3(data-aos="zoom-in-right")
          p.mb-0 A continuación, se describen de manera más específica las características y condiciones que deben cumplir aspectos como pisos, paredes, techos, iluminación, ventilación, drenajes y equipos, destacando su importancia dentro del proceso productivo y su relación con la inocuidad de los alimentos.
        .tarjeta.color-secundario-10.p-4.rounded-4.mb-3(data-aos="zoom-in-right")
          ul.lista-ul.lista-ul--check
            li
              i.lista-ul__vineta-check.mb-2
              span #[strong Pisos con pendiente y drenajes:] evitan acumulación de agua y facilitan limpieza. Las rejillas deben ser removibles y contar con sifón para evitar malos olores. 
            li
              i.lista-ul__vineta-check.mb-2
              span #[strong Paredes lisas con ángulos redondeados:] eliminan rincones donde se acumula suciedad; se recomienda pintura epóxica o azulejos.
            li
              i.lista-ul__vineta-check.mb-2
              span #[strong Lámparas con cubierta protectora:] previenen roturas que contaminen el producto; deben ser de material resistente a impactos.
            li
              i.lista-ul__vineta-check.mb-2
              span #[strong Sistema CIP (limpieza en sitio):] tuberías y tanques que automatizan la limpieza de equipos cerrados, reduciendo el tiempo y el riesgo de contaminación.
            li
              i.lista-ul__vineta-check.mb-2
              span #[strong Puertas de cierre automático:] evitan el ingreso de plagas y mantienen la presión diferencial entre áreas.

    Separador

    #t_2_2.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 2.2 Higiene del personal
    .mb-0 

    p.mb-5(data-aos="zoom-in-right") El personal manipulador de alimentos cumple un papel fundamental en la prevención de riesgos sanitarios. Por esta razón, debe mantener hábitos de higiene adecuados durante toda la jornada de trabajo.

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-8.order-2.order-lg-1
        .tarjeta.color-primario-10.p-4.rounded-4.mb-0(data-aos="zoom-in-right")
          ul.lista-ul.lista-ul--check
            li
              i.lista-ul__vineta-check.mb-3
              span #[strong Estado de salud:] no deben laborar personas con enfermedades transmisibles, heridas infectadas o síntomas gastrointestinales; deben reportar su estado y ser retiradas temporalmente. 
            li
              i.lista-ul__vineta-check.mb-3
              span #[strong Higiene personal:] baño diario y presentación personal adecuada; uñas cortas, limpias y sin esmalte.
            li
              i.lista-ul__vineta-check.mb-3
              span #[strong Uniforme:] uso obligatorio de ropa limpia y exclusiva de la planta, cambiada diariamente.
            li
              i.lista-ul__vineta-check.mb-3
              span #[strong Elementos del uniforme:] chaqueta o delantal claro, pantalón, gorro que cubra totalmente el cabello y calzado antideslizante de seguridad.
            li
              i.lista-ul__vineta-check.mb-3
              span #[strong Uso de protección adicional:] tapabocas obligatorio en caso de barba, bigote o riesgo de contaminación.
            li
              i.lista-ul__vineta-check.mb-3
              span #[strong Accesorios:] prohibido el uso de joyas (anillos, aretes, relojes, cadenas o piercings).
            li
              i.lista-ul__vineta-check.mb-3
              span #[strong Comportamiento en planta:] no comer, beber, fumar ni masticar chicle en áreas de producción.
            li
              i.lista-ul__vineta-check.mb-3
              span #[strong Buenas prácticas:] evitar estornudar o toser sobre los alimentos y reportar cualquier anomalía o riesgo.

      .col-12.col-lg-4.order-1.order-lg-2.mb-3.mb-lg-0(data-aos="flip-left")
        figure(data-aos="zoom-out-up")
          img(src='@/assets/curso/tema2/img_5.png', class="img-fluid")

    .tarjeta.color-acento-contenido-10.p-4.rounded-3.mb-5(data-aos="zoom-in-right")
      .row.justify-content-center.align-items-center.mb-0
        .col-lg-1.d-lg-block.d-none(data-aos="zoom-in-right")
          figure
            img(src='@/assets/curso/tema2/img_6.svg', class="img-fluid")
        .col-12.col-lg-11.mb-0(data-aos="zoom-in-right")
          p.mb-0 En conjunto, estas prácticas de higiene y comportamiento del personal son fundamentales para garantizar la inocuidad en la producción de alimentos. Su cumplimiento reduce significativamente los riesgos de contaminación y contribuye al mantenimiento de condiciones sanitarias adecuadas en la planta, asegurando productos seguros y de calidad para el consumidor.

    p.mb-5(data-aos="zoom-in-right") Los momentos clave en los que el lavado de manos es obligatorio dentro de la manipulación de alimentos, como medida esencial de higiene para prevenir la contaminación cruzada y garantizar la inocuidad durante el proceso productivo. Su correcta aplicación reduce significativamente el riesgo de contaminación y contribuye al cumplimiento de las Buenas Prácticas de Manufactura en la planta.

    .bg_img_7.mb-0

      .row.justify-content-center.align-items-center.mb-4
        .col-12.col-lg-10.mb-3
          .titulo-sexto.color-acento-contenido
            h5 Figura 2.
            |    Momentos obligatorios para el lavado de manos
          figure(data-aos="flip-left")
            img(src='@/assets/curso/tema2/img_8.svg', class="img-fluid d-none d-lg-block", alt="La figura 2 describe los momentos obligatorios para el lavado de manos: Al ingresar al área de producción: antes de tocar cualquier superficie, equipo o alimento. Después de ir al baño: principal vía de contaminación fecal‑oral. Después de manipular basura: los residuos son focos de contaminación. Después de estornudar o toser: aunque sea en el codo, la mucosidad puede transferirse. Después de manipular alimentos crudos, antes de tocar alimentos cocidos: evita contaminación cruzada. Cada vez que se cambie de actividad: regla de oro del manipulador. Después de tocar superficies potencialmente contaminadas: como teléfonos, manijas de puertas no desinfectadas.").mb-3
            img(src='@/assets/curso/tema2/img_9.svg', class="img-fluid d-block d-lg-none", alt="La figura 2 describe los momentos obligatorios para el lavado de manos: Al ingresar al área de producción: antes de tocar cualquier superficie, equipo o alimento. Después de ir al baño: principal vía de contaminación fecal‑oral. Después de manipular basura: los residuos son focos de contaminación. Después de estornudar o toser: aunque sea en el codo, la mucosidad puede transferirse. Después de manipular alimentos crudos, antes de tocar alimentos cocidos: evita contaminación cruzada. Cada vez que se cambie de actividad: regla de oro del manipulador. Después de tocar superficies potencialmente contaminadas: como teléfonos, manijas de puertas no desinfectadas.").mb-3
            figcaption Nota. SENA, (2026). 
    
    p.mb-5(data-aos="zoom-in-right") Asimismo, las personas que presenten enfermedades o heridas expuestas no deben manipular alimentos, ya que pueden convertirse en una fuente de contaminación. La capacitación continua en higiene y manipulación de alimentos es clave para asegurar el cumplimiento de estas prácticas.

    Separador

    #t_2_3.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 2.3 Limpieza y desinfección (POES)
    .mb-0 

    p.mb-5(data-aos="zoom-in-right") Los POES son procedimientos documentados que aseguran que la limpieza y desinfección se realicen de manera estandarizada. Cada equipo y área debe tener su POES, que incluya objetivo, responsable, frecuencia, EPP, insumos y procedimiento paso a paso.

    TabsB.color-adicional-1.mb-5
      .pt-4.pt-md-5.pb-4.p-5(titulo="Técnicas de limpieza: prelavado, lavado, enjuague" :icono="require('@/assets/curso/tema2/img_10.svg')")
        .row.justify-content-center.align-items-start.mb-0
          .col-12.col-lg-6.order-2.order-lg-1
            h5.mb-4 Técnicas de limpieza: prelavado, lavado, enjuague
            
              ul.lista-ul.lista-ul--check.m-3
                li.mb-3
                  i.lista-ul__vineta-check
                  div
                    p.mb-0
                      strong Prelavado:
                      |  eliminación de residuos gruesos con agua a presión o raspe, con el fin de reducir la carga orgánica.
                li.mb-3
                  i.lista-ul__vineta-check
                  div
                    p.mb-0
                      strong Lavado:
                      |  aplicación de detergente alcalino (generalmente sosa cáustica al 1 - 2 %) con acción mecánica (cepillo, esponja, sistema CIP) para remover grasa y proteínas. La temperatura del agua debe estar entre 50 - 70 °C para optimizar la acción.
                li.mb-3
                  i.lista-ul__vineta-check
                  div
                    p.mb-0
                      strong Enjuague:
                      |  arrastre de detergente con agua potable, asegurando que no queden residuos químicos.             
          .col-12.col-lg-6.order-1.order-lg-2.mb-3.mb-lg-0(data-aos="flip-left")
            figure(data-aos="zoom-out-up")
              img(src='@/assets/curso/tema2/img_11.png', class="img-fluid")
      .py-4.py-md-5.pb-4.p-5(titulo="Técnicas de desinfección: física y química" :icono="require('@/assets/curso/tema2/img_12.svg')")
        .row.justify-content-center.align-items-start.mb-0
          .col-12.col-lg-6.order-2.order-lg-1
            h5.mb-4 Técnicas de desinfección: física y química

              ul.lista-ul.lista-ul--check.m-3
                li.mb-4
                  i.lista-ul__vineta-check
                  div
                    p.mb-0
                      strong Desinfección física:
                      |  agua caliente (≥80 °C durante 2 min) o vapor saturado. Es el método más seguro y sin residuos, pero no siempre aplicable a todos los materiales.
                
                li.mb-4
                  i.lista-ul__vineta-check
                  div
                    p.mb-3
                      strong Desinfección química:
                      |  uso de soluciones de desinfectantes aprobados. Los más comunes en la industria láctea son:
                    
                    ul.list-unstyled.ps-4
                      li.mb-3.d-flex.align-items-start
                        i.fa-solid.fa-circle.me-2.flex-shrink-0(style="color:#F5C3C3; font-size: 8px; margin-top: 6px;")
                        div
                          p.mb-0
                            strong Hipoclorito de sodio (cloro):
                            |  concentración 100 200 ppm, tiempo de contacto 5 10 minutos. Es económico y de amplio espectro, pero corrosivo y sensible a la materia orgánica.
                      
                      li.mb-3.d-flex.align-items-start
                        i.fa-solid.fa-circle.me-2.flex-shrink-0(style="color:#F5C3C3; font-size: 8px; margin-top: 6px;")
                        div
                          p.mb-0
                            strong Amonios cuaternarios:
                            |  200 400 ppm, 10 minutos. Dejan una película residual, no requieren enjuague en superficies no críticas.
                      
                      li.mb-3.d-flex.align-items-start
                        i.fa-solid.fa-circle.me-2.flex-shrink-0(style="color:#F5C3C3; font-size: 8px; margin-top: 6px;")
                        div
                          p.mb-0
                            strong Yodóforos:
                            |  12,5 25 ppm, 2 5 minutos. Efectivos pero pueden manchar algunas superficies.
                      
                      li.mb-0.d-flex.align-items-start
                        i.fa-solid.fa-circle.me-2.flex-shrink-0(style="color:#F5C3C3; font-size: 8px; margin-top: 6px;")
                        div
                          p.mb-0
                            strong Ácido peracético:
                            |  100 200 ppm, 1 5 minutos. Activo a bajas temperaturas y se descompone en productos inocuos.

          .col-12.col-lg-6.order-1.order-lg-2.mb-3.mb-lg-0(data-aos="flip-left")
            figure(data-aos="zoom-out-up")
              img(src='@/assets/curso/tema2/img_13.png', class="img-fluid")

    .titulo-sexto.color-acento-contenido(data-aos="zoom-in-right")
      h5 Tabla 3.
      |  Concentraciones y tiempos de contacto de desinfectantes comunes
    .tabla-a.mb-5(data-aos="flip-left")
      table
        caption 
          p.mb-0 Nota. SENA, (2026). 
        thead
          tr
            th.col-auto.col-lg-auto Desinfectante
            th.col-auto.col-lg-auto Uso en superficies en contacto con alimentos
            th.col-auto.col-lg-3 Tiempo de contacto
            th.col-auto.col-lg-3 Observaciones
        tbody
          tr
            td.text-start Hipoclorito de sodio.
            td.text-start 100 – 200 ppm.
            td.text-start 5 – 10 minutos.
            td.text-start Corrosivo, requiere enjuague.
          tr
            td.text-start Amonios cuaternarios.
            td.text-start 200 – 400 ppm (seguir etiqueta).
            td.text-start 10 minutos.
            td.text-start No enjuagar en superficies no críticas.
          tr
            td.text-start Yodóforos.
            td.text-start 12,5 – 25 ppm.
            td.text-start 2 – 5 minutos.
            td.text-start Puede manchar.
          tr
            td.text-start Ácido peracético.
            td.text-start 100 – 200 ppm.
            td.text-start 1 – 5 minutos.
            td.text-start Activo a baja temperatura.

    Separador

    #t_2_4.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 2.4 Control de contaminación cruzada
    .mb-0 

    p.mb-5(data-aos="zoom-in-right") El Manejo Integrado de Plagas (MIP) combina medidas de prevención, monitoreo y control para evitar la presencia de plagas sin depender exclusivamente de productos químicos. Este enfoque es más sostenible y efectivo a largo plazo.

    .bg_img_8.mb-0 

      h5.mb-5(data-aos="zoom-in-right") Principios:

      .row.justify-content-center.align-items-start.mb-4
        .col-12.col-lg-8.order-2.order-lg-1.mb-3(data-aos="zoom-in-right")
          AcordionA(tipo="a"  clase-tarjeta="tarjeta tarjeta--color-secundario-10")
            div(titulo="Prevención (medidas pasivas)")
              p.mb-0 sellado de grietas, mallas en ventanas, orden y limpieza, manejo adecuado de residuos, almacenamiento de materias primas en recipientes cerrados.
            div(titulo="Monitoreo")
              p.mb-0 inspecciones periódicas (al menos semanales) con formato, uso de trampas (pegajosas para insectos, cebos para roedores) que se revisan y registran.
            div(titulo="Control físico")
              p.mb-0 trampas de luz, trampas de golpe, barreras físicas.
            div(titulo="Control químico")
              p.mb-0 aplicado solo por empresas autorizadas (con registro ICA), con registro de productos, dosis, ubicación y fecha. El personal de la planta nunca debe manipular plaguicidas.
            div(titulo="Evaluación")
              p.mb-0 seguimiento de la efectividad a través de la disminución de capturas en trampas y la ausencia de evidencias.
        .col-12.col-lg-4.order-1.order-lg-2.mb-3(data-aos="flip-left")
          figure
            img(src='@/assets/curso/tema2/img_15.png', class="img-fluid")

      h5.mb-5(data-aos="zoom-in-right") La contaminación cruzada puede ser:

    .row.justify-content-center.align-items-stretch.mb-5
      .col-12.col-md-6.col-lg-4.mb-3
        .tarjeta--color-white.h-100
          .tarjeta--04
          h5.text-center.mb-3 Directa
          p.mb-3 contacto entre materia prima contaminada y producto terminado.
      .col-12.col-md-6.col-lg-4.mb-3
        .tarjeta--color-white.h-100
          .tarjeta--05
          h5.text-center.mb-3 Indirecta
          p.mb-3 a través de utensilios, manos, trapos, equipos no desinfectados.
      .col-12.col-md-6.col-lg-4.mb-3
        .tarjeta--color-white.h-100
          .tarjeta--06
          h5.text-center.mb-3 Por vectores
          p.mb-3 insectos, roedores, aves.

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-4.mb-3.mb-lg-0(data-aos="zoom-in-right")
        figure
          img(src='@/assets/curso/tema2/img_19.png', class="img-fluid")
      .col-12.col-lg-8
        .tarjeta.color-primario-10.p-4.rounded-4.mb-0(data-aos="zoom-in-right")
          p.mb-3 Medidas de prevención:
          ul.lista-ul.lista-ul--check.m-0
            li
              i.lista-ul__vineta-check.mb-2
              span Separación física de áreas: recepción de leche cruda aislada de áreas de proceso.
            li
              i.lista-ul__vineta-check.mb-2
              span  Flujo unidireccional: materia prima → proceso → producto terminado.
            li
              i.lista-ul__vineta-check.mb-2
              span <em>Color coding:</em> utensilios de diferentes colores para cada área.
            li
              i.lista-ul__vineta-check.mb-2
              span Limpieza y desinfección entre lotes, especialmente al cambiar de producto.
            li
              i.lista-ul__vineta-check.mb-2
              span Control del personal: no transitar entre zonas sucias y limpias sin cambio de indumentaria y lavado de manos.
            li
              i.lista-ul__vineta-check.mb-2
              span Control ambiental: presión positiva en salas limpias, filtros de aire.

    p.mb-5(data-aos="zoom-in-right") La siguiente figura ilustra el flujo unidireccional en una planta láctea, un principio clave de las Buenas Prácticas de Manufactura que garantiza la inocuidad del proceso. Este flujo organiza las operaciones desde la recepción de la materia prima hasta el producto final, evitando cruces entre áreas limpias y sucias, reduciendo el riesgo de contaminación cruzada y asegurando condiciones higiénico-sanitarias adecuadas en cada etapa.

    .bg_img_9.mb-0

      .row.justify-content-center.align-items-center.mb-4
        .col-12.col-lg-10.mb-3
          .titulo-sexto.color-acento-contenido
            h5 Figura 3.
            |    Flujo unidireccional en planta láctea
          figure(data-aos="flip-left")
            img(src='@/assets/curso/tema2/img_21.svg', class="img-fluid d-none d-lg-block", alt="La figura 3 describe el flujo unidireccional en una planta láctea,.Recepción leche cruda (zona sucia). Pasteurización (barrera sanitaria). Proceso (zona limpia). Envasado (zona de alta higiene). Almacenamiento pt (zona controlada). Expedición. ").mb-3
            img(src='@/assets/curso/tema2/img_22.svg', class="img-fluid d-block d-lg-none", alt="La figura 3 describe el flujo unidireccional en una planta láctea,.Recepción leche cruda (zona sucia). Pasteurización (barrera sanitaria). Proceso (zona limpia). Envasado (zona de alta higiene). Almacenamiento pt (zona controlada). Expedición. ").mb-3
            figcaption Nota. SENA, (2026).

    Separador

    #t_2_5.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 2.5 Manejo de materias primas (recepción y almacenamiento)
    .mb-0 

    .tarjeta.color-acento-contenido-10.p-4.rounded-3.mb-5(data-aos="zoom-in-right")
      .row.justify-content-center.align-items-center.mb-0
        .col-lg-1.d-lg-block.d-none(data-aos="zoom-in-right")
          figure
            img(src='@/assets/curso/tema2/img_23.svg', class="img-fluid")
        .col-12.col-lg-11.mb-0(data-aos="zoom-in-right")
          p.mb-0 El control de las materias primas, especialmente la leche, es clave para garantizar la calidad e inocuidad de los derivados lácteos, por lo que desde su recepción debe verificarse su estado (apariencia, olor y temperatura) y almacenarse en condiciones adecuadas, aplicando el sistema PEPS para asegurar una correcta rotación y evitar pérdidas, contribuyendo así a la eficiencia del proceso y a la calidad del producto final.

    .bg_img_10.mb-0

      .row.justify-content-center.align-items-center.mb-5
        .col-12.col-lg-8.order-2.order-lg-1
          .tarjeta.color-primario-10.p-4.rounded-4.mb-0(data-aos="zoom-in-right")
            p.mb-3 En la recepción se verifica:
            ul.lista-ul.lista-ul--check
              li
                i.lista-ul__vineta-check.mb-2
                span Condiciones del vehículo de transporte (limpieza, temperatura).
              li
                i.lista-ul__vineta-check.mb-2
                span Integridad de empaques (sin roturas, sin humedad).
              li
                i.lista-ul__vineta-check.mb-2
                span Fecha de vencimiento (vida útil suficiente).
              li
                i.lista-ul__vineta-check.mb-2
                span Características organolépticas (olor, color, textura).
              li
                i.lista-ul__vineta-check.mb-2
                span Temperatura (si es perecedero) con termómetro infrarrojo o sonda.
              li
                i.lista-ul__vineta-check.mb-2
                span Documentación: factura, certificados de calidad, registro sanitario del proveedor.
              li
                i.lista-ul__vineta-check.mb-2
                span Para leche cruda: acidez (≤18 °Dornic), densidad, crioscopia, pruebas de antibióticos.
              li
                i.lista-ul__vineta-check.mb-2
                span Se registra en un formato de “Recepción de Materias Primas”. 
                
        .col-12.col-lg-4.order-1.order-lg-2.mb-3.mb-lg-0(data-aos="flip-left")
          figure(data-aos="zoom-out-up")
            img(src='@/assets/curso/tema2/img_25.png', class="img-fluid")

      p.mb-5(data-aos="zoom-in-right") En el almacenamiento se verifica:

      .row.justify-content-center.align-items-center.mb-5 
        .col-8.col-lg-4.mb-3.mb-lg-0(data-aos="flip-left")
          figure(data-aos="zoom-out-up")
            img(src='@/assets/curso/tema2/img_26.png', class="img-fluid")
        .col-12.col-lg-8
          .custom-slider.p-3.p-sm-3(data-aos="zoom-in-right")
            SlyderF(columnas="col-12 col-sm-6 col-md-6 col-lg-6").p-2.rounded-3
              .tarjeta--color-white.h-100
                .tarjeta--07
                h5.text-center.mb-3 Productos secos
                p.mb-3 lugar fresco (≤25 °C), seco (humedad <60 %), sobre estibas separadas del piso (≥15 cm) y de la pared (≥50 cm) para facilitar limpieza e inspección.
              .tarjeta--color-white.h-100
                .tarjeta--08
                h5.text-center.mb-3 Refrigerados
                p.mb-3 cámaras a 2 5 °C, con control de temperatura y humedad.
              .tarjeta--color-white.h-100
                .tarjeta--09
                h5.text-center.mb-3 Congelados
                p.mb-3 a -18 °C o menos, con sistema de alarma por falla.
              .tarjeta--color-white.h-100
                .tarjeta--10
                h5.text-center.mb-3 Rotación
                p.mb-3 método PEPS (primero en entrar, primero en salir) para evitar vencimientos. Se organizan los   productos en estanterías de manera que los más antiguos queden al frente.
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
