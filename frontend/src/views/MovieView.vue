<template>
  <div><h1>상세 내용</h1>
    <div class="container">
      <div class="outer">
        <div class="inner">
          <div class="centered"><img class="poster" v-bind:src="movie.poster">
            <div><strong>{{ movie.name }}</strong> - <i>{{ movie.director }}</i> [{{ movie.year }}] <p>
              {{ movie.description }}</p>
              <router-link to="/about">돌아가기</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                /* eslint-disable */
import axios from "axios";

export default {
  created: function () {
    var id = this.$route.params.id;
    axios.get(`http://localhost:3000/${id}`).then(res => {
      console.log(res)
      this.movie = res.data[0];
    }).catch(err => {
      console.log(err)
    });
  },
  data:
      function () {
        return {movie: {}};
      }
}; </script>
