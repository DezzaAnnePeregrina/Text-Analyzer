import { defineStore } from "pinia"

export const useWordStore = defineStore('words', {
    state: () =>{
        return { word: ''}
    },
    getters: {
        wordcount(){
            if(!this.words) return 0
            return this.words.split(' ').length
        },

        charactersCount(){
            return this.words.length
        },

        sentenceCount(){
            if(!this.words) return 0
            const sentence =  this.words.match(/[^.!?]+[.!?]+/g)
            return sentence ? sentence.length : 0
        }
    }
})