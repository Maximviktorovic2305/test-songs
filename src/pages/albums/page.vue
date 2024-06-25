<script lang="ts" setup>
import SONGS from '../../songs'
</script>

<template>
	<div class="grid grid-cols-2 max-w-[40%]">
		<div class="flex flex-col gap-3">
			<div class="font-bold">Альбом</div>
			<div v-for="item of SONGS" :key="item.album">
				<div>{{ item.album }}</div>
			</div>
		</div>

		<div class="flex flex-col gap-3">
			<div class="font-bold">Год</div>
			<div v-for="item of SONGS" :key="item.album">
				<div>
					<div>{{ item.year_released }}</div>
				</div>
			</div>
		</div>
	</div>
</template>
