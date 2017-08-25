<template>
	<header>
		<h1>{{title}}</h1>
	</header>
</template>

<script>
	
export default {
  name: 'app',
  data () {
    return {
			title : 'title'
    }
  }
}
</script>

<style lang="scss" scoped>
	h1{
		color: black;
	}
</style>