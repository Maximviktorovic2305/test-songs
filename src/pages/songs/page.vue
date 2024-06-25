<script lang="ts" setup>
import SONGS from '../../songs'
</script>

<template>
	<div
		class="grid grid-cols-3 max-w-[50%] my-9"
		v-for="item of SONGS"
		:key="item.artist">
		<div>
			<div class="mb-2 font-bold">Альбом</div>
			<div>{{ item.album }}</div>
		</div>

		<div>
			<div class="mb-2 font-bold">Песни</div>
			<div
				v-for="song in item.album_songs"
				:key="song.serial_number"
				class="mb-2">
				<span>
					{{ song.title }}
				</span>
			</div>
		</div>
		<div>
			<div class="mb-2 font-bold">Номер</div>
			<div
				v-for="song in item.album_songs"
				:key="song.serial_number"
				class="mb-2 ml-5">
				<span>
					{{ song.serial_number }}
				</span>
			</div>
		</div>
	</div>
</template>
