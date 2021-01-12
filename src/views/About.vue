<template>
	<div class="about">
		<h1>This is an about page</h1>
		<p>{{ aboutInfo }}</p>
		<p>{{ title }}</p>
		<p>{{ content }}</p>
	</div>
</template>

<script lang="ts">
import { useStore } from 'vuex'
import { computed, defineComponent } from 'vue'
import { useVuexValue } from '@hooks/index'

export default defineComponent({
	name: 'About',
	setup() {
		const store = useStore()
		const aboutInfo = computed(() => store.state.about.aboutInfo)
		const [title, content] = useVuexValue('about/detail', ['title', 'content'])

		return {
			aboutInfo,
			title,
			content
		}
	}
})
</script>
