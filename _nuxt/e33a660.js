(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{104:function(e,t,n){"use strict";n.r(t);var o=n(1),r=n(79),d=o.a.extend({data:()=>({questions:r,events:[{name:"assoc2022",title:"MMA 2022",desc:"Descrizione",imgPath:"/img/events/2022/assoc/icon.jpg",expired:!1,show:!1},{name:"mma2022",title:"MMA 2022",desc:"L'evento annuale di incontro fra matricole e admin",imgPath:"/img/events/2021/mma/mma2k21logo.png",expired:!1,show:!0},{name:"mma2021",title:"MMA 2021",desc:"L'evento annuale di incontro fra matricole e admin",imgPath:"/img/events/2021/mma/mma2k21logo.png",expired:!0,show:!0}],categories:[{desc:"In arrivo",expired:!1},{desc:"Passati",expired:!0}]})}),l=(n(91),n(8)),component=Object(l.a)(d,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",[t("div",{staticClass:"container3"},[t("header",{staticClass:"my-4 testoCentrale",staticStyle:{"max-width":"100%",border:"none","margin-top":"calc(2rem + 2vw) !important","margin-bottom":"calc(1rem + 2vw) !important","padding-bottom":"0px","padding-top":"0px"}},[t("div",{staticStyle:{"text-align":"center"}},[t("h2",{staticClass:"text_big"},[t("span",[e._v(e._s(e.$t("Eventi"))+" ")])]),e._v(" "),t("h5",{staticStyle:{"font-size":"calc(0.5px + 1.05rem + 0.5vw)"}},[t("a",{attrs:{href:"https://polinetwork.org/"+e.$i18n.locale}},[e._v("\n            by PoliNetwork\n          ")])]),e._v(" "),t("div"),e._v(" "),t("br"),e._v(" "),t("div",{staticClass:"container8"},[t("div",{staticClass:"container6"},[t("p",{staticClass:"text_small"},[t("span",[e._v("\n                "+e._s(e.$t("Gli eventi del network!"))+"\n              ")])])])])])]),e._v(" "),e._l(e.categories,(function(n){return t("div",{key:n.desc},[t("div",{staticStyle:{"padding-top":"-5px"}}),e._v(" "),t("hr"),e._v(" "),t("div",{staticStyle:{"text-align":"center"}},[e._v(e._s(n.desc))]),e._v(" "),t("div",{staticStyle:{"padding-top":"10px"}}),e._v(" "),t("div",{staticClass:"event-list"},e._l(e.events,(function(o){return t("a",{directives:[{name:"show",rawName:"v-show",value:o.show&&o.expired==n.expired,expression:"event.show && event.expired == cat.expired"}],key:o.name,staticClass:"single-event",attrs:{hreF:e.localePath(o.name)}},[t("div",[o.expired?t("div",{staticClass:"expired-event"},[e._v("\n              "+e._s(e.$t("Terminato"))+"\n            ")]):e._e(),e._v(" "),t("img",{staticClass:"event-logo",attrs:{src:o.imgPath}}),e._v(" "),t("div",{staticStyle:{padding:"0.5rem"}}),e._v(" "),t("span",{staticClass:"event-title"},[e._v(" "+e._s(o.title)+" ")]),e._v(" "),t("div",{staticStyle:{padding:"0.5rem"}}),e._v(" "),t("span",{staticClass:"event-desc"},[e._v("\n              "+e._s(e.$t(o.desc))+"\n            ")])])])})),0)])}))],2)])}),[],!1,null,"b43bdeb2",null);t.default=component.exports},79:function(e){e.exports=JSON.parse('[{"question":"Perché c\'è un limite al numero di partecipanti?","answer":"A causa delle restrizioni anti Covid-19 il locale ha imposto questo limite","id":1},{"question":"Perché sarà data priorità ad Admin e Matricole?","answer":"A causa del limite al numero di persone abbiamo deciso di dare priorità alle matricole, che potranno anche confrontarsi con noi Admin","id":2},{"question":"Perché il form mi dice che non ho l\'autorizzazione ad accedere?","answer":"Devi accedere utilizzando l\'account Microsoft fornito dal Politecnico (nome.cognome@mail.polimi.it oppure codicepersona@polimi.it), questo è per assicurarci che tu sia effettivamente uno studente del Politecnico","id":3},{"question":"Dovrò esibire il Green Pass all\'ingresso del locale?","answer":"Sì, dato che gran parte delle pertinenze del locale sono al chiuso e comunque non sarà possibile rispettare le regole di distanziamento, il Green Pass o un certificato equivalente sarà obbligatorio. È inoltre consigliato portare con sé un documento di identità con foto e in corso di validità","id":1},{"question":"Quali sono e come verranno trattati i dati inviati tramite il form di iscrizione?","answer":"Il form raccoglie il Codice Persona (equivalente all\'email con Nome e Cognome) e il tag Telegram o numero di telefono. Entro 24 ore dal termine dell\'evento tutti i dati saranno cancellati. Utilizzeremo queste informazioni per accertare l\'appartenenza al Politecnico di Milano come Matricole o Admin e per mandare comunicazioni inerenti l\'evento. I dati sono gestiti da Diego Aldarese, organizzatore dell\'evento. Trovate i contatti di Diego nella pagina contatti.","id":4}]')},82:function(e,t,n){var content=n(92);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(13).default)("2bc58248",content,!0,{sourceMap:!1})},91:function(e,t,n){"use strict";n(82)},92:function(e,t,n){var o=n(12)(!1);o.push([e.i,".dettaglievento[data-v-b43bdeb2]{overflow:hidden;padding-top:1rem}.buttonLink[data-v-b43bdeb2]{padding:8px}.buttonsEvent[data-v-b43bdeb2]{overflow:hidden;padding:0 1rem 1rem}.text_big[data-v-b43bdeb2]{text-align:center;font-weight:700;font-size:calc(4px + 1.27rem + .77vw)}.text_medium[data-v-b43bdeb2]{text-align:center;font-size:calc(1px + 1rem + .35vw);max-width:30rem}.text_small[data-v-b43bdeb2]{text-align:center;font-size:calc(1px + 1rem + .3vw)}.flex[data-v-b43bdeb2]{display:flex;text-align:center;align-items:center;justify-content:space-evenly;overflow:auto}@media (max-width:1000px){.flex[data-v-b43bdeb2]{flex-direction:column;overflow:auto}}.media[data-v-b43bdeb2]{width:100%;height:auto;overflow:auto;max-width:20rem;padding:.5rem}p[data-v-b43bdeb2]{margin-bottom:.5rem}.single-event[data-v-b43bdeb2]{padding:1.5rem;border:1px solid rgba(0,0,0,.432);border-radius:1rem;max-width:calc(12rem + 4vw);margin:auto;text-align:center;width:100%}a.single-event[data-v-b43bdeb2]:hover{text-decoration:none!important}.event-list[data-v-b43bdeb2]{margin:auto;display:flex}.event-title[data-v-b43bdeb2]{font-size:calc(4px + .6rem + .6vw)}.event-logo[data-v-b43bdeb2]{width:100%;max-width:calc(4rem + 4vw);margin:auto;text-align:center}.event-desc[data-v-b43bdeb2]{font-size:calc(3px + .4rem + .4vw);color:#000;line-height:normal}.expired-event[data-v-b43bdeb2]{transform:rotate(-45deg);position:absolute;color:#6c0000;border:1px solid #000;padding:.4rem;border-radius:.4rem;background-color:#ffe300;font-weight:700}",""]),e.exports=o}}]);