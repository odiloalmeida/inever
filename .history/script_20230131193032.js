function changeText() {
    var texts = ['text1', 'text2', 'text3', 'text4'];
    var text = document.getElementById('text');
    var randomIndex = Math.floor(Math.random() * texts.length);
    text.innerHTML = texts[randomIndex];
  }