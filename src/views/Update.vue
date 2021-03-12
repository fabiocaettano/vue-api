<template>
  <FAQForm2
    :faq="faq"
    :submitForm="UpdateFaq"
  />
</template>

<script>    
  import FAQForm2 from '@/components/FAQForm2.vue'
  import { ref } from '@vue/composition-api'
  import { useRouter } from '@u3u/vue-hooks'  
  

  export default{  
    components : {
      FAQForm2
    },
    setup(){      
      
      const { router , route } = useRouter();

      const faq = ref({
        question: '',
        answer: ''
      });

      const API_URL = 'http://localhost:3000/faq/alterarFaq';
        
      async function UpdateFaq(){
            
            const { id } = route.value.params;    
            
            const response = await fetch(`${API_URL}/${id}`,{
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

      /*function getCurrentFaq(){
        
        console.log(id);
      }

      getCurrentFaq();*/

      return {        
        faq, 
        UpdateFaq       
      };
    }
    
  }
</script>