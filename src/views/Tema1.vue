<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.overflow-hidden
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 BPM y normatividad en productos lácteos
  
    .row.justify-content-center.align-items-center.mb-0
      .col-10.col-lg-4.mb-3.mb-lg-0(data-aos="zoom-in-right")
        figure
          img(src='@/assets/curso/tema1/img_1.png', class="img-fluid")
      .col-12.col-lg-8
        p.mb-3(data-aos="zoom-in-right") Para iniciar este proceso formativo, es importante comprender la importancia de los derivados lácteos y la necesidad de producirlos bajo condiciones que garanticen su calidad e inocuidad.
        .cajon.color-acento-contenido.p-4(data-aos="zoom-in-right")
          p.mb-0 La leche es un alimento altamente nutritivo, pero también es susceptible a la contaminación si no se manipula adecuadamente. Por esta razón, la elaboración de productos como yogur, kumis, suero costeño, arequipe y mantequilla requiere la aplicación de Buenas Prácticas de Manufactura (BPM) y el cumplimiento de la normatividad vigente.

          
    Separador

    #t_1_1.titulo-segundo.color-acento-contenido
      .h2(data-aos="fade-right") 1.1 Importancia de los derivados lácteos
    .mb-0 

    p.mb-3(data-aos="zoom-in-right") Los derivados lácteos son productos obtenidos a partir de la leche mediante procesos tecnológicos físicos, químicos o biológicos que modifican sus características originales, con el fin de prolongar su vida  

    .row.justify-content-center.align-items-center.mb-4
      .col-10.col-lg-4.mb-3.mb-lg-0(data-aos="zoom-in-right")
        figure
          img(src='@/assets/curso/tema1/img_2.png', class="img-fluid")
      .col-12.col-lg-8
        p.mb-4(data-aos="zoom-in-right") En Colombia, el sector lácteo representa un componente estratégico de la economía agroindustrial, aportando aproximadamente el 3.5 % del PIB agropecuario y generando más de 700.000 empleos directos e indirectos. Su cadena productiva abarca desde la producción primaria en finca hasta la transformación industrial, distribución y comercialización.
        .tarjeta.color-adicional-1.p-4.rounded-3.mb-5(data-aos="zoom-in-right")
          p.mb-0 La transformación de la leche en derivados permite agregar valor al producto, reducir pérdidas por perecibilidad y responder a las tendencias del mercado nacional e internacional, especialmente en alimentos funcionales y de alto valor nutricional.
    
    .bg_img_2.mb-0
      
      p.mb-5(data-aos="zoom-in-right") Los derivados lácteos se clasifican principalmente en:

      .row.justify-content-center.align-items-center.mb-5
        .col-12.col-lg-8.order-2.order-lg-1
          .custom-slider.p-3.p-sm-3(data-aos="zoom-in-right")
            SlyderF(columnas="col-12 col-sm-6 col-md-6 col-lg-6").p-2.rounded-3
              .tarjeta--color-white.h-100
                .tarjeta--01
                h5.text-center.mb-3 Fermentados: 
                p.mb-3 yogur, kumis, kéfir y suero costeño, obtenidos mediante la acción de microorganismos que modifican la textura, el sabor y aportan beneficios probióticos. 
              .tarjeta--color-white.h-100
                .tarjeta--02
                h5.text-center.mb-3 Concentrados y dulces: 
                p.mb-3 arequipe, manjar blanco y otros productos elaborados por concentración de la leche con azúcar, caracterizados por su alta demanda en la gastronomía tradicional. 
              .tarjeta--color-white.h-100
                .tarjeta--03
                h5.text-center.mb-3 Grasos: 
                p.mb-3 mantequilla y crema de leche, obtenidos por separación de la grasa láctea, con amplio uso culinario e industrial. 
        .col-10.col-lg-4.order-1.order-lg-2.mb-3.mb-lg-0(data-aos="flip-left")
          figure(data-aos="zoom-out-up")
            img(src='@/assets/curso/tema1/img_7.png', class="img-fluid")
        
      .tarjeta.color-acento-contenido-10.p-4.rounded-3.mb-5(data-aos="zoom-in-right")
        .row.justify-content-center.align-items-center.mb-0
          .col-lg-1.d-lg-block.d-none(data-aos="zoom-in-right")
            figure
              img(src='@/assets/curso/tema1/img_8.svg', class="img-fluid")
          .col-12.col-lg-11.mb-0(data-aos="zoom-in-right")
            p.mb-0 (Los quesos pueden considerarse dentro de esta cadena productiva, aunque su desarrollo corresponde a procesos específicos de otra línea de formación). 

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
