app.component("formulario_opiniones", {
    template:
        /*html*/
        `<form class="review-form" @submit.prevent="envio">
    <h3>Deja tu opinión</h3>
    <label for="nombre">nombre:</label>
    <input id="nombre" v-model="nombre">

    <label for="opinion">opinion:</label>      
    <textarea id="opinion" v-model="opinion"></textarea>

    <label for="valoracion">valoracion:</label>
    <select id="valoracion" v-model.number = "valoracion">
      <option>5</option>
      <option>4</option>
      <option>3</option>
      <option>2</option>
      <option>1</option>
    </select>

    <input class="button" type="submit" value="enviar">
  </form>`,

    data() {
        return {
            nombre: '',
            opinion: '',
            valoracion: null
        }
    },

    methods: {
        envio() {
            if(this.nombre==='' || this.opinion === '' || this.valoracion === null ){
                alert('La opinión está incompleta. Por rellene todos los campos')
                return
            }
            let valoracionProducto = {
                nombre: this.nombre,
                opinion: this.opinion,
                valoracion: this.valoracion,
            }
            this.$emit('envio_opinion', valoracionProducto)

            this.nombre = ''
            this.opinion = ''
            this.valoracion = null
        }
    }
})