const producto = 'Calcetines'
const pato = 'Calcetines del pato donald'

const app = Vue.createApp(
    {
        data() {
            return {
                producto,
                pato,
                img :"assets/images/socks_blue.jpg",
                tooltip:'Sin agujeros',
                url:'https://es.wikipedia.org/wiki/Pato_Donald',
                stock: 8,
                enOferta : true,
                detalles:['50% algodón', '30% lana', '20% otros materiales'],
                colores:[{cod:'A020', color:"green"}, {cod:"B022", color:"blue"}],
                unidades: 0
            }
        }
    }
)

//app hace referencia a <div id="app"...
window.onload = ()=>{const appMontda = app.mount('#app')}