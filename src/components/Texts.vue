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
  <div class="px-3">
    <div class="textAnalyzer d-flex flex-wrap justify-content-evenly border p-3 py-4">
      <div class="d-flex flex-column align-items-center px-1">
        <h4 class="text-secondary">Words</h4>
        <h4>{{ wordcount }}</h4>
      </div>

      <div class="d-flex flex-column align-items-center px-1">
        <h4 class="text-secondary">Characters</h4>
        <h4>{{ charactersCount }}</h4>
      </div>

      <div class="d-flex flex-column align-items-center px-1">
        <h4 class="text-secondary">Sentences</h4>
        <h4>{{ sentenceCount }}</h4>
      </div>

      <div class="d-flex flex-column align-items-center px-1">
        <h4 class="text-secondary">Paragraphs</h4>
        <h4>{{ paragraphCount }}</h4>
      </div>

      <div class="d-flex flex-column align-items-center px-1">
        <h4 class="text-secondary">Pronouns</h4>
        <h4>{{ pronounCount }}</h4>
      </div>
    </div>

    <div class="mb-4 mt-4">
      <input class="form-control text-secondary" v-model="words" type="text" placeholder="Paste your text here...">
    </div>

    <div class="textAnalyzer d-flex flex-column flex-wrap justify-content-center align-items-center py-4 ">
      <div class="d-flex flex-wrap justify-content-center align-items-center">
        <h4 class="text-secondary px-2">Average Reading Time:</h4>
        <h4>- {{ readingTime }}</h4>
      </div>

      <div class="d-flex flex-wrap justify-content-center align-items-center">
        <h4 class="text-secondary px-2">Longest Word:</h4>
        <h4>{{ longestWord }}</h4>
      </div>
      
      
    </div>
  </div>
</template>

<style scoped>
.textAnalyzer{
  background-color: white;
}

input{
  width: 100%;
  height: 250px;
  border: none;
  font-size: 20px;
  font-weight: 700;
  padding: 0 30px;
  text-justify: calc(-100);
}

input:focus{
  border: none !important;
  box-shadow: none;
  color: black !important;
}
</style>
