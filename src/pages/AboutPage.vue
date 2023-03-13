<template>
    <div class="main-div" id="about" style="background: rgb(11, 11, 13); color: white;">
        <section class="div-1 about" style="opacity: 1;">
            <h1 class="heading">Sobre</h1>
            <div>
                <p class="text mt-4 mb-3">Olá! Meu nome é Bruno, um engenheiro de software apaixonado pelo que faço.</p>
                <p class="text my-3">Com expêriencia em diversas áreas de T.I ,Eu gosto muito de desenvolver softwares
                    em front e
                    back end, Bem como planejar o aspcto aruitetrual de todas as camadas que dão vida a um sistema, seja
                    de pqueno,
                    medio ou grande port.</p>
            </div>
            <p class="text mt-3">Segue algumas stacks que domino atualmente:</p>
            <div class="skills-box">
                <ul v-for="(superItem, superIndex) in items" :key='superItem.id' class="lists" v-bind:id="superIndex">
                    <li v-for="(item, index) in superItem" :key='item.id' class="my-2 list-item" v-bind:id="index">
                        {{ item }}</li>
                </ul>
            </div>
        </section>
    </div>
</template>

<script>

import items from "../content/stackItems.json"

class AboutPage {
    name = 'AboutPage'
    props = {

    }

    data() {
        this.show = false;
        return {
            items: items,
        }
    }
}

export default new AboutPage 
</script>

<style>
</style>