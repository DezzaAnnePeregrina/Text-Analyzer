<script setup>
// export default{
    // props: ['words'],
    // computed: {
    //     wordcount(){
    //         if(!this.words) return 0
    //         return this.words.split(' ').length
    //     },

    //     charactersCount(){
    //         return this.words.length
    //     },

    //     sentenceCount(){
    //         if(!this.words) return 0
    //         const sentence =  this.words.match(/[^.!?]+[.!?]+/g)
    //         return sentence ? sentence.length : 0
    //     }
    // }
// }

import { useWordStore } from '../stores/Words'

const store = useWordStore()
word.value = ''
</script>

<template>
    <div>
        <div class="navbar navbar-expand-lg navbar-light bg-light m-4 d-flex justify-content-evenly"> 
            <div>
                <h2>Words</h2>
                <p>{{ wordcount }}</p>
            </div>

            <div>
                <h2>Characters</h2>
                <p>{{ charactersCount }}</p>
            </div>

            <div>
                <h2>Sentences</h2>
                <p>{{ sentenceCount }}</p>
            </div>
        </div>

    </div>
</template>

<style scoped>
input{
    min-width: 300px;
    max-width: 1040px;
}
</style>