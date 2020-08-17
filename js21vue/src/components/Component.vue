<template>
<div class="container">
        <div class="background "> 
          <form class="form" v-on:submit.prevent>
            <input class="number-name" type="text" pattern="^[ 0-9]+$" name="number-name" 
               placeholder="Введіть число..." v-model="inputNumber" @blur="onBlur" />
             <button class="btn" type="submit" @click="onDincrement">Декримент</button>
             <button class="btn" type="submit" @click="onIncrement">Інкримент</button>
            <p class="numder">{{number}}</p>
          </form>
       </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            number: "",
            inputNumber: "",
        }
    },

methods: {

    onBlur() {
        this.number = this.inputNumber;
        this.inputNumber= "";
    },
    onDincrement() {
       this.number++; 
    },
     onIncrement() {
       this.number--; 
    },
}
}
</script>

<style lang="scss">
.container {
    margin: 0 auto;
    width: 600px;
    height: 200px;
}
.background {
width: 400px;
height: 200px;
border: 1px solid black;
margin: auto;
}
.form {
    margin: 15px auto;
}
.number-name {
    width: 350px;
    font-size: 30px;
    margin-bottom: 15px;
}
.btn {
    font-size: 30px;
    margin-left: 15px;
    cursor: pointer;
    background-color: rgb(126, 56, 192);
}
p {
    font-size: 30px;
}
</style>