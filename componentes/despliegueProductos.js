'use strict'
/* se asocia un componente a la variable app */
/* El primer argumento no admite espacios */
app.component('despliegue_productos', {

  /* props son propiedades del componente que pueden eser llamdos como atributos */
  props: {
    premium: '',
  },

  /* html */
  /* Hay que usar la palabra reservada template */
  template: `
    <div class="despliegue_productos">
    <h1>Calcetines {{titulo}}</h1>
    <h2>{{pato}}</h2>
    <p v-if="stock>5">Disponible</p>
    <p v-else-if="stock>0">Últimas unidades</p>
    <p v-else>No disponible</p>
    <ul>
      <li v-for="detalle, indice in detalles">{{indice + ': ' + detalle}}</li>
    </ul>

    <div v-for="modelo in modelos">
      <!-- v-bind:style="{backgroundColor: modelo.color}" tambien funciona -->
      <div class="circulo_de_color" :key="modelo.cod" v-bind:style="{'background-color': modelo.color}"
        @mouseover="cambioImagen(modelo.img), titular(modelo.colorCastellano)">
      </div>
    </div>
    <div v-show="stock > 0" class="product-image">
      <a :href=url><img :src=img :title=tooltip alt=""></a>
    </div>
    <!--     <div v-for="color in colores" :key="color.cod">{{color.color}}</div> -->
    <p v-if="enOferta">Ahora en oferta!!</p>
    <p v-if="enOferta">Envío: {{entrega()}}</p>
    <!-- <button class="button" v-on:click="unidades++">Compra</button> -->
    <button class="boton" @click="meter_en_carro">Compra</button>
    <!-- otra forma de hacer el evento más corta es cambiar "v-on:e" por "@e" donde "e" es el evento -->
    <button class="boton" @click="unidades--">Eliminar</button>

    <lista_opiniones v-if="opiniones.length" :opiniones=opiniones></lista_opiniones>

    <formulario_opiniones @envio_opinion=subir_opinion></formulario_opiniones>
    
  </div>`,

  data() {
    return {
      titulo: '',
      producto,
      pato,
      img: "assets/images/socks_blue.jpg",
      tooltip: 'Sin agujeros',
      url: 'https://es.wikipedia.org/wiki/Pato_Donald',
      stock: 8,
      enOferta: true,
      opiniones: [],
      detalles: ['50% algodón', '30% lana', '20% otros materiales'],
      colores: [{ cod: 'A020', color: "green" }, { cod: "B022", color: "blue" }],
      unidades: 0,
      modelos: [{ cod: 'A020', color: "green", img: "assets/images/socks_green.jpg", colorCastellano: 'verdes' }, { cod: "B022", color: "blue", img: "assets/images/socks_blue.jpg", colorCastellano: 'azules' }],
    }

  },

  methods: {
    /* iguala el atributo imagen al string que recibe */
    cambioImagen(imagen) {
      this.img = imagen
    },

    /* iguala el atributo titulo del objeto a la cadena que recibe*/
    titular(nombre) {
      this.titulo = nombre
    },

    /* El emitidor permite utilizar un metodo del componente padre desde el componente hijo*/
    /* Hay que llamar al emitidor en el elemento del template tambien para indicar el tipo de evento que la desencadena */
    meter_en_carro() {
      /* Para poder emitir los datos, el método del componente padre no debe recibir otros parametros.
      Ejemplo de esto en index.html, metodo:actualizarCarrito */
      this.$emit('carrito', this.img)
    },

    entrega() {
      if (this.premium) {
        return 'free'
      } else {
        return 2.39
      }
    },

    subir_opinion(opinion){
      this.opiniones.push(opinion)
    }
  }
}
)