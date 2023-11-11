<template>
  <div>{{cont}}</div>

  <div>
    <button @click="go">加一</button>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
const cont = ref(0)
const go = ()=>{
    cont.value +=1
}
</script>
