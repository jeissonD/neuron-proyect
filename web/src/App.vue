<template>
  <div>
		<app-header></app-header>
		<ninjas v-bind:ninjas="ninjas"></ninjas>
		<app-footer></app-footer>
  </div>
</template>

<script>
	import Ninjas from './components/Ninjas.vue';
	import Header from './components/Header.vue';
	import Footer from './components/Footer.vue';

	export default {
		components:{
			'ninjas' : Ninjas,
			'app-header' : Header,
			'app-footer' : Footer
		},
		name: 'app',
		data () {
			return {
				title: 'you first title',
				ninjas: [
					{name: 'Ryu', speciality: 'Vue Components', show: false},
					{name: 'Crystal', speciality: 'HTML Wizardry', show: false},
					{name: 'Hitoshi', speciality: 'Click Events', show: false},
					{name: 'Tango', speciality: 'Conditionals', show: false},
					{name: 'Kami', speciality: 'Webpack', show: false},
					{name: 'Yoshi', speciality: 'Data Diggin', show: false}
			 ]
			}
		},
		methods:{
			greeting : function(){
				return 'hellow mother fuker'
			}
		}
	}
</script>

<style lang="scss">
</style>
