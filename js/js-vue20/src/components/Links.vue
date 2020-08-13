<template>
    <div class="container">
        <h2>Завдання 2 - лінки </h2>
        <ol>
            <li v-for="list in lists" :key="list.name" class="put">
                <div v-on:mouseover="activeLink = list"
                v-on:mouseout="activeLink = null"><a v-bind:href="list.link" target="_blank" class="link">{{list.name}}</a></div>
              <div class="tooltip" v-if="activeLink === list">{{list.hint}}</div>
            </li>
        </ol>
    </div>
</template>

<script>
export default {
    data() {
        return {
            lists: [
                {name: 'Twitter', link: 'https://twitter.com/explore', hint: 'Натисни на лінк'},
                {name: 'Instagram', link: 'https://www.invisionapp.com/', hint: 'Натисни на лінк'},
                {name: 'Facebook', link: 'https://uk-ua.facebook.com/', hint: 'Натисни на лінк'},
            ],
            activeLink: null
        
        }
    }
}
</script>

<style scoped>
.hide {
    display: none;
}
.answer {
    font-size: 25px;
    color: rgb(87, 13, 13);
}
.put{
    font-size: 25px; 
    margin-top: 20px;
    position: relative;
}
.tooltip {
    position: absolute;
    top:0;
    left: 64%;
    border: 1px solid black;
    background-color: rgb(219, 210, 228);
    font-size: 18px;
    width: 120px;

}
</style>