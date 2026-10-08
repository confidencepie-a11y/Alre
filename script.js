(function () {
  'use strict';

  // ---- Balance: zero on first launch ----
  var balance = 0;
  var hidden = false;
  var balEl = document.getElementById('balance');
  var eye = document.getElementById('eye');

  function fmt(n) { return '$' + n.toLocaleString('en-US'); }
  function renderBalance() { balEl.textContent = hidden ? '$••••' : fmt(balance); }
  renderBalance();

  eye.addEventListener('click', function () {
    hidden = !hidden;
    eye.setAttribute('aria-pressed', String(hidden));
    eye.setAttribute('aria-label', hidden ? 'Show balance' : 'Hide balance');
    renderBalance();
  });

  // ---- "Updated ..." label ----
  var start = Date.now();
  var upd = document.getElementById('upd');
  setInterval(function () {
    var m = Math.floor((Date.now() - start) / 60000);
    upd.textContent = m < 1 ? 'Updated just now' : 'Updated ' + m + (m === 1 ? 'min' : 'mins') + ' ago';
  }, 15000);

  // ---- Transactions (sample data from the mockup) ----
  var IN = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 7 7 17M16 17H7V8"/></svg>';
  var OUT = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7M8 7h9v9"/></svg>';

  // [name, date, amount, isIncoming]
  var transactions = [
    ['Colins Ewah', 'July 25th, 2025', '+$100', true],
    ['Umar Bamisile', 'July 25th, 2025', '+$1000', true],
    ['Joy Ogeh', 'July 25th, 2025', '-$100', false],
    ['Okolo Moses', 'July 25th, 2025', '-$100', false]
  ];

  document.getElementById('txs').innerHTML = transactions.map(function (t) {
    return '<div class="tx"><div class="ic">' + (t[3] ? IN : OUT) + '</div>' +
           '<div class="nm">' + t[0] + '<small>' + t[1] + '</small></div>' +
           '<div class="amt">' + t[2] + '<br><span>Successful</span></div></div>';
  }).join('');

  // ---- Bottom tabs ----
  var tabs = document.querySelectorAll('.tab');
  var screens = document.querySelectorAll('.screen');
  tabs.forEach(function (b) {
    b.addEventListener('click', function () {
      tabs.forEach(function (x) { x.setAttribute('aria-selected', String(x === b)); });
      screens.forEach(function (s) { s.classList.toggle('on', s.id === b.dataset.t); });
    });
  });
})();
