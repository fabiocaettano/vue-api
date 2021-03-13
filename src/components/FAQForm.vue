<template>
  <div>
    <form @submit.prevent="submitForm">                        
      {{ faq }}      
      {{ checarTransacao(faq.transaction )}}          

      <div class="field">
        <label class="label">Question</label>
        <div class="control">
          <input v-if="insert" v-model="faq.question.value"  class="input" type="text" name="question" placeholder="Question" required/>
          <input v-else v-model="faq.question"  class="input" type="text" name="question" placeholder="Question" required/>
        </div>
      </div>

      <div class="field">
        <label class="label">Answer</label>
        <div class="control">
          <textarea v-if="insert" v-model="faq.answer.value" class="textarea" rows="4" name="answer" placeholder="Answer" required/>
          <textarea v-else v-model="faq.answer" class="textarea" rows="4" name="answer" placeholder="Answer" required/>
        </div>
      </div>

      <button type="submit" class="button is-success">
        <slot name="button"></slot>
      </button>
      
    </form>
    
  </div>
</template>

<script>   
  export default{  
    name: "FAQForm",
    props : [ 'submitForm' , 'faq'],
    data(){
      return{        
        insert: true,
        
      }
    },methods:{
      checarTransacao(T){
        if(T === "I"){
          this.insert = true
        }else{
          this.insert = false
        }
      }
    }
    
  };
</script>