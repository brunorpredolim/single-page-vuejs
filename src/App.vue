<template>
  <LoaderComponent/>
  <NavBarComponent />
  <HomePage />
  <ProjectPage/>
  <AboutPage/>
  <QuotePage/>
  <ContactPage/>
</template>

<script>
import LoaderComponent from './components/LoaderComponent.vue'
import HomePage from './pages/HomePage.vue'
import NavBarComponent from './components/NavBarComponent.vue'
import AboutPage from './pages/AboutPage.vue'
import QuotePage from './pages/QuotePage.vue'
import ContactPage from './pages/ContactPage.vue'
import ProjectPage from './pages/ProjectPage.vue'


/*const loadingListener = () => {
  const loading = document.querySelector("#loading");
  if (document.readyState !== "complete") {
    document.addEventListener("readystatechange", () => {
      document.body.style.overflow = "hidden";
      if (document.readyState === "complete") {
        document.body.style.overflow = "visible";
        //loading.style.transition = "all 500ms ease-out";
       // loading.classList.add("main_loading-hidden");
      }
    });
  } else {
    loading.classList.add("main_loading-hidden");
  }
};
loadingListener();*/

export default {
  name: 'App',
  components: {
     
    LoaderComponent,
    HomePage,
    NavBarComponent,
    AboutPage,
    QuotePage,
    ContactPage,
    ProjectPage
},
  created: function() {
    
   // loadingListener();
  },
}
</script>

<style lang="scss" >
  @import "./assets/styles/styles.scss"
   
</style>
