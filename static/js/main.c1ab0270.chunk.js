(this.webpackJsonpconvert=this.webpackJsonpconvert||[]).push([[0],{149:function(e,n,t){},150:function(e,n,t){},474:function(e,n,t){"use strict";t.r(n);var c=t(1),r=t(11),u=t.n(r),a=(t(149),t.p,t(150),t(2)),i=function(e){var n=e.isBuying?Object(a.jsxs)("div",{className:"changeMain",children:[Object(a.jsxs)("div",{className:"currentChange",children:[Object(a.jsx)("p",{children:"You give the next amount of BYN:"}),Object(a.jsx)("input",{onChange:e.culcCurrency,type:"text","data-curent":"byn",value:e.amountOfBYN})]}),Object(a.jsxs)("div",{className:"currentChange",children:[Object(a.jsxs)("p",{children:["You give the next amount of ",e.currentCurrency,":"]}),Object(a.jsx)("input",{onChange:e.culcCurrency,type:"text","data-curent":"currency",value:e.amountOfCurrency})]})]}):Object(a.jsxs)("div",{className:"changeMain",children:[Object(a.jsxs)("div",{className:"currentChange",children:[Object(a.jsxs)("p",{children:["You give the next amount of ",e.currentCurrency,":"]}),Object(a.jsx)("input",{onChange:e.culcCurrency,type:"text","data-curent":"currency",value:e.amountOfCurrency})]}),Object(a.jsxs)("div",{className:"currentChange",children:[Object(a.jsx)("p",{children:"You give the next amount of BYN:"}),Object(a.jsx)("input",{onChange:e.culcCurrency,type:"text","data-curent":"byn",value:e.amountOfBYN})]})]}),t=e.currencyName.map((function(n,t){return Object(a.jsx)("button",{onClick:function(){return e.changeCurrency(n)},className:e.currentCurrency===n?"btnActive":"btn",children:n},t)}));return Object(a.jsxs)("div",{className:"main",children:[Object(a.jsx)("h1",{className:"h1",children:"Currency exchange"}),Object(a.jsxs)("div",{className:"currentCur",children:[Object(a.jsx)("p",{children:"Current currency :"}),Object(a.jsx)("div",{children:t})]}),Object(a.jsxs)("div",{className:"SellBuy",children:[Object(a.jsx)("button",{className:e.isBuying?"active":"SellBuyBtn","data-action":"buy",onClick:e.changeSellBuy,children:"Buy"}),Object(a.jsx)("button",{className:e.isBuying?"SellBuyBtn":"active","data-action":"sell",onClick:e.changeSellBuy,children:"Sell"})]}),Object(a.jsxs)("p",{children:["Currency rate: ",e.currencyRate]}),n]})};var s=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,475)).then((function(n){var t=n.getCLS,c=n.getFID,r=n.getFCP,u=n.getLCP,a=n.getTTFB;t(e),c(e),r(e),u(e),a(e)}))},o=t(87),b=t(145),l=t(20),y={currencies:[],currentCurrency:"USD",isBuying:!0,amountOfBYN:"",amountOfCurrency:""},j=function(e){return{type:"ADD_CURRENCY",currency:e}},O=function(e){return{type:"BUY_SELL",isBuying:e}},C=function(e,n){return{type:"CULI_CURRENCY",amountOfBYN:e,amountOfCurrency:n}},d=Object(o.a)({ConverterReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"BUY_SELL":return Object(l.a)(Object(l.a)({},e),{},{isBuying:n.isBuying,amountOfBYN:"",amountOfCurrency:""});case"CHANGE_CURRENCY":return Object(l.a)(Object(l.a)({},e),{},{currentCurrency:n.currency,amountOfBYN:"",amountOfCurrency:""});case"CULI_CURRENCY":return Object(l.a)(Object(l.a)({},e),{},{amountOfBYN:n.amountOfBYN,amountOfCurrency:n.amountOfCurrency});case"ADD_CURRENCY":var t=n.currency;return Object(l.a)(Object(l.a)({},e),{},{currencies:[].concat(Object(b.a)(e.currencies),[t])});default:return e}}}),f=Object(o.b)(d);window.store=f;var h=t(33),m=t(144),g=function(e){return e.ConverterReducer},x=t(58),v=t.n(x),N=(t(173),function(){var e=Object(c.useState)(!1),n=Object(m.a)(e,2),t=n[0],r=n[1],u=Object(h.c)(g),s=Object(h.b)();Object(c.useEffect)((function(){r(!0),v.a.get("https://www.nbrb.by/api/exrates/rates/usd?parammode=2").then((function(e){r(!1),s(j(e.data))}))}),[]),Object(c.useEffect)((function(){r(!0),v.a.get("https://www.nbrb.by/api/exrates/rates/978?parammode=1").then((function(e){r(!1),s(j(e.data))}))}),[]),Object(c.useEffect)((function(){r(!0),v.a.get("https://www.nbrb.by/api/exrates/rates/643?parammode=1").then((function(e){r(!1),s(j(e.data))}))}),[]);var o=0,b=u.currencies.map((function(e){return console.log(e),u.currentCurrency===e.Cur_Abbreviation&&(u.isBuying,o=+Number(e.Cur_OfficialRate)),"RUB"===u.currentCurrency&&(u.isBuying,o=+Number(e.Cur_OfficialRate)/+Number(100)),e.Cur_Abbreviation}));return console.log(u),t?Object(a.jsx)("div",{children:"Wait pleas"}):Object(a.jsx)(i,{isBuying:u.isBuying,changeSellBuy:function(e){"buy"===e.currentTarget.dataset.action?s(O(!0)):s(O(!1))},currencyRate:o,currencyName:b,currentCurrency:u.currentCurrency,changeCurrency:function(e){s({type:"CHANGE_CURRENCY",currency:e})},culcCurrency:function(e){var n=e.currentTarget.dataset.curent,t=e.currentTarget.value;isFinite(+t)&&s("byn"===n?C(t,""===t?t:(+Number(t)/o.toFixed(2)).toFixed(2)):C(""===t?t:(+Number(t)*o.toFixed(2)).toFixed(2),t))},amountOfBYN:u.amountOfBYN,amountOfCurrency:u.amountOfCurrency})});u.a.render(Object(a.jsx)(h.a,{store:f,children:Object(a.jsx)(N,{})}),document.getElementById("root")),s()}},[[474,1,2]]]);
//# sourceMappingURL=main.c1ab0270.chunk.js.map