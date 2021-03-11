<template>
<div>           
    <div class="card" v-for="faq in faqs" :key=faq.id>  

        <div class="card-content">
            <div class="media">      
                <div class="media-content">
                    <p class="title is-4">{{ faq.question }}</p>        
                </div>
            </div>
        </div>

        <div class="content">
            {{ faq.answer }}            
        </div>

        <button @click="removeFaq(faq.id)" class="button is-danger">Delete</button>

    </div>    
</div>
</template>

<script>

import { ref } from '@vue/composition-api'

export default{    
    setup(){        

        const faqs = ref({});
        
        const API_URL = 'http://localhost:3000/faq';
        
        async function getFaqs(){

            const response = await fetch(`${API_URL}/retornaFaqs`);            
            
            const json = await response.json();           
            
            faqs.value = json;            
        }

        async function removeFaq(id){
            await fetch(`${API_URL}/excluirFaq/${id}`,{
                method: 'DELETE',
            });
            
            getFaqs();
        }

        getFaqs();

        return {            
            faqs,
            removeFaq
        }
    },
};
</script>