<template>
<div class="container">
        <div class="background ">
        <form class="form" v-on:submit.prevent="onSubmit">
            <input class="color-name" type="text" name="bg-color" placeholder="Введіть колір..." v-model="inputColor">
            <button class="btn" type="submit">Пошук</button>
            <p v-bind:style="{'color': color}">{{text}}</p>
        </form>
    </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            color: "",
            inputColor: "",
            text: ""
        }
    },

methods: {
    onSubmit: function () {
        this.color = this.inputColor;
        this.text = this.inputColor;
        this.inputColor = "";
    }
}
}
</script>

<style>
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
.color-name {
    width: 200px;
    font-size: 30px;
}
.btn {
    font-size: 30px;
    margin-left: 10px;
    cursor: pointer;
    background-color: rgb(126, 56, 192);
}
p {
    font-size: 30px;
}
</style>