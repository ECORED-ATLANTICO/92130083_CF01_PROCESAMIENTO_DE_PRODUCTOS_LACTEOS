<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.overflow-hidden
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .bg_img_1.mb-0

      .tarjeta.color-acento-contenido-10.p-4.rounded-3.mb-5(data-aos="zoom-in-right")
        .row.justify-content-center.align-items-center.mb-0
          .col-lg-1.d-lg-block.d-none(data-aos="zoom-in-right")
            figure
              img(src='@/assets/curso/introduccion/img_2.svg', class="img-fluid")
          .col-12.col-lg-11.mb-0(data-aos="zoom-in-right")
            p.mb-0 Este componente formativo orienta al aprendiz en la elaboración de derivados lácteos, integrando la aplicación de las Buenas Prácticas de Manufactura (BPM) para garantizar productos inocuos y de calidad.
  
      .row.justify-content-center.align-items-center.mb-5
        .col-10.col-lg-4.mb-3.mb-lg-0(data-aos="zoom-in-right")
          figure
            img(src='@/assets/curso/introduccion/img_3.png', class="img-fluid")
        .col-12.col-lg-8
          p.mb-3(data-aos="zoom-in-right") Durante el proceso, se abordarán aspectos clave como la higiene en la manipulación de alimentos, las condiciones sanitarias, el uso adecuado de envases y el cumplimiento de la normatividad colombiana vigente. Asimismo, se desarrollarán de manera práctica los procesos de elaboración de productos como yogur, kumis, suero costeño, arequipe, manjar blanco, panelitas y mantequilla.
          .cajon.color-primario.p-4(data-aos="zoom-in-right")
            p.mb-3 La formación tiene un enfoque principalmente práctico, permitiendo al aprendiz aplicar los conocimientos en situaciones reales de producción. Al finalizar, estará en capacidad de elaborar derivados lácteos cumpliendo con condiciones de calidad, seguridad e inocuidad.
      
      .row.justify-content-center.align-items-center.mb-0
        .col-12.col-lg-12.mb-3.mb-lg-0(data-aos="zoom-in-right")
          figure.mb-2
            .video.mb-2
              iframe(width="560" height="315" src="https://www.youtube.com/embed/PUfayUlEAOo?si=RieZDB27sVVeY7CT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          figcaption Video: Producción de derivados lácteos fermentados con base en BPM y normatividad.
  
</template>

<script>
export default {
  name: 'Introduccion',
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
