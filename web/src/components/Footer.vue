<template>
	<footer>
		<p>{{copyright}}</p>
	</footer>
</template>

<script>
	
export default {
  name: 'app',
  data () {
    return {
			copyright : 'jeisson lazo 2017'
    }
  }
}
</script>

<style lang="scss" scoped>
	footer{
		background: #222;
		color: #fff;
	}
</style>