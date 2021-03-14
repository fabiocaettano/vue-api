<template>
  <div>    
    <router-link :to="{ name : 'create' }" class="button is-success">Create</router-link>
    <FaqList />
  </div>
</template>

<script>
// @ is an alias to /src
import FaqList from '@/components/FaqList.vue'

export default {
  name: 'Home',
  components: {
    FaqList,
  }
}
</script>
