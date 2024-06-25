<script lang="ts" setup>
import { Header } from '../../components/header/index'
</script>

<template>

   <Header />
  
  <main>
    <div class="max-w-[1200px] mx-auto">
      <RouterView />
    </div>
  </main>
</template>