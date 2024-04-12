<template>
	<div
		class="button"
		@click="emit('sendForm')"
	>
		{{ placeholder }}
	</div>
</template>

<script setup>
const { placeholder } = defineProps(['placeholder'])
const emit = defineEmits(['sendForm'])
</script>

<style
	lang="scss"
	scoped
>
.button {
	margin: 0 auto;
	padding: 10px 20px;
	background-color: #4e6ebf;
	max-width: 180px;
	width: 100%;
	text-align: center;
	border-radius: 8px;
	color: #fff;
	cursor: pointer;
}
</style>