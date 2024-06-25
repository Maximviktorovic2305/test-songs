<script lang="ts" setup></script>

<template>
	<div class="max-w-[1200px] mx-auto my-5">
		<div class="flex gap-7 items-center w-full justify-start">
			<RouterLink to="/">
				<div
					class="inline px-3 py-2 bg-blue-400 rounded hover:bg-blue-500 duration-200 cursor-pointer">
					Артисты
				</div>
			</RouterLink>
			<RouterLink to="/albums">
				<div
					class="inline px-3 py-2 bg-blue-400 rounded hover:bg-blue-500 duration-200 cursor-pointer">
					Альбомы
				</div>
			</RouterLink>
			<RouterLink to="/songs">
				<div
					class="inline px-3 py-2 bg-blue-400 rounded hover:bg-blue-500 duration-200 cursor-pointer">
					Песни
				</div>
			</RouterLink>
		</div>
	</div>
</template>
