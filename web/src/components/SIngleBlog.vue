<template>
	<div id="single-blogs">
		<h2>{{blog.title}}</h2>
		<article>{{blog.body}}</article>
	</div>
</template>

<script>
	
export default {
  data () {
    return {
			id:this.$route.params.id,
			blog:{}
    }
  },
	created (){
		this.$http.get('https://jsonplaceholder.typicode.com/posts/'+this.id).then(function(data){
			this.blog = data.body;
		})
	}
}
</script>

<style lang="scss">
</style>