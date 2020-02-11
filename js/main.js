'use strict';

{
  const btn = document.getElementById('btn');
  const result = ['大吉', '中吉', '凶'];

  btn.addEventListener('click', ()=> {
    const n = Math.floor(Math.random() * 3);
    btn.textContent = result[n];

    // switch (n) {
    //   case 0:
    //     btn.textContent = '大吉';
    //     break;
    //   case 1:
    //     btn.textContent = '吉';
    //     break;
    //   case 2:
    //     btn.textContent = '凶';
    //     break;
    // }
  });
}