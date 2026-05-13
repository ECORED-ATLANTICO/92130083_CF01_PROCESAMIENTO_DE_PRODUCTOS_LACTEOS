<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.overflow-hidden
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Elaboración de derivados lácteos

    .bloque-texto-g.color-secundario-10.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/img_1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La elaboración de derivados lácteos comprende un conjunto de procesos mediante los cuales la leche es transformada en productos con características específicas de sabor, textura y conservación, como yogur, kumis, suero costeño, arequipe, manjar blanco y mantequilla. Estos procesos implican el control de variables como temperatura, tiempo, acidez y manipulación, los cuales son determinantes para garantizar la calidad e inocuidad del producto final. En este apartado, el aprendiz desarrollará conocimientos y habilidades prácticas para la transformación de la leche, aplicando las Buenas Prácticas de Manufactura (BPM) y asegurando condiciones adecuadas durante cada etapa del proceso productivo.

    .tarjeta.color-acento-contenido-10.p-4.rounded-3.mb-5(data-aos="zoom-in-right")
      .row.justify-content-center.align-items-center.mb-0
        .col-lg-1.d-lg-block.d-none(data-aos="zoom-in-right")
          figure
            img(src='@/assets/curso/tema3/img_2.svg', class="img-fluid")
        .col-12.col-lg-11.mb-0(data-aos="zoom-in-right")
          h5.mb-3 Procedimientos para la producción higiénica de derivados lácteos 
          p.mb-0 Estimado aprendiz el video a continuación servirá de guía para entender el adecuado manejo higiénico y los procesos clave en la producción de derivados lácteos fermentados, desde la recepción de la leche hasta el envasado del producto terminado.

    figure.mb-5
      .video.mb-2
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    Separador

    .bg_img_11.mb-0

      #t_3_1.titulo-segundo.color-acento-contenido
        .h2(data-aos="fade-right") 3.1 Fermentados (yogur, kumis, suero costeño)
      .mb-0 

      p.mb-5(data-aos="zoom-in-right") Las leches fermentadas son productos obtenidos por la acción de microorganismos específicos (bacterias lácticas, levaduras) sobre la leche pasteurizada. Estos microorganismos generan ácido láctico, compuestos aromáticos y, en algunos casos, alcohol y gas, lo que les confiere características sensoriales particulares y una vida útil prolongada en refrigeración. A continuación, se desarrollan los procesos de yogur, kumis, suero costeño y otros fermentados.

      .subtitulo-destacado.mb-5
        .subtitulo-destacado__icono
          img(src='@/assets/curso/tema3/img_4.png', aria-hidden='true').subtitulo-destacado__img
        .subtitulo-destacado__fondo
          h4.subtitulo-destacado__texto Yogur: clasificación, proceso y control de puntos críticos

      .cajon.color-acento-contenido.p-4.mb-5(data-aos="zoom-in-right")
        p.mb-0 El yogur es el producto de la fermentación de la leche pasteurizada por Lactobacillus delbrueckii subsp. bulgaricus y Streptococcus thermophilus, que deben estar vivas hasta el consumo. La simbiosis entre estas dos bacterias genera ácido láctico, compuestos aromáticos y una textura característica.

      .row.justify-content-center.align-items-center.mb-5
        .col-12.col-lg-8.order-2.order-lg-1
          .tarjeta.color-primario-10.p-4.rounded-4.mb-0(data-aos="zoom-in-right")
            p.mb-3 Clasificación:
            .row.justify-content-center.align-items-center.mb-3
              .col-12.col-lg-6.mb-3.mb-lg-0
                ul.list-unstyled.cita-decorada__texto.mb-3
                  li.d-flex.align-items-start.mb-3
                    i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color:#F5C3C3; font-size: 15px; line-height: 1.5;").mb-0
                    span #[strong Por contenido graso:] 
                ul.lista-ul.mb-3.ps-4
                  li.d-flex.align-items-start.mb-0
                    i.lista-ul__vineta.me-2.flex-shrink-0(style="color:#93D5D4; font-size: 15px; line-height: 1.5;").mb-0
                    span Entero (>3 %).
                  li.d-flex.align-items-start.mb-0
                    i.lista-ul__vineta.me-2.flex-shrink-0(style="color:#93D5D4; font-size: 15px; line-height: 1.5;").mb-0
                    span Semidesnatado (1,5 3 %).
                  li.d-flex.align-items-start.mb-0
                    i.lista-ul__vineta.me-2.flex-shrink-0(style="color:#93D5D4; font-size: 15px; line-height: 1.5;").mb-0
                    span Desnatado (<1,5 %).
              .col-12.col-lg-6.mb-3.mb-lg-0
                ul.list-unstyled.cita-decorada__texto.mb-3
                  li.d-flex.align-items-start.mb-3
                    i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color:#F5C3C3; font-size: 15px; line-height: 1.5;").mb-0
                    span #[strong Por aditivos:] 
                ul.lista-ul.mb-3.ps-4
                  li.d-flex.align-items-start.mb-0
                    i.lista-ul__vineta.me-2.flex-shrink-0(style="color:#93D5D4; font-size: 15px; line-height: 1.5;").mb-0
                    span Natural.
                  li.d-flex.align-items-start.mb-0
                    i.lista-ul__vineta.me-2.flex-shrink-0(style="color:#93D5D4; font-size: 15px; line-height: 1.5;").mb-0
                    span Con frutas.
                  li.d-flex.align-items-start.mb-0
                    i.lista-ul__vineta.me-2.flex-shrink-0(style="color:#93D5D4; font-size: 15px; line-height: 1.5;").mb-0
                    span Saborizado.
                  li.d-flex.align-items-start.mb-0
                    i.lista-ul__vineta.me-2.flex-shrink-0(style="color:#93D5D4; font-size: 15px; line-height: 1.5;").mb-0
                    span Endulzado.
            .row.justify-content-center.align-items-center.mb-0
              .col-12.col-lg-6.mb-3.mb-lg-0
                ul.list-unstyled.cita-decorada__texto.mb-3
                  li.d-flex.align-items-start.mb-3
                    i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color:#F5C3C3; font-size: 15px; line-height: 1.5;").mb-0
                    span #[strong Por elaboración:] 
                ul.lista-ul.mb-3.ps-4
                  li.d-flex.align-items-start.mb-0
                    i.lista-ul__vineta.me-2.flex-shrink-0(style="color:#93D5D4; font-size: 15px; line-height: 1.5;").mb-0
                    span Firme (coagulación en envase).
                  li.d-flex.align-items-start.mb-0
                    i.lista-ul__vineta.me-2.flex-shrink-0(style="color:#93D5D4; font-size: 15px; line-height: 1.5;").mb-0
                    span Batido (fermentación en tanque, luego envasado).
                  li.d-flex.align-items-start.mb-0
                    i.lista-ul__vineta.me-2.flex-shrink-0(style="color:#93D5D4; font-size: 15px; line-height: 1.5;").mb-0
                    span Bebible (menor viscosidad).
              .col-12.col-lg-6.mb-3.mb-lg-0
                ul.list-unstyled.cita-decorada__texto.mb-3
                  li.d-flex.align-items-start.mb-3
                    i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color:#F5C3C3; font-size: 15px; line-height: 1.5;").mb-0
                    span #[strong Por tratamiento térmico:] 
                ul.lista-ul.mb-3.ps-4
                  li.d-flex.align-items-start.mb-0
                    i.lista-ul__vineta.me-2.flex-shrink-0(style="color:#93D5D4; font-size: 15px; line-height: 1.5;").mb-0
                    span Pasteurizado (refrigerado).
                  li.d-flex.align-items-start.mb-0
                    i.lista-ul__vineta.me-2.flex-shrink-0(style="color:#93D5D4; font-size: 15px; line-height: 1.5;").mb-0
                    span UHT (vida útil extendida).
        .col-12.col-lg-4.order-1.order-lg-2.mb-3.mb-lg-0(data-aos="flip-left")
          figure(data-aos="zoom-out-up")
            img(src='@/assets/curso/tema3/img_5.png', class="img-fluid")

    p.mb-5(data-aos="zoom-in-right") La siguiente figura presenta las etapas del proceso de elaboración de un yogur batido, desde la recepción y acondicionamiento de la leche hasta el producto final. Incluye operaciones como pasteurización, enfriamiento, inoculación de cultivos, fermentación, batido, adición de ingredientes y envasado, garantizando condiciones higiénico-sanitarias y de calidad en cada fase.

    .bg_img_12.mb-0

      .row.justify-content-center.align-items-center.mb-4
        .col-12.col-lg-10.mb-3
          .titulo-sexto.color-acento-contenido
            h5 Figura 4.
            |    Proceso de elaboración de un yogur batido
          figure(data-aos="flip-left")
            img(src='@/assets/curso/tema3/img_7.svg', class="img-fluid d-none d-lg-block").mb-3
            img(src='@/assets/curso/tema3/img_8.svg', class="img-fluid d-block d-lg-none").mb-3
            figcaption Nota. SENA, (2026).

    p.mb-5(data-aos="zoom-in-right") A continuación, se presenta los puntos críticos de control (PCC) dentro del proceso productivo, donde es esencial aplicar medidas para prevenir, eliminar o reducir riesgos que puedan afectar la inocuidad del producto. Su identificación permite establecer límites, monitoreo y acciones correctivas, garantizando la calidad y seguridad alimentaria.

    //////////// 
    
    .tarjeta.color-terciario-10.p-4.rounded-3.mb-4(data-aos="zoom-in-right")
      p.mb-0 Los principales parámetros de control en la elaboración de yogur, necesarios para asegurar la calidad e inocuidad del producto. Incluye variables como temperatura, tiempo, pH y condiciones de fermentación, que deben ser monitoreadas y controladas para garantizar un proceso adecuado y un producto final seguro.

    .titulo-sexto.color-acento-contenido(data-aos="zoom-in-right")
      h5 Tabla 4.
      |  Parámetros de control en yogur
    .tabla-a.mb-5(data-aos="flip-left")
      table
        caption 
          p Nota. SENA, (2026). 
        thead
          tr
            th.col-auto.col-lg-auto Parámetro
            th.col-auto.col-lg-auto Valor objetivo
            th.col-auto.col-lg-3 Frecuencia
            th.col-auto.col-lg-3 Método
        tbody
          tr
            td.text-start Sólidos no grasos.
            td.text-start ≥ 8,5 %.
            td.text-start Por lote.
            td.text-start Método de secado en estufa.
          tr
            td.text-start Acidez titulable.
            td.text-start 0,6 1,2 % (ácido láctico).
            td.text-start Cada hora de fermentación.
            td.text-start Titulación con NaOH 0,1 N.
          tr
            td.text-start pH.
            td.text-start 4,4 4,6.
            td.text-start Continuo.
            td.text-start pH metro calibrado.
          tr
            td.text-start Recuento bacterias lácticas.
            td.text-start ≥ 10⁷ UFC/g (hasta fin vida útil).
            td.text-start Semanal.
            td.text-start Siembra en MRS y M17.
          tr
            td.text-start Viscosidad.
            td.text-start 2000 5000 cP (según tipo).
            td.text-start Por lote.
            td.text-start Viscosímetro rotacional.
          tr
            td.text-start Sinéresis.
            td.text-start Ausencia visible.
            td.text-start Diario.
            td.text-start Inspección visual.

    .subtitulo-destacado.mb-5
      .subtitulo-destacado__icono
        img(src='@/assets/curso/tema3/img_4.png', aria-hidden='true').subtitulo-destacado__img
      .subtitulo-destacado__fondo
        h4.subtitulo-destacado__texto Kumis: características y proceso de elaboración

    .bg_img_13.mb-0

      .cajon.color-primario.p-4.mb-5(data-aos="zoom-in-right")
        p.mb-0 El kumis es una leche fermentada tradicional, con sabor ácido, ligeramente alcohólico (máx 1,5 % v/v) y efervescente, producida por la acción de bacterias lácticas y levaduras (Kluyveromyces marxianus, Saccharomyces sp.). En Colombia se regula con NTC 1507.

      .row.justify-content-center.align-items-center.mb-5 
        .col-12.col-lg-4.mb-3.mb-lg-0(data-aos="flip-left")
          figure(data-aos="zoom-out-up")
            img(src='@/assets/curso/tema3/img_14.png', class="img-fluid")
        .col-12.col-lg-8
          .custom-slider.p-3.p-sm-3(data-aos="zoom-in-right")
            SlyderF(columnas="col-12 col-sm-6 col-md-6 col-lg-6").p-2.rounded-3
              .tarjeta--color-white.h-100
                .tarjeta--11
                h5.text-center.mb-3 Leche pasteurizada:
                p.mb-3 enfriar a 20‑25 °C.
              .tarjeta--color-white.h-100
                .tarjeta--12
                h5.text-center.mb-3 Inoculación:
                p.mb-3 añadir cultivo iniciador (kumis fermento) que contiene bacterias lácticas y levaduras. Puede ser un cultivo comercial o una porción de un lote anterior.
              .tarjeta--color-white.h-100
                .tarjeta--13
                h5.text-center.mb-3 Fermentación:
                p.mb-3 a 20‑25 °C durante 12‑24 horas, con agitación ocasional para oxigenar y favorecer el desarrollo de levaduras.
              .tarjeta--color-white.h-100
                .tarjeta--14
                h5.text-center.mb-3 Enfriamiento:
                p.mb-3 una vez alcanzada la acidez (0,7‑1,3 %) y efervescencia deseadas, enfriar a 4‑6 °C para detener la fermentación.
              .tarjeta--color-white.h-100
                .tarjeta--15
                h5.text-center.mb-3 Envasado:
                p.mb-3 en envases herméticos (vidrio o plástico) para retener CO₂.
              .tarjeta--color-white.h-100
                .tarjeta--16
                h5.text-center.mb-3 Almacenamiento:
                p.mb-3 refrigeración (2‑6 °C), vida útil corta (10‑14 días).

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-6.mb-3.mb-lg-0(data-aos="zoom-in-right")
        figure
          img(src='@/assets/curso/tema3/img_21.png', class="img-fluid")
      .col-12.col-lg-6
        .tarjeta.color-secundario-10.p-4.rounded-4.mb-3(data-aos="zoom-in-right")
          p.mb-3 Diferencias con el yogur:
          ul.list-unstyled.cita-decorada__texto.mb-3
            li.d-flex.align-items-start.mb-3
              i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color:#F5C3C3; font-size: 15px; line-height: 1.5;").mb-0
              span Temperatura de fermentación ambiente vs. termófila.
            li.d-flex.align-items-start.mb-3
              i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color:#F5C3C3; font-size: 15px; line-height: 1.5;").mb-0
              span Presencia de levaduras y alcohol.
            li.d-flex.align-items-start.mb-3
              i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color:#F5C3C3; font-size: 15px; line-height: 1.5;").mb-0
              span Menor pH (3,5 4,2) y mayor acidez.
            li.d-flex.align-items-start.mb-0
              i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color:#F5C3C3; font-size: 15px; line-height: 1.5;").mb-0
              span Mayor efervescencia.

    .subtitulo-destacado.mb-5
      .subtitulo-destacado__icono
        img(src='@/assets/curso/tema3/img_4.png', aria-hidden='true').subtitulo-destacado__img
      .subtitulo-destacado__fondo
        h4.subtitulo-destacado__texto Suero costeño: producción y usos

    p.mb-5(data-aos="zoom-in-right") El suero costeño es un producto fermentado salado, obtenido a partir de suero de leche (subproducto de queso) o leche descremada, tradicional de la costa Caribe colombiana.

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-6.order-2.order-lg-1.mb-0
        .tarjeta.color-secundario-10.p-4.rounded-4.mb-3(data-aos="zoom-in-right")
          ul.list-unstyled.cita-decorada__texto.mb-3
            li.d-flex.align-items-start.mb-3
              i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color:#F5C3C3; font-size: 15px; line-height: 1.5;").mb-0
              span Obtención de suero dulce (subproducto de queso) o preparación de leche descremada.
            li.d-flex.align-items-start.mb-3
              i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color:#F5C3C3; font-size: 15px; line-height: 1.5;").mb-0
              span Fermentación espontánea o dirigida: se deja reposar a temperatura ambiente durante 12‑24 horas para acidificación natural.
            li.d-flex.align-items-start.mb-3
              i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color:#F5C3C3; font-size: 15px; line-height: 1.5;").mb-0
              span Salado: se adiciona sal al gusto (entre 2‑5 %).
            li.d-flex.align-items-start.mb-3
              i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color:#F5C3C3; font-size: 15px; line-height: 1.5;").mb-0
              span Maduración: se mantiene en recipiente abierto o tapado por 1‑3 días, con agitación diaria.
            li.d-flex.align-items-start.mb-0
              i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color:#F5C3C3; font-size: 15px; line-height: 1.5;").mb-0
              span Envasado y refrigeración.
      .col-12.col-lg-6.order-1.order-lg-2.mb-3.mb-lg-0(data-aos="zoom-in-right")
        figure
          img(src='@/assets/curso/tema3/img_22.png', class="img-fluid")

    .cajon.color-primario.p-4.mb-5(data-aos="zoom-in-right")
      p.mb-0 Usos: acompañante de arepas, fríjoles, yuca; base para salsas; ingrediente en panadería.\

    p.mb-5(data-aos="zoom-in-right") Recomendaciones sanitarias: utilizar suero de leche pasteurizada para evitar riesgos; controlar acidez y salinidad como factores de conservación.

    .row.justify-content-center.align-items-stretch.mb-4
      .col-12.col-lg-4.mb-3.mb-lg-0(data-aos="zoom-in-right")
        figure
          img(src='@/assets/curso/tema3/img_23.png', class="img-fluid")
      .col-12.col-lg-8.mb-3.mb-lg-0.pt-4.d-flex(data-aos="zoom-in-right")
        .row.justify-content-center.align-items-stretch.mb-0
          p.mb-5(data-aos="zoom-in-right") Otros fermentados: kéfir, leche acidófila
          br
          br
          br
          br
          .col-12.col-lg-6.mb-5.mb-lg-0.pt-4.d-flex(data-aos="zoom-in-right")
            .tarjeta-icono-top.color-secundario-10.h-100
              .tarjeta-icono-top__icono
                figure
                  img(src='@/assets/curso/tema3/img_24.svg' alt='')
              h5.text-center.mb-3 Kéfir:
              p.mb-0 fermentado con gránulos de kéfir (consorcio de bacterias y levaduras). Sabor efervescente, bajo alcohol (0,5 1,5 %). Puede elaborarse con leche o agua (kéfir de agua). Los gránulos se reutilizan y crecen.
          .col-12.col-lg-6.mb-3.mb-lg-0.mt-4.mt-lg-0.pt-4.d-flex(data-aos="zoom-in-right")
            .tarjeta-icono-top.color-secundario-10.h-100
              .tarjeta-icono-top__icono
                figure
                  img(src='@/assets/curso/tema3/img_25.svg' alt='')
              h5.text-center.mb-3 Leche acidófila:
              p.mb-0 fermentada con Lactobacillus acidophilus. Sabor suave, propiedades probióticas. Se elabora de manera similar al yogur pero con una sola bacteria y a menor temperatura (37 40 °C).

    Separador

    #t_3_2.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 3.2 Dulces (arequipe, manjar blanco, panelitas)
    .mb-0

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-7.order-2.order-lg-1.mb-0
        p.mb-5(data-aos="zoom-in-right") Estos productos se obtienen mediante la concentración de la leche con adición de azúcar y aplicación de calor, lo que permite espesar el producto y desarrollar sabor característico.
        .subtitulo-destacado.mb-4
          .subtitulo-destacado__icono
            img(src='@/assets/curso/tema3/img_4.png', aria-hidden='true').subtitulo-destacado__img
          .subtitulo-destacado__fondo
            h4.subtitulo-destacado__texto Arequipe (dulce de leche): formulación y proceso
        p.mb-4(data-aos="zoom-in-right") El arequipe es un producto pastoso obtenido por concentración térmica de leche con adición de sacarosa, con o sin otros ingredientes. Es muy apreciado en Colombia.
        .tarjeta.color-acento-contenido-10.p-4.rounded-4.mb-3(data-aos="zoom-in-right")
          p.mb-3 Formulación típica:
          ul.list-unstyled.cita-decorada__texto.mb-3
            li.d-flex.align-items-start.mb-3
              i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color:#F5C3C3; font-size: 15px; line-height: 1.5;").mb-0
              span Leche entera (100 partes).
            li.d-flex.align-items-start.mb-3
              i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color:#F5C3C3; font-size: 15px; line-height: 1.5;").mb-0
              span Azúcar (20 30 partes).
            li.d-flex.align-items-start.mb-3
              i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color:#F5C3C3; font-size: 15px; line-height: 1.5;").mb-0
              span Bicarbonato de sodio (0,1 0,3 partes para ajustar pH y evitar corte).
            li.d-flex.align-items-start.mb-0
              i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color:#F5C3C3; font-size: 15px; line-height: 1.5;").mb-0
              span Opcional: glucosa (para evitar cristalización), vainilla, esencia de café.
      .col-10.col-lg-5.order-1.order-lg-2.mb-3.mb-lg-0(data-aos="zoom-in-right")
        figure
          img(src='@/assets/curso/tema3/img_26.png', class="img-fluid")

    p.mb-5(data-aos="zoom-in-right") A continuación, se representa las etapas del proceso de elaboración de arequipe, desde la recepción y estandarización de la leche hasta el producto final. Incluye operaciones como mezcla con azúcar, concentración por evaporación, agitación, control de temperatura, enfriamiento y envasado, asegurando la calidad, textura y estabilidad del producto.

    .row.justify-content-center.align-items-center.mb-5
      .col-8.col-lg-4.mb-3.mb-lg-0(data-aos="zoom-in-right")
        figure
          img(src='@/assets/curso/tema3/img_27.png', class="img-fluid") 
      .col-12.col-lg-8
        LineaTiempoD.color-secundario-10
          .row.justify-content-center.align-items-center(numero="1" titulo="Selección de leche:")
            .col-12.col-lg-12.mb-md-0
              p.mb-0 preferiblemente entera, con baja acidez (máx 18 °Dornic).
          .row.justify-content-center.align-items-center(numero="2" titulo="Ajuste de pH:")
            .col-12.col-lg-12.mb-md-0
              p.mb-0 se agrega bicarbonato para neutralizar la acidez y evitar que la leche se corte al calentar. pH objetivo: 6,6‑6,8.
          .row.justify-content-center.align-items-center(numero="3" titulo="Calentamiento:")
            .col-12.col-lg-12.mb-md-0
              p.mb-0 se lleva a ebullición y se agrega azúcar poco a poco, revolviendo constantemente.
          .row.justify-content-center.align-items-center(numero="4" titulo="Concentración:")
            .col-12.col-lg-12.mb-md-0
              p.mb-0 se continúa calentando con agitación constante hasta alcanzar 72‑75 °Brix (punto de consistencia). El punto final se verifica con refractómetro o prueba de gota en agua fría.
          .row.justify-content-center.align-items-center(numero="5" titulo="Enfriamiento:")
            .col-12.col-lg-12.mb-md-0
              p.mb-0 se enfría rápidamente a 50‑60 °C para evitar cristalización.
          .row.justify-content-center.align-items-center(numero="6" titulo="Envasado:")
            .col-12.col-lg-12.mb-md-0
              p.mb-0 en caliente, en envases de vidrio, plástico o latas, asegurando hermeticidad.
          .row.justify-content-center.align-items-center(numero="7" titulo="Almacenamiento:")
            .col-12.col-lg-12.mb-md-0
              p.mb-0 a temperatura ambiente (si es envasado asépticamente) o refrigerado.

    p.mb-5(data-aos="zoom-in-right") Este control es clave para asegurar la textura, el color y la consistencia característicos del producto, evitando defectos por sobre o subcocción.

    .bg_img_14.mb-0

      .row.justify-content-center.align-items-center.mb-4
        .col-12.col-lg-10.mb-3
          .titulo-sexto.color-acento-contenido
            h5 Figura 5.
            |    Curva de concentración y punto final del arequipe
          figure(data-aos="flip-left")
            img(src='@/assets/curso/tema3/img_29.svg', class="img-fluid d-none d-lg-block").mb-3
            img(src='@/assets/curso/tema3/img_30.svg', class="img-fluid d-block d-lg-none").mb-3
            figcaption Nota. SENA, (2026).

    .subtitulo-destacado.mb-5
      .subtitulo-destacado__icono
        img(src='@/assets/curso/tema3/img_4.png', aria-hidden='true').subtitulo-destacado__img
      .subtitulo-destacado__fondo
        h4.subtitulo-destacado__texto Manjar blanco: variantes y elaboración

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-7.order-2.order-lg-1.mb-0
        p.mb-3(data-aos="zoom-in-right") El manjar blanco es similar al arequipe pero con textura más firme, a veces con adición de almidón (maíz o arrurruz). Típico de la zona andina colombiana. Puede elaborarse con leche de vaca o cabra.
        .cajon.color-acento-contenido.p-4.mb-0(data-aos="zoom-in-right")
          p.mb-0 Proceso: similar al arequipe, pero se puede adicionar almidón diluido en leche fría al inicio para dar mayor espesor. También se emplea más tiempo de concentración para lograr una textura más sólida.
      .col-10.col-lg-5.order-1.order-lg-2.mb-3.mb-lg-0(data-aos="zoom-in-right")
        figure
          img(src='@/assets/curso/tema3/img_31.png', class="img-fluid")

    .subtitulo-destacado.mb-5
      .subtitulo-destacado__icono
        img(src='@/assets/curso/tema3/img_4.png', aria-hidden='true').subtitulo-destacado__img
      .subtitulo-destacado__fondo
        h4.subtitulo-destacado__texto Panelitas de leche: preparación tradicional y conservación

    p.mb-5(data-aos="zoom-in-right") Las panelitas son dulces sólidos elaborados con leche, azúcar y a veces coco, sésamo o maní. Se preparan concentrando la mezcla hasta que alcanza un punto de cristalización controlada.

    br
    br
    br

    .bg_img_15.mb-0

      SlyderA(tipo="b").tarjeta.tarjeta--blanca.p-5.mb-5
        .row.justify-content-center.align-items-center
          .col-12.col-lg-5.order-2.order-lg-1.mb-0
            h5.mb-5 Mezcla de ingredientes:
            p.mb-0 Mezclar leche y azúcar en una proporción aproximada de 2:1 hasta obtener una solución homogénea. Es importante asegurar una adecuada disolución del azúcar para evitar cristalizaciones indeseadas durante el proceso. 
          .col-12.col-lg-6.order-1.order-lg-2.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/tema3/img_33.png', class="img-fluid")
        .row.justify-content-center.align-items-center
          .col-12.col-lg-5.order-2.order-lg-1.mb-0
            h5.mb-5 Cocción de la mezcla:
            p.mb-0 Cocinar a fuego medio con agitación constante para evitar que la mezcla se adhiera o se queme. El proceso continúa hasta alcanzar el punto de bola blanda (115–118 °C), donde se logra la concentración adecuada de sólidos. 
          .col-12.col-lg-6.order-1.order-lg-2.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/tema3/img_34.png', class="img-fluid")
        .row.justify-content-center.align-items-center
          .col-12.col-lg-5.order-2.order-lg-1.mb-0
            h5.mb-5 Batido y cristalización:
            p.mb-0 Retirar del fuego y batir vigorosamente. Durante esta etapa se induce la cristalización controlada del azúcar, logrando una textura opaca, firme y ligeramente granulada, característica del producto final. 
          .col-12.col-lg-6.order-1.order-lg-2.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/tema3/img_35.png', class="img-fluid")
        .row.justify-content-center.align-items-center
          .col-12.col-lg-5.order-2.order-lg-1.mb-0
            h5.mb-5 Moldeado de porciones:
            p.mb-0 Con la mezcla aún caliente y maleable, formar porciones individuales de tamaño uniforme. Este paso debe realizarse rápidamente para evitar el endurecimiento prematuro. 
          .col-12.col-lg-6.order-1.order-lg-2.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/tema3/img_36.png', class="img-fluid")
        .row.justify-content-center.align-items-center
          .col-12.col-lg-5.order-2.order-lg-1.mb-0
            h5.mb-5 Enfriado y empaque:
            p.mb-0 Dejar enfriar a temperatura ambiente hasta que el producto adquiera consistencia firme. Posteriormente, envolver en papel encerado o material apto para alimentos que proteja de la humedad y contaminación. 
          .col-12.col-lg-6.order-1.order-lg-2.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/tema3/img_37.png', class="img-fluid")
        .row.justify-content-center.align-items-center
          .col-12.col-lg-5.order-2.order-lg-1.mb-0
            h5.mb-5 Conservación:
            p.mb-0 Almacenar en un lugar fresco, seco y protegido de la luz. En condiciones adecuadas, el producto puede tener una vida útil de varios meses. Es fundamental evitar ambientes con alta humedad relativa, ya que pueden afectar la textura y estabilidad del producto.
          .col-12.col-lg-6.order-1.order-lg-2.mb-lg-0.mb-3
            figure
              img(src='@/assets/curso/tema3/img_38.png', class="img-fluid")
                 
      br
    br
    br

    Separador

    .bg_img_16.mb-0

      #t_3_3.titulo-segundo.color-acento-contenido
        .h2(data-aos="fade-right") 3.3 Mantequilla (proceso básico)
      .mb-0

      p.mb-3(data-aos="zoom-in-right") La mantequilla se obtiene a partir de la grasa de la leche (crema), mediante un proceso de batido que rompe la emulsión natural de la crema, permitiendo la separación de la fase grasa (mantequilla) y la fase líquida (suero o mazada). Durante este proceso, los glóbulos de grasa se agrupan hasta formar una masa sólida, que posteriormente se lava, se amasa y, en algunos casos, se le adiciona sal para mejorar su sabor y conservación. La calidad de la mantequilla depende de factores como la calidad de la crema, las condiciones higiénicas del proceso y el control de temperatura.

      h5.mb-5(data-aos="zoom-in-right") Tipos de mantequilla:

      .row.justify-content-center.align-items-center.mb-5 
        .col-12.col-lg-4.mb-3.mb-lg-0(data-aos="flip-left")
          figure(data-aos="zoom-out-up")
            img(src='@/assets/curso/tema3/img_40.png', class="img-fluid")
        .col-12.col-lg-8
          .custom-slider.p-3.p-sm-3(data-aos="zoom-in-right")
            SlyderF(columnas="col-12 col-sm-6 col-md-6 col-lg-6").p-2.rounded-3
              .tarjeta--color-white.h-100
                .tarjeta--17
                h5.text-center.mb-3 Mantequilla con sal: 
                p.mb-3 se le adiciona sal como conservante y para realzar el sabor. 
              .tarjeta--color-white.h-100
                .tarjeta--17
                h5.text-center.mb-3 Mantequilla sin sal: 
                p.mb-3 solo contiene sal, ideal para repostería y preparaciones donde se controla el sodio. 
              .tarjeta--color-white.h-100
                .tarjeta--17
                h5.text-center.mb-3 Mantequilla clarificada: 
                p.mb-3 se elimina el agua y los sólidos lácteos, quedando solo la grasa; es más estable al calor. 
              .tarjeta--color-white.h-100
                .tarjeta--17
                h5.text-center.mb-3 Mantequilla tipo ghee: 
                p.mb-3 similar a la clarificada, pero con un proceso adicional que le da un sabor más intenso. 
              .tarjeta--color-white.h-100
                .tarjeta--17
                h5.text-center.mb-3 Mantequilla cultivada: 
                p.mb-3 elaborada a partir de crema fermentada, con un sabor más ácido y aromático. 
              .tarjeta--color-white.h-100
                .tarjeta--17
                h5.text-center.mb-3 Mantequilla light: 
                p.mb-3 contiene menos grasa, generalmente mezclada con agua u otros componentes. 
              .tarjeta--color-white.h-100
                .tarjeta--17
                h5.text-center.mb-3 Mantequilla compuesta: 
                p.mb-3 mezclada con ingredientes como hierbas, ajo o especias para usos culinarios específicos.

      h5.mb-3(data-aos="zoom-in-right") Proceso de elaboración: batido, desuerado, lavado y amasado

    .bg_img_17.mb-0

      p.mb-5(data-aos="zoom-in-right") Este proceso comprende las etapas de batido, desuerado, lavado y amasado, fundamentales en la transformación de la materia prima en un producto con características definidas. A través de estas operaciones se logra la separación de fases, el acondicionamiento de la masa y el desarrollo de la textura y consistencia, garantizando calidad e inocuidad bajo condiciones controladas.

      .row.justify-content-center.align-items-start.mb-4
        .col-12.col-lg-8.order-2.order-lg-1.mb-3(data-aos="zoom-in-right")
          AcordionA(tipo="a"  clase-tarjeta="tarjeta tarjeta--color-secundario-10")
            div(titulo="Obtención y estandarización de la crema:")
              p.mb-0 La crema se obtiene por separación centrífuga de la leche, alcanzando un contenido graso de 35–45 %. En esta etapa se pueden ajustar variables como el contenido de grasa y temperatura para asegurar uniformidad y un adecuado desempeño en las fases posteriores. 
            div(titulo="Pasteurización:")
              p.mb-0 La crema se somete a un tratamiento térmico de 85–95 °C durante 15–20 segundos, seguido de enfriamiento inmediato. Este proceso elimina microorganismos patógenos, inactiva enzimas y mejora la estabilidad microbiológica del producto. 
            div(titulo="Maduración:")
              p.mb-0 Consiste en enfriar la crema a 5–10 °C y mantenerla entre 4 y 12 horas. Durante este tiempo ocurre la cristalización parcial de la grasa, lo que favorece una mejor textura, mayor rendimiento en el batido y características sensoriales adecuadas. 
            div(titulo="Batido y desuerado:")
              p.mb-0 La crema se agita mecánicamente, provocando la inversión de la emulsión (de grasa en agua a agua en grasa). Se forman gránulos de mantequilla y se libera el suero de mantequilla (buttermilk), el cual es retirado para reducir la humedad y mejorar la conservación. 
            div(titulo="Lavado y amasado:")
              p.mb-0 Se realiza un lavado con agua fría (2–5 °C) para eliminar residuos de suero y lactosa. Luego, mediante el amasado, se obtiene una masa homogénea, se distribuye uniformemente la humedad y se mejora la textura final del producto. 
            div(titulo="Salado, moldeado y envasado:")
              p.mb-0 Se puede añadir sal fina para mejorar el sabor y la conservación. Posteriormente, la mantequilla se moldea en bloques o porciones y se envasa en materiales aptos para alimentos, protegiéndola de la luz y el oxígeno. Debe mantenerse en refrigeración para conservar su calidad. 
        .col-12.col-lg-4.order-1.order-lg-2.mb-3(data-aos="flip-left")
          figure
            img(src='@/assets/curso/tema3/img_43.png', class="img-fluid")

    .bg_img_18.mb-0

      p.mb-4(data-aos="zoom-in-right") A través de la información presentada, podrá identificar, interpretar y relacionar cada etapa con situaciones reales del proceso productivo.

      .row.justify-content-center.align-items-center.mb-4
        .col-12.col-lg-10.mb-3
          .titulo-sexto.color-acento-contenido
            h5 Figura 6.
            |    Diagrama de flujo de mantequilla
          figure(data-aos="flip-left")
            img(src='@/assets/curso/tema3/img_45.svg', class="img-fluid d-none d-lg-block").mb-3
            img(src='@/assets/curso/tema3/img_46.svg', class="img-fluid d-block d-lg-none").mb-3
            figcaption Nota. SENA, (2026).

      h5.mb-3(data-aos="zoom-in-right") Control de calidad en mantequilla

      p.mb-5(data-aos="zoom-in-right") El control de calidad en la elaboración de mantequilla es un aspecto fundamental para garantizar un producto seguro, estable y con características sensoriales adecuadas. Este proceso permite verificar que cada etapa de producción cumpla con los parámetros establecidos, asegurando la inocuidad, la consistencia y el cumplimiento de la normativa vigente en la industria láctea.

    .titulo-sexto.color-acento-contenido(data-aos="zoom-in-right")
      h5 Tabla 5.
      |  Especificaciones NTC 443
    .tabla-a.mb-5(data-aos="flip-left")
      table
        caption 
          p Nota. SENA, (2026). 
        thead
          tr
            th.col-auto.col-lg-auto Parámetro
            th.col-auto.col-lg-auto Requisito
            th.col-auto.col-lg-4 Método de análisis
        tbody
          tr
            td.text-start Grasa butírica.
            td.text-start Mínimo 80 %.
            td.text-start Método de Schmid Bondzynski Ratzlaff.
          tr
            td.text-start Humedad.
            td.text-start Máximo 16 %.
            td.text-start Secado en estufa.
          tr
            td.text-start Extracto seco magro.
            td.text-start Máximo 2 %.
            td.text-start Cálculo por diferencia.
          tr
            td.text-start Acidez de la grasa.
            td.text-start Máximo 3 % (como ácido oleico).
            td.text-start Titulación.
          tr
            td.text-start Índice de peróxidos.
            td.text-start < 1 meq O₂/kg.
            td.text-start Valoración con tiosulfato.
          tr
            td.text-start Recuento de coliformes.
            td.text-start < 10 UFC/g.
            td.text-start Siembra en agar VRBA.
          tr
            td.text-start Salmonella.
            td.text-start Ausente en 25 g.
            td.text-start Método NTC.

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-7.order-2.order-lg-1.mb-0
        .tarjeta.color-acento-contenido-10.p-4.rounded-4.mb-3(data-aos="zoom-in-right")
          h5.mb-3 Controles durante el proceso:
          ul.list-unstyled.cita-decorada__texto.mb-3
            li.d-flex.align-items-start.mb-3
              i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color:#F5C3C3; font-size: 15px; line-height: 1.5;").mb-0
              span Temperatura de maduración: influye en la textura y la capacidad de batido.
            li.d-flex.align-items-start.mb-3
              i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color:#F5C3C3; font-size: 15px; line-height: 1.5;").mb-0
              span Tiempo de batido: el sobrebatido puede causar pérdida de grasa en el suero.
            li.d-flex.align-items-start.mb-3
              i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color:#F5C3C3; font-size: 15px; line-height: 1.5;").mb-0
              span Calidad del agua de lavado: debe ser potable y fría para eliminar suero sin derretir la grasa.
            li.d-flex.align-items-start.mb-0
              i.fa-solid.fa-circle-check.me-2.flex-shrink-0(style="color:#F5C3C3; font-size: 15px; line-height: 1.5;").mb-0
              span Temperatura de almacenamiento: no debe exceder 4 °C para evitar rancidez.
      .col-10.col-lg-5.order-1.order-lg-2.mb-3.mb-lg-0(data-aos="zoom-in-right")
        figure
          img(src='@/assets/curso/tema3/img_47.png', class="img-fluid")
</template>

<script>
export default {
  name: 'Tema3',
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
