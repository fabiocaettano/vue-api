<template>
  <div>
    <form @submit.prevent="submitForm">  
        {{ faq }}    
      <div class="field">
        <label class="label">Question</label>
        <div class="control">
          <input v-model="faq.question.value" class="input" type="text" name="question" placeholder="Question" required/>
        </div>
      </div>

      <div class="field">
        <label class="label">Answer</label>
        <div class="control">
          <textarea v-model="faq.answer.value" class="textarea" rows="4" name="answer" placeholder="Answer" required/>
        </div>
      </div>

      <button type="submit" class="button is-success">Create</button>
    
    </form>
    
  </div>
</template>

<script>   
  export default{  
    props : [ 'submitForm' , 'faq'],
    
  };
</script>