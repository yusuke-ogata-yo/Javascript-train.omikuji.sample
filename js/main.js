'use strict';

{
  const btn = document.getElementById('btn');

  btn.addEventListener('click', ()=> {
    var text = '';
    const n = Math.random();
    if (n < 0.05) {
      text = '大吉'; // 5%
    } else if (n < 0.2) {
      text = '中吉'; // 15%
    } else if (n < 0.5) {
      text = '末吉'; // 30%
    } else {
      text = '凶'; // 50%
    }
    
    btn.textContent = text;
  });
}