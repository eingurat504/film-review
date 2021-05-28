<template>
  <div class="about">
    <h1>This is an about page</h1>
    <ul>
	  <li v-for="movie in movies">
	    {{ movie.original_title }}
	  </li>
	</ul>
  </div>
</template>
<script>
	import axios from 'axios'
export default {
  name: 'Latest',
  data() {

  	return {
  		movies: []
  	}
   
  },
  created() {
     if (!this.movies.length) {
            this.getLatestMovies();
        } 
  },
  methods: {

  	getLatestMovies(){

	  	axios.get('/tv/latest?api_key=' + process.env.VUE_APP_API_TOKEN)
	  	.then(response => {
	  		console.log(response.data);
	  		this.movies = response.data;
	  		// movies: response.data.results
	  	}).catch(error => {
	  		console.log(error);
	  	});

  	}

  }
}
</script>