<template>
  <div className="loader main_loading" id="loading">
    <div class="spinner-grow text-dark" style="width: 100px; height: 100px;"></div>
  </div>
</template>

<script>


// document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
//   anchor.addEventListener('click', function (e) {

//     e.preventDefault();
//     var href = anchor.getAttribute('href');
//     if (href != null) {
//       document.querySelector(href)?.scrollIntoView({
//         behavior: 'smooth',
//       });
//     }
//   });
// });

export default {


  name: 'LoaderComponent',
  props: {
    msg: String
  },
  mounted() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        var href = anchor.getAttribute('href');
        if (href != null) {
          document.querySelector(href)?.scrollIntoView({
            behavior: 'smooth',
          });
          document.querySelectorAll('a[href^="#"]').forEach((remove) => {remove.classList.remove("active");});
          anchor.classList.add("active");
        }
      });
    });
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
