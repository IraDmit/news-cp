<template>
	<div class="post">
		<div class="post__id">{{ post.id }}</div>
		<div class="post__info">
			<div
				class="post__info__head"
				@click="slideToggle($event.currentTarget)"
			>

				<div class="post__info--title">{{ post.title }}</div>
				<div class="post__info--author">{{ 'id автора: ' + post.userId }}</div>
			</div>
			<div
				class="post__info--text"
				hidden
			>{{ post.body }}</div>
		</div>
		<div class="post__actions">
			<span
				v-if="!showDeletePopup"
				@click="showDeletePopup = true"
			>
				Удалить
			</span>
			<div
				v-else
				class="delete__actions"
			>
				<p>вы уверены что хотите удалить?</p>
				<div
					@click="handleDeletePost(post.id)"
					class="delete"
				>да</div>
				<div
					@click="showDeletePopup = false"
					class="close"
				>нет</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { deletePost } from '@/services';

import { ref } from 'vue'

const { post } = defineProps(['post'])

const emits = defineEmits(['updatePosts'])

const showDeletePopup = ref(false)

const handleDeletePost = async (id) => {
	try {
		alert(`Удаление поста с id ${id}`)
		showDeletePopup.value = false
		await deletePost(id);
		emits('updatePosts', id)
	} catch (error) {
		console.error('Ошибка при удалении поста:', error);
	}
}

const slideUp = (target, duration = 500) => {
	if (!target.nextElementSibling.classList.contains("_slide")) {
		target.classList.remove("active");
		target.nextElementSibling.classList.add("_slide");
		target.nextElementSibling.style.transitionProperty =
			"height, margin, padding";
		target.nextElementSibling.style.transitionDuration = duration + "ms";
		target.nextElementSibling.style.height =
			target.nextElementSibling.offsetHeight + "px";
		// eslint-disable-next-line no-unused-expressions
		target.nextElementSibling.offsetHeight;
		target.nextElementSibling.style.overflow = "hidden";
		target.nextElementSibling.style.height = 0;
		target.nextElementSibling.style.paddingTop = 0;
		target.nextElementSibling.style.paddingBottom = 0;
		target.nextElementSibling.style.marginTop = 0;
		target.nextElementSibling.style.marginBottom = 0;
		window.setTimeout(() => {
			target.nextElementSibling.hidden = true;
			target.nextElementSibling.style.removeProperty("height");
			target.nextElementSibling.style.removeProperty("padding-top");
			target.nextElementSibling.style.removeProperty("padding-bottom");
			target.nextElementSibling.style.removeProperty("margin-top");
			target.nextElementSibling.style.removeProperty("margin-bottom");
			target.nextElementSibling.style.removeProperty("overflow");
			target.nextElementSibling.style.removeProperty("transition-duration");
			target.nextElementSibling.style.removeProperty("transition-property");
			target.nextElementSibling.classList.remove("_slide");
		}, duration);
	}
}
const slideDown = (target, duration = 500) => {
	if (!target.nextElementSibling.classList.contains("_slide")) {
		target.classList.add("active");
		target.nextElementSibling.classList.add("_slide");
		if (target.nextElementSibling.hidden) {
			target.nextElementSibling.hidden = false;
		}
		const height = target.nextElementSibling.offsetHeight;
		target.nextElementSibling.style.overflow = "hidden";
		target.nextElementSibling.style.height = 0;
		target.nextElementSibling.style.paddingTop = 0;
		target.nextElementSibling.style.paddingBottom = 0;
		target.nextElementSibling.style.marginTop = 0;
		target.nextElementSibling.style.marginBottom = 0;
		target.nextElementSibling.offsetHeight;
		target.nextElementSibling.style.transitionProperty =
			"height, margin, padding";
		target.nextElementSibling.style.transitionDuration = duration + "ms";
		target.nextElementSibling.style.height = height + "px";
		// ie fix
		target.nextElementSibling.style.removeProperty("padding-top");
		target.nextElementSibling.style.removeProperty("padding-bottom");
		target.nextElementSibling.style.removeProperty("margin-top");
		target.nextElementSibling.style.removeProperty("margin-bottom");
		window.setTimeout(() => {
			target.nextElementSibling.style.removeProperty("height");
			target.nextElementSibling.style.removeProperty("overflow");
			target.nextElementSibling.style.removeProperty("transition-duration");
			target.nextElementSibling.style.removeProperty("transition-property");
			target.nextElementSibling.classList.remove("_slide");
		}, duration);
	}
}
const slideToggle = (target, duration = 500) => {
	if (target.nextElementSibling.hidden) {
		return slideDown(target, duration);
	} else {
		return slideUp(target, duration);
	}
}
</script>

<style
	lang="scss"
	scoped
>
.post {
	display: grid;
	grid-template-columns: 1fr 7fr 1fr;
	padding: 10px 12px;
	border-radius: 8px;
	position: relative;

	&__id {
		font-size: 40px;
	}

	&__info {
		grid-gap: 15px;

		&--title {
			font-size: 22px;
			font-weight: 700;
			cursor: pointer;
		}

		&--author {
			color: #7a797a;
			font-size: 16px;
		}
	}

	&__actions {
		margin: 10px auto;

		span {
			cursor: pointer;
			color: red;
			position: relative;

			&::after {
				content: '';
				position: absolute;
				bottom: 0;
				left: 0;
				width: 100%;
				height: 0.1em;
				background-color: hotpink;
				opacity: 0;
				transition: opacity 300ms, transform 300ms;
				transform: scale(0);
				transform-origin: center;
			}

			&:hover::after,
			&:focus::after {
				opacity: 1;
				transform: scale(1);
			}
		}

	}



}

.delete__actions {
	display: grid;
	grid-gap: 10px;
	grid-template-columns: repeat(2, 1fr);

	p {
		margin: 0;
		grid-column: 1 / span 2;
	}

	.delete {
		cursor: pointer;
		color: red;
	}

	.close {
		cursor: pointer;
	}
}
</style>