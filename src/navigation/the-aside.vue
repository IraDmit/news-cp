<template>
	<aside class="aside">
		<div class="aside__item aside__item--user">
			<img
				src="https://picsum.photos/200"
				alt="userIcon"
				class="aside__item-image"
			>
			<div class="aside__info">
				<div class="aside__info-item aside__info-item--name">Ирина</div>
				<div class="aside__info-item aside__info-item--email">test@gmail.com</div>
			</div>
		</div>
		<router-link
			to="/"
			class="aside__item"
			active-class="active"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				x="0px"
				y="0px"
				width="100"
				height="100"
				viewBox="0 0 50 50"
			>
				<path
					d="M 24.962891 1.0546875 A 1.0001 1.0001 0 0 0 24.384766 1.2636719 L 1.3847656 19.210938 A 1.0005659 1.0005659 0 0 0 2.6152344 20.789062 L 4 19.708984 L 4 46 A 1.0001 1.0001 0 0 0 5 47 L 18.832031 47 A 1.0001 1.0001 0 0 0 19.158203 47 L 30.832031 47 A 1.0001 1.0001 0 0 0 31.158203 47 L 45 47 A 1.0001 1.0001 0 0 0 46 46 L 46 19.708984 L 47.384766 20.789062 A 1.0005657 1.0005657 0 1 0 48.615234 19.210938 L 41 13.269531 L 41 6 L 35 6 L 35 8.5859375 L 25.615234 1.2636719 A 1.0001 1.0001 0 0 0 24.962891 1.0546875 z M 25 3.3222656 L 44 18.148438 L 44 45 L 32 45 L 32 26 L 18 26 L 18 45 L 6 45 L 6 18.148438 L 25 3.3222656 z M 37 8 L 39 8 L 39 11.708984 L 37 10.146484 L 37 8 z M 20 28 L 30 28 L 30 45 L 20 45 L 20 28 z"
				></path>
			</svg>
			Все новости</router-link>
		<router-link
			to='/create'
			class="aside__item"
			active-class="active"
		>
			<svg
				version="1.1"
				id="Capa_1"
				xmlns="http://www.w3.org/2000/svg"
				xmlns:xlink="http://www.w3.org/1999/xlink"
				x="0px"
				y="0px"
				viewBox="0 0 512.773 512.773"
				style="enable-background:new 0 0 512.773 512.773;"
				xml:space="preserve"
			>
				<g>
					<g>
						<g>
							<path
								d="M128,384.715l99.375-16.989L495.011,100.09c23.113-22.323,23.753-59.156,1.43-82.269 c-22.323-23.113-59.156-23.753-82.269-1.43c-0.485,0.468-0.962,0.945-1.43,1.43L145.105,285.457L128,384.715z M429.149,34.228 c14.105-13.144,36.195-12.364,49.338,1.741c12.492,13.407,12.492,34.19,0,47.597l-15.011,15.011l-49.338-49.338L429.149,34.228z M397.615,65.762l49.338,49.338L232.727,329.326v-49.338h-49.338L397.615,65.762z M166.051,303.26h43.404v43.404l-52.364,8.96 L166.051,303.26z"
							/>
							<path
								d="M500.364,175.26c-6.427,0-11.636,5.21-11.636,11.636v256c0,25.706-20.839,46.545-46.545,46.545H69.818 c-25.706,0-46.545-20.839-46.545-46.545V70.533c0-25.706,20.839-46.545,46.545-46.545h256c6.427,0,11.636-5.21,11.636-11.636 s-5.21-11.636-11.636-11.636h-256C31.259,0.715,0,31.974,0,70.533v372.364c0,38.56,31.259,69.818,69.818,69.818h372.364 c38.56,0,69.818-31.259,69.818-69.818v-256C512,180.47,506.79,175.26,500.364,175.26z"
							/>
						</g>
					</g>
				</g>
			</svg>
			Добавить запись</router-link>
	</aside>
</template>


<script setup>
</script>

<style
	lang="scss"
	scoped
>
.aside {
	padding: 10px;
	max-width: 350px;
	width: 100%;
	position: fixed;
	top: 0;
	box-shadow: 5px 0 5px -5px rgba(0, 0, 0, .5);
	height: 100vh;
}

.aside__item {
	display: flex;
	align-items: center;
	padding: 15px;
	color: #000;
	text-decoration: none;
	grid-gap: 20px;

	svg {
		width: 25px;
		height: 25px;
	}

	&.active {
		color: #00bfff;

		svg {
			fill: #00bfff;
		}
	}

	&--user {
		display: grid;
		grid-template-columns: 1fr 5fr;
		align-items: center;
		grid-gap: 20px;
	}

	&-image {
		width: 50px;
		height: 50px;
		border-radius: 50%;
	}

	&:not(:last-child) {
		border-bottom: 1px solid #ccc;
	}
}

.aside__info-item {
	&--name {
		font-size: 20px;
	}

	&--email {
		font-size: 15px;
		color: #A9A9A9;
	}
}
</style>
