<template>
	<div class="checkbox">
		<input
			type="checkbox"
			:name="name"
			v-model="checkboxValue"
		>
		<span
			class="checkbox__text"
			@click="checkboxValue = !checkboxValue"
		>{{ placeholder }}</span>
	</div>
</template>

<script setup>
import { ref, watch } from 'vue'

const { placeholder, name } = defineProps(['placeholder', 'name'])
const emit = defineEmits(['updateValue'])
const checkboxValue = ref(false)

watch(checkboxValue, () => {
	emit('updateValue', name, checkboxValue.value)
})
</script>

<style
	lang="scss"
	scoped
>
.checkbox {
	display: flex;
	align-items: center;
	grid-gap: 20px;

	&__text {
		cursor: pointer;
	}
}
</style>