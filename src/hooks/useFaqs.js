import { ref } from '@vue/composition-api';
import API_URL from '../API_URL';

export default function UseFaqs(){
    
    const faqs = ref({});

    async function getFaqs(){

        const response = await fetch(`${API_URL}/retornaFaqs`);            
        
        const json = await response.json();           
        
        faqs.value = json;            
    }

    return {            
        faqs,
        getFaqs,
    }
}