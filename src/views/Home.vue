<template>
	<div class="home">
		<img alt="Vue logo" src="../assets/logo.png" />
		<p>{{ info }}</p>
		<button @click="changeInfo">
			Click to change Info
		</button>
	</div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from '../custom_store/info'

export default defineComponent({
	name: 'Home',
	setup() {
		const store = useStore()
		const info = computed(() => store.state.info)

		function changeInfo() {
			store.action.chageInfo('hhh')
		}

		return {
			info,
			changeInfo
		}
	}
})
</script>
