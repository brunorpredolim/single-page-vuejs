<template>
  <nav class="header-nav navbar navbar-expand-lg navbar-light bg-dark fixed-top">

    <div class="react-reveal">
      <a v-bind:href=items[0].idName class="brand-name ml-5 navbar-brand">Bruno.</a>
    </div>

    <button aria-controls="responsive-navbar-nav" type="button" aria-label="Toggle navigation"
      class="navbar-toggler collapsed">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="navbar-collapse collapse" id="responsive-navbar-nav">
      <div style="padding-left:1000px" class="ml-auto mr-5 navbar-nav">
        <a v-for="(item, index) in items" v-bind:href=item.idName v-bind:data-rnameIdb-event-key=item.idName
          class="px-3 nav-link" v-bind:id="index" :key='item.id'>{{ item.name }}</a>
        <a rel="noopener noreferrer" target="_blank" href="#" class="px-3 nav-link" role="button">
          <button type="button" class="button btn btn-outline-success">Currículo</button>
        </a>
      </div>
    </div>
  </nav>
</template>

<script>

import items from "../content/aboutItem.json"

const changeBackground = () => {
  let header = document.getElementsByClassName('header-nav')[0];
  if (window.scrollY < 200) {
    header.classList.remove('sticky');
  } else {
    header.classList.add('sticky');
  }
};
window.addEventListener('scroll', changeBackground);


class NavBarComponent {

  name = 'NavBarComponent'
  props = {
  }

  data() {
    return { items }
  }
}

export default new NavBarComponent

</script>