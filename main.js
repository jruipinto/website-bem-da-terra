(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/runner/work/website-bem-da-terra/website-bem-da-terra/src/main.ts */"zUnb");


/***/ }),

/***/ "11yh":
/*!*****************************************************!*\
  !*** ./src/app/components/navbar/navbar.service.ts ***!
  \*****************************************************/
/*! exports provided: NavbarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarService", function() { return NavbarService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class NavbarService {
    constructor() {
        this.navbarOpened = false;
    }
    closeMenu() {
        const elMenuSwitch = document.getElementById('menu_switch');
        const elMenu = document.getElementById('menu');
        const elNavbar = document.getElementById('navbar');
        const w = window.innerWidth ||
            document.documentElement.clientWidth ||
            document.body.clientWidth;
        if (w > 1024) {
            return;
        }
        if (this.navbarOpened) {
            elNavbar.style.animation =
                'slide-bottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both';
            elNavbar.style.overflowY = 'hidden';
            elNavbar.scrollTop = 0;
            elMenuSwitch.style.animation = 'fade-in 0.3s ease-out both';
            elMenu.style.animation =
                'slide-bottom-0 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both';
            this.navbarOpened = false;
        }
    }
    openMenu() {
        const elMenuSwitch = document.getElementById('menu_switch');
        const elMenu = document.getElementById('menu');
        const elNavbar = document.getElementById('navbar');
        const w = window.innerWidth ||
            document.documentElement.clientWidth ||
            document.body.clientWidth;
        if (w > 1024) {
            return;
        }
        elNavbar.style.animation =
            'slide-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both';
        elNavbar.style.overflowY = 'auto';
        elMenu.style.animation =
            'slide-top-0 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both';
        setTimeout(() => {
            elMenuSwitch.style.animation = 'fade-out 0.1s ease-out both';
        }, 100);
        this.navbarOpened = true;
    }
}
NavbarService.ɵfac = function NavbarService_Factory(t) { return new (t || NavbarService)(); };
NavbarService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NavbarService, factory: NavbarService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "1l00":
/*!*************************************************************************!*\
  !*** ./src/app/sections/agenda-section/eventos/descriptions/evento3.ts ***!
  \*************************************************************************/
/*! exports provided: evento3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "evento3", function() { return evento3; });
const evento3 = `## Workshop Introdução à Agricultura Familiar Sustentável

(20 e 27 maio, 19h às 21h) + aula extra 29 maio, 14.30h às 17.30h



Curso de 2 dias online + aula extra no Bosque

Workshop dedicado à arte de criar jardins/hortas familiares de plantas comestíveis e harmoniosos, capazes de produzir alimento para a família e beleza, inspirados nos sistemas florestais naturais e sem uso de venenos. Jardins temáticos e sensoriais inspirados nos padrões da natureza e na criatividade humana.



Os/as participantes terão oportunidade de aprender a construir uma horta familiar em forma de jardim, seguindo os padrões da natureza, a baixo custo e com alta rentabilidade. Aprender sobre solos, compostagem, design de hortas, movimentos de terra, consociações e controle natural de pragas.



2 sessões, online, no conforto da casa, em isolamento e ao mesmo tempo em comunidade, a partilhar saberes e aprofundar conhecimento sobre: Agricultura Natural, Hortas em pequena escala, Analise de setores, Sucessão Ecológica, Design, Solo; Água; Camas elevadas, Consociações, Biofertilizantes, Agrofloresta, e muito mais.
mais 1 aula extra no Bosque do Bem da Terra a colocar em prática os conteúdos aprendidos.



Sessões:

1.ª Sessão – 20 maio

“Para entender a natureza você não deve ser muito sensato. Simplesmente deve apagar da sua cabeça o que acredita saber e pegar um papel em branco como se fosse uma criança. Isso é, ao mesmo tempo, muito simples, muito fácil e muito difícil.” Masanobu Fukuoka



- Conteúdos: Agricultura Natural; Recursos Naturais; Analise de setores; Sucessão Ecológica; Design
- Duração: 2h
- Horário: 19.00h às 21.00h



2.ª Sessão – 27 maio

“O homem tolo busca a felicidade na distância, enquanto o homem sábio a faz crescer em baixo dos seus pés” James Oppenheim



- Conteúdos: Solo; Água; Camas elevadas; Consociações; Biofertilizantes; Agrofloresta
- Duração: 2h
- Horário: 19.00h às 21h



Aula extra – 29 maio

“Uma revolução pode começar por essa única palha. Essa palha é tão leve, tão pequena, mas as pessoas não conhecem o peso, o significado dessa palha. Se as pessoas conhecessem o verdadeiro valor dessa única palha, isso causaria uma revolução humana, mudando a estrutura social de todas as nações.” Masanobu Fukuoka



Conteúdos: O bosque do Bem da Terra como exemplo de sucessão ecológica; praticas de agricultura Natural.



- Duração: 3h
- Horário: 14.30h às 17.30h



Facilitadora: Helena Sousa – Bióloga, Permacultora, Agricultura Natural (Método Fukuoka) e Educadora Ambiental.



Investimento:

18€ por participante, até ao dia 20 abril;
22€ por participante, após o dia 20 abril;
Aula extra: 10€ por participante, até ao dia 20 abril; 15€ por participante após o dia 20 abril.

Nota a inscrição só é valida após envio de comprovativo de pagamento para o e-mail do Bem da Terra (coopbemdaterra@gmail.com)



Condições especiais:

Para estudantes e desempregados com muito interesse em frequentar o curso, temos condições especiais em troca de voluntariado no Bem da Terra. Para tal contactem a organização, a expor a situação.



Dias 20, 27 de maio Sessões teóricas online + aula extra 29 maio – no Bosque
Duração: 4h online + extra 3h práticas no Bosque do Bem da Terra`;


/***/ }),

/***/ "23tQ":
/*!*********************************************************************************!*\
  !*** ./src/app/sections/permacultura-section/permacultura-section.component.ts ***!
  \*********************************************************************************/
/*! exports provided: PermaculturaSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermaculturaSectionComponent", function() { return PermaculturaSectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/carousel/carousel.component */ "qUJ1");
/* harmony import */ var _components_button_cta_button_cta_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/button-cta/button-cta.component */ "eUQF");




class PermaculturaSectionComponent {
    constructor() {
        this.images = [
            { path: 'assets/design-permacultura-1.jpg' },
            { path: 'assets/design-permacultura-2.jpg' },
            { path: 'assets/design-permacultura-3.jpg' },
            { path: 'assets/design-permacultura-4.jpg' },
            { path: 'assets/design-permacultura-5.jpg' },
            { path: 'assets/design-permacultura-6.jpg' },
            { path: 'assets/design-permacultura-7.jpg' },
            { path: 'assets/design-permacultura-8.jpg' },
        ];
    }
    ngOnInit() { }
}
PermaculturaSectionComponent.ɵfac = function PermaculturaSectionComponent_Factory(t) { return new (t || PermaculturaSectionComponent)(); };
PermaculturaSectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PermaculturaSectionComponent, selectors: [["app-permacultura-section"]], decls: 49, vars: 1, consts: [["id", "permacultura"], [1, "flex-container"], [1, "col-md-6"], [1, "description"], [3, "images"]], template: function PermaculturaSectionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Design em Permacultura");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "q");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Paisagens conscientemente desenhadas que reproduzem padr\u00F5es e rela\u00E7\u00F5es encontradas na natureza e que, ao mesmo tempo, produzem alimentos, fibras e energia em abund\u00E2ncia e suficientes para prover as necessidades locais.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " - Bill Mollison ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "app-carousel", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "O que \u00E9 a Permacultura?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " A permacultura \u00E9 um conceito capaz de (re)desenhar a vida humana em completa harmonia com a Terra. O desenho de sistemas vivos permanentes e resilientes, inspirados nos padr\u00F5es da natureza, com passos simples, lentos, mas fortes e consistentes. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Este m\u00E9todo foi desenvolvido nos anos 70, do s\u00E9culo passado, na Austr\u00E1lia, por Bill Mollison e o aluno David Holmgren. Surge como resposta aos sistemas industriais insustent\u00E1veis e pr\u00E1ticas agr\u00EDcolas de explora\u00E7\u00E3o da terra, e lentamente vai-se propagando por todo o mundo, como sistema de design para a resili\u00EAncia da vida humana no planeta. Tem como \u00E9tica: Cuidar da Terra; Cuidar das Pessoas e Partilha de Excedentes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Permacultura no Bem da Terra");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " No Bem da Terra constru\u00EDmos e ajudamos a construir um mundo melhor atrav\u00E9s da Permacultura. Desenhamos espa\u00E7os seguindo os 12 princ\u00EDpios da Permacultura, com solu\u00E7\u00F5es criativas e sempre inspirado nos padr\u00F5es da natureza, para que cada espa\u00E7o conte uma hist\u00F3ria. Transformamos hortas em bosques de alimentos e jardins em nichos de intera\u00E7\u00E3o do ser humano com a natureza. Constru\u00EDmos jardins comest\u00EDveis e sensoriais. Ajudamos as pessoas a fazer o pr\u00F3prio desenho e a coloca-lo em pr\u00E1tica. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Servi\u00E7os");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Design e consultadoria em Permacultura");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Transforma\u00E7\u00E3o de espa\u00E7os");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Constru\u00E7\u00E3o de bosques humanos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Jardins comest\u00EDveis");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "app-button-cta");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Consultar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("images", ctx.images);
    } }, directives: [_components_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_1__["CarouselComponent"], _components_button_cta_button_cta_component__WEBPACK_IMPORTED_MODULE_2__["ButtonCtaComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlY3Rpb25zL3Blcm1hY3VsdHVyYS1zZWN0aW9uL3Blcm1hY3VsdHVyYS1zZWN0aW9uLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PermaculturaSectionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-permacultura-section',
                templateUrl: './permacultura-section.component.html',
                styleUrls: ['./permacultura-section.component.css'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "4xmX":
/*!*********************************************************************!*\
  !*** ./src/app/sections/escola-section/escola-section.component.ts ***!
  \*********************************************************************/
/*! exports provided: EscolaSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EscolaSectionComponent", function() { return EscolaSectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/carousel/carousel.component */ "qUJ1");
/* harmony import */ var _components_button_cta_button_cta_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/button-cta/button-cta.component */ "eUQF");




class EscolaSectionComponent {
    constructor() {
        this.images = [
            { path: 'assets/escola-bem-da-terra-1.jpg' },
            { path: 'assets/escola-bem-da-terra-2.jpg' },
            { path: 'assets/escola-bem-da-terra-3.jpg' },
            { path: 'assets/escola-bem-da-terra-4.jpg' },
            { path: 'assets/escola-bem-da-terra-5.jpg' },
            { path: 'assets/escola-bem-da-terra-6.jpg' },
            { path: 'assets/escola-bem-da-terra-7.jpg' },
            { path: 'assets/escola-bem-da-terra-8.jpg' },
            { path: 'assets/escola-bem-da-terra-9.jpg' },
            { path: 'assets/escola-bem-da-terra-10.jpg' },
            { path: 'assets/escola-bem-da-terra-11.jpg' },
            { path: 'assets/escola-bem-da-terra-12.jpg' },
            { path: 'assets/escola-bem-da-terra-13.jpg' },
            { path: 'assets/escola-bem-da-terra-14.jpg' },
            { path: 'assets/escola-bem-da-terra-15.jpg' },
        ];
    }
    ngOnInit() { }
}
EscolaSectionComponent.ɵfac = function EscolaSectionComponent_Factory(t) { return new (t || EscolaSectionComponent)(); };
EscolaSectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EscolaSectionComponent, selectors: [["app-escola-section"]], decls: 50, vars: 1, consts: [["id", "ecoalfabetiza\u00E7\u00E3o"], [1, "flex-container", "flex-reverse"], [1, "col-md-6"], [1, "flex-container"], [1, "description"], [3, "images"]], template: function EscolaSectionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Escola Bem da Terra (Ecoalfabetiza\u00E7\u00E3o)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "q");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "A sobreviv\u00EAncia da humanidade depender\u00E1 da nossa alfabetiza\u00E7\u00E3o ecol\u00F3gica (conhecimento dos princ\u00EDpios b\u00E1sicos da ecologia), da nossa capacidade para entender esses princ\u00EDpios (interdepend\u00EAncia, reciclagem, parceria, flexibilidade, diversidade) e a sustentabilidade como consequ\u00EAncia de todos.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " - Fritjof Capra ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "app-carousel", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Como \u00E9 que a ecoalfabetiza\u00E7\u00E3o pode ajudar as pessoas em geral e os professores/escolas em particular? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " A ecoalfabetiza\u00E7\u00E3o \u00E9 uma estrat\u00E9gia educativa onde o ser humano adquire ferramentas, atrav\u00E9s do conhecimento dos princ\u00EDpios b\u00E1sicos da ecol\u00F3gica (aprender com a Natureza), para diminuir o fosso entre o Saber (conceitos adquiridos) e o Fazer (a\u00E7\u00E3o cotidiana). Uma educa\u00E7\u00E3o que vai al\u00E9m da aquisi\u00E7\u00E3o de conhecimentos, leva o estudante numa viagem de transforma\u00E7\u00E3o que incentiva o desenvolvimento de habilidades e valores que orientar\u00E3o e motivar\u00E3o para estilos de vida sustent\u00E1veis (trabalhar a resili\u00EAncia). ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " A ecoalfabetiza\u00E7\u00E3o \u00E9 um conceito desenvolvido pelo f\u00EDsico Fritjof Capra, no Centro de Ecoalfabetiza\u00E7\u00E3o, na Calif\u00F3rnia, que visa a busca de formas de operacionalizar a sustentabilidade ecol\u00F3gica, inspirando-se nos sistemas naturais que s\u00E3o por ess\u00EAncia sustent\u00E1veis. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Ecoalfabetiza\u00E7\u00E3o no Bem da Terra");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Grande parte da aprendizagem requer a presen\u00E7a de um facilitador, que orienta na viagem e torna os conceitos complexos em meras conex\u00F5es da realidade em que vivemos. O Bem da Terra atua na Educa\u00E7\u00E3o para a Sustentabilidade, onde facilitamos um conjunto de Cursos (Introdu\u00E7\u00E3o \u00E0 Permacultura, Agricultura Natural,\u2026), Oficinas (Cosm\u00E9tica Natural, Detergentes Ecol\u00F3gicos, Criar Solos,\u2026), Workshops (Jardins Comest\u00EDveis, Horta Mandala,\u2026) e Campos de Trabalho verdadeiramente transformadores, que v\u00E3o facultar as ferramentas necess\u00E1rias para tornar a vida das pessoas mais sustent\u00E1vel e em plena harmonia com a Natureza. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Servi\u00E7os");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Cursos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Workshops");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Oficinas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Campos de Trabalho");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Conversas e Palestras");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "app-button-cta");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Contactar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("images", ctx.images);
    } }, directives: [_components_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_1__["CarouselComponent"], _components_button_cta_button_cta_component__WEBPACK_IMPORTED_MODULE_2__["ButtonCtaComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlY3Rpb25zL2VzY29sYS1zZWN0aW9uL2VzY29sYS1zZWN0aW9uLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EscolaSectionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-escola-section',
                templateUrl: './escola-section.component.html',
                styleUrls: ['./escola-section.component.css'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "62iz":
/*!*********************************************************************!*\
  !*** ./src/app/sections/bosque-section/bosque-section.component.ts ***!
  \*********************************************************************/
/*! exports provided: BosqueSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BosqueSectionComponent", function() { return BosqueSectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/carousel/carousel.component */ "qUJ1");
/* harmony import */ var _components_button_cta_button_cta_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/button-cta/button-cta.component */ "eUQF");




class BosqueSectionComponent {
    constructor() {
        this.images = [
            { path: 'assets/bosque-1.jpg' },
            { path: 'assets/bosque-2.jpg' },
            { path: 'assets/bosque-3.jpg' },
            { path: 'assets/bosque-4.jpg' },
            { path: 'assets/bosque-5.jpg' },
            { path: 'assets/bosque-6.jpg' },
            { path: 'assets/bosque-7.jpg' },
            { path: 'assets/bosque-8.jpg' },
            { path: 'assets/bosque-9.jpg' }
        ];
    }
}
BosqueSectionComponent.ɵfac = function BosqueSectionComponent_Factory(t) { return new (t || BosqueSectionComponent)(); };
BosqueSectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BosqueSectionComponent, selectors: [["app-bosque-section"]], decls: 50, vars: 1, consts: [["id", "bosque_de_alimentos"], [1, "flex-container"], [1, "col-md-6"], [1, "description"], [3, "images"]], template: function BosqueSectionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Bosque de Alimentos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "q");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Resgatar e amar um peda\u00E7o da m\u00E3e terra \u00E9 muito mais profundo do que simplesmente criar sistemas para manter vivo o nosso corpo f\u00EDsico: \u00E9 o resgate profundo da rela\u00E7\u00E3o do homem com a natureza, de substituir o tempo de rel\u00F3gio \u2013 nossa escravid\u00E3o \u2013 por ritmos.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " - Marsha Hanzi ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "app-carousel", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Como produzir comida em abund\u00E2ncia e em equil\u00EDbrio com a Natureza? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " O Bosque de Alimentos do Bem da Terra \u00E9 um espa\u00E7o de 450m2 em sucess\u00E3o ecol\u00F3gica, que segue os princ\u00EDpios da agricultura natural de Masanobu Fukuoka, a agricultura da \u201Cn\u00E3o a\u00E7\u00E3o\u201D (N\u00E3o revirar a terra; N\u00E3o arrancar ervas daninhas; N\u00E3o usar fertilizantes e adubos qu\u00EDmicos; N\u00E3o usar pesticidas; N\u00E3o colocar a terra exposta ao sol). Um espa\u00E7o de estudo e constru\u00E7\u00E3o permanente, num processo de acelera\u00E7\u00E3o da sucess\u00E3o ecol\u00F3gica e de regenera\u00E7\u00E3o do solo. Onde pode ser observado os 7 estratos da floresta (Emergentes, Alto, M\u00E9dio, Baixo, Rasteiro, Rizomas e Trepadeiras, sentida a harmonia do bosque nos pequenos nichos de intera\u00E7\u00E3o e descanso e saboreada toda a abund\u00E2ncia de alimentos. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Bosque do Bem da Terra");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " O Bem da Terra disponibiliza um bosque como sala de aula ao ar livre, para trabalhar o Saber Sentir. Um Bosque para ser explorado individualmente ou em grupo, para inspirar e religar. Um Bosque de alimentos que oferece muita fruta e ervas arom\u00E1ticas, bem como aprendizagem e emo\u00E7\u00F5es. \u00C9 o espa\u00E7o sede do Bem da Terra, que al\u00E9m de todo o ecossistema criado ainda oferece um Dome para estadia e desenvolvimento de diversas atividades individuais, familiares ou grupos. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Servi\u00E7os");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Sala de Aula ao Ar Livre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Experi\u00EAncias em Permacultura");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Visitas de grupo e/ou fam\u00EDlias");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Agricultura Natural");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Ervas Arom\u00E1ticas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Estadia em Dome");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "app-button-cta");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Visitar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("images", ctx.images);
    } }, directives: [_components_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_1__["CarouselComponent"], _components_button_cta_button_cta_component__WEBPACK_IMPORTED_MODULE_2__["ButtonCtaComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlY3Rpb25zL2Jvc3F1ZS1zZWN0aW9uL2Jvc3F1ZS1zZWN0aW9uLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BosqueSectionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-bosque-section',
                templateUrl: './bosque-section.component.html',
                styleUrls: ['./bosque-section.component.css'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "AkZG":
/*!*************************************************************************!*\
  !*** ./src/app/sections/servicos-section/servicos-section.component.ts ***!
  \*************************************************************************/
/*! exports provided: ServicosSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicosSectionComponent", function() { return ServicosSectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/carousel/carousel.component */ "qUJ1");



class ServicosSectionComponent {
    constructor() {
        this.images = [
            { path: 'assets/servicos-1.jpg' },
            { path: 'assets/servicos-2.jpg' },
            { path: 'assets/servicos-3.jpg' },
            { path: 'assets/servicos-4.jpg' },
            { path: 'assets/servicos-5.jpg' },
            { path: 'assets/servicos-6.jpg' },
            { path: 'assets/servicos-7.jpg' },
            { path: 'assets/servicos-8.jpg' },
            { path: 'assets/servicos-9.jpg' },
            { path: 'assets/servicos-10.jpg' },
            { path: 'assets/servicos-11.jpg' },
            { path: 'assets/servicos-12.jpg' },
            { path: 'assets/servicos-13.jpg' },
        ];
    }
    ngOnInit() { }
}
ServicosSectionComponent.ɵfac = function ServicosSectionComponent_Factory(t) { return new (t || ServicosSectionComponent)(); };
ServicosSectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ServicosSectionComponent, selectors: [["app-servicos-section"]], decls: 22, vars: 1, consts: [["id", "servicos"], [1, "flex-container", "flex-reverse"], [1, "col-md-6"], ["href", "#permacultura"], ["href", "#ecoalfabetiza\u00E7\u00E3o"], ["href", "#caminhadas_sensoriais"], ["href", "#bosque_de_alimentos"], [3, "images"]], template: function ServicosSectionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "De que servi\u00E7os disp\u00F5e o Bem da Terra?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " O Bem da Terra desenvolve os seguintes produtos e servi\u00E7os que promovem h\u00E1bitos de vida em harmonia com a natureza: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Design em Permacultura - Desenhar vidas em harmonia com a Natureza");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Escola Bem da Terra \u2013 Forma\u00E7\u00E3o na Educa\u00E7\u00E3o para a Sustentabilidade");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Caminhadas Sensoriais \u2013 Religa\u00E7\u00E3o do ser humano \u00E0 Natureza pela caminhada");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Bosque de Alimentos \u2013 Produ\u00E7\u00E3o de alimentos com regenera\u00E7\u00E3o da terra e Sala de aula ao ar livre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "app-carousel", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("images", ctx.images);
    } }, directives: [_components_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_1__["CarouselComponent"]], styles: ["li[_ngcontent-%COMP%] {\n  padding-bottom: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VjdGlvbnMvc2Vydmljb3Mtc2VjdGlvbi9zZXJ2aWNvcy1zZWN0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9zZWN0aW9ucy9zZXJ2aWNvcy1zZWN0aW9uL3NlcnZpY29zLXNlY3Rpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImxpIHtcbiAgcGFkZGluZy1ib3R0b206IDFlbTtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServicosSectionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-servicos-section',
                templateUrl: './servicos-section.component.html',
                styleUrls: ['./servicos-section.component.css'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Cmp1":
/*!*******************************************************************!*\
  !*** ./src/app/components/youtube-icon/youtube-icon.component.ts ***!
  \*******************************************************************/
/*! exports provided: YoutubeIconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YoutubeIconComponent", function() { return YoutubeIconComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class YoutubeIconComponent {
    constructor() { }
    ngOnInit() {
    }
}
YoutubeIconComponent.ɵfac = function YoutubeIconComponent_Factory(t) { return new (t || YoutubeIconComponent)(); };
YoutubeIconComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: YoutubeIconComponent, selectors: [["youtube-icon"]], decls: 2, vars: 0, consts: [["aria-hidden", "true", "focusable", "false", "data-prefix", "fab", "data-icon", "youtube", "role", "img", "xmlns", "http://www.w3.org/2000/svg", "width", "24", "viewBox", "0 0 576 512", 1, "svg-inline--fa", "fa-youtube", "fa-w-18"], ["fill", "currentColor", "d", "M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"]], template: function YoutubeIconComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMveW91dHViZS1pY29uL3lvdXR1YmUtaWNvbi5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](YoutubeIconComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'youtube-icon',
                templateUrl: './youtube-icon.component.html',
                styleUrls: ['./youtube-icon.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "I7e7":
/*!*********************************************************************!*\
  !*** ./src/app/sections/agenda-section/agenda-section.component.ts ***!
  \*********************************************************************/
/*! exports provided: AgendaSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgendaSectionComponent", function() { return AgendaSectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _eventos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./eventos */ "emkE");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_event_card_event_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/event-card/event-card.component */ "knB9");





function AgendaSectionComponent_app_event_card_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-event-card", 3);
} if (rf & 2) {
    const evento_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("evento", evento_r1);
} }
class AgendaSectionComponent {
    constructor() {
        this.eventos = _eventos__WEBPACK_IMPORTED_MODULE_1__["default"];
    }
}
AgendaSectionComponent.ɵfac = function AgendaSectionComponent_Factory(t) { return new (t || AgendaSectionComponent)(); };
AgendaSectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AgendaSectionComponent, selectors: [["app-agenda-section"]], decls: 5, vars: 1, consts: [["id", "agenda"], [1, "flex-container"], ["class", "col-md-6", 3, "evento", 4, "ngFor", "ngForOf"], [1, "col-md-6", 3, "evento"]], template: function AgendaSectionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Pr\u00F3ximos Eventos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AgendaSectionComponent_app_event_card_4_Template, 1, 1, "app-event-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.eventos);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _components_event_card_event_card_component__WEBPACK_IMPORTED_MODULE_3__["EventCardComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlY3Rpb25zL2FnZW5kYS1zZWN0aW9uL2FnZW5kYS1zZWN0aW9uLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AgendaSectionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-agenda-section',
                templateUrl: './agenda-section.component.html',
                styleUrls: ['./agenda-section.component.css'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Lvv/":
/*!*************************************************************************!*\
  !*** ./src/app/sections/agenda-section/eventos/descriptions/evento5.ts ***!
  \*************************************************************************/
/*! exports provided: evento5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "evento5", function() { return evento5; });
const evento5 = `## Dia Da Terra

(22 e 25 de abril)



Celebração do Dia Mundial da Terra e dos 5 Anos de Bem da Terra.
O Eco-Encontro Dia Terra é uma iniciativa cidadã, pela promoção da sustentabilidade e do cuidado da Terra. Um encontro para valorizar a TERRA - como suporte, alimento, abrigo, arte, história, ... uma viagem da terra para a terra.
O evento está dividido em dois dias, uma pequena ação no dia 22 de abril, com uma Caminhada Sensorial, no final do dia e um dia completo de atividades no dia 25 de abril.

As inscrições para este evento são muito limitadas e obrigatórias, os interessados devem contactar diretamente o Bem da Terra por e-mail: coopbemdaterra@gmail.com ou tlm: 964856933.`;


/***/ }),

/***/ "NTOg":
/*!*********************************************************************!*\
  !*** ./src/app/components/welcome-image/welcome-image.component.ts ***!
  \*********************************************************************/
/*! exports provided: WelcomeImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeImageComponent", function() { return WelcomeImageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class WelcomeImageComponent {
}
WelcomeImageComponent.ɵfac = function WelcomeImageComponent_Factory(t) { return new (t || WelcomeImageComponent)(); };
WelcomeImageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WelcomeImageComponent, selectors: [["app-welcome-image"]], decls: 1, vars: 0, consts: [["src", "assets/welcome-image.jpeg", "alt", "imagem"]], template: function WelcomeImageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 0);
    } }, styles: ["[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n}\n\nsvg[_ngcontent-%COMP%], img[_ngcontent-%COMP%] {\n  width: 80%;\n  float: right;\n  padding-bottom: 2rem;\n}\n\n@media only screen and (min-width: 768px) {\n  [_nghost-%COMP%] {\n    margin-bottom: 0;\n  }\n  svg[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy93ZWxjb21lLWltYWdlL3dlbGNvbWUtaW1hZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCxXQUFXO0FBQ2I7O0FBRUE7O0VBRUUsVUFBVTtFQUNWLFlBQVk7RUFDWixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRTtJQUNFLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UsV0FBVztFQUNiO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3dlbGNvbWUtaW1hZ2Uvd2VsY29tZS1pbWFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG59XG5cbnN2ZyxcbmltZyB7XG4gIHdpZHRoOiA4MCU7XG4gIGZsb2F0OiByaWdodDtcbiAgcGFkZGluZy1ib3R0b206IDJyZW07XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgOmhvc3Qge1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gIH1cbiAgc3ZnIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WelcomeImageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-welcome-image',
                templateUrl: './welcome-image.component.html',
                styleUrls: ['./welcome-image.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "OSdb":
/*!***************************************************************!*\
  !*** ./src/app/components/phone-icon/phone-icon.component.ts ***!
  \***************************************************************/
/*! exports provided: PhoneIconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhoneIconComponent", function() { return PhoneIconComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class PhoneIconComponent {
}
PhoneIconComponent.ɵfac = function PhoneIconComponent_Factory(t) { return new (t || PhoneIconComponent)(); };
PhoneIconComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PhoneIconComponent, selectors: [["phone-icon"]], decls: 4, vars: 0, consts: [["xmlns", "http://www.w3.org/2000/svg", "height", "24", "viewBox", "0 0 24 24", "width", "24"], ["d", "M0 0h24v24H0V0z", "fill", "none"], ["d", "M19 17.47c-.88-.07-1.75-.22-2.6-.45l-1.19 1.19c1.2.41 2.48.67 3.8.75v-1.49zM5.03 5c.09 1.32.35 2.59.75 3.8l1.2-1.2c-.23-.84-.38-1.71-.44-2.6H5.03z", "opacity", ".3"], ["d", "M9.07 7.57C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.49c0-.55-.45-1-1-1-1.24 0-2.45-.2-3.57-.57-.1-.04-.21-.05-.31-.05-.26 0-.51.1-.71.29l-2.2 2.2c-2.83-1.45-5.15-3.76-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02zm7.33 9.45c.85.24 1.72.39 2.6.45v1.49c-1.32-.09-2.59-.35-3.8-.75l1.2-1.19zM5.79 8.8c-.41-1.21-.67-2.48-.76-3.8h1.5c.07.89.22 1.76.46 2.59L5.79 8.8z"]], template: function PhoneIconComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGhvbmUtaWNvbi9waG9uZS1pY29uLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PhoneIconComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'phone-icon',
                templateUrl: './phone-icon.component.html',
                styleUrls: ['./phone-icon.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "SYAg":
/*!***********************************************************!*\
  !*** ./src/app/components/menu-svg/menu-svg.component.ts ***!
  \***********************************************************/
/*! exports provided: MenuSvgComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuSvgComponent", function() { return MenuSvgComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class MenuSvgComponent {
}
MenuSvgComponent.ɵfac = function MenuSvgComponent_Factory(t) { return new (t || MenuSvgComponent)(); };
MenuSvgComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuSvgComponent, selectors: [["app-menu-svg"]], decls: 2, vars: 0, consts: [["width", "30", "height", "18", "viewBox", "0 0 30 18", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M2.33333 18H27.6667C28.5375 18 29.25 17.325 29.25 16.5C29.25 15.675 28.5375 15 27.6667 15H2.33333C1.4625 15 0.75 15.675 0.75 16.5C0.75 17.325 1.4625 18 2.33333 18ZM2.33333 10.5H27.6667C28.5375 10.5 29.25 9.825 29.25 9C29.25 8.175 28.5375 7.5 27.6667 7.5H2.33333C1.4625 7.5 0.75 8.175 0.75 9C0.75 9.825 1.4625 10.5 2.33333 10.5ZM0.75 1.5C0.75 2.325 1.4625 3 2.33333 3H27.6667C28.5375 3 29.25 2.325 29.25 1.5C29.25 0.675 28.5375 0 27.6667 0H2.33333C1.4625 0 0.75 0.675 0.75 1.5Z", "fill", "#333333"]], template: function MenuSvgComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWVudS1zdmcvbWVudS1zdmcuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuSvgComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-menu-svg',
                templateUrl: './menu-svg.component.html',
                styleUrls: ['./menu-svg.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css'],
            }]
    }], null, null); })();


/***/ }),

/***/ "TbJM":
/*!***************************************************************!*\
  !*** ./src/app/components/email-icon/email-icon.component.ts ***!
  \***************************************************************/
/*! exports provided: EmailIconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailIconComponent", function() { return EmailIconComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class EmailIconComponent {
}
EmailIconComponent.ɵfac = function EmailIconComponent_Factory(t) { return new (t || EmailIconComponent)(); };
EmailIconComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EmailIconComponent, selectors: [["email-icon"]], decls: 3, vars: 0, consts: [["xmlns", "http://www.w3.org/2000/svg", "height", "24", "viewBox", "0 0 24 24", "width", "24"], ["d", "M0 0h24v24H0V0z", "fill", "none"], ["d", "M12 21.95h5v-2h-5c-4.34 0-8-3.66-8-8s3.66-8 8-8 8 3.66 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57v-1.43c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47.65.89 1.77 1.47 2.96 1.47 1.97 0 3.5-1.6 3.5-3.57v-1.43c0-5.52-4.48-10-10-10s-10 4.48-10 10 4.48 10 10 10zm0-7c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z", "fill-opacity", ".9"]], template: function EmailIconComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZW1haWwtaWNvbi9lbWFpbC1pY29uLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmailIconComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                // tslint:disable-next-line: component-selector
                selector: 'email-icon',
                templateUrl: './email-icon.component.html',
                styleUrls: ['./email-icon.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-responsive-carousel */ "0L5U");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-markdown */ "lR5k");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_logo_logo_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/logo/logo.component */ "o5g6");
/* harmony import */ var _components_menu_svg_menu_svg_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/menu-svg/menu-svg.component */ "SYAg");
/* harmony import */ var _components_polygon_svg_polygon_svg_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/polygon-svg/polygon-svg.component */ "hNKz");
/* harmony import */ var _components_welcome_image_welcome_image_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/welcome-image/welcome-image.component */ "NTOg");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "hrlM");
/* harmony import */ var _components_navbar_navbar_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/navbar/navbar.service */ "11yh");
/* harmony import */ var _sections_welcome_section_welcome_section_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./sections/welcome-section/welcome-section.component */ "yFKS");
/* harmony import */ var _sections_permacultura_section_permacultura_section_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./sections/permacultura-section/permacultura-section.component */ "23tQ");
/* harmony import */ var _sections_escola_section_escola_section_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./sections/escola-section/escola-section.component */ "4xmX");
/* harmony import */ var _sections_caminhadas_section_caminhadas_section_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./sections/caminhadas-section/caminhadas-section.component */ "tUW+");
/* harmony import */ var _sections_servicos_section_servicos_section_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./sections/servicos-section/servicos-section.component */ "AkZG");
/* harmony import */ var _sections_contactos_section_contactos_section_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./sections/contactos-section/contactos-section.component */ "zF5e");
/* harmony import */ var _components_button_cta_button_cta_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/button-cta/button-cta.component */ "eUQF");
/* harmony import */ var _sections_bosque_section_bosque_section_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./sections/bosque-section/bosque-section.component */ "62iz");
/* harmony import */ var _components_phone_icon_phone_icon_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/phone-icon/phone-icon.component */ "OSdb");
/* harmony import */ var _components_facebook_icon_facebook_icon_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/facebook-icon/facebook-icon.component */ "lXCb");
/* harmony import */ var _components_email_icon_email_icon_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/email-icon/email-icon.component */ "TbJM");
/* harmony import */ var _components_scroll_top_scroll_top_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/scroll-top/scroll-top.component */ "zByf");
/* harmony import */ var _components_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/carousel/carousel.component */ "qUJ1");
/* harmony import */ var _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @scullyio/ng-lib */ "sbAP");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/home-page/home-page.component */ "atC9");
/* harmony import */ var _components_address_icon_address_icon_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/address-icon/address-icon.component */ "xM00");
/* harmony import */ var _sections_agenda_section_agenda_section_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./sections/agenda-section/agenda-section.component */ "I7e7");
/* harmony import */ var _components_youtube_icon_youtube_icon_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/youtube-icon/youtube-icon.component */ "Cmp1");
/* harmony import */ var _components_event_card_event_card_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/event-card/event-card.component */ "knB9");


































class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_components_navbar_navbar_service__WEBPACK_IMPORTED_MODULE_11__["NavbarService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_3__["IvyCarouselModule"],
            _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_25__["ScullyLibModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_26__["AppRoutingModule"],
            ngx_markdown__WEBPACK_IMPORTED_MODULE_4__["MarkdownModule"].forRoot(),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        _components_logo_logo_component__WEBPACK_IMPORTED_MODULE_6__["LogoComponent"],
        _components_menu_svg_menu_svg_component__WEBPACK_IMPORTED_MODULE_7__["MenuSvgComponent"],
        _components_polygon_svg_polygon_svg_component__WEBPACK_IMPORTED_MODULE_8__["PolygonSvgComponent"],
        _components_welcome_image_welcome_image_component__WEBPACK_IMPORTED_MODULE_9__["WelcomeImageComponent"],
        _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__["NavbarComponent"],
        _sections_welcome_section_welcome_section_component__WEBPACK_IMPORTED_MODULE_12__["WelcomeSectionComponent"],
        _sections_permacultura_section_permacultura_section_component__WEBPACK_IMPORTED_MODULE_13__["PermaculturaSectionComponent"],
        _sections_escola_section_escola_section_component__WEBPACK_IMPORTED_MODULE_14__["EscolaSectionComponent"],
        _sections_caminhadas_section_caminhadas_section_component__WEBPACK_IMPORTED_MODULE_15__["CaminhadasSectionComponent"],
        _sections_servicos_section_servicos_section_component__WEBPACK_IMPORTED_MODULE_16__["ServicosSectionComponent"],
        _sections_contactos_section_contactos_section_component__WEBPACK_IMPORTED_MODULE_17__["ContactosSectionComponent"],
        _components_button_cta_button_cta_component__WEBPACK_IMPORTED_MODULE_18__["ButtonCtaComponent"],
        _sections_bosque_section_bosque_section_component__WEBPACK_IMPORTED_MODULE_19__["BosqueSectionComponent"],
        _components_phone_icon_phone_icon_component__WEBPACK_IMPORTED_MODULE_20__["PhoneIconComponent"],
        _components_facebook_icon_facebook_icon_component__WEBPACK_IMPORTED_MODULE_21__["FacebookIconComponent"],
        _components_email_icon_email_icon_component__WEBPACK_IMPORTED_MODULE_22__["EmailIconComponent"],
        _components_scroll_top_scroll_top_component__WEBPACK_IMPORTED_MODULE_23__["ScrollTopComponent"],
        _components_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_24__["CarouselComponent"],
        _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_27__["HomePageComponent"],
        _components_address_icon_address_icon_component__WEBPACK_IMPORTED_MODULE_28__["AddressIconComponent"],
        _sections_agenda_section_agenda_section_component__WEBPACK_IMPORTED_MODULE_29__["AgendaSectionComponent"],
        _components_youtube_icon_youtube_icon_component__WEBPACK_IMPORTED_MODULE_30__["YoutubeIconComponent"],
        _components_event_card_event_card_component__WEBPACK_IMPORTED_MODULE_31__["EventCardComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_3__["IvyCarouselModule"],
        _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_25__["ScullyLibModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_26__["AppRoutingModule"], ngx_markdown__WEBPACK_IMPORTED_MODULE_4__["MarkdownModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_3__["IvyCarouselModule"],
                    _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_25__["ScullyLibModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_26__["AppRoutingModule"],
                    ngx_markdown__WEBPACK_IMPORTED_MODULE_4__["MarkdownModule"].forRoot(),
                ],
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                    _components_logo_logo_component__WEBPACK_IMPORTED_MODULE_6__["LogoComponent"],
                    _components_menu_svg_menu_svg_component__WEBPACK_IMPORTED_MODULE_7__["MenuSvgComponent"],
                    _components_polygon_svg_polygon_svg_component__WEBPACK_IMPORTED_MODULE_8__["PolygonSvgComponent"],
                    _components_welcome_image_welcome_image_component__WEBPACK_IMPORTED_MODULE_9__["WelcomeImageComponent"],
                    _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__["NavbarComponent"],
                    _sections_welcome_section_welcome_section_component__WEBPACK_IMPORTED_MODULE_12__["WelcomeSectionComponent"],
                    _sections_permacultura_section_permacultura_section_component__WEBPACK_IMPORTED_MODULE_13__["PermaculturaSectionComponent"],
                    _sections_escola_section_escola_section_component__WEBPACK_IMPORTED_MODULE_14__["EscolaSectionComponent"],
                    _sections_caminhadas_section_caminhadas_section_component__WEBPACK_IMPORTED_MODULE_15__["CaminhadasSectionComponent"],
                    _sections_servicos_section_servicos_section_component__WEBPACK_IMPORTED_MODULE_16__["ServicosSectionComponent"],
                    _sections_contactos_section_contactos_section_component__WEBPACK_IMPORTED_MODULE_17__["ContactosSectionComponent"],
                    _components_button_cta_button_cta_component__WEBPACK_IMPORTED_MODULE_18__["ButtonCtaComponent"],
                    _sections_bosque_section_bosque_section_component__WEBPACK_IMPORTED_MODULE_19__["BosqueSectionComponent"],
                    _components_phone_icon_phone_icon_component__WEBPACK_IMPORTED_MODULE_20__["PhoneIconComponent"],
                    _components_facebook_icon_facebook_icon_component__WEBPACK_IMPORTED_MODULE_21__["FacebookIconComponent"],
                    _components_email_icon_email_icon_component__WEBPACK_IMPORTED_MODULE_22__["EmailIconComponent"],
                    _components_scroll_top_scroll_top_component__WEBPACK_IMPORTED_MODULE_23__["ScrollTopComponent"],
                    _components_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_24__["CarouselComponent"],
                    _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_27__["HomePageComponent"],
                    _components_address_icon_address_icon_component__WEBPACK_IMPORTED_MODULE_28__["AddressIconComponent"],
                    _sections_agenda_section_agenda_section_component__WEBPACK_IMPORTED_MODULE_29__["AgendaSectionComponent"],
                    _components_youtube_icon_youtube_icon_component__WEBPACK_IMPORTED_MODULE_30__["YoutubeIconComponent"],
                    _components_event_card_event_card_component__WEBPACK_IMPORTED_MODULE_31__["EventCardComponent"],
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
                providers: [_components_navbar_navbar_service__WEBPACK_IMPORTED_MODULE_11__["NavbarService"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "atC9":
/*!*************************************************************!*\
  !*** ./src/app/components/home-page/home-page.component.ts ***!
  \*************************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _navbar_navbar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../navbar/navbar.service */ "11yh");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../navbar/navbar.component */ "hrlM");
/* harmony import */ var _logo_logo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../logo/logo.component */ "o5g6");
/* harmony import */ var _sections_welcome_section_welcome_section_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../sections/welcome-section/welcome-section.component */ "yFKS");
/* harmony import */ var _polygon_svg_polygon_svg_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../polygon-svg/polygon-svg.component */ "hNKz");
/* harmony import */ var _sections_permacultura_section_permacultura_section_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../sections/permacultura-section/permacultura-section.component */ "23tQ");
/* harmony import */ var _sections_escola_section_escola_section_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../sections/escola-section/escola-section.component */ "4xmX");
/* harmony import */ var _sections_caminhadas_section_caminhadas_section_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../sections/caminhadas-section/caminhadas-section.component */ "tUW+");
/* harmony import */ var _sections_bosque_section_bosque_section_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../sections/bosque-section/bosque-section.component */ "62iz");
/* harmony import */ var _sections_servicos_section_servicos_section_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../sections/servicos-section/servicos-section.component */ "AkZG");
/* harmony import */ var _sections_agenda_section_agenda_section_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../sections/agenda-section/agenda-section.component */ "I7e7");
/* harmony import */ var _sections_contactos_section_contactos_section_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../sections/contactos-section/contactos-section.component */ "zF5e");
/* harmony import */ var _scroll_top_scroll_top_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../scroll-top/scroll-top.component */ "zByf");















class HomePageComponent {
    constructor(nav) {
        this.nav = nav;
    }
    closeMenu() {
        this.nav.closeMenu();
    }
}
HomePageComponent.ɵfac = function HomePageComponent_Factory(t) { return new (t || HomePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_navbar_navbar_service__WEBPACK_IMPORTED_MODULE_1__["NavbarService"])); };
HomePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomePageComponent, selectors: [["app-home-page"]], decls: 15, vars: 0, consts: [["id", "main", 3, "click"], [1, "flex-container", "pb-0"]], template: function HomePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomePageComponent_Template_main_click_1_listener() { return ctx.closeMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-logo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-welcome-section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-polygon-svg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-permacultura-section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-escola-section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-caminhadas-section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-bosque-section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-servicos-section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-agenda-section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-contactos-section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-scroll-top");
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], _logo_logo_component__WEBPACK_IMPORTED_MODULE_3__["LogoComponent"], _sections_welcome_section_welcome_section_component__WEBPACK_IMPORTED_MODULE_4__["WelcomeSectionComponent"], _polygon_svg_polygon_svg_component__WEBPACK_IMPORTED_MODULE_5__["PolygonSvgComponent"], _sections_permacultura_section_permacultura_section_component__WEBPACK_IMPORTED_MODULE_6__["PermaculturaSectionComponent"], _sections_escola_section_escola_section_component__WEBPACK_IMPORTED_MODULE_7__["EscolaSectionComponent"], _sections_caminhadas_section_caminhadas_section_component__WEBPACK_IMPORTED_MODULE_8__["CaminhadasSectionComponent"], _sections_bosque_section_bosque_section_component__WEBPACK_IMPORTED_MODULE_9__["BosqueSectionComponent"], _sections_servicos_section_servicos_section_component__WEBPACK_IMPORTED_MODULE_10__["ServicosSectionComponent"], _sections_agenda_section_agenda_section_component__WEBPACK_IMPORTED_MODULE_11__["AgendaSectionComponent"], _sections_contactos_section_contactos_section_component__WEBPACK_IMPORTED_MODULE_12__["ContactosSectionComponent"], _scroll_top_scroll_top_component__WEBPACK_IMPORTED_MODULE_13__["ScrollTopComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS1wYWdlL2hvbWUtcGFnZS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomePageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home-page',
                templateUrl: './home-page.component.html',
                styleUrls: ['./home-page.component.css'],
            }]
    }], function () { return [{ type: _navbar_navbar_service__WEBPACK_IMPORTED_MODULE_1__["NavbarService"] }]; }, null); })();


/***/ }),

/***/ "bwci":
/*!*************************************************************************!*\
  !*** ./src/app/sections/agenda-section/eventos/descriptions/evento1.ts ***!
  \*************************************************************************/
/*! exports provided: evento1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "evento1", function() { return evento1; });
const evento1 = `## Oficina de Detergentes Ecológicos

(29 abril, 19h)



Aprende a fazer Detergentes Ecológicos no conforto da tua casa.
Na oficina de Detergentes Ecológicos, o foco é o cuidado com o espaço que habitamos, demonstrando que os produtos naturais podem ser igualmente eficientes na ação de limpeza e higienização da casa, constituindo assim uma verdadeira alternativa aos produtos de indústria química convencional.


Os/as participantes terão oportunidade de aprender a confecionar vários detergentes para a limpeza da casa desde o limpa-vidros ao desinfetante.



- Duração: 2h
- Horário: 19.00 às 21.00h
- Facilitadora: Helena Sousa
- Troca recomendada: 10€

Observação: oficina online na plataforma Zoom`;


/***/ }),

/***/ "eUQF":
/*!***************************************************************!*\
  !*** ./src/app/components/button-cta/button-cta.component.ts ***!
  \***************************************************************/
/*! exports provided: ButtonCtaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonCtaComponent", function() { return ButtonCtaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


const _c0 = ["*"];
class ButtonCtaComponent {
    constructor() {
        this.href = '#contactos';
    }
}
ButtonCtaComponent.ɵfac = function ButtonCtaComponent_Factory(t) { return new (t || ButtonCtaComponent)(); };
ButtonCtaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ButtonCtaComponent, selectors: [["app-button-cta"]], inputs: { href: "href" }, ngContentSelectors: _c0, decls: 2, vars: 1, consts: [[1, "btn", "primary", 3, "href"]], template: function ButtonCtaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.href, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, styles: ["[_nghost-%COMP%] {\n  border-radius: 3rem;\n  border: 0 solid var(--pallete-white);\n  box-shadow: 4px 15px 18px rgba(0, 0, 0, 0.25);\n  height: 3rem;\n  transition: 0.3s;\n}\n[_nghost-%COMP%]:hover {\n  filter: brightness(1.1);\n  transform: translateY(-4px);\n  transition: 0.3s;\n}\n.btn[_ngcontent-%COMP%] {\n  display: block;\n  border: 0;\n  width: 100%;\n  height: 3rem;\n  padding: calc(var(--global-paragraph-spacing) / 2)\n    calc(var(--global-paragraph-spacing) * 2);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9idXR0b24tY3RhL2J1dHRvbi1jdGEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQixvQ0FBb0M7RUFDcEMsNkNBQTZDO0VBQzdDLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLHVCQUF1QjtFQUN2QiwyQkFBMkI7RUFDM0IsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsU0FBUztFQUNULFdBQVc7RUFDWCxZQUFZO0VBQ1o7NkNBQzJDO0FBQzdDIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9idXR0b24tY3RhL2J1dHRvbi1jdGEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgYm9yZGVyLXJhZGl1czogM3JlbTtcbiAgYm9yZGVyOiAwIHNvbGlkIHZhcigtLXBhbGxldGUtd2hpdGUpO1xuICBib3gtc2hhZG93OiA0cHggMTVweCAxOHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gIGhlaWdodDogM3JlbTtcbiAgdHJhbnNpdGlvbjogMC4zcztcbn1cbjpob3N0OmhvdmVyIHtcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDEuMSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNHB4KTtcbiAgdHJhbnNpdGlvbjogMC4zcztcbn1cbi5idG4ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm9yZGVyOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzcmVtO1xuICBwYWRkaW5nOiBjYWxjKHZhcigtLWdsb2JhbC1wYXJhZ3JhcGgtc3BhY2luZykgLyAyKVxuICAgIGNhbGModmFyKC0tZ2xvYmFsLXBhcmFncmFwaC1zcGFjaW5nKSAqIDIpO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ButtonCtaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-button-cta',
                templateUrl: './button-cta.component.html',
                styleUrls: ['./button-cta.component.css'],
            }]
    }], null, { href: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "emkE":
/*!**********************************************************!*\
  !*** ./src/app/sections/agenda-section/eventos/index.ts ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _descriptions_evento1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./descriptions/evento1 */ "bwci");
/* harmony import */ var _descriptions_evento2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./descriptions/evento2 */ "t2HC");
/* harmony import */ var _descriptions_evento3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./descriptions/evento3 */ "1l00");
/* harmony import */ var _descriptions_evento4__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./descriptions/evento4 */ "y+rp");
/* harmony import */ var _descriptions_evento5__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./descriptions/evento5 */ "Lvv/");





const eventos = [
    {
        description: _descriptions_evento1__WEBPACK_IMPORTED_MODULE_0__["evento1"],
        href: 'https://forms.gle/NYpsXGRY61ttT6HCA',
        imgSrc: 'assets/agenda-1.jpg',
        imgAlt: 'cartaz para evento 1',
    },
    {
        description: _descriptions_evento2__WEBPACK_IMPORTED_MODULE_1__["evento2"],
        href: 'https://forms.gle/NYpsXGRY61ttT6HCA',
        imgSrc: 'assets/agenda-2.jpg',
        imgAlt: 'cartaz para evento 2',
    },
    {
        description: _descriptions_evento3__WEBPACK_IMPORTED_MODULE_2__["evento3"],
        href: 'https://forms.gle/RKguULbYakc3a7oV9',
        imgSrc: 'assets/agenda-3.jpg',
        imgAlt: 'cartaz para evento 3',
    },
    {
        description: _descriptions_evento4__WEBPACK_IMPORTED_MODULE_3__["evento4"],
        href: null,
        imgSrc: 'assets/agenda-4.jpg',
        imgAlt: 'cartaz para evento 4',
    },
    {
        description: _descriptions_evento5__WEBPACK_IMPORTED_MODULE_4__["evento5"],
        href: null,
        imgSrc: 'assets/agenda-5.jpg',
        imgAlt: 'cartaz para evento 5',
    },
];
/* harmony default export */ __webpack_exports__["default"] = (eventos);


/***/ }),

/***/ "hNKz":
/*!*****************************************************************!*\
  !*** ./src/app/components/polygon-svg/polygon-svg.component.ts ***!
  \*****************************************************************/
/*! exports provided: PolygonSvgComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolygonSvgComponent", function() { return PolygonSvgComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class PolygonSvgComponent {
}
PolygonSvgComponent.ɵfac = function PolygonSvgComponent_Factory(t) { return new (t || PolygonSvgComponent)(); };
PolygonSvgComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PolygonSvgComponent, selectors: [["app-polygon-svg"]], decls: 2, vars: 0, consts: [["width", "56", "height", "38", "viewBox", "0 0 56 38", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M50.7567 3L28 33.7936L5.2433 3L50.7567 3Z", "fill", "#F7FCFB", "stroke", "#15A587", "stroke-width", "5"]], template: function PolygonSvgComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["[_nghost-%COMP%]{\n  margin-bottom: -30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wb2x5Z29uLXN2Zy9wb2x5Z29uLXN2Zy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQW9CO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wb2x5Z29uLXN2Zy9wb2x5Z29uLXN2Zy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3R7XG4gIG1hcmdpbi1ib3R0b206IC0zMHB4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PolygonSvgComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-polygon-svg',
                templateUrl: './polygon-svg.component.html',
                styleUrls: ['./polygon-svg.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "hrlM":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _navbar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar.service */ "11yh");
/* harmony import */ var _menu_svg_menu_svg_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../menu-svg/menu-svg.component */ "SYAg");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function NavbarComponent_a_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const navLink_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", navLink_r1.href, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](navLink_r1.description);
} }
class NavbarComponent {
    constructor(nav) {
        this.nav = nav;
        this.navList = [
            {
                href: '#permacultura',
                description: 'Design em permacultura'
            },
            {
                href: '#ecoalfabetização',
                description: 'Escola bem da terra'
            },
            {
                href: '#caminhadas_sensoriais',
                description: 'Caminhadas sensoriais'
            },
            {
                href: '#bosque_de_alimentos',
                description: 'Bosque de alimentos'
            },
            {
                href: '#contactos',
                description: 'Contactos'
            }
        ];
    }
    closeMenu() {
        this.nav.closeMenu();
    }
    openMenu() {
        this.nav.openMenu();
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_navbar_service__WEBPACK_IMPORTED_MODULE_1__["NavbarService"])); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 7, vars: 1, consts: [["id", "navbar"], ["id", "menu_switch", 1, "menu-switch", 3, "click"], ["id", "menu", 3, "click"], [3, "href", 4, "ngFor", "ngForOf"], [3, "href"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_div_click_1_listener() { return ctx.openMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-menu-svg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Abrir menu ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_div_click_5_listener() { return ctx.closeMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NavbarComponent_a_6_Template, 2, 2, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.navList);
    } }, directives: [_menu_svg_menu_svg_component__WEBPACK_IMPORTED_MODULE_2__["MenuSvgComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: ["#navbar[_ngcontent-%COMP%] {\n  background-color: var(--pallete-palid-gray);\n  box-shadow: 0px -4px 4px rgba(0, 0, 0, 0.25);\n  display: block;\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  padding: 0 5%;\n  z-index: 1000;\n}\n\n#navbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], #navbar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border: 0;\n  border-bottom: 1px solid var(--pallete-light-gray);\n  cursor: pointer;\n  display: block;\n  text-decoration: none;\n  text-align: center;\n  text-transform: uppercase;\n  color: var(--pallete-dark);\n  width: 100%;\n  height: 4rem;\n  margin: 0;\n  padding: 0;\n  line-height: 4rem;\n  \n}\n\n#navbar[_ngcontent-%COMP%] {\n  overflow-y: hidden;\n  transform: translateY(calc(100% - 4rem));\n  max-height: 24rem;\n}\n\napp-menu-svg[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n\n@media only screen and (min-width: 1024px) {\n  #navbar[_ngcontent-%COMP%] {\n    background-color: transparent;\n    box-shadow: none;\n    display: flex;\n    justify-content: flex-end;\n    position: absolute;\n    top: 0;\n    width: 100%;\n    height: 3rem;\n    padding: 0;\n    margin-top: 1.2rem;\n  }\n\n  #navbar[_ngcontent-%COMP%]   #menu[_ngcontent-%COMP%] {\n    max-width: 900px;\n    display: flex;\n    justify-content: flex-end;\n  }\n\n  #navbar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  #navbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    background-color: transparent;\n    border: 0;\n    cursor: pointer;\n    display: inline-block;\n    font-size: 12px;\n    text-decoration: none;\n    text-align: center;\n    text-transform: uppercase;\n    color: #0c5a4a;\n    width: auto;\n    height: auto;\n    margin: unset;\n    margin-right: 1rem;\n    padding: 0;\n    line-height: 4rem;\n    \n  }\n  #navbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, #navbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:active {\n    font-weight: 600;\n  }\n  #navbar[_ngcontent-%COMP%] {\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwyQ0FBMkM7RUFDM0MsNENBQTRDO0VBQzVDLGNBQWM7RUFDZCxlQUFlO0VBQ2YsU0FBUztFQUNULFdBQVc7RUFDWCxhQUFhO0VBQ2IsYUFBYTtBQUNmOztBQUVBOztFQUVFLDZCQUE2QjtFQUM3QixTQUFTO0VBQ1Qsa0RBQWtEO0VBQ2xELGVBQWU7RUFDZixjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsMEJBQTBCO0VBQzFCLFdBQVc7RUFDWCxZQUFZO0VBQ1osU0FBUztFQUNULFVBQVU7RUFDVixpQkFBaUI7RUFDakIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHdDQUF3QztFQUN4QyxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRTtJQUNFLDZCQUE2QjtJQUM3QixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLFdBQVc7SUFDWCxZQUFZO0lBQ1osVUFBVTtJQUNWLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IseUJBQXlCO0VBQzNCOztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsNkJBQTZCO0lBQzdCLFNBQVM7SUFDVCxlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixpQkFBaUI7SUFDakIscUJBQXFCO0VBQ3ZCO0VBQ0E7O0lBRUUsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSx3QkFBd0I7RUFDMUI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI25hdmJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhbGxldGUtcGFsaWQtZ3JheSk7XG4gIGJveC1zaGFkb3c6IDBweCAtNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwIDUlO1xuICB6LWluZGV4OiAxMDAwO1xufVxuXG4jbmF2YmFyIGEsXG4jbmF2YmFyIGJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1wYWxsZXRlLWxpZ2h0LWdyYXkpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6IHZhcigtLXBhbGxldGUtZGFyayk7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDRyZW07XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgbGluZS1oZWlnaHQ6IDRyZW07XG4gIC8qYm9yZGVyOiAxcHggc29saWQ7Ki9cbn1cblxuI25hdmJhciB7XG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKGNhbGMoMTAwJSAtIDRyZW0pKTtcbiAgbWF4LWhlaWdodDogMjRyZW07XG59XG5cbmFwcC1tZW51LXN2ZyB7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XG4gICNuYXZiYXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAzcmVtO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luLXRvcDogMS4ycmVtO1xuICB9XG5cbiAgI25hdmJhciAjbWVudSB7XG4gICAgbWF4LXdpZHRoOiA5MDBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIH1cblxuICAjbmF2YmFyIGJ1dHRvbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gICNuYXZiYXIgYSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiAwO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBjb2xvcjogIzBjNWE0YTtcbiAgICB3aWR0aDogYXV0bztcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgbWFyZ2luOiB1bnNldDtcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XG4gICAgcGFkZGluZzogMDtcbiAgICBsaW5lLWhlaWdodDogNHJlbTtcbiAgICAvKmJvcmRlcjogMXB4IHNvbGlkOyovXG4gIH1cbiAgI25hdmJhciBhOmhvdmVyLFxuICAjbmF2YmFyIGE6YWN0aXZlIHtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICB9XG4gICNuYXZiYXIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgfVxufVxuIl19 */", "@keyframes slide-top {\n  0% {\n    transform: translateY(cal(100% - 4rem));\n  }\n  100% {\n    transform: translateY(4rem);\n  }\n}\n\n\n\n\n\n@keyframes slide-bottom {\n  0% {\n    transform: translateY(4rem);\n  }\n  100% {\n    transform: translateY(calc(100% - 4rem));\n  }\n}\n\n\n\n@keyframes slide-top-0 {\n  0% {\n    transform: translateY(0);\n  }\n  100% {\n    transform: translateY(-4rem);\n  }\n}\n\n\n\n\n\n@keyframes slide-bottom-0 {\n  0% {\n    transform: translateY(-4rem);\n  }\n  100% {\n    transform: translateY(0);\n  }\n}\n\n\n\n\n\n@keyframes fade-out {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n\n\n\n\n\n@keyframes fade-in {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLWFuaW1hdGlvbnMuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OzttREFLbUQ7O0FBRW5EOzs7O0VBSUU7O0FBQ0Y7RUFDRTtJQUNFLHVDQUF1QztFQUN6QztFQUNBO0lBQ0UsMkJBQTJCO0VBQzdCO0FBQ0Y7O0FBRUE7Ozs7O21EQUttRDs7QUFFbkQ7Ozs7RUFJRTs7QUFDRjtFQUNFO0lBQ0UsMkJBQTJCO0VBQzdCO0VBQ0E7SUFDRSx3Q0FBd0M7RUFDMUM7QUFDRjs7QUFDQTs7OztFQUlFOztBQUNGO0VBQ0U7SUFDRSx3QkFBd0I7RUFDMUI7RUFDQTtJQUNFLDRCQUE0QjtFQUM5QjtBQUNGOztBQUVBOzs7OzttREFLbUQ7O0FBRW5EOzs7O0VBSUU7O0FBQ0Y7RUFDRTtJQUNFLDRCQUE0QjtFQUM5QjtFQUNBO0lBQ0Usd0JBQXdCO0VBQzFCO0FBQ0Y7O0FBRUE7Ozs7O21EQUttRDs7QUFFbkQ7Ozs7RUFJRTs7QUFDRjtFQUNFO0lBQ0UsVUFBVTtFQUNaO0VBQ0E7SUFDRSxVQUFVO0VBQ1o7QUFDRjs7QUFDQTs7Ozs7bURBS21EOztBQUVuRDs7OztFQUlFOztBQUNGO0VBQ0U7SUFDRSxVQUFVO0VBQ1o7RUFDQTtJQUNFLFVBQVU7RUFDWjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLWFuaW1hdGlvbnMuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogR2VuZXJhdGVkIGJ5IEFuaW1pc3RhIG9uIDIwMjAtNy0xIDIyOjQwOjU3XG4gKiBMaWNlbnNlZCB1bmRlciBGcmVlQlNEIExpY2Vuc2UuXG4gKiBTZWUgaHR0cDovL2FuaW1pc3RhLm5ldC9saWNlbnNlIGZvciBtb3JlIGluZm8uIFxuICogdzogaHR0cDovL2FuaW1pc3RhLm5ldCwgdDogQGNzc2FuaW1pc3RhXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogYW5pbWF0aW9uIHNsaWRlLXRvcFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5Aa2V5ZnJhbWVzIHNsaWRlLXRvcCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoY2FsKDEwMCUgLSA0cmVtKSk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDRyZW0pO1xuICB9XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEdlbmVyYXRlZCBieSBBbmltaXN0YSBvbiAyMDIwLTctMSAyMjo0MDo1N1xuICogTGljZW5zZWQgdW5kZXIgRnJlZUJTRCBMaWNlbnNlLlxuICogU2VlIGh0dHA6Ly9hbmltaXN0YS5uZXQvbGljZW5zZSBmb3IgbW9yZSBpbmZvLiBcbiAqIHc6IGh0dHA6Ly9hbmltaXN0YS5uZXQsIHQ6IEBjc3NhbmltaXN0YVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGFuaW1hdGlvbiBzbGlkZS1ib3R0b21cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuQGtleWZyYW1lcyBzbGlkZS1ib3R0b20ge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDRyZW0pO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWShjYWxjKDEwMCUgLSA0cmVtKSk7XG4gIH1cbn1cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogYW5pbWF0aW9uIHNsaWRlLXRvcC0wXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cbkBrZXlmcmFtZXMgc2xpZGUtdG9wLTAge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNHJlbSk7XG4gIH1cbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogR2VuZXJhdGVkIGJ5IEFuaW1pc3RhIG9uIDIwMjAtNy0xIDIyOjQwOjU3XG4gKiBMaWNlbnNlZCB1bmRlciBGcmVlQlNEIExpY2Vuc2UuXG4gKiBTZWUgaHR0cDovL2FuaW1pc3RhLm5ldC9saWNlbnNlIGZvciBtb3JlIGluZm8uIFxuICogdzogaHR0cDovL2FuaW1pc3RhLm5ldCwgdDogQGNzc2FuaW1pc3RhXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogYW5pbWF0aW9uIHNsaWRlLWJvdHRvbVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5Aa2V5ZnJhbWVzIHNsaWRlLWJvdHRvbS0wIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNHJlbSk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICB9XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEdlbmVyYXRlZCBieSBBbmltaXN0YSBvbiAyMDIwLTctMiAxMzoyMTozMVxuICogTGljZW5zZWQgdW5kZXIgRnJlZUJTRCBMaWNlbnNlLlxuICogU2VlIGh0dHA6Ly9hbmltaXN0YS5uZXQvbGljZW5zZSBmb3IgbW9yZSBpbmZvLiBcbiAqIHc6IGh0dHA6Ly9hbmltaXN0YS5uZXQsIHQ6IEBjc3NhbmltaXN0YVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGFuaW1hdGlvbiBmYWRlLW91dFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5Aa2V5ZnJhbWVzIGZhZGUtb3V0IHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogR2VuZXJhdGVkIGJ5IEFuaW1pc3RhIG9uIDIwMjAtNy0yIDEzOjI1OjI3XG4gKiBMaWNlbnNlZCB1bmRlciBGcmVlQlNEIExpY2Vuc2UuXG4gKiBTZWUgaHR0cDovL2FuaW1pc3RhLm5ldC9saWNlbnNlIGZvciBtb3JlIGluZm8uIFxuICogdzogaHR0cDovL2FuaW1pc3RhLm5ldCwgdDogQGNzc2FuaW1pc3RhXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogYW5pbWF0aW9uIGZhZGUtaW5cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuQGtleWZyYW1lcyBmYWRlLWluIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.css', './navbar-animations.css']
            }]
    }], function () { return [{ type: _navbar_service__WEBPACK_IMPORTED_MODULE_1__["NavbarService"] }]; }, null); })();


/***/ }),

/***/ "knB9":
/*!***************************************************************!*\
  !*** ./src/app/components/event-card/event-card.component.ts ***!
  \***************************************************************/
/*! exports provided: EventCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventCardComponent", function() { return EventCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-markdown */ "lR5k");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _button_cta_button_cta_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../button-cta/button-cta.component */ "eUQF");





function EventCardComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-button-cta", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Inscrever-me");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r0.evento == null ? null : ctx_r0.evento.href);
} }
class EventCardComponent {
    constructor() { }
}
EventCardComponent.ɵfac = function EventCardComponent_Factory(t) { return new (t || EventCardComponent)(); };
EventCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EventCardComponent, selectors: [["app-event-card"]], inputs: { evento: "evento" }, decls: 5, vars: 4, consts: [[1, "flex-container"], [3, "src", "alt"], [3, "data"], ["class", "flex-container", 4, "ngIf"], [3, "href"]], template: function EventCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "markdown", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, EventCardComponent_div_4_Template, 3, 1, "div", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.evento == null ? null : ctx.evento.imgSrc, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx.evento == null ? null : ctx.evento.imgAlt);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.evento == null ? null : ctx.evento.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.evento == null ? null : ctx.evento.href);
    } }, directives: [ngx_markdown__WEBPACK_IMPORTED_MODULE_1__["MarkdownComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _button_cta_button_cta_component__WEBPACK_IMPORTED_MODULE_3__["ButtonCtaComponent"]], styles: ["[_nghost-%COMP%] {\n  padding: 2rem;\n}\n\n.grow[_ngcontent-%COMP%] {\n  transition: 0.3s;\n}\n\n.grow[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n  transition: 0.3s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ldmVudC1jYXJkL2V2ZW50LWNhcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2V2ZW50LWNhcmQvZXZlbnQtY2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBwYWRkaW5nOiAycmVtO1xufVxuXG4uZ3JvdyB7XG4gIHRyYW5zaXRpb246IDAuM3M7XG59XG4uZ3Jvdzpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgdHJhbnNpdGlvbjogMC4zcztcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EventCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-event-card',
                templateUrl: './event-card.component.html',
                styleUrls: ['./event-card.component.css'],
            }]
    }], function () { return []; }, { evento: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "lXCb":
/*!*********************************************************************!*\
  !*** ./src/app/components/facebook-icon/facebook-icon.component.ts ***!
  \*********************************************************************/
/*! exports provided: FacebookIconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacebookIconComponent", function() { return FacebookIconComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class FacebookIconComponent {
    constructor() { }
}
FacebookIconComponent.ɵfac = function FacebookIconComponent_Factory(t) { return new (t || FacebookIconComponent)(); };
FacebookIconComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FacebookIconComponent, selectors: [["facebook-icon"]], decls: 3, vars: 0, consts: [["xmlns", "http://www.w3.org/2000/svg", "enable-background", "new 0 0 24 24", "height", "24", "viewBox", "0 0 24 24", "width", "24"], ["fill", "none", "height", "24", "width", "24"], ["d", "M22,12c0-5.52-4.48-10-10-10S2,6.48,2,12c0,4.84,3.44,8.87,8,9.8V15H8v-3h2V9.5C10,7.57,11.57,6,13.5,6H16v3h-2 c-0.55,0-1,0.45-1,1v2h3v3h-3v6.95C18.05,21.45,22,17.19,22,12z"]], template: function FacebookIconComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "rect", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZmFjZWJvb2staWNvbi9mYWNlYm9vay1pY29uLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FacebookIconComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'facebook-icon',
                templateUrl: './facebook-icon.component.html',
                styleUrls: ['./facebook-icon.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "o5g6":
/*!***************************************************!*\
  !*** ./src/app/components/logo/logo.component.ts ***!
  \***************************************************/
/*! exports provided: LogoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoComponent", function() { return LogoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class LogoComponent {
}
LogoComponent.ɵfac = function LogoComponent_Factory(t) { return new (t || LogoComponent)(); };
LogoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LogoComponent, selectors: [["app-logo"]], decls: 8, vars: 0, consts: [["width", "217", "height", "43", "viewBox", "0 0 217 43", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink"], ["width", "59", "height", "43", "rx", "10", "fill", "white"], ["width", "59", "height", "43", "rx", "10", "fill", "url(#pattern0)"], ["d", "M67.7617 31.6562C67.7617 32.5234 67.5977 33.2852 67.2695 33.9414C66.9414 34.5977 66.5 35.1406 65.9453 35.5703C65.2891 36.0859 64.5664 36.4531 63.7773 36.6719C62.9961 36.8906 62 37 60.7891 37H53.8047V19.5508H59.9688C61.25 19.5508 62.2188 19.6016 62.875 19.7031C63.5391 19.7969 64.1602 20 64.7383 20.3125C65.3633 20.6484 65.8281 21.0977 66.1328 21.6602C66.4453 22.2227 66.6016 22.8711 66.6016 23.6055C66.6016 24.457 66.3867 25.2148 65.957 25.8789C65.5352 26.543 64.9492 27.0312 64.1992 27.3438V27.4375C65.2773 27.6641 66.1406 28.1289 66.7891 28.832C67.4375 29.5273 67.7617 30.4688 67.7617 31.6562ZM62.1484 24.4844C62.1484 24.2031 62.0742 23.9141 61.9258 23.6172C61.7852 23.3203 61.5625 23.1055 61.2578 22.9727C60.9688 22.8477 60.625 22.7812 60.2266 22.7734C59.8359 22.7578 59.25 22.75 58.4688 22.75H58.1641V26.4414H58.7148C59.4648 26.4414 59.9883 26.4336 60.2852 26.418C60.5898 26.4023 60.9023 26.3203 61.2227 26.1719C61.5742 26.0078 61.8164 25.7812 61.9492 25.4922C62.082 25.2031 62.1484 24.8672 62.1484 24.4844ZM63.25 31.5742C63.25 31.0352 63.1406 30.6133 62.9219 30.3086C62.7031 30.0039 62.375 29.7734 61.9375 29.6172C61.6719 29.5156 61.3047 29.4609 60.8359 29.4531C60.375 29.4375 59.7539 29.4297 58.9727 29.4297H58.1641V33.8008H58.3984C59.5391 33.8008 60.3281 33.793 60.7656 33.7773C61.2031 33.7617 61.6484 33.6562 62.1016 33.4609C62.5 33.2891 62.7891 33.0391 62.9688 32.7109C63.1562 32.375 63.25 31.9961 63.25 31.5742ZM70.2812 37V19.5508H82.082V22.8789H74.6406V25.9375H81.4961V29.2656H74.6406V33.6719H82.082V37H70.2812ZM102.871 37H98.5117V25.4336L95.3359 32.8984H92.3477L89.1719 25.4336V37H85.0469V19.5508H90.0977L93.9648 28.1641L97.8203 19.5508H102.871V37ZM120.215 28.293C120.215 29.8867 119.891 31.3242 119.242 32.6055C118.602 33.8867 117.738 34.8867 116.652 35.6055C115.77 36.1602 114.871 36.5312 113.957 36.7188C113.051 36.9062 111.891 37 110.477 37H106.457V19.5508H110.43C112.07 19.5508 113.355 19.6758 114.285 19.9258C115.223 20.168 116.02 20.5039 116.676 20.9336C117.801 21.6758 118.672 22.6641 119.289 23.8984C119.906 25.125 120.215 26.5898 120.215 28.293ZM117.801 28.2578C117.801 26.9141 117.578 25.7695 117.133 24.8242C116.688 23.8711 116.027 23.1289 115.152 22.5977C114.535 22.2227 113.875 21.9531 113.172 21.7891C112.469 21.625 111.594 21.543 110.547 21.543H108.777V35.0078H110.547C111.578 35.0078 112.48 34.9258 113.254 34.7617C114.027 34.5977 114.734 34.293 115.375 33.8477C116.18 33.3008 116.785 32.5742 117.191 31.668C117.598 30.7539 117.801 29.6172 117.801 28.2578ZM120.859 37L126.742 19.5508H129.602L135.484 37H133.035L131.453 32.125H124.785L123.203 37H120.859ZM130.809 30.1445L128.113 21.918L125.43 30.1445H130.809ZM140.523 37V22.8789H135.367V19.5508H150.062V22.8789H144.906V37H140.523ZM151.867 37V19.5508H163.668V22.8789H156.227V25.9375H163.082V29.2656H156.227V33.6719H163.668V37H151.867ZM182.77 37H177.426L172.562 30.6016H170.992V37H166.633V19.5508H173.652C174.621 19.5508 175.465 19.6133 176.184 19.7383C176.902 19.8555 177.566 20.1055 178.176 20.4883C178.801 20.8867 179.297 21.3945 179.664 22.0117C180.031 22.6211 180.215 23.3984 180.215 24.3438C180.215 25.6797 179.914 26.7656 179.312 27.6016C178.711 28.4297 177.906 29.0898 176.898 29.582L182.77 37ZM175.715 24.8945C175.715 24.457 175.629 24.082 175.457 23.7695C175.293 23.4492 175.016 23.2031 174.625 23.0312C174.352 22.9141 174.047 22.8398 173.711 22.8086C173.375 22.7773 172.957 22.7617 172.457 22.7617H170.992V27.4609H172.246C172.855 27.4609 173.371 27.4258 173.793 27.3555C174.223 27.2773 174.586 27.1172 174.883 26.875C175.164 26.6562 175.371 26.3945 175.504 26.0898C175.645 25.7852 175.715 25.3867 175.715 24.8945ZM200.207 37H194.863L190 30.6016H188.43V37H184.07V19.5508H191.09C192.059 19.5508 192.902 19.6133 193.621 19.7383C194.34 19.8555 195.004 20.1055 195.613 20.4883C196.238 20.8867 196.734 21.3945 197.102 22.0117C197.469 22.6211 197.652 23.3984 197.652 24.3438C197.652 25.6797 197.352 26.7656 196.75 27.6016C196.148 28.4297 195.344 29.0898 194.336 29.582L200.207 37ZM193.152 24.8945C193.152 24.457 193.066 24.082 192.895 23.7695C192.73 23.4492 192.453 23.2031 192.062 23.0312C191.789 22.9141 191.484 22.8398 191.148 22.8086C190.812 22.7773 190.395 22.7617 189.895 22.7617H188.43V27.4609H189.684C190.293 27.4609 190.809 27.4258 191.23 27.3555C191.66 27.2773 192.023 27.1172 192.32 26.875C192.602 26.6562 192.809 26.3945 192.941 26.0898C193.082 25.7852 193.152 25.3867 193.152 24.8945ZM199.633 37L205.527 19.5508H210.309L216.203 37H211.691L210.602 33.4375H205.117L204.027 37H199.633ZM209.641 30.2734L207.859 24.5195L206.078 30.2734H209.641Z", "fill", "black"], ["id", "pattern0", "patternContentUnits", "objectBoundingBox", "width", "1", "height", "1"], [0, "xlink", "href", "#image0", "transform", "translate(0.116996 -0.0143089) scale(0.00105485 0.0013089)"], ["id", "image0", "width", "960", "height", "960", 0, "xlink", "href", "data:image/jpeg;base64,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zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzxq44AAD/zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzwrDDBXzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzygwwxzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzxYAADTzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzwfDDAbzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzwwgAB7zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzygUwxtTzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzxYgATDzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzyxLDAXzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz8sSVzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzxzhfzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzjjDzzzzDDDTzDzzDTzjTzzzzzTzzjDDDDTDDDTzDDjzzjDTzzzzDTzzzzzzyiQCwRwQwAByxzCgRjzwCgzTyhDjyAAghTgwABQAxRhzwQQQBTyiBzzzzzzzyhTAyRRTjDTzzBSRijyjzwyzyhTjzzyhzyjzDDwCjwjTxRzhxzziADjzzzzzyhSyRBxTjyhzwDASyjyjzyzjzijTTzyjzyjhyxwDjAgTxTDBBzghyhTzzzzzyhTyxxxSzzzzxTBwCjyjzzSDDjBBDzyjzyjzzzwCjDTTxQQixSQjyjxzzzzzyhjBAxxCAABzhTzwSTyyyhDxxTzgTzyDzyjAADQCDyhTRDTghgTwxghjzzzzzzzzyzxzzzxxyzzxyzzyxxzzzzzzzyzzzzzzzzxyzyzwzzzyzzzzzxzzzzzzzzzTzDTzTzDzjDTzTzTzDDjDjDTjTzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzziSyhxzwjxjzihySjjjxgTzSwzTyzzzzzzz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"]], template: function LogoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "rect", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "rect", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "defs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "pattern", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "use", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "image", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["[_nghost-%COMP%] {\n  display: flex;\n  width: 100%;\n  justify-content: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dvL2xvZ28uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gscUJBQXFCO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sb2dvL2xvZ28uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGp1c3RpZnktY29udGVudDogbGVmdDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LogoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-logo',
                templateUrl: './logo.component.html',
                styleUrls: ['./logo.component.css'],
            }]
    }], null, null); })();


/***/ }),

/***/ "qUJ1":
/*!***********************************************************!*\
  !*** ./src/app/components/carousel/carousel.component.ts ***!
  \***********************************************************/
/*! exports provided: CarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselComponent", function() { return CarouselComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-responsive-carousel */ "0L5U");




function CarouselComponent_carousel_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "carousel", 1);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("images", ctx_r0.images)("cellsToShow", 1)("loop", true)("autoplay", true)("autoplayInterval", 5000)("arrows", false)("height", 360)("transitionDuration", 600)("margin", 0)("overflowCellsLimit", 2);
} }
class CarouselComponent {
    constructor() {
        this.viewInited = false;
    }
    ngAfterViewInit() {
        this.viewInited = true;
    }
}
CarouselComponent.ɵfac = function CarouselComponent_Factory(t) { return new (t || CarouselComponent)(); };
CarouselComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CarouselComponent, selectors: [["app-carousel"]], inputs: { images: "images" }, decls: 1, vars: 1, consts: [[3, "images", "cellsToShow", "loop", "autoplay", "autoplayInterval", "arrows", "height", "transitionDuration", "margin", "overflowCellsLimit", 4, "ngIf"], [3, "images", "cellsToShow", "loop", "autoplay", "autoplayInterval", "arrows", "height", "transitionDuration", "margin", "overflowCellsLimit"]], template: function CarouselComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CarouselComponent_carousel_0_Template, 1, 10, "carousel", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.viewInited);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_2__["CarouselComponent"]], styles: ["[_nghost-%COMP%], [_nghost-%COMP%]   *[_ngcontent-%COMP%] {\n  width: 100%;\n  position: static;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYXJvdXNlbC9jYXJvdXNlbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2Fyb3VzZWwvY2Fyb3VzZWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0LFxuOmhvc3QgKiB7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogc3RhdGljO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CarouselComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-carousel',
                templateUrl: './carousel.component.html',
                styleUrls: ['./carousel.component.css'],
            }]
    }], function () { return []; }, { images: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "t2HC":
/*!*************************************************************************!*\
  !*** ./src/app/sections/agenda-section/eventos/descriptions/evento2.ts ***!
  \*************************************************************************/
/*! exports provided: evento2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "evento2", function() { return evento2; });
const evento2 = `## Oficina de Cosmética Natural

(6 maio, 19h)



Oficina dedicada à produção de cosméticos caseiros onde serão abordadas as principais vantagens e desvantagens da cosmética natural comparativamente com a convencional. Será feita uma breve visita guiada pelos principais componentes dos produtos cosméticos naturais mais habituais e demonstrado como através do uso de ingredientes locais podemos produzir cosméticos de grande qualidade recorrendo a pouco dinheiro.



Os/as participantes terão oportunidade de aprender a confecionar alguns cosméticos de uso diário como a pasta dentífrica, desodorizante, entre outros.



- Duração: 2h
- Horário: 19h às 21h
- Facilitadora: Helena Sousa
- Troca recomendada: 10€

Observação: oficina online na plataforma Zoom`;


/***/ }),

/***/ "tUW+":
/*!*****************************************************************************!*\
  !*** ./src/app/sections/caminhadas-section/caminhadas-section.component.ts ***!
  \*****************************************************************************/
/*! exports provided: CaminhadasSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaminhadasSectionComponent", function() { return CaminhadasSectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/carousel/carousel.component */ "qUJ1");
/* harmony import */ var _components_button_cta_button_cta_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/button-cta/button-cta.component */ "eUQF");




class CaminhadasSectionComponent {
    constructor() {
        this.images = [
            { path: 'assets/caminhadas-sensoriais-1.jpg' },
            { path: 'assets/caminhadas-sensoriais-2.jpg' },
            { path: 'assets/caminhadas-sensoriais-3.jpg' },
            { path: 'assets/caminhadas-sensoriais-4.jpg' },
            { path: 'assets/caminhadas-sensoriais-5.jpg' },
            { path: 'assets/caminhadas-sensoriais-6.jpg' },
            { path: 'assets/caminhadas-sensoriais-7.jpg' },
            { path: 'assets/caminhadas-sensoriais-8.jpg' },
            { path: 'assets/caminhadas-sensoriais-9.jpg' },
            { path: 'assets/caminhadas-sensoriais-10.jpg' },
            { path: 'assets/caminhadas-sensoriais-11.jpg' },
        ];
    }
    ngOnInit() { }
}
CaminhadasSectionComponent.ɵfac = function CaminhadasSectionComponent_Factory(t) { return new (t || CaminhadasSectionComponent)(); };
CaminhadasSectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CaminhadasSectionComponent, selectors: [["app-caminhadas-section"]], decls: 46, vars: 1, consts: [["id", "caminhadas_sensoriais"], [1, "flex-container"], [1, "col-md-6"], [1, "description"], [3, "images"]], template: function CaminhadasSectionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Caminhadas Sensoriais");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "q");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u2026saber n\u00E3o tem sequer metade da import\u00E2ncia de sentir. Se os factos s\u00E3o as sementes que mais tarde produzem conhecimento e sabedoria, nesse caso as emo\u00E7\u00F5es e as impress\u00F5es dos sentidos s\u00E3o o solo f\u00E9rtil no qual haver\u00E3o de crescer as sementes.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " - Rachel Carson ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "app-carousel", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Como aprender/sentir a Natureza?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " O ato de caminhar torna as pessoas mais saud\u00E1veis, mais felizes e mais inteligentes e faze-lo em ambiente natural \u00E9 ainda mais produtivo. Caminhar entre as \u00E1rvores, ouvir os sons da natureza, observar a paisagem, sentir o aroma das flores, perceber as texturas tem um impacto muito positivo na vida das pessoas, melhora a sa\u00FAde e o bem-estar e tem a capacidade de (re)conectar o ser humano com a Terra. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "S\u00F3 sentindo a Natureza podemos protege-la.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " As Caminhadas Sensoriais s\u00E3o um convite para uma a\u00E7\u00E3o de descoberta e (re)conex\u00E3o com a Natureza, um encontro entre o Ser Humano e os elementos naturais. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Caminhadas Bem da Terra");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " O Bem da Terra oferece Caminhadas Sensoriais em diversos habitats (floresta, bosque, rio, \u2026), nas diferentes esta\u00E7\u00F5es do ano e em diferentes momentos do dia, que para al\u00E9m do caminho em si, inclui momentos experienciais de intera\u00E7\u00E3o e explora\u00E7\u00E3o do ecossistema envolvido, atrav\u00E9s da arte e outros desafios sensoriais. Caminhadas para pessoas de todas as idades e com todos os tipos de limita\u00E7\u00F5es. Um programa recomendado para fam\u00EDlias. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Servi\u00E7os");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Caminhadas Sensoriais");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Exerc\u00EDcios de (re)conex\u00E3o com a Natureza");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "app-button-cta");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Participar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("images", ctx.images);
    } }, directives: [_components_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_1__["CarouselComponent"], _components_button_cta_button_cta_component__WEBPACK_IMPORTED_MODULE_2__["ButtonCtaComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlY3Rpb25zL2NhbWluaGFkYXMtc2VjdGlvbi9jYW1pbmhhZGFzLXNlY3Rpb24uY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CaminhadasSectionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-caminhadas-section',
                templateUrl: './caminhadas-section.component.html',
                styleUrls: ['./caminhadas-section.component.css'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home-page/home-page.component */ "atC9");





const routes = [
    {
        path: '',
        component: _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_2__["HomePageComponent"],
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "xM00":
/*!*******************************************************************!*\
  !*** ./src/app/components/address-icon/address-icon.component.ts ***!
  \*******************************************************************/
/*! exports provided: AddressIconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressIconComponent", function() { return AddressIconComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class AddressIconComponent {
}
AddressIconComponent.ɵfac = function AddressIconComponent_Factory(t) { return new (t || AddressIconComponent)(); };
AddressIconComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddressIconComponent, selectors: [["address-icon"]], decls: 8, vars: 0, consts: [["xmlns", "http://www.w3.org/2000/svg", "enable-background", "new 0 0 24 24", "height", "24", "viewBox", "0 0 24 24", "width", "24"], ["fill", "none", "height", "24", "width", "24"], ["d", "M7,10.19V18h2v-6h6v6h2v-7.81l-5-4.5L7,10.19z M14,10h-4c0-1.1,0.9-2,2-2S14,8.9,14,10z", "opacity", ".3"], ["d", "M19,9.3V4h-3v2.6L12,3L2,12h3v8h6v-6h2v6h6v-8h3L19,9.3z M17,18h-2v-6H9v6H7v-7.81l5-4.5l5,4.5V18z"], ["d", "M10,10h4c0-1.1-0.9-2-2-2S10,8.9,10,10z"]], template: function AddressIconComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "rect", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRkcmVzcy1pY29uL2FkZHJlc3MtaWNvbi5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddressIconComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'address-icon',
                templateUrl: './address-icon.component.html',
                styleUrls: ['./address-icon.component.css'],
            }]
    }], null, null); })();


/***/ }),

/***/ "y+rp":
/*!*************************************************************************!*\
  !*** ./src/app/sections/agenda-section/eventos/descriptions/evento4.ts ***!
  \*************************************************************************/
/*! exports provided: evento4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "evento4", function() { return evento4; });
const evento4 = `## Dia Aberto no Bosque

(10 junho, 9h às 18h)



Dia 10 de junho vem conhecer ou rever o Bosque do Bem da Terra.
Celebra connosco 6 anos de sucessão ecológica.

Um dia no Bosque a viver a permacultura, aprofundar conceitos, partilhar vivências, cooperar e mergulhar na agricultura natural e nas ervas aromáticas e medicinais.



Oportunidade para conhecer o Bosque do Bem da Terra e colaborar na sua construção/manutenção.

Um dia para saborear a abundância!



Inscrições limitadas!



- Dia: 10 junho
- Horário: 9.00h às 18.00h
- Local: Espaço Bem da Terra (Vila Verde Felgueiras)

Inscrições obrigatórias:
Por e-mail para coopbemdaterra@gmail.com, ou por mensagem privada no facebook ou sms para 964856933`;


/***/ }),

/***/ "yFKS":
/*!***********************************************************************!*\
  !*** ./src/app/sections/welcome-section/welcome-section.component.ts ***!
  \***********************************************************************/
/*! exports provided: WelcomeSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeSectionComponent", function() { return WelcomeSectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_welcome_image_welcome_image_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/welcome-image/welcome-image.component */ "NTOg");
/* harmony import */ var _components_button_cta_button_cta_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/button-cta/button-cta.component */ "eUQF");




class WelcomeSectionComponent {
    constructor() { }
    ngOnInit() {
    }
}
WelcomeSectionComponent.ɵfac = function WelcomeSectionComponent_Factory(t) { return new (t || WelcomeSectionComponent)(); };
WelcomeSectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WelcomeSectionComponent, selectors: [["app-welcome-section"]], decls: 9, vars: 1, consts: [["id", "welcome_section"], [1, "flex-container"], [1, "col-md-7", "flex-end"], [1, "col-md-5", "flex-center"], ["id", "welcome_paragraph"], [3, "href"]], template: function WelcomeSectionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-welcome-image");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " O Bem da Terra \u00E9 um espa\u00E7o de educa\u00E7\u00E3o para a sustentabilidade, que cultiva o desenvolvimento integral humano inspirado nos sistemas naturais, possibilitando a (re)liga\u00E7\u00E3o do ser humano \u00E0 Terra. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "app-button-cta", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Pr\u00F3ximos Eventos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", "#agenda");
    } }, directives: [_components_welcome_image_welcome_image_component__WEBPACK_IMPORTED_MODULE_1__["WelcomeImageComponent"], _components_button_cta_button_cta_component__WEBPACK_IMPORTED_MODULE_2__["ButtonCtaComponent"]], styles: ["#welcome_section[_ngcontent-%COMP%] {\n  display: flex;\n  height: 83vh;\n  align-items: center;\n  padding-top: 0;\n}\n#welcome_section[_ngcontent-%COMP%]    > .flex-container[_ngcontent-%COMP%]{\n  height: 100%;\n}\n#welcome_paragraph[_ngcontent-%COMP%] {\n  font-family: var(--font-family-sans-serif);\n  font-size: 14px;\n  width: 100%;\n  padding-bottom: 2rem;\n}\napp-button-cta[_ngcontent-%COMP%] {\n  width: 100%;\n}\n@media only screen and (min-width: 768px) {\n#welcome_section[_ngcontent-%COMP%]    > .flex-container[_ngcontent-%COMP%]{\n    flex-direction: row-reverse;\n    align-self: center;\n    height: auto;\n  }\n  #welcome_paragraph[_ngcontent-%COMP%]{\n    align-self: flex-end;\n  }\n  \n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VjdGlvbnMvd2VsY29tZS1zZWN0aW9uL3dlbGNvbWUtc2VjdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsY0FBYztBQUNoQjtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBRUE7RUFDRSwwQ0FBMEM7RUFDMUMsZUFBZTtFQUNmLFdBQVc7RUFDWCxvQkFBb0I7QUFDdEI7QUFFQTtFQUNFLFdBQVc7QUFDYjtBQUVBO0FBQ0E7SUFDSSwyQkFBMkI7SUFDM0Isa0JBQWtCO0lBQ2xCLFlBQVk7RUFDZDtFQUNBO0lBQ0Usb0JBQW9CO0VBQ3RCO0VBQ0E7O0tBRUc7O0FBRUwiLCJmaWxlIjoic3JjL2FwcC9zZWN0aW9ucy93ZWxjb21lLXNlY3Rpb24vd2VsY29tZS1zZWN0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjd2VsY29tZV9zZWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiA4M3ZoO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogMDtcbn1cbiN3ZWxjb21lX3NlY3Rpb24gPiAuZmxleC1jb250YWluZXJ7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuI3dlbGNvbWVfcGFyYWdyYXBoIHtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtZmFtaWx5LXNhbnMtc2VyaWYpO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcbn1cblxuYXBwLWJ1dHRvbi1jdGEge1xuICB3aWR0aDogMTAwJTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuI3dlbGNvbWVfc2VjdGlvbiA+IC5mbGV4LWNvbnRhaW5lcntcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIGhlaWdodDogYXV0bztcbiAgfVxuICAjd2VsY29tZV9wYXJhZ3JhcGh7XG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG4gIH1cbiAgLyogYXBwLWJ1dHRvbi1jdGEge1xuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICB9ICovXG5cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WelcomeSectionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-welcome-section',
                templateUrl: './welcome-section.component.html',
                styleUrls: ['./welcome-section.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "zByf":
/*!***************************************************************!*\
  !*** ./src/app/components/scroll-top/scroll-top.component.ts ***!
  \***************************************************************/
/*! exports provided: ScrollTopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollTopComponent", function() { return ScrollTopComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ScrollTopComponent {
    constructor() { }
    ngOnInit() {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 399) {
                document.getElementById('scrTop').style.display = 'block';
            }
            else {
                document.getElementById('scrTop').style.display = 'none';
            }
        });
    }
    scrollTop() {
        window.scrollTo(0, 0);
    }
}
ScrollTopComponent.ɵfac = function ScrollTopComponent_Factory(t) { return new (t || ScrollTopComponent)(); };
ScrollTopComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ScrollTopComponent, selectors: [["app-scroll-top"]], decls: 6, vars: 0, consts: [["id", "scrTop", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "enable-background", "new 0 0 24 24", "height", "24", "viewBox", "0 0 24 24", "width", "24"], ["fill", "none", "height", "24", "width", "24"], ["d", "M12,20c-4.41,0-8-3.59-8-8s3.59-8,8-8s8,3.59,8,8S16.41,20,12,20 M11,12l0,4h2l0-4h3l-4-4l-4,4H11z", "opacity", ".3"], ["d", "M12,20c-4.41,0-8-3.59-8-8s3.59-8,8-8s8,3.59,8,8S16.41,20,12,20 M12,22c5.52,0,10-4.48,10-10c0-5.52-4.48-10-10-10 C6.48,2,2,6.48,2,12C2,17.52,6.48,22,12,22L12,22z M11,12l0,4h2l0-4h3l-4-4l-4,4H11z"]], template: function ScrollTopComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScrollTopComponent_Template_a_click_0_listener() { return ctx.scrollTop(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "rect", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["[_nghost-%COMP%] {\n  bottom: 5rem;\n  height: 60px;\n  cursor: pointer;\n  position: fixed;\n  right: 0;\n  width: 60px;\n}\na[_ngcontent-%COMP%] {\n  display: none;\n}\na[_ngcontent-%COMP%], svg[_ngcontent-%COMP%] {\n  height: 100%;\n  opacity: 0.4;\n  width: 100%;\n}\nsvg[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zY3JvbGwtdG9wL3Njcm9sbC10b3AuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osZUFBZTtFQUNmLGVBQWU7RUFDZixRQUFRO0VBQ1IsV0FBVztBQUNiO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTs7RUFFRSxZQUFZO0VBQ1osWUFBWTtFQUNaLFdBQVc7QUFDYjtBQUVBO0VBQ0UsVUFBVTtBQUNaIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zY3JvbGwtdG9wL3Njcm9sbC10b3AuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgYm90dG9tOiA1cmVtO1xuICBoZWlnaHQ6IDYwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcG9zaXRpb246IGZpeGVkO1xuICByaWdodDogMDtcbiAgd2lkdGg6IDYwcHg7XG59XG5hIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbmEsXG5zdmcge1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9wYWNpdHk6IDAuNDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbnN2Zzpob3ZlciB7XG4gIG9wYWNpdHk6IDE7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScrollTopComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-scroll-top',
                templateUrl: './scroll-top.component.html',
                styleUrls: ['./scroll-top.component.css'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "zF5e":
/*!***************************************************************************!*\
  !*** ./src/app/sections/contactos-section/contactos-section.component.ts ***!
  \***************************************************************************/
/*! exports provided: ContactosSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactosSectionComponent", function() { return ContactosSectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_phone_icon_phone_icon_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/phone-icon/phone-icon.component */ "OSdb");
/* harmony import */ var _components_email_icon_email_icon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/email-icon/email-icon.component */ "TbJM");
/* harmony import */ var _components_facebook_icon_facebook_icon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/facebook-icon/facebook-icon.component */ "lXCb");
/* harmony import */ var _components_youtube_icon_youtube_icon_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/youtube-icon/youtube-icon.component */ "Cmp1");
/* harmony import */ var _components_address_icon_address_icon_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/address-icon/address-icon.component */ "xM00");







class ContactosSectionComponent {
    constructor() { }
    ngOnInit() {
    }
}
ContactosSectionComponent.ɵfac = function ContactosSectionComponent_Factory(t) { return new (t || ContactosSectionComponent)(); };
ContactosSectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactosSectionComponent, selectors: [["app-contactos-section"]], decls: 30, vars: 0, consts: [["id", "contactos"], [1, "flex-container"], [1, "col-md-6", "justify-left"], [1, "row"], [1, "col-1"], ["href", "tel:964856933"], ["href", "mailto:coopbemdaterra@gmail.com"], ["href", "https://www.facebook.com/coopbemdaterra/", "target", "_blank", "rel", "noreferrer"], ["href", "https://www.youtube.com/channel/UCkbJ3Gpa8pOQFS90-m2hg4w", "target", "_blank", "rel", "noreferrer"], [1, "col-11"], [1, "col-md-6"]], template: function ContactosSectionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Contactos:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "phone-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "964 856 933");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "email-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "coopbemdaterra@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "facebook-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "facebook.com/coopbemdaterra/");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "youtube-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Canal Youtube do Bem da Terra");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "address-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "address", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Bosque Bem da Terra, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Rua D. Jo\u00E3o Miranda Teixeira, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " 4650-801 Vila Verde - Felgueiras ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_components_phone_icon_phone_icon_component__WEBPACK_IMPORTED_MODULE_1__["PhoneIconComponent"], _components_email_icon_email_icon_component__WEBPACK_IMPORTED_MODULE_2__["EmailIconComponent"], _components_facebook_icon_facebook_icon_component__WEBPACK_IMPORTED_MODULE_3__["FacebookIconComponent"], _components_youtube_icon_youtube_icon_component__WEBPACK_IMPORTED_MODULE_4__["YoutubeIconComponent"], _components_address_icon_address_icon_component__WEBPACK_IMPORTED_MODULE_5__["AddressIconComponent"]], styles: [".row[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  flex-wrap: nowrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VjdGlvbnMvY29udGFjdG9zLXNlY3Rpb24vY29udGFjdG9zLXNlY3Rpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvc2VjdGlvbnMvY29udGFjdG9zLXNlY3Rpb24vY29udGFjdG9zLXNlY3Rpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgZmxleC13cmFwOiBub3dyYXA7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactosSectionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contactos-section',
                templateUrl: './contactos-section.component.html',
                styleUrls: ['./contactos-section.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map