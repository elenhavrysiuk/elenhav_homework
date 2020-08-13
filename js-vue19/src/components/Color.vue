<template>
<div class="container">
        <div class="background " v-bind:style="{'background-color': color}">
        <form class="form" v-on:submit.prevent="onSubmit">
            <input class="color-name" type="text" name="bg-color" placeholder="Введіть колір..." v-model="inputColor">
            <button class="btn" type="submit">Пошук</button>
        </form>
    </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            color: "",
            inputColor: ""
        }
    },

methods: {
    onSubmit: function () {
        this.color = this.inputColor;
        this.inputColor = ""
    }
}
}
</script>

<style lang="scss">
.container {
    margin: 0 auto;
    width: 600px;
    height: 400px;
}
.background {
width: 400px;
height: 300px;
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
</style>