<template>
	<div class="radio-wrp">
		<h4 class="radio-wrp__placeholder">{{ placeholder }}</h4>
		<div class="radio-wrp__content">
			<div class="radio-wrp__item">
				<input
					type="radio"
					id="male"
					value="male"
					class="radio-wrp__item__input"
					v-model="inputValue"
					checked
				/>
				<label
					for="male"
					class="radio-wrp__item__label"
				>Мужской</label>
			</div>
			<div class="radio-wrp__item">

				<input
					type="radio"
					id="female"
					value="female"
					class="radio-wrp__item__input"
					v-model="inputValue"
				/>
				<label
					for="female"
					class="radio-wrp__item__label"
				>Женский</label>
			</div>
		</div>
	</div>
</template>


<script setup>
import { onMounted, ref, watch } from 'vue'

const { placeholder, name } = defineProps(['placeholder', 'name'])
const emit = defineEmits(['updateValue'])
const inputValue = ref('male')

watch(inputValue, () => {
	emit('updateValue', name, inputValue.value)
})

onMounted(() => {
	emit('updateValue', name, inputValue.value)

})
</script>

<style
	lang="scss"
	scoped
>
.radio-wrp__placeholder {
	margin: 10px 0;
}

.radio-wrp__content {
	display: flex;
	grid-gap: 20px;
}

.radio-wrp__item {
	display: flex;
	align-items: center;
	cursor: pointer;

	&__label_ {

		cursor: pointer;
	}
}
</style>