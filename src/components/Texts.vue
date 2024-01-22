<script>

export default{
    data() {
        return {
            words: ''
        }   
    },

    computed: {
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
}
</script>

<template>
    <div>
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

        <div>
            <textarea v-model="words" type="text" placeholder="Enter Something"></textarea>
        </div>

        <div>
            <h3></h3>
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>