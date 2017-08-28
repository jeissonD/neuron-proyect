<template>
	<div id="show-blogs">
		<input type="text" v-model="search" placeholder="search"/>
		<h1>All blog articles</h1>
		<div v-for="blog in blogs" class="single-blog">
			<router-link v-bind:to="'/blog/' + blog.id">{{blog.title}}</router-link>
			<h2>{{blog.title}}</h2>
			<p>{{blog.body}}</p>
		</div>
	</div>
</template>

<script>
	
export default {
  data () {
    return {
			blogs :[],
			search:''
    }
  },
	methods :{
		
	},
	created () {
		 this.$http.get('https://jsonplaceholder.typicode.com/posts').then(response => {
			 this.blogs = response.body.slice(0,10);
		 });
	}
}
</script>

<style lang="scss">
</style>