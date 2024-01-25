<script>
export default{
  data() {
    return {
      words: '',
      pronouns: ['he', 'him', 'his', 'she', 'her','hers','they','them','I','you','it','we','us','its','theirs','our','yours','your'],
      wordsPerMin: 200,
      readingTime: 1
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
    },

    paragraphCount(){
      if(!this.words) return 0
      const paragraphs = this.words.split('\n').filter(p => p.trim() !== '')
      return paragraphs.length
    },

    pronounCount(){
      if(!this.words) return 0
      const pronouns = this.pronouns.map(e => this.words.match(new RegExp(`\\b${e}\\b`,'gi')) || []).flat()
      return pronouns.length
    },

    readingTime(){
      if(!this.words) return 0
      const reads = Math.ceil(this.wordcount / this.wordsPerMin)
      return reads !== 1 ? `~ ${reads} minutes`: `~ ${reads} minute`
    },

    longestWord(){
      if(!this.words) return ''
      const longest = this.words.split(/\s+/).reduce((e,a) => {
        return a.length > e.length ? a : e
      }, '')
      return longest
    }
  }
}
</script>

<template>
  <div>
    <div>
      <h3>Words {{ wordcount }}</h3>
      <h3>Characters : {{ charactersCount }}</h3>
      <h3>Sentences: {{ sentenceCount }}</h3>
      <h3>Paragraphs: {{ paragraphCount }}</h3>
      <h3>Pronouns: {{ pronounCount }}</h3>

    </div>

    <div>
      <textarea v-model="words" type="text" placeholder="Enter something"></textarea>
    </div>

    <div>
      <h3>Average Reading Time: {{ readingTime }}</h3>
      <h3>Longest Word: {{ longestWord }}</h3>
    </div>
  </div>
</template>

<style scoped>

</style>
