(this["webpackJsonpreact-start"]=this["webpackJsonpreact-start"]||[]).push([[0],{39:function(e,a,t){},46:function(e,a,t){},47:function(e,a,t){},48:function(e,a,t){},49:function(e,a,t){},50:function(e,a,t){},52:function(e,a,t){"use strict";t.r(a);var i=t(0),c=t(32),s=t.n(c),n=t(12),r=t(18),o=t(3),l=t(54),j=(t(39),t(2));var d=function(e){var a=e.suffle,t=e.responsiveHeight;return Object(j.jsx)(l.a.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:Object(j.jsx)("div",{className:"container",children:Object(j.jsx)("div",{className:"row justify-content-around",children:Object(j.jsxs)("div",{id:"game",className:"quiz",children:[Object(j.jsx)("header",{className:"justify-content-center align-items-center",children:Object(j.jsx)("h1",{children:"Kviz znanja"})}),Object(j.jsx)("div",{style:t,className:"options text-center",children:Object(j.jsx)(n.b,{onClick:function(){a()},to:"/choosePlayer",className:"btn btn-primary playerBtn",children:"Dobrodosli!"})})]})})})})},u=t(5);t(46);var p=function(e){var a=e.card,t=e.shuffleOption,i=e.choosenPlayer;return Object(j.jsxs)("div",{id:a.player,className:"card",children:[Object(j.jsx)("img",{src:"https://lavantonio.github.io/Deploy-React_knowledge_quiz/img/"+a.player+".jpg",className:"card-img-top",alt:a.capitalPlayer}),Object(j.jsx)("h5",{className:"card-title",children:a.capitalPlayer}),Object(j.jsx)("p",{className:"card-text",children:a.text}),Object(j.jsxs)(n.b,{to:"/game",onClick:function(){t(),i(a.player)},id:a.player+"Btn",className:"btn btn-"+a.colorBtn,children:["Izaberite ",a.casePlayer]})]})};t(47);var b=function(e){var a=e.card,t=e.shuffleOption,i=e.choosenPlayer,c=a.map((function(e,a){return Object(j.jsx)(p,{card:e,shuffleOption:t,choosenPlayer:i},a)}));return Object(j.jsx)(l.a.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"addPlayer text-center",children:[Object(j.jsx)("h1",{className:"pb-3",children:"Izaberite igraca "}),Object(j.jsx)("div",{className:"row justify-content-center",children:c})]})})})};t(48);var m=function(e){var a=e.options,t=e.chooseOption,i=e.responsiveHeight;return Object(j.jsx)(l.a.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:Object(j.jsx)("div",{className:"container",children:Object(j.jsx)("div",{className:"row justify-content-around",children:Object(j.jsx)("div",{id:"game",className:"quiz col-8",children:Object(j.jsxs)("div",{className:"d-flex flex-column",children:[Object(j.jsx)("header",{className:"justify-content-center align-items-center",children:Object(j.jsx)("h1",{children:"Izaberite oblast"})}),Object(j.jsx)("div",{style:i,className:"options text-center",children:a.map((function(e,a){return Object(j.jsx)("div",{className:"option",children:Object(j.jsx)(n.b,{to:"/quiz",onClick:function(){t(e)},className:"button optionP d-flex justify-content-center align-items-center",children:e})},a)}))})]})})})})})};t(49);var O=function(e){var a=e.playerQuiz,t=e.questionNumber,i=e.score,c=e.nextQuestion,s=e.editButton,n=e.displayMobileThree,r=e.displayMobileFour,o=s?Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("button",{onClick:function(){c()},id:"playerBtn",className:"btn btn-primary",children:"Sledece pitanje"})}):Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("button",{id:"playerBtn",className:"btn btn-primary",children:"Sledece pitanje"})});return Object(j.jsxs)(l.a.div,{className:"player text-center col-4",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:[n&&Object(j.jsx)("h2",{children:a.capitalPlayer}),Object(j.jsx)("img",{src:"https://lavantonio.github.io/Deploy-React_knowledge_quiz/img/"+a.player+".jpg",className:"card-img-top",alt:a.capitalPlayer}),Object(j.jsxs)("div",{className:"card-body",children:[Object(j.jsxs)("div",{className:"responsivePlayerQuizDisplayNone",children:[r&&Object(j.jsx)("h2",{children:a.capitalPlayer}),Object(j.jsxs)("p",{id:"scorePlayer",className:"lead",children:["Ukupno poena : ",i]})]}),Object(j.jsx)("div",{className:"responsivePlayerQuiz",children:Object(j.jsxs)("p",{id:"scorePlayer",className:"lead",children:[a.capitalPlayer," poena : ",i]})}),Object(j.jsxs)("div",{className:"responsivePlayerQuizFlex",children:[Object(j.jsxs)("p",{id:"countRounds",className:"pt-1",children:["Pitanje ",t]}),o]})]})]})};t(50);var h=Object(u.g)((function(e,a){a.Questions,a.Responds,a.Answers,a.playerCard,a.responsiveHeight;var t=Object(i.useState)([{player:"ivo",capitalPlayer:"Ivo",casePlayer:"Iva",text:"Ako mene izaberete necete se pokajati. Gledajte me u oci dok pricam.",colorBtn:"primary"}]),c=Object(o.a)(t,2),s=c[0],r=c[1];Object(i.useEffect)((function(){console.log(window.screen.height),/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)&&ee(!1),r(e.playerCard),"Reload Game"===e.Questions&&e.history.push("/")}),[]);var d=Object(i.useState)(5),u=Object(o.a)(d,2),p=u[0],b=(u[1],Object(i.useState)(1)),m=Object(o.a)(b,2),h=m[0],v=m[1],y=Object(i.useState)(0),x=Object(o.a)(y,2),k=x[0],f=x[1],g=Object(i.useState)(!1),N=Object(o.a)(g,2),P=N[0],S=N[1],z=Object(i.useState)(!0),B=Object(o.a)(z,2),M=B[0],w=B[1],K=Object(i.useState)(!1),R=Object(o.a)(K,2),A=R[0],I=R[1],C=Object(i.useState)(!1),T=Object(o.a)(C,2),Q=T[0],q=T[1],G=Object(i.useState)(!1),H=Object(o.a)(G,2),D=H[0],V=H[1],J=Object(i.useState)(!1),U=Object(o.a)(J,2),E=U[0],F=U[1],W=Object(i.useState)(""),_=Object(o.a)(W,2),L=_[0],Z=_[1],X=Object(i.useState)(!0),Y=Object(o.a)(X,2),$=Y[0],ee=Y[1],ae=Object(i.useState)(!1),te=Object(o.a)(ae,2),ie=te[0],ce=te[1],se=Object(i.useState)(!0),ne=Object(o.a)(se,2),re=ne[0],oe=ne[1],le=Object(i.useState)(!1),je=Object(o.a)(le,2),de=je[0],ue=je[1],pe=Object(i.useState)(""),be=Object(o.a)(pe,2),me=be[0],Oe=be[1],he=function(){Oe(""),ce(!1),p===h?(q(!1),I(!1),V(!D),F(!E),Z(" displayNone"),S(!1)):(e.newQuestions(h),S(!1),v(h+1),w(!0),q(!1),I(!1))},ve=function(){/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)&&(ce(!0),oe(!1),ue(!0))},ye=s.map((function(e,a){return Object(j.jsx)(O,{playerQuiz:e,questionNumber:h,score:k,nextQuestion:he,editButton:P,displayMobileThree:re,displayMobileFour:de},a)}));return Object(j.jsx)(l.a.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"row justify-content-around",children:[$&&[ye],Object(j.jsx)("div",{id:"game",className:"quiz col-8",children:Object(j.jsxs)("div",{className:"d-flex flex-column",children:[Object(j.jsxs)("header",{className:"justify-content-center align-items-center",children:[Object(j.jsx)("h1",{className:"questions "+L,children:e.Questions}),E&&Object(j.jsxs)("h1",{className:"questions",children:[e.playerCard[0].capitalPlayer," je ","Horhe"===e.playerCard[0].capitalPlayer||"Ivo"===e.playerCard[0].capitalPlayer||"Lav"===e.playerCard[0].capitalPlayer?"osvojio":"osvojila"," ukupno ",k," poena",Object(j.jsx)("br",{}),"***** CESTITAMO *****"]})]}),Object(j.jsxs)("div",{style:e.responsiveHeight,className:"options text-center "+me,children:[A&&Object(j.jsx)(l.a.div,{className:"d-flex flex-column justify-content-center align-items-center w-100",initial:{opacity:0},animate:{opacity:1},transition:{duration:1},exit:{opacity:0},children:Object(j.jsx)("h1",{className:"textCorrect",children:"Tacan odgovor!"})}),Q&&Object(j.jsxs)(l.a.div,{className:"d-flex flex-column justify-content-center align-items-center w-100",initial:{opacity:0},animate:{opacity:1},transition:{duration:1},exit:{opacity:0},children:[Object(j.jsx)("h1",{className:"textWrong",children:"Pogresan odgovor!"}),Object(j.jsxs)("h4",{className:"afterTextWrong",children:["Tacan odgovor je: ",e.Responds]})]}),ie&&[ye],M&&Object(j.jsx)("div",{className:"optionsResponsive",children:e.Answers.map((function(a,t){return Object(j.jsx)(l.a.div,{className:"option",initial:{opacity:0},animate:{opacity:1},transition:{duration:1},exit:{opacity:0},children:Object(j.jsx)("div",{onClick:function(){!function(a){Oe("optionsResponsive"),S(!0),ve(),e.Responds===a?(w(!1),I(!A),f(k+5)):(w(!1),q(!Q))}(a)},className:"button optionP d-flex justify-content-center align-items-center",children:a})},t)}))}),D&&Object(j.jsx)(l.a.div,{className:"",initial:{opacity:0},animate:{opacity:1},transition:{duration:1},exit:{opacity:0},children:Object(j.jsx)(n.b,{to:"/",className:"btn btn-primary playerBtn playerBtnQuiz",initial:{opacity:0},animate:{opacity:1},transition:{duration:1},exit:{opacity:0},children:"Pokrenite novu igru"})})]})]})})]})})})})),v=t(55);var y=function(){var e=[{player:"ivo",capitalPlayer:"Ivo",casePlayer:"Iva",text:"Ako mene izaberete necete se pokajati. Gledajte me u oci dok pricam.",colorBtn:"primary"},{player:"horhe",capitalPlayer:"Horhe",casePlayer:"Horhea",text:"Posle 30 godina igranja nisam najpametniji ali sam najbolji.",colorBtn:"warning"},{player:"kristina",capitalPlayer:"Kristina",casePlayer:"Kristinu",text:"Volim da igram kvizove znanja a najvise volim da pobedjujem.",colorBtn:"success"},{player:"lav",capitalPlayer:"Lav",casePlayer:"Lava",text:"Veni, vidi vici ili pametan pametniji najpametniji.",colorBtn:"secondary"},{player:"vladanka",capitalPlayer:"Vladanka",casePlayer:"Vladanku",text:"Mogu da oberem malinjak za 2 sata a i za 2 dana, jer sam u takvoj mogucnosti.",colorBtn:"info"},{player:"justina",capitalPlayer:"Justina",casePlayer:"Justinu",text:"Kunem se u Nemacku. Mi Nemci smo najpametniji hahahaha.",colorBtn:"danger"}],a=Object(i.useState)(["Dunav nastaje u Crnoj \u0161umi, a koja reka izvire u Valdajskoj gori?","SAD \u010dini 50 saveznih dr\u017eava. Od koliko saveznih dr\u017eava se sastoji Indija?","Najvi\u0161i vrh kog kontineta je Denali?","Koji norve\u0161ki grad se smatra najsevernijim gradom na svetu?","U kojoj afri\u010dkoj dr\u017eavi se nalazi vodopad Tugela, drugi najvi\u0161i vodopad na svetu posle An\u0111eoskog vodopada u Venecueli?"]),t=Object(o.a)(a,2),c=t[0],s=t[1],n=Object(i.useState)([["Volga","Don","Ural","Dnjepar"],["34","29","16","8"],["Severne Amerike","Australije","Ju\u017ene Amerike","Afrike"],["Harstad","Bode","Vardo","Hamerfest"],["U Mozambiku","U Ju\u017enoafri\u010dkoj Republici","U Zambiji","U \u010cadu"]]),l=Object(o.a)(n,2),p=l[0],O=l[1],y=Object(i.useState)(["Volga","29","Severne Amerike","Hamerfest","U Ju\u017enoafri\u010dkoj Republici"]),x=Object(o.a)(y,2),k=x[0],f=x[1],g=Object(i.useState)(["Prvi svetski rat je poceo?","Kad je bio Kosovski boj?","Za vreme drugog svetskog rata ko je bio premijer Italije?","Kad je poceo prvi srpski ustanak?","Kad je poceo drugi srpski ustanak?"]),N=Object(o.a)(g,2),P=N[0],S=N[1],z=Object(i.useState)([["1814","1914","1815","1915"],["1388","1489","1489","1389"],["Musolini","Hitler","Djovani","Cercil"],["1804","1805","1803","1806"],["1813","1814","1815","1816"]]),B=Object(o.a)(z,2),M=B[0],w=B[1],K=Object(i.useState)(["1914","1389","Musolini","1804","1815"]),R=Object(o.a)(K,2),A=R[0],I=R[1],C=Object(i.useState)([" \u010cetiri \u010doveka igrala su \u0161ah 4 sata. Koliko je sati igrao svaki od u\u010desnika?","Svaki \u0161tap ima dva kraja. Koliko krajeva ima \u0161tap i po?","Svaka od tri sestre ima brata. Koliko u toj porodici ima dece?","Kada je pe\u0161ak pre\u0161ao polovinu puta i jo\u0161 2 km, ostalo muje da pre\u0111e jo\u0161 \u010detvrtinu puta i 6 km. Koliko je du\u017eina puta?","Jedan radnik mo\u017ee zavr\u0161iti posao za 4 sata, a drugi za 12 sati. Za koje vreme bi obavili taj posao rade\u0107i zajedno?"]),T=Object(o.a)(C,2),Q=T[0],q=T[1],G=Object(i.useState)([["4 sata","2 sata","1 sat","6 sata"],["2 kraja","3 kraja","4 kraja","1 kraj"],["3 dece","2 dece","4 dece","5 dece"],["16 km","18 km","32 km","34 km"],["2 sata","3 sata","4 sata","pola sata"]]),H=Object(o.a)(G,2),D=H[0],V=H[1],J=Object(i.useState)(["4 sata","4 kraja","4 dece","32 km","za tri sata"]),U=Object(o.a)(J,2),E=U[0],F=U[1],W=Object(i.useState)(["Velika \u010cernobiljska katastrofa u Ukrajini izazvana je:","Kako se zove aktuelni predsednik Turske?","Reakcija izme\u0111u jedne baze i jedne kiseline naziva se:","Kipar je podeljen na:","Koliko ima Jevan\u0111elja u Bibliji:"]),_=Object(o.a)(W,2),L=_[0],Z=_[1],X=Object(i.useState)([["zemljotresom","padom aviona","kvarom u nuklearnoj elektrani","sirenjem otrovnog gasa"],["Mustafa Kemal Ataturk","Melih Mahmutoglu","Red\u017eep Tajip Erdogan","Red\u017eep Melih Mahmutoglu"],["oksidacija","neutralizacija","resorbcija","redukcija"],["Gr\u010dki i Izraelski deo.","Turski i Kurdski deo","Gr\u010dki i Turski deo","Turski i Ruski deo."],["4","10","12","8"]]),Y=Object(o.a)(X,2),$=Y[0],ee=Y[1],ae=Object(i.useState)(["kvarom u nuklearnoj elektrani","Red\u017eep Tajip Erdogan","neutralizacija","Gr\u010dki i Turski deo","4"]),te=Object(o.a)(ae,2),ie=te[0],ce=te[1],se=Object(i.useState)(["Istorija","Matematika","Geografija","Opste obrazovanje"]),ne=Object(o.a)(se,2),re=ne[0],oe=ne[1],le=Object(i.useState)("Reload Game"),je=Object(o.a)(le,2),de=je[0],ue=je[1],pe=Object(i.useState)(["Reload Game"]),be=Object(o.a)(pe,2),me=be[0],Oe=be[1],he=Object(i.useState)("Reload Game"),ve=Object(o.a)(he,2),ye=ve[0],xe=ve[1],ke=Object(i.useState)(""),fe=Object(o.a)(ke,2),ge=fe[0],Ne=fe[1],Pe=[],Se=function(){for(var e=[],a=0;a<Pe.length+3;a++){var t=Math.floor(Math.random()*Pe.length);e.push(Pe[t]),Pe.splice(t,1)}return e},ze=Object(i.useState)([]),Be=Object(o.a)(ze,2),Me=Be[0],we=Be[1],Ke=Object(u.f)();return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(v.a,{exitBeforeEnter:!0,initial:!1,children:Object(j.jsxs)(u.c,{location:Ke,children:[Object(j.jsx)(u.a,{path:"/",exact:!0,children:Object(j.jsx)(d,{suffle:function(){for(var e=[],a=[],t=[],i=[],n=[],r=[],o=[],l=[],j=[],d=[],u=[],b=[],m=0;m<p.length+4;m++){var h=Math.floor(Math.random()*p.length);e.push(p[h]),p.splice(h,1),a.push(c[h]),c.splice(h,1),t.push(k[h]),k.splice(h,1),i.push(M[h]),M.splice(h,1),n.push(P[h]),P.splice(h,1),r.push(A[h]),A.splice(h,1),o.push(D[h]),D.splice(h,1),l.push(Q[h]),Q.splice(h,1),j.push(E[h]),E.splice(h,1),d.push($[h]),$.splice(h,1),u.push(L[h]),L.splice(h,1),b.push(ie[h]),ie.splice(h,1)}O(e),s(a),f(t),S(n),w(i),I(r),q(l),V(o),F(j),Z(u),ee(d),ce(b)}})}),Object(j.jsx)(u.a,{path:"/choosePlayer",children:Object(j.jsx)(b,{card:e,shuffleOption:function(){for(var e=[],a=0;a<re.length+3;a++){var t=Math.floor(Math.random()*re.length);e.push(re[t]),re.splice(t,1)}oe(e)},choosenPlayer:function(a){var t=e.filter((function(e){return e.player===a}));we(t)}})}),Object(j.jsx)(u.a,{path:"/game",children:Object(j.jsx)(m,{options:re,chooseOption:function(e){Ne(e),"Geografija"===e?(ue(c[0]),xe(k[0]),Pe=Object(r.a)(p[0]),Oe(Se(Pe))):"Istorija"===e?(ue(P[0]),xe(A[0]),Pe=Object(r.a)(M[0]),Oe(Se(Pe))):"Matematika"===e?(ue(Q[0]),xe(E[0]),Pe=Object(r.a)(D[0]),Oe(Se(Pe))):(ue(L[0]),xe(ie[0]),Pe=Object(r.a)($[0]),Oe(Se(Pe)))}})}),Object(j.jsx)(u.a,{path:"/quiz",children:Object(j.jsx)(h,{Questions:de,Answers:me,Responds:ye,options:re,playerCard:Me,newQuestions:function(e){"Geografija"===ge?(ue(c[e]),xe(k[e]),Pe=Object(r.a)(p[e]),Oe(Se(Pe))):"Istorija"===ge?(ue(P[e]),xe(A[e]),Pe=Object(r.a)(M[e]),Oe(Se(Pe))):"Matematika"===ge?(ue(Q[e]),xe(E[e]),Pe=Object(r.a)(D[e]),Oe(Se(Pe))):(ue(L[e]),xe(ie[e]),Pe=Object(r.a)($[e]),Oe(Se(Pe)))}})})]},Ke.pathname)})})};t(51);s.a.render(Object(j.jsx)(n.a,{children:Object(j.jsx)(y,{})}),document.querySelector("#root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.4fb9a78f.chunk.js.map