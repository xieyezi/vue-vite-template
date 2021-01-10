<template>
	<div class="about">
		<h1>This is an about page</h1>
		<p>{{ aboutInfo }}</p>
	</div>
</template>

<script lang="ts">
import { useStore } from 'vuex'
import { computed, defineComponent } from 'vue'

export default defineComponent({
	name: 'About',
	setup() {
		const store = useStore()
		const aboutInfo = computed(() => store.state.about.aboutInfo)
		return {
			aboutInfo
		}
	}
})
</script>
