<script lang="ts" setup>
import SONGS from '../../songs'
</script>

<template>
	<div class="flex flex-col gap-3">
		<div class="font-bold">Испольнители:</div>
		<div v-for="item of SONGS" :key="item.artist">{{ item.artist }}</div>
	</div>
</template>
