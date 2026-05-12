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

      .row.justify-content-center.align-items-center.mb-5
        .col-12.col-lg-8.order-2.order-lg-1
          p.mb-3(data-aos="zoom-in-right") El componente formativo Diseño y control del plan de <em>marketing</em> aborda la estructuración operativa de las decisiones comerciales, orientando la formulación de objetivos, estrategias y tácticas en coherencia con los recursos organizacionales y las condiciones del entorno. Su enfoque se centra en la articulación entre planificación, ejecución y control, como elementos fundamentales para garantizar la efectividad del desempeño comercial.
          .tarjeta.tarjeta--fondo-img-1.p-4.rounded-4.mb-3(data-aos="zoom-in-right")
            .row.justify-content-center.align-items-center.mb-0
              .col-lg-2.d-lg-block.d-none(data-aos="zoom-in-right")
                figure
                  img(src='@/assets/curso/introduccion/img_2.svg', class="img-fluid") 
              .col-12.col-lg-10.mb-0(data-aos="zoom-in-right")
                p.mb-0 Su importancia radica en que permite materializar el direccionamiento estratégico en acciones concretas, medibles y evaluables, integrando herramientas para la asignación de recursos, la programación de actividades y la definición de indicadores de gestión. De esta manera, se facilita el seguimiento del plan de <em>marketing</em> y la toma de decisiones basada en resultados en contextos empresariales dinámicos.
        .col-8.col-lg-4.order-1.order-lg-2.mb-3.mb-lg-0(data-aos="zoom-in-right")
          figure
            img(src='@/assets/curso/introduccion/img_3.png', class="img-fluid")
    
      .tarjeta.color-primario-5.p-4.rounded-4.mb-5(data-aos="zoom-in-right")
        p.mb-0 El desarrollo temático se abordará de manera progresiva, iniciando con la formulación de objetivos, estrategias y tácticas, seguido de la planificación operativa mediante presupuestos y cronogramas. Posteriormente, se incorporan los índices de gestión, la auditoría de <em>marketing</em> y la mejora continua, consolidando un enfoque integral orientado al diseño, ejecución y control del plan de <em>marketing</em>.

      br
      br
      br
      br
    
    //figure.mb-5
    //  .video.mb-2
    //    iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    //  figcaption Video: Leyenda del video
    
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
