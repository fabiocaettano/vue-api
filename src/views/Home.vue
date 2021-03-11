<template>
  <div>    
    <router-link :to="{ name : 'create' }" class="button is-success">Create</router-link>
    <FAQList />
  </div>
</template>

<script>
// @ is an alias to /src
import FAQList from '@/components/FAQList.vue'

export default {
  name: 'Home',
  components: {
    FAQList,
  }
}
</script>
