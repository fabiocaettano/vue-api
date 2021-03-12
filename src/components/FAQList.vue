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

        <button @click="removeFaq(faq.id)" class="button is-danger">Excuir</button>
        <button @click="alteraFaq(faq.id)" class="button is-warning">Alterar</button>

    </div>    
</div>
</template>

<script>

import { ref } from '@vue/composition-api'
import { useRouter } from '@u3u/vue-hooks'  

export default{    
    setup(){        

        const faqs = ref({});

        const { router } = useRouter();
        
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

        async function alteraFaq(id){
            router.push({
                name: 'update',
                params:{
                    id: id
                }
            })
        }

        return {            
            faqs,
            removeFaq,
            alteraFaq
        }
    },
};
</script>