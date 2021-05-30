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
  name: 'Upcoming',
  data() {

  	return {
  		movies: []
  	}
   
  },
  created() {
     if (!this.movies.length) {
            this.getUpcomingMovies();
        } 
  },
  methods: {

  	getUpcomingMovies(){

	  	axios.get('/tv/upcoming?api_key=' + process.env.VUE_APP_API_TOKEN)
	  	.then(response => {
	  		console.log(response.data.results);
	  		this.movies = response.data.results;
	  		// movies: response.data.results
	  	}).catch(error => {
	  		console.log(error);
	  	});

  	}

  }
}
</script>