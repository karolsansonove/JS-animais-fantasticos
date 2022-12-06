
function initTabNav() {
    const tabMenuItens = document.querySelectorAll('.js-tabmenu li');
    const tabContents = document.querySelectorAll('.js-tabcontent section');
    const activeClass = 'ativo';

    if (tabMenuItens.length && tabContents.length) { // só executa se os elementos existirem
        tabContents[0].classList.add(activeClass); // primeira section fica ativa ao entrar na página

        function activeTab(index) {
            tabContents.forEach((section) => {
                section.classList.remove(activeClass);
            });
            tabContents[index].classList.add(activeClass);
        }

        tabMenuItens.forEach((itemMenu, index) => {
            itemMenu.addEventListener('click', () => {
                activeTab(index);
            });
        }); 
    }
}
initTabNav();

function initAccordion() {
    const accordionList = document.querySelectorAll('.js-accordion dt');
    const activeClass = 'ativo';

    if (accordionList.length) {

        function activeAccordion() {
            this.classList.toggle(activeClass);
            this.nextElementSibling.classList.toggle(activeClass);
        }

        accordionList.forEach((element) => {
            element.addEventListener('click', activeAccordion);
        });

        accordionList[0].classList.add(activeClass);
        accordionList[0].nextElementSibling.classList.add(activeClass);
    }
}
initAccordion();

function initScrollSuave() {

    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

    function scrollToSection(event) {
        event.preventDefault();
        const href = this.getAttribute('href'); // retorna o mesmo com event.currentTarget
        const section = document.querySelector(href);

        section.scrollIntoView({
            behavior: 'smooth', // smooth == suave
            block: 'start' // alinhar bloco ao topo/início
        });

        /*  FORMA ALTERNATIVA
        const topo = section.offsetTop;
        window.scrollTo({
            top: topo,
            behavior: 'smooth' // smooth == suave
        }); // recebe os argumentos (eixo x, eixo y) ou (eixo horizontal, eixo vertical)
        */
    }

    linksInternos.forEach((link) => {
        link.addEventListener('click', scrollToSection);
    });
}
initScrollSuave();

function initAnimationScrowll() {
    const sections = document.querySelectorAll('.js-scroll');

    if (sections.length) {
        const windowMetade = window.innerHeight * 0.7; // 70% da altura da tela

        function animaScroll() { // section aparece ao descer a página e some novamente ao subir
            sections.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top;
                const isSectionVisible = (sectionTop - windowMetade) < 0;
                if (isSectionVisible) {
                    section.classList.add('ativo');
                } else {
                    section.classList.remove('ativo');
                }
            });
        }

        animaScroll(); // ativar uma vez a função para que a primeira section apareça

        window.addEventListener('scroll', animaScroll);
    }
}
initAnimationScrowll();