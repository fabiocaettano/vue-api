<template>
  <FaqForm        
    :faq="faq"
    :submitForm="alterarFaq"
   >
  <template slot="button">
    Update
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
      
      const { router , route } = useRouter();
      
      const { id } = route.value.params;                

      const faq = ref({        
        transaction : '',
        question : '',
        answer: ''
      })      
      
      const API_URL = 'http://localhost:3000/faq';            
      

      async function getFaq(id){
      
        const response = await fetch(`${API_URL}/retornaFaq/${id}`,{
          method: 'GET'
        });

        const json = await response.json();               
        
        var map = new Map(Object.entries(json));
        
        map.forEach(element => {
          faq.value.transaction = element.transaction;
          faq.value.question = element.question;
          faq.value.answer = element.answer
        });

        

      }      

      async function alterarFaq(){                       

            
            const response = await fetch(`${API_URL}/alterarFaq/${id}`,{
              method: 'PUT',
              headers:{
                'content-type':'application/json'                
              },
              body: JSON.stringify({                                
                question: faq.value.question ,
                answer: faq.value.answer                
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

      getFaq(id);



      /*function getCurrentFaq(){
        
        console.log(id);
      }

      getCurrentFaq();*/

      return {                        
        alterarFaq,               
        faq,                 
      };
    }
    
  }
</script>