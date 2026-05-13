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
