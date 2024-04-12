<template>
	<input
		:name="name"
		:type="type"
		:placeholder="placeholder"
		@input="emit('updateValue', name, inputValue)"
		v-model="inputValue"
	>
</template>

<script setup>
import { ref } from 'vue'

const { type, placeholder, name } = defineProps(['type', 'placeholder', 'name'])

const inputValue = ref('')
const emit = defineEmits(['updateValue'])
</script>