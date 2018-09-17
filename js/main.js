console.log('hola mundo');
Vue.filter('mayusculas', (value) => value.toUpperCase());
new Vue({
	el: 'main',
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
		busqueda: null
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

})