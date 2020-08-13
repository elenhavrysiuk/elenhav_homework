<template>
    <div class="container">
        <h2>Завдання 2 - функція </h2>
        <button class="btn mous" @click.prevent="mouse" v-on:contextmenu.prevent="mouse" type="button">Кнопка миші</button>
        <button class="btn " @click.prevent="timeShowe" type="button">Кнопка часу</button>
        <p class="answer">{{message}}{{timesee}}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            message: "",
            time: new Date(),
            timesee: "",
        
        }
    }, 
    methods: {
        timeShowe: function (timesee) {
           this.timesee = this.time;
        
    },
        mouse: function () {
            this.message = "";

            if (event.which == 1) {
                this.message = 'Ліва кнопка'
            }
             if (event.which == 2) {
                this.message = 'Колесико'
            }
             if (event.which == 3) {
                this.message = 'Права кнопка'
            }

        }
    }
}
</script>

<style lang="scss" scoped>
.hide {
    display: none;
}
.answer {
    font-size: 25px;
    color: rgb(87, 13, 13);
}
</style>