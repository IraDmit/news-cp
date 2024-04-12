<template>
	<div>
		<h1>Все новости</h1>
		<div
			v-if="isLoading"
			class="loader"
		>
			<span class="spinner"></span>
		</div>
		<div
			class="posts"
			v-if="postsList"
		>
			<post-item
				class="posts__item"
				v-for="(post, idx) in postsList"
				:key="'post' + idx"
				:post="post"
				@updatePosts=updatePosts
			/>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue'
import { fetchData } from '@/services'
import postItem from '@/components/posts/post-item.vue';

const postsList = ref()
const isLoading = ref(true)

const updatePosts = (id) => {
	// fetchPosts()
	postsList.value = postsList.value.filter(post => post.id !== id);
}

const fetchPosts = async () => {
	console.log('fetchposts');
	try {
		const data = await fetchData();
		postsList.value = data;
		// cделала setTimout для имитации тяжелого запроса
		setTimeout(() => {
			isLoading.value = false;
		}, 1500);
	} catch (error) {
		console.error('Ошибка при загрузке постов:', error);
		throw error;
	}
};

fetchPosts();

</script>

<style
	lang="scss"
	scoped
>
.loader {
	border-radius: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	width: 100%;
	background-color: #fff;
	animation: anim1 5s ease;
	position: relative;
	z-index: 1;
}

@keyframes anim1 {
	0% {
		background-color: #f4f4f4;
	}

	50% {
		background-color: #fff;
	}

	100% {
		background-color: #f4f4f4;
	}
}

.spinner {
	width: 48px;
	height: 48px;
	border: 5px solid #FFF;
	border-bottom-color: #cfe0fa;
	border-radius: 50%;
	display: inline-block;
	box-sizing: border-box;
	animation: rotation 2s linear infinite;
}

@keyframes rotation {
	0% {
		transform: rotate(0deg);
	}

	100% {
		transform: rotate(360deg);
	}
}

.posts {
	display: flex;
	flex-direction: column;
	grid-gap: 20px;

	&__item {
		background-color: #fff;
	}
}
</style>