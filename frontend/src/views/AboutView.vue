<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
  <div class="movies">
    <h1>영화 목록</h1>
    <div class="container">
      <div class="outer">
        <div class="inner">
          <div v-for="movie in movies" :key="movie.id" class="centered"><img class="poster" v-bind:src="movie.poster">
            <div><strong>{{ movie.name }}</strong> - <i>{{ movie.director }}</i> [{{ movie.year }}]
              <router-link :to="{ name: 'detail', params: { id: movie.id }}">더보기</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const axios = require('axios')

export default {
  data() {
    return {
      movies: [],
    };
  },
  methods: {
    loadMovies: function () {
      axios.get('http://localhost:3000/')
          .then((res) => {
            this.movies = res.data;
          })
          .catch((err) => {
            console.log(err)
          });
    }
  },
  created() {
    this.loadMovies();
  },
}
</script>

<style scoped>
</style>
