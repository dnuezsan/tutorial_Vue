app.component('lista_opiniones', {
    props: {
        opiniones: {
            type: Array,
            required: true
        }
    },

    template:
        /*html*/
        `
    <div class="review-container">
    <h3>Opiniones:</h3>
      <ul>
        <li v-for="(opinion, index) in opiniones" :key="index">
          {{ opinion.nombre }} puntuó con {{ opinion.valoracion }} estrellas
          <br/>
          "{{ opinion.opinion }}"
          <br/>
        </li>
      </ul>
    </div>
  `
})