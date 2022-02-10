const producto = 'Calcetines'
const pato = 'Calcetines del pato donald'

const app = Vue.createApp(
    {
        data() {
            return {
                titulo : '',
                producto,
                pato,
                img :"assets/images/socks_blue.jpg",
                tooltip:'Sin agujeros',
                url:'https://es.wikipedia.org/wiki/Pato_Donald',
                stock: 8,
                enOferta : true,
                detalles:['50% algodón', '30% lana', '20% otros materiales'],
                colores:[{cod:'A020', color:"green"}, {cod:"B022", color:"blue"}],
                unidades: 0,
                modelos:[{cod:'A020', color:"green", img:"assets/images/socks_green.jpg", colorCastellano:'verdes'}, {cod:"B022", color:"blue", img:"assets/images/socks_blue.jpg", colorCastellano:'azules'}],
            }
            
        },

        methods:{
                /* iguala el atributo imagen al string que recibe */
                cambioImagen(imagen){
                    this.img=imagen
                },

                /* iguala el titulo del objeto a la cadena que recibe*/
                titular(nombre){
                    this.titulo = nombre
                },

                actualizarCarrito(){
                    this.unidades += 1
                }
        }
    }
)

//app hace referencia a <div id="app"...
window.onload = ()=>{const appMontda = app.mount('#app')}