(window.webpackJsonp=window.webpackJsonp||[]).push([[10,6,7],{70:function(e,t,o){var content=o(73);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(12).default)("5c73be98",content,!0,{sourceMap:!1})},71:function(e,t,o){var content=o(75);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(12).default)("49372380",content,!0,{sourceMap:!1})},72:function(e,t,o){"use strict";o(70)},73:function(e,t,o){var n=o(11)(!1);n.push([e.i,".map{border-radius:20px;width:100%;height:auto;min-height:20rem;min-width:min(20rem,100%);padding:0}.titleMap{text-align:center;font-weight:700;font-size:calc(1px + .7rem + .2vw);padding-bottom:.3rem}",""]),e.exports=n},74:function(e,t,o){"use strict";o(71)},75:function(e,t,o){var n=o(11)(!1);n.push([e.i,".questionCollapsed{text-align:left;font-weight:700;font-size:20px}.questionCollapsed:hover{background-color:rgba(37,46,46,.123)}.questionFull{text-align:left;font-weight:700;font-size:20px}.questionCommon{padding:.5rem 1rem;border-radius:1rem;border:1px solid rgba(0,0,0,.219)}.questionContainer{padding:.5rem}.answer{font-weight:400}p{margin-bottom:0}",""]),e.exports=n},77:function(e,t,o){var content=o(86);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(12).default)("d1822b90",content,!0,{sourceMap:!1})},80:function(e,t,o){"use strict";o.r(t);var n={props:{where:{type:String,default:"",require:!1}}},r=(o(72),o(7)),component=Object(r.a)(n,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("a",{attrs:{href:"https://maps.google.com/maps?q="+encodeURIComponent(e.where)+"&t=&z=15&ie=UTF8&iwloc="}},[o("div",{staticClass:"titleMap"},[e._v(e._s("📌 "+e.where))])]),e._v(" "),o("iframe",{staticClass:"map",attrs:{src:"https://maps.google.com/maps?q="+encodeURIComponent(e.where)+"&t=&z=15&ie=UTF8&iwloc=&output=embed",frameborder:"20",scrolling:"no"}})])}),[],!1,null,null,null);t.default=component.exports},81:function(e,t,o){"use strict";o.r(t);var n=o(0).a.extend({data:()=>({collapsed:!0}),props:{question:{type:String,required:!0},answer:{type:String,required:!0}},computed:{questionClass(){return this.collapsed?"questionCollapsed questionCommon":"questionFull questionCommon"},questionClassText(){return this.collapsed?"questionCollapsedText questionCommonText":"questionFullText questionCommonText"}}}),r=(o(74),o(7)),component=Object(r.a)(n,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"questionContainer",on:{click:function(t){e.collapsed=!e.collapsed}}},[o("div",{class:e.questionClass},[o("table",[o("tr",[o("td",{staticStyle:{"min-width":"1.5rem"}},[e.collapsed?o("span",[e._v("▼")]):o("span",[e._v("➤")])]),e._v(" "),o("td",[o("p",{class:e.questionClassText},[e._v("\n            "+e._s(e.question)+"\n          ")])])])]),e._v(" "),e.collapsed?e._e():o("p",{staticClass:"answer"},[e._v(e._s(e.answer))])])])}),[],!1,null,null,null);t.default=component.exports},84:function(e){e.exports=JSON.parse('[{"question":"Perché c\'è un limite al numero di partecipanti?","answer":"A causa delle restrizioni anti Covid-19 il locale ha imposto questo limite","id":1},{"question":"Perché sarà data priorità ad Admin e Matricole?","answer":"A causa del limite al numero di persone abbiamo deciso di dare priorità alle matricole, che potranno anche confrontarsi con noi Admin","id":2},{"question":"Perché il form mi dice che non ho l\'autorizzazione ad accedere?","answer":"Devi accedere utilizzando l\'account Microsoft fornito dal Politecnico (nome.cognome@mail.polimi.it oppure codicepersona@polimi.it), questo è per assicurarci che tu sia effettivamente uno studente del Politecnico","id":3},{"question":"Dovrò esibire il Green Pass all\'ingresso del locale?","answer":"Sì, dato che gran parte delle pertinenze del locale sono al chiuso e comunque non sarà possibile rispettare le regole di distanziamento, il Green Pass o un certificato equivalente sarà obbligatorio. È inoltre consigliato portare con sé un documento di identità con foto e in corso di validità","id":1},{"question":"Quali sono e come verranno trattati i dati inviati tramite il form di iscrizione?","answer":"Il form raccoglie il Codice Persona (equivalente all\'email con Nome e Cognome) e il tag Telegram o numero di telefono. Entro 24 ore dal termine dell\'evento tutti i dati saranno cancellati. Utilizzeremo queste informazioni per accertare l\'appartenenza al Politecnico di Milano come Matricole o Admin e per mandare comunicazioni inerenti l\'evento. I dati sono gestiti da Diego Aldarese, organizzatore dell\'evento. Trovate i contatti di Diego nella pagina contatti.","id":4}]')},85:function(e,t,o){"use strict";o(77)},86:function(e,t,o){var n=o(11)(!1);n.push([e.i,".dettaglievento[data-v-69e112eb]{overflow:hidden;padding-top:1rem}.buttonLink[data-v-69e112eb]{padding:8px}.buttonsEvent[data-v-69e112eb]{overflow:hidden;padding:0 1rem 1rem}.text_big[data-v-69e112eb]{text-align:center;font-weight:700;font-size:calc(4px + 1.27rem + .77vw)}.text_medium[data-v-69e112eb]{text-align:center;font-size:calc(1px + 1rem + .35vw);max-width:30rem}.text_small[data-v-69e112eb]{text-align:center;font-size:calc(1px + 1rem + .3vw)}.flex[data-v-69e112eb]{display:flex;text-align:center;align-items:center;justify-content:space-evenly;overflow:auto}@media (max-width:1000px){.flex[data-v-69e112eb]{flex-direction:column;overflow:auto}}.media[data-v-69e112eb]{width:100%;height:auto;overflow:auto;max-width:20rem;padding:.5rem}p[data-v-69e112eb]{margin-bottom:.5rem}",""]),e.exports=n},92:function(e,t,o){"use strict";o.r(t);var n=o(0),r=o(84),l=n.a.extend({data:()=>({questions:r})}),c=(o(85),o(7)),component=Object(c.a)(l,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("div",{staticClass:"container3"},[o("header",{staticClass:"my-4 testoCentrale",staticStyle:{"max-width":"100%",border:"none","margin-top":"calc(2rem + 2vw) !important","margin-bottom":"calc(1rem + 2vw) !important","padding-bottom":"0px","padding-top":"0px"}},[o("div",{staticStyle:{"text-align":"center"}},[o("h2",{staticClass:"text_big"},[o("span",[e._v(e._s(e.$t("Meet My Admin"))+" ")])]),e._v(" "),o("h5",{staticStyle:{"font-size":"calc(0.5px + 1.05rem + 0.5vw)"}},[o("a",{attrs:{href:"https://polinetwork.github.io/"+e.$i18n.locale}},[e._v("\n            by PoliNetwork\n          ")])]),e._v(" "),o("div"),e._v(" "),o("br"),e._v(" "),o("div",{staticClass:"container8"},[o("div",{staticClass:"container6"},[o("p",{staticClass:"text_small"},[o("span",[e._v("\n                "+e._s(e.$t("L'evento annuale organizzato da PoliNetwork con Matricole ed Admin di tutte le facoltà. Un'occasione per incontrarsi, chiacchierare, conoscersi davanti a una birra e stringere amicizie per affrontare insieme il nuovo percorso di studio, ma anche per farci qualsiasi domanda!"))+"\n              ")])])])])])])]),e._v(" "),o("hr"),e._v(" "),o("div",{staticClass:"dettaglievento"},[o("p",{staticClass:"text_big"},[e._v(e._s(e.$t("Dettagli Evento")))]),e._v(" "),o("div",{staticClass:"text_big"},[e._v("\n      "+e._s(e.$t("Iscrizioni chiuse. Grazie a tutti. Seguiranno prestissimo aggiornamenti."))+"\n    ")]),e._v(" "),o("div",{staticStyle:{padding:"0.2rem"}}),e._v(" "),o("div",{staticClass:"flex"},[e._m(0),e._v(" "),o("div",[o("p",{staticClass:"text_medium",staticStyle:{"padding-top":"20px"}},[e._v("\n          📅 "+e._s(e.$t("Quando: 16 o 17 settembre 2021 ore 21:00"))+"\n        ")]),e._v(" "),o("p",{staticClass:"text_medium"},[e._v("\n\n          "+e._s(e.$t("Il numero massimo di partecipanti è limitato e sarà data priorità ad Admin e Matricole"))+"\n\n        ")]),e._v(" "),o("div",{staticClass:"buttonsEvent"},[o("a",{staticClass:"buttonLink",attrs:{href:"https://t.me/joinchat/AhIXEiN5s1BlMDVk"}},[o("LayoutButton",[e._v("\n              "+e._s(e.$t("Entra qui per aggiornamenti (riservato agli iscritti)"))+"\n              📣\n            ")])],1),e._v(" "),o("a",{staticClass:"buttonLink",attrs:{href:"https://t.me/diegoaldarese"}},[o("LayoutButton",[e._v("\n              "+e._s(e.$t("Per ulteriori informazioni chiedi qui"))+" ✍\n            ")])],1)])]),e._v(" "),o("div",[o("LayoutMap",{attrs:{where:"Brasserie Bruxelles Pub Milano"}})],1)]),e._v(" "),o("br"),e._v(" "),o("hr"),e._v(" "),o("p",{staticClass:"text_big",staticStyle:{"padding-top":"20px"}},[e._v("FAQ")]),e._v(" "),o("div",{staticStyle:{padding:"0.2rem"}}),e._v(" "),o("div",{staticStyle:{"max-width":"70rem",margin:"auto"}},e._l(e.questions,(function(t){return o("div",{key:t.id},[o("LayoutQuestion",{attrs:{question:e.$t(t.question),answer:e.$t(t.answer)}})],1)})),0)])])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("img",{staticClass:"media",attrs:{src:"/img/mma2k21logo.png"}})])}],!1,null,"69e112eb",null);t.default=component.exports;installComponents(component,{LayoutButton:o(42).default,LayoutMap:o(80).default,LayoutQuestion:o(81).default})}}]);