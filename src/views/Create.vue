<template>
  <FaqForm 
    :faq="faq"
    :submitForm="inserirFaq"
  >
  <template slot="button">
    Create
  </template>
  </FaqForm>  
</template>

<script>    
  import FaqForm from '@/components/FaqForm.vue'
  import { ref } from '@vue/composition-api'
  import { useRouter } from '@u3u/vue-hooks'  
  

  export default{  
    components : {
      FaqForm
    },
    setup(){            
      const question = ref('');
      const answer = ref('');
      const { router } = useRouter();

      const API_URL = 'http://localhost:3000/faq/incluirFaq';
      
      
        
      async function inserirFaq(){
            
            const response = await fetch(API_URL,{
              method: 'POST',
              headers:{
                'content-type':'application/json'                
              },
              body: JSON.stringify({                
                question: question.value ,
                answer: answer.value                
              }),
            });

            const json = await response.json();                      

            console.log(json);
            
            if(response.ok){
              router.push({
                name : 'home',
              });
            }
      }

      return {        
        inserirFaq,               
        faq:{                    
          transaction: 'I',
          question,
          answer
        },        
      };
    }
    
  }
</script>