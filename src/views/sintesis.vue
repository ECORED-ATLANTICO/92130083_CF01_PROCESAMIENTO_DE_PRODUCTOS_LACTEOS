<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p Las Buenas Prácticas de Manufactura (BPM) son la base para garantizar la inocuidad y calidad en la producción de derivados lácteos. Este componente abordó su concepto, relación con POES y HACCP, y el marco normativo colombiano. También se incluyeron los programas de saneamiento, el manejo de registros y la aplicación práctica de las BPM en planta (higiene, limpieza y desinfección, control de plagas, prevención de contaminación, almacenamiento y uso de EPP). Finalmente, se presentaron los procesos de elaboración de los principales derivados lácteos, sus puntos críticos de control, parámetros de calidad y mecanismos de verificación y mejora continua.
    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Diagrama tipo mapa conceptual sobre Buenas Prácticas de Manufactura (BPM) en derivados lácteos. Incluye cuatro secciones principales: normativa y BPM, condiciones sanitarias de producción, elaboración de productos lácteos y empaque/control de calidad. Cada sección se divide en subtemas como higiene, limpieza, tipos de productos (yogur, mantequilla, dulces), almacenamiento y registros de proceso.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Síntesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
