# client-vue-2

## Descrição do Projeto
O projeto tem como base a live do Coding Garden.
São quase 04 horas, mas vale a pena (códificação inicia a partir da 1:18)
Onde foi desenvolvido uma aplicação do lado do cliente.
Com Vue 2 + Composition API.

Link do video [Assistir no YouTube](https://cli.vuejs.org/config/).

### Criar o Projeto
```
vue create client-vue-2
```

### Configuração do Projeto


### Dependências
```
npm i @vue/compostion-api
npm i @u3u/vue-hooks
npm install bulma
```

### Recursos Necessários
IDE Visual Studio Code
Aplicativo Insomnia para testar as requisições de API
Backend

### Ajustes Necessários
Tentei realizar o projeto com Vue3, mas devido alguns problemas que começaram
a ocorrer devido @vue/composition-api, retornei o projeto para Vue2. 

De inicio ao utilizar a diretiva v-model, configurei na tag da seguinte forma 
v-model="objeto.paramento", e com isso os valores digitados no formulário não populavam no banco.
Para corrigir fiz a seguinte alteração na tag html: v-model="objeto.paramento.value"


