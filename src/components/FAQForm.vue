<template>
  <div>
    <form @submit.prevent="submitForm">      
      <div class="field">
        <label class="label">Question</label>
        <div class="control">
          <input v-model="faq.question" class="input" type="text" name="faq.question" placeholder="Question" required/>
        </div>
      </div>

      <div class="field">
        <label class="label">Answer</label>
        <div class="control">
          <textarea v-model="faq.answer" class="textarea" rows="4" name="faq.answer" placeholder="Answer" required/>
        </div>
      </div>

      <button type="submit" class="button is-success">Create</button>
    
    </form>
    
  </div>
</template>

<script>   
  export default{  
    props : [ 'submitForm' , 'faq']
  };
</script>