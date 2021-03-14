<template>
<div>
    <slot :faqs="faqs"></slot>
</div>
</template>

<script>
import UseFaqs from '../hooks/UseFaqs';

export default{
    setup(){
        const { faqs , getFaqs } = UseFaqs();

        getFaqs();

        return{
            faqs,
        }
    }
}
</script>

<style>
</style>