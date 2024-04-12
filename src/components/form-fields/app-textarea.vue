<template>
	<div class="field-wrp">
		<label
			for="textarea"
			class="field-wrp__label"
		>Символов: {{ inputValue.length }}</label>
		<textarea
			class="field-wrp__textarea"
			:name="name"
			id="textarea"
			cols="30"
			rows="10"
			:placeholder="placeholder"
			v-model="inputValue"
			@input="emit('updateValue', name, inputValue)"
		></textarea>
	</div>
</template>

<script setup>
import { ref } from 'vue'
const inputValue = ref('')
const { placeholder, name } = defineProps(['placeholder', 'name'])
const emit = defineEmits(['updateValue'])
</script>

<style
	lang="scss"
	scoped
>
/* textarea {
	padding: 10px;
	max-width: 100%;
	line-height: 1.5;
	border-radius: 5px;
	border: 1px solid #ccc;
	box-shadow: 1px 1px 1px #999;
} */

textarea {
	resize: none;
}

.field-wrp {
	display: flex;
	flex-direction: column;

	&__label {
		margin-left: auto;
	}

	&__textarea {
		font-size: 16px;
		line-height: 120%;
	}
}
</style>