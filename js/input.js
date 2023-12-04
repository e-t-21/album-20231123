// ページ本体が読み込まれたタイミングで実行するコード
const cancel = document.getElementById('cancel');

cancel.addEventListener('click',
  function () {
    // ［キャンセル］ボタンのクリック時に実行するコード
    location.href = 'index.html';
  }, false
);
