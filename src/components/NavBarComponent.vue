<template>
  <nav class="header-nav navbar navbar-expand-lg navbar-light bg-dark fixed-top">

    <div class="react-reveal">
      <a href="#home" class="brand-name ml-5 navbar-brand">Bruno.</a>
    </div>

    <button aria-controls="responsive-navbar-nav" type="button" aria-label="Toggle navigation"
      class="navbar-toggler collapsed">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="navbar-collapse collapse" id="responsive-navbar-nav">
      <div style="padding-left:1000px" class="ml-auto mr-5 navbar-nav">
        <a href="#home" data-rb-event-key="#home" class="px-3 nav-link">Home</a>
        <a href="#about" data-rb-event-key="#about" class="px-3 nav-link">Sobre</a>
        <a href="#project" data-rb-event-key="#project" class="px-3 nav-link" active>Projetos</a>
        <a href="#contact" data-rb-event-key="#contact" class="px-3 nav-link">Contato</a>
        <a rel="noopener noreferrer" target="_blank" href="#" class="px-3 nav-link" role="button">
          <button type="button" class="button btn btn-outline-success">Currículo</button>
        </a>
      </div>
    </div>
  </nav>
</template>

<script>

const changeBackground = () => {
  let header = document.getElementsByClassName('header-nav')[0];
  if (window.scrollY < 200) {
    header.classList.remove('sticky');
  } else {
    header.classList.add('sticky');
  }
};
window.addEventListener('scroll', changeBackground);

export default {
  name: 'NavBarComponent',
  props: {

  }


}
</script>