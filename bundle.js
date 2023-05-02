(()=>{"use strict";function e(e,a,l){const i=document.createElement("span");return i.textContent=e,i.classList.add("button__content"),l&&i.classList.add("button__content_active"),i.dataset.type=a,i}class a{constructor(e,a){this.label=e.key,this.valueNormal=e.valueNormal,this.valueShift=e.valueShift,this.valueCaps=e.valueCaps,this.valueShiftCaps=e.valueShiftCaps,this.modifier=e.modifier,this.code=a,this.textarea=document.querySelector(".textarea"),this.element=this.createButton(),this.element.addEventListener("click",(e=>{this.onClick(e)}))}onClick(e){if(e.isTrusted)this.textarea.value+=this[e.target.dataset.type];else{const a=e.target.querySelector(".button__content_active");this.modifier||(this.textarea.value+=this[a.dataset.type])}}createButton(){const a=document.createElement("button"),l=e(this.modifier?this.label:this.valueNormal,"valueNormal",!0),i=e(this.modifier?this.label:this.valueShift,"valueShift",!1),u=e(this.modifier?this.label:this.valueCaps,"valueCaps",!1),t=e(this.modifier?this.label:this.valueShiftCaps,"valueShiftCaps",!1);return a.append(l),a.append(i),a.append(u),a.append(t),a.classList.add("button"),a.dataset.code=this.code,a}render(e){e.appendChild(this.element)}}function l(e){e.classList.toggle("button__content_active")}let i=!1;function u(){i=!i}const t=document.querySelector("body"),v=document.createElement("main"),f=document.createElement("p"),o=document.createElement("textarea"),s=document.createElement("div");var r,h;v.classList.add("main"),f.classList.add("message"),o.classList.add("textarea"),s.classList.add("keyboard-container"),f.textContent="Клавиатура создана в macOS. \n Для переключения используйте Ctrl + Alt",v.append(f,o,s),t.append(v),r=s,h={en:{Backquote:{key:"§",valueNormal:"§",valueShift:"±",valueShiftCaps:"±",valueCaps:"§",modifier:!1},Digit1:{key:"1",valueNormal:"1",valueShift:"!",valueShiftCaps:"!",valueCaps:"1",modifier:!1},Digit2:{key:"2",valueNormal:"2",valueShift:"@",valueShiftCaps:"@",valueCaps:"2",modifier:!1},Digit3:{key:"3",valueNormal:"3",valueShift:"#",valueShiftCaps:"#",valueCaps:"3",modifier:!1},Digit4:{key:"4",valueNormal:"4",valueShift:"$",valueShiftCaps:"$",valueCaps:"4",modifier:!1},Digit5:{key:"5",valueNormal:"5",valueShift:"%",valueShiftCaps:"%",valueCaps:"5",modifier:!1},Digit6:{key:"6",valueNormal:"6",valueShift:"^",valueShiftCaps:"^",valueCaps:"6",modifier:!1},Digit7:{key:"7",valueNormal:"7",valueShift:"&",valueShiftCaps:"&",valueCaps:"7",modifier:!1},Digit8:{key:"8",valueNormal:"8",valueShift:"*",valueShiftCaps:"*",valueCaps:"8",modifier:!1},Digit9:{key:"9",valueNormal:"9",valueShift:"(",valueShiftCaps:"(",valueCaps:"9",modifier:!1},Digit0:{key:"0",valueNormal:"0",valueShift:")",valueShiftCaps:")",valueCaps:"0",modifier:!1},Minus:{key:"-",valueNormal:"-",valueShift:"_",valueShiftCaps:"_",valueCaps:"-",modifier:!1},Equal:{key:"=",valueNormal:"=",valueShift:"+",valueShiftCaps:"+",valueCaps:"=",modifier:!1},Backspace:{key:"←",valueNormal:"",valueShift:"",valueShiftCaps:"",valueCaps:"",modifier:!0},Tab:{key:"tab",valueNormal:"\t",valueShift:"\t",valueShiftCaps:"\t",valueCaps:"\t",modifier:!1},KeyQ:{key:"q",valueNormal:"q",valueShift:"Q",valueShiftCaps:"q",valueCaps:"Q",modifier:!1},KeyW:{key:"w",valueNormal:"w",valueShift:"W",valueShiftCaps:"w",valueCaps:"W",modifier:!1},KeyE:{key:"e",valueNormal:"e",valueShift:"E",valueShiftCaps:"e",valueCaps:"E",modifier:!1},KeyR:{key:"r",valueNormal:"r",valueShift:"R",valueShiftCaps:"r",valueCaps:"R",modifier:!1},KeyT:{key:"t",valueNormal:"t",valueShift:"T",valueShiftCaps:"t",valueCaps:"T",modifier:!1},KeyY:{key:"y",valueNormal:"y",valueShift:"Y",valueShiftCaps:"y",valueCaps:"Y",modifier:!1},KeyU:{key:"u",valueNormal:"u",valueShift:"U",valueShiftCaps:"u",valueCaps:"U",modifier:!1},KeyI:{key:"i",valueNormal:"i",valueShift:"I",valueShiftCaps:"i",valueCaps:"I",modifier:!1},KeyO:{key:"o",valueNormal:"o",valueShift:"O",valueShiftCaps:"o",valueCaps:"O",modifier:!1},KeyP:{key:"p",valueNormal:"p",valueShift:"P",valueShiftCaps:"p",valueCaps:"P",modifier:!1},BracketLeft:{key:"[",valueNormal:"[",valueShift:"{",valueShiftCaps:"{",valueCaps:"[",modifier:!1},BracketRight:{key:"]",valueNormal:"]",valueShift:"}",valueShiftCaps:"}",valueCaps:"]",modifier:!1},Enter:{key:"Enter",valueNormal:"\n",valueShift:"\n",valueShiftCaps:"\n",valueCaps:"\n",modifier:!1},CapsLock:{key:"capsLock",valueNormal:"",valueShift:"",valueShiftCaps:"",valueCaps:"",modifier:!0},KeyA:{key:"a",valueNormal:"a",valueShift:"A",valueShiftCaps:"a",valueCaps:"A",modifier:!1},KeyS:{key:"s",valueNormal:"s",valueShift:"S",valueShiftCaps:"s",valueCaps:"S",modifier:!1},KeyD:{key:"d",valueNormal:"d",valueShift:"D",valueShiftCaps:"d",valueCaps:"D",modifier:!1},KeyF:{key:"f",valueNormal:"f",valueShift:"F",valueShiftCaps:"f",valueCaps:"F",modifier:!1},KeyG:{key:"g",valueNormal:"g",valueShift:"G",valueShiftCaps:"g",valueCaps:"G",modifier:!1},KeyH:{key:"h",valueNormal:"h",valueShift:"H",valueShiftCaps:"h",valueCaps:"H",modifier:!1},KeyJ:{key:"j",valueNormal:"j",valueShift:"J",valueShiftCaps:"j",valueCaps:"J",modifier:!1},KeyK:{key:"k",valueNormal:"k",valueShift:"K",valueShiftCaps:"k",valueCaps:"K",modifier:!1},KeyL:{key:"l",valueNormal:"l",valueShift:"L",valueShiftCaps:"l",valueCaps:"L",modifier:!1},Semicolon:{key:";",valueNormal:";",valueShift:":",valueShiftCaps:":",valueCaps:";",modifier:!1},Quote:{key:"'",valueNormal:"'",valueShift:'"',valueShiftCaps:'"',valueCaps:"'",modifier:!1},Backslash:{key:"\\",valueNormal:"\\",valueShift:"|",valueShiftCaps:"|",valueCaps:"\\",modifier:!1},ShiftLeft:{key:"shift",valueNormal:"",valueShift:"",valueShiftCaps:"",valueCaps:"",modifier:!0},IntlBackslash:{key:"`",valueNormal:"`",valueShift:"~",valueShiftCaps:"~",valueCaps:"`",modifier:!1},KeyZ:{key:"z",valueNormal:"z",valueShift:"Z",valueShiftCaps:"z",valueCaps:"Z",modifier:!1},KeyX:{key:"x",valueNormal:"x",valueShift:"X",valueShiftCaps:"x",valueCaps:"X",modifier:!1},KeyC:{key:"c",valueNormal:"c",valueShift:"C",valueShiftCaps:"c",valueCaps:"C",modifier:!1},KeyV:{key:"v",valueNormal:"v",valueShift:"V",valueShiftCaps:"v",valueCaps:"V",modifier:!1},KeyB:{key:"b",valueNormal:"b",valueShift:"B",valueShiftCaps:"b",valueCaps:"B",modifier:!1},KeyN:{key:"n",valueNormal:"n",valueShift:"N",valueShiftCaps:"n",valueCaps:"N",modifier:!1},KeyM:{key:"m",valueNormal:"m",valueShift:"M",valueShiftCaps:"m",valueCaps:"M",modifier:!1},Comma:{key:",",valueNormal:",",valueShift:"<",valueShiftCaps:"<",valueCaps:",",modifier:!1},Period:{key:".",valueNormal:".",valueShift:">",valueShiftCaps:">",valueCaps:".",modifier:!1},Slash:{key:"/",valueNormal:"/",valueShift:"?",valueShiftCaps:"?",valueCaps:"/",modifier:!1},ShiftRight:{key:"shift",valueNormal:"",valueShift:"",valueShiftCaps:"",valueCaps:"",modifier:!0},ControlLeft:{key:"ctrl",valueNormal:"",valueShift:"",valueShiftCaps:"",valueCaps:"",modifier:!0},AltLeft:{key:"alt",valueNormal:"",valueShift:"",valueShiftCaps:"",valueCaps:"",modifier:!0},MetaLeft:{key:"cmd",valueNormal:"",valueShift:"",valueShiftCaps:"",valueCaps:"",modifier:!0},Space:{key:" ",valueNormal:" ",valueShift:" ",valueShiftCaps:" ",valueCaps:" ",modifier:!1},MetaRight:{key:"cmd",valueNormal:"",valueShift:"",valueShiftCaps:"",valueCaps:"",modifier:!0},AltRight:{key:"alt",valueNormal:"",valueShift:"",valueShiftCaps:"",valueCaps:"",modifier:!0},ArrowLeft:{key:"<",valueNormal:"<",valueShift:"<",valueShiftCaps:"<",valueCaps:"<",modifier:!1},ArrowUp:{key:"^",valueNormal:"^",valueShift:"^",valueShiftCaps:"^",valueCaps:"^",modifier:!1},ArrowRight:{key:">",valueNormal:">",valueShift:">",valueShiftCaps:">",valueCaps:">",modifier:!1},ArrowDown:{key:"v",valueNormal:"v",valueShift:"v",valueShiftCaps:"v",valueCaps:"v",modifier:!1}},ru:{Backquote:{key:">",valueNormal:">",valueShift:"<",valueShiftCaps:"<",valueCaps:">",modifier:!1},Digit1:{key:"1",valueNormal:"1",valueShift:"!",valueShiftCaps:"!",valueCaps:"1",modifier:!1},Digit2:{key:"2",valueNormal:"2",valueShift:'"',valueShiftCaps:'"',valueCaps:"2",modifier:!1},Digit3:{key:"3",valueNormal:"3",valueShift:"№",valueShiftCaps:"№",valueCaps:"3",modifier:!1},Digit4:{key:"4",valueNormal:"4",valueShift:"%",valueShiftCaps:"%",valueCaps:"4",modifier:!1},Digit5:{key:"5",valueNormal:"5",valueShift:":",valueShiftCaps:":",valueCaps:"5",modifier:!1},Digit6:{key:"6",valueNormal:"6",valueShift:",",valueShiftCaps:",",valueCaps:"6",modifier:!1},Digit7:{key:"7",valueNormal:"7",valueShift:".",valueShiftCaps:".",valueCaps:"7",modifier:!1},Digit8:{key:"8",valueNormal:"8",valueShift:";",valueShiftCaps:";",valueCaps:"8",modifier:!1},Digit9:{key:"9",valueNormal:"9",valueShift:"(",valueShiftCaps:"(",valueCaps:"9",modifier:!1},Digit0:{key:"0",valueNormal:"0",valueShift:")",valueShiftCaps:")",valueCaps:"0",modifier:!1},Minus:{key:"-",valueNormal:"-",valueShift:"_",valueShiftCaps:"_",valueCaps:"-",modifier:!1},Equal:{key:"=",valueNormal:"=",valueShift:"+",valueShiftCaps:"+",valueCaps:"=",modifier:!1},Backspace:{key:"←",valueNormal:"",valueShift:"",valueShiftCaps:"",valueCaps:"",modifier:!0},Tab:{key:"tab",valueNormal:"\t",valueShift:"\t",valueShiftCaps:"\t",valueCaps:"\t",modifier:!1},KeyQ:{key:"й",valueNormal:"й",valueShift:"Й",valueShiftCaps:"й",valueCaps:"Й",modifier:!1},KeyW:{key:"ц",valueNormal:"ц",valueShift:"Ц",valueShiftCaps:"ц",valueCaps:"Ц",modifier:!1},KeyE:{key:"у",valueNormal:"у",valueShift:"У",valueShiftCaps:"у",valueCaps:"У",modifier:!1},KeyR:{key:"к",valueNormal:"к",valueShift:"К",valueShiftCaps:"к",valueCaps:"К",modifier:!1},KeyT:{key:"е",valueNormal:"е",valueShift:"Е",valueShiftCaps:"е",valueCaps:"Е",modifier:!1},KeyY:{key:"н",valueNormal:"н",valueShift:"Н",valueShiftCaps:"н",valueCaps:"Н",modifier:!1},KeyU:{key:"г",valueNormal:"г",valueShift:"Г",valueShiftCaps:"г",valueCaps:"Г",modifier:!1},KeyI:{key:"ш",valueNormal:"ш",valueShift:"Ш",valueShiftCaps:"ш",valueCaps:"Ш",modifier:!1},KeyO:{key:"щ",valueNormal:"щ",valueShift:"Щ",valueShiftCaps:"щ",valueCaps:"Щ",modifier:!1},KeyP:{key:"з",valueNormal:"з",valueShift:"З",valueShiftCaps:"з",valueCaps:"З",modifier:!1},BracketLeft:{key:"х",valueNormal:"х",valueShift:"Х",valueShiftCaps:"Х",valueCaps:"х",modifier:!1},BracketRight:{key:"ъ",valueNormal:"ъ",valueShift:"Ъ",valueShiftCaps:"Ъ",valueCaps:"ъ",modifier:!1},Enter:{key:"Enter",valueNormal:"\n",valueShift:"\n",valueShiftCaps:"\n",valueCaps:"\n",modifier:!1},CapsLock:{key:"capsLock",valueNormal:"",valueShift:"",valueShiftCaps:"",valueCaps:"",modifier:!0},KeyA:{key:"ф",valueNormal:"ф",valueShift:"Ф",valueShiftCaps:"ф",valueCaps:"Ф",modifier:!1},KeyS:{key:"ы",valueNormal:"ы",valueShift:"Ы",valueShiftCaps:"ы",valueCaps:"Ы",modifier:!1},KeyD:{key:"в",valueNormal:"в",valueShift:"В",valueShiftCaps:"в",valueCaps:"В",modifier:!1},KeyF:{key:"а",valueNormal:"а",valueShift:"А",valueShiftCaps:"а",valueCaps:"А",modifier:!1},KeyG:{key:"п",valueNormal:"п",valueShift:"П",valueShiftCaps:"п",valueCaps:"П",modifier:!1},KeyH:{key:"р",valueNormal:"р",valueShift:"Р",valueShiftCaps:"р",valueCaps:"Р",modifier:!1},KeyJ:{key:"о",valueNormal:"о",valueShift:"О",valueShiftCaps:"о",valueCaps:"О",modifier:!1},KeyK:{key:"л",valueNormal:"л",valueShift:"Л",valueShiftCaps:"л",valueCaps:"Л",modifier:!1},KeyL:{key:"д",valueNormal:"д",valueShift:"Д",valueShiftCaps:"д",valueCaps:"Д",modifier:!1},Semicolon:{key:"ж",valueNormal:"ж",valueShift:"Ж",valueShiftCaps:"ж",valueCaps:"Ж",modifier:!1},Quote:{key:"э",valueNormal:"э",valueShift:"Э",valueShiftCaps:"э",valueCaps:"Э",modifier:!1},Backslash:{key:"ё",valueNormal:"ё",valueShift:"Ё",valueShiftCaps:"Ё",valueCaps:"ё",modifier:!1},ShiftLeft:{key:"shift",valueNormal:"",valueShift:"",valueShiftCaps:"",valueCaps:"",modifier:!0},IntlBackslash:{key:"]",valueNormal:"]",valueShift:"[",valueShiftCaps:"[",valueCaps:"]",modifier:!1},KeyZ:{key:"я",valueNormal:"я",valueShift:"Я",valueShiftCaps:"я",valueCaps:"Я",modifier:!1},KeyX:{key:"ч",valueNormal:"ч",valueShift:"Ч",valueShiftCaps:"ч",valueCaps:"Ч",modifier:!1},KeyC:{key:"с",valueNormal:"с",valueShift:"С",valueShiftCaps:"с",valueCaps:"С",modifier:!1},KeyV:{key:"м",valueNormal:"м",valueShift:"М",valueShiftCaps:"м",valueCaps:"М",modifier:!1},KeyB:{key:"и",valueNormal:"и",valueShift:"И",valueShiftCaps:"и",valueCaps:"И",modifier:!1},KeyN:{key:"т",valueNormal:"т",valueShift:"Т",valueShiftCaps:"т",valueCaps:"Т",modifier:!1},KeyM:{key:"ь",valueNormal:"ь",valueShift:"Ь",valueShiftCaps:"ь",valueCaps:"Ь",modifier:!1},Comma:{key:"б",valueNormal:"б",valueShift:"Б",valueShiftCaps:"Б",valueCaps:"б",modifier:!1},Period:{key:"ю",valueNormal:"ю",valueShift:"Ю",valueShiftCaps:"Ю",valueCaps:"ю",modifier:!1},Slash:{key:"/",valueNormal:"/",valueShift:"?",valueShiftCaps:"?",valueCaps:"/",modifier:!1},ShiftRight:{key:"shift",valueNormal:"",valueShift:"",valueShiftCaps:"",valueCaps:"",modifier:!0},ControlLeft:{key:"ctrl",valueNormal:"",valueShift:"",valueShiftCaps:"",valueCaps:"",modifier:!0},AltLeft:{key:"alt",valueNormal:"",valueShift:"",valueShiftCaps:"",valueCaps:"",modifier:!0},MetaLeft:{key:"cmd",valueNormal:"",valueShift:"",valueShiftCaps:"",valueCaps:"",modifier:!0},Space:{key:" ",valueNormal:" ",valueShift:" ",valueShiftCaps:" ",valueCaps:" ",modifier:!1},MetaRight:{key:"cmd",valueNormal:"",valueShift:"",valueShiftCaps:"",valueCaps:"",modifier:!0},AltRight:{key:"alt",valueNormal:"",valueShift:"",valueShiftCaps:"",valueCaps:"",modifier:!0},ArrowLeft:{key:"<",valueNormal:"<",valueShift:"<",valueShiftCaps:"<",valueCaps:"<",modifier:!1},ArrowUp:{key:"^",valueNormal:"^",valueShift:"^",valueShiftCaps:"^",valueCaps:"^",modifier:!1},ArrowRight:{key:">",valueNormal:">",valueShift:">",valueShiftCaps:">",valueCaps:">",modifier:!1},ArrowDown:{key:"v",valueNormal:"v",valueShift:"v",valueShiftCaps:"v",valueCaps:"v",modifier:!1}}},Object.keys(h.en).forEach((e=>{new a(h.en[e],e).render(r)})),document.addEventListener("keydown",(e=>{!function(e){if(e.preventDefault(),"Shift"===e.key&&(u(),document.querySelectorAll(".button__content_active").forEach((e=>{l(e)})),document.querySelectorAll('[data-type="valueShift"]').forEach((e=>{l(e)}))),"CapsLock"===e.key&&e.getModifierState("CapsLock")&&(document.querySelectorAll(".button__content_active").forEach((e=>{l(e)})),document.querySelectorAll('[data-type="valueCaps"]').forEach((e=>{l(e)}))),"Backspace"===e.code){const e=document.querySelector(".textarea");e.value=e.value.slice(0,e.value.length-1)}const a=document.querySelector(`[data-code=${e.code}]`);if(a){const e=new Event("click");a.dispatchEvent(e),a.classList.add("button_active")}}(e)})),document.addEventListener("keyup",(e=>{!function(e){"Shift"===e.key&&(u(),document.querySelectorAll('[data-type="valueShift"]').forEach((e=>{l(e)})),e.getModifierState("CapsLock")?document.querySelectorAll('[data-type="valueCaps"]').forEach((e=>{l(e)})):document.querySelectorAll('[data-type="valueNormal"]').forEach((e=>{l(e)}))),"CapsLock"!==e.key||e.getModifierState(e.key)||(document.querySelectorAll(".button__content_active").forEach((e=>{l(e)})),document.querySelectorAll('[data-type="valueNormal"]').forEach((e=>{l(e)})));const a=document.querySelector(`[data-code=${e.code}]`);a&&a.classList.remove("button_active")}(e)}))})();