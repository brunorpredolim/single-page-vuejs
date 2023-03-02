<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faFolder } from "@fortawesome/free-solid-svg-icons";


library.add(faGithub, faFolder)


class ProjectPage {
    name = 'ProjectPage';
    show = false;

    data() {

        this.show = false;
        return {
            items: [{
                title: 'Projeto 1',
                text: 'Desc',
                skills: 'Muitas',
                img: 'https://inovaconcreto.com.br/wp-content/uploads/2019/03/construcao-de-casas-principais-erros.png'
            },
            {
                title: 'Projeto 2',
                text: 'Desc 2',
                skills: 'SKILL SKILL',
                img: 'https://inovaconcreto.com.br/wp-content/uploads/2019/03/construcao-de-casas-principais-erros.png'
            },
            {
                title: 'Projeto 3',
                text: 'Desc 3',
                skills: 'TEste Teste',
                img: 'https://inovaconcreto.com.br/wp-content/uploads/2019/03/construcao-de-casas-principais-erros.png'
            }
            ],

        }
    }
    components = {
        'font-awesome-icon': FontAwesomeIcon
    }

    onScroll() {
        const element = document.querySelector("#project");
        //let x = element.scrollLeft;
        let y = element.scrollTop;
        console.log(y)
    }

    mounted() {


        document.addEventListener('scroll', function (e) {
            e.preventDefault();
            
        });
    }

}

export default new ProjectPage
</script>


<template>

    <div id="project" className="main-div" onscroll="onScroll">
        <section className="div-1">
            <Transition appear>
                <h1 className="heading">Projetos que participei..</h1>
            </Transition>
            <div>

                <div v-for="(item, index) in items" :key="item.id">

                    <div className="container card my-5" v-bind:id="index">
                        <ul className="ul">
                            <li>
                                <a href="{github}" target="_blank" rel="noopener noreferrer">
                                    <font-awesome-icon icon="fa-brands fa-github" id="gitHub" />
                                </a>
                            </li>
                            <!-- {external && ( -->
                            <li>
                                <a href="{external}" target="_blank" rel="noopener noreferrer">
                                    <font-awesome-icon icon="fa-solid fa-folder" id="launchIcon" />
                                </a>
                            </li>
                            <!-- )} -->
                        </ul>
                        <img v-bind:src=item.img alt="img" />
                        <div className="overlay"></div>
                        <div className="con-text">
                            <h2>{{ item.title }}</h2>
                            <p>{{ item.text }}</p>
                            <p>{{ item.skills }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <a href="https://meus" target="_blank" rel="noopener noreferrer" type="button"
                    className="btn btn-outline-light">
                    Mais Projetos.
                </a>
            </div>
        </section>
    </div>
</template>

<style>
#gitHub {
    fill: "black"
}

#launchIcon {
    fill: "black"
}

.v-enter-active,
.v-leave-active {
    transition: opacity 2s ease, transform 1s ease-in-out;
    transform: translateY(0px);
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
    transform: translateX(-1000px);
}
</style>