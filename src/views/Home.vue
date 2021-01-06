<template>
	<div class="home">
		<img alt="Vue logo" src="../assets/logo.png" />
		<HelloWorld msg="Welcome to Vue + Vite + TypeScript" />
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// @ is an alias to /src
import HelloWorld from '../components/HelloWorld.vue'

export default defineComponent({
	name: 'Home',
	components: {
		HelloWorld
	}
})
</script>
