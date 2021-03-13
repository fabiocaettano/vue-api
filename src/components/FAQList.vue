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

import { useRouter } from '@u3u/vue-hooks'  
import useFaqs from '../hooks/useFaqs'
import API_URL from '../API_URL'

export default{    

    setup(){        

        const { router } = useRouter();
        const { faqs, getFaqs } = useFaqs();
        
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