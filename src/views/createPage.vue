<template>
	<div>
		<h1>Добавить запись</h1>
		<div class="content">
			<form
				class='form'
				ref="formObserver"
			>
				<component
					:is="field.component"
					v-for="(field, idx) in fieldsList"
					:key="'field' + idx"
					:placeholder="field.placeholder"
					:type="field.type"
					:name="field.name"
					@updateValue="updateValue"
					@sendForm="sendForm"
				></component>
			</form>
			<div
				class="resultForm"
				v-if="show"
			>
				<div
					class="resultForm__field"
					v-for="(value, key, idx) in form"
					:key="'resultField' + idx"
				>
					<div class="resultForm__field__key">{{ key }}: </div>
					<div class="resultForm__field__value">{{ value }}</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { defineAsyncComponent } from 'vue'

const appInput = defineAsyncComponent(() => import('../components/form-fields/app-input.vue'))
const appCheckBox = defineAsyncComponent(() => import('../components/form-fields/app-checkbox.vue'))
const appRadio = defineAsyncComponent(() => import('../components/form-fields/app-radio.vue'))
const appTextarea = defineAsyncComponent(() => import('../components/form-fields/app-textarea.vue'))
const appButton = defineAsyncComponent(() => import('../components/form-fields/app-button.vue'))

const show = ref(false)

const fieldsList = [{
	component: appInput,
	type: 'text',
	placeholder: 'Ваше имя',
	name: 'name'
},
{
	component: appInput,
	type: 'email',
	placeholder: "Email",
	name: 'email'
},
{
	component: appRadio,
	placeholder: 'Пол',
	name: 'gender'
},
{
	component: appTextarea,
	placeholder: 'Cooбщение',
	name: 'message'
},
{
	component: appCheckBox,
	placeholder: 'Согласие на обработку персональных данных',
	name: 'agree'
},
{
	component: appButton,
	placeholder: 'Отправить',
}]

const form = reactive({})
const formObserver = ref(null);

const updateValue = (key, value) => {
	form[key] = value
}

const sendForm = () => {
	// не делала валидация так как не было указанов тз, 
	// но могу показать примеры где я делала валидации с помощью библиотек и не только
	show.value = true
	formObserver.value.reset()
}
</script>

<style
	lang="scss"
	scoped
>
.content {
	display: flex;
	grid-gap: 20px;
}

.form,
.resultForm {
	width: 50%;
	padding: 15px;
	background-color: #fff;
	display: flex;
	flex-direction: column;
	border-radius: 8px;
	grid-gap: 15px;
}

.resultForm {
	width: calc(50% - 20px);

	&__field {
		display: flex;
		grid-gap: 20px;
	}
}
</style>