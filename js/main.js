console.log('hola mundo');
Vue.component('articulos', {
	template: `
				<div class="articulos">
					<h1>Componente {{titulo}}</h1>
					<div>
						<h1>Listado por ajax</h1>
						<ol v-if="posts" class="post-data">
							<li v-for="(post, index) in posts">
								{{post.title}}
							</li>
						</ol>
						<span v-else>Cargando api</span>
					</div>
				</div>
	`,
	mounted(){
			axios.get('https://jsonplaceholder.typicode.com/posts')
			.then((respuesta)=>{
				console.log(respuesta.data);
				this.posts = respuesta.data;
			});
	},
	data(){
		return {
			titulo: 'Articulos',
			posts: null
		}
	}
});

Vue.component('frutas', {
	props: ['objeto'],
	mounted(){
		console.log(this.objeto);
	}
});
Vue.component('padre', {
	template: `
		<div>
			<h1>Componente padre</h1>
			<div>
				<hijo/>
			</div>
		</div>
	`
});

Vue.component('hijo', {
	template: `<p style="background: yellow;">Soy un parrafo en el componente hijo</p>`
});


Vue.filter('mayusculas', (value) => value.toUpperCase());
new Vue({
	el: 'main',
	mounted(){
		console.log("hola mundo desde mounted");
		axios.get('https://jsonplaceholder.typicode.com/posts')
			.then((respuesta)=>{
				console.log(respuesta.data);
				this.posts = respuesta.data;
			});
	},
	data: {
		text: 'hello world form vue 2',
		name: 'miguel angel',
		apellidos: 'ramirez medel',
		edad: 27,
		nota: 8,
		peliculas: ['avengers','spiderman','jurasic world','Forrest Gum', 'Antes de partir','ant Man'],
		frutas: [
			{nombre: 'manzana', temporada: 'invierno', precio: 'bajo'},
			{nombre: 'naranja', temporada: 'otoño', precio: 'medio'},
			{nombre: 'piña', temporada: 'primavera', precio: 'alto'},
			{nombre: 'mango', temporada: 'otoño', precio: 'medio'},
			{nombre: 'Banana', temporada: 'otoño', precio: 'medio'},
			{nombre: 'uvas', temporada: 'otoño', precio: 'medio'},
			{nombre: 'pera', temporada: 'otoño', precio: 'medio'},					
			{nombre: 'aguacate', temporada: 'otoño', precio: 'medio'}

		],
		superfruta: {nombre: 'Mandarina', temporada: 'veran', precio: 'bajo'},
		peliculaNueva: null,
		busqueda: null,
		confirmado: null,
		posts: null,
		elegido: 'padre'
	},
	methods: {
		crearPelicula(){
			//alert(this.peliculaNueva)
			//this.peliculas.unshift(this.peliculaNueva);
			this.peliculas.push(this.peliculaNueva);
			this.peliculaNueva = null;
		},

		borrarPelicula(index){
			console.log("el indice de la pelicula es: "+index)
			alert('estas seguro que quieres borrar?')
			this.peliculas.splice(index, 1)
		},
		marcar(index){
			this.confirmado = index;
		}
	},
	computed: {
		nombreYapellidos(){
			var date = new Date();
			var year = date.getFullYear();
			var month = date.getMonth();
			var day = date.getDay();
			return this.name+ " "+this.apellidos+" Nota: "+this.nota+ " - "+year+" - "+month+" - "+day;
		},
		peliculasOrdenadas(){
			return this.peliculas.sort();
		},
		buscarPelicula(){
			//function normal
			return this.peliculas.filter(function(pelicula) {
				pelicula.includes(this.busqueda);
			});
		},
		buscarFruta(){
			//arrow function}
			return this.frutas.filter((fruta) =>{
				return fruta.nombre.includes(this.busqueda);
			});
		}
	}

});

const vue2 = new Vue({
	el: '#app',
	data: {
		texto: 'Segunda Instancia de vue'
	}
})

const vue3 = new Vue({
	el: '#tercera',
	data: {
		texto: 'tercera Instancia de vue'
	}
})