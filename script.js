let $ = ourSel => document.querySelector(ourSel),getAll = ourSel => document.querySelectorAll(ourSel);
for (const iterator of getAll('.options div')) iterator.style[iterator.children[0].name]= iterator.innerText;//стилізуємо опшени автоматично
