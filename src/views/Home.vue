<template>
	<div class="home">
		<img alt="Vue logo" src="../assets/logo.png" />
		<HelloWorld msg="Welcome to Vue + Vite + TypeScript" />
	</div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from 'vuex'
import HelloWorld from '../components/HelloWorld.vue'

export default defineComponent({
	name: 'Home',
	components: {
		HelloWorld
	},
	setup() {
		const store = useStore()
		const homeInfo = computed(() => store.state.home.homeInfo)
		return {
			homeInfo
		}
	}
})
</script>
