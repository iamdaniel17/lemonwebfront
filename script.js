const lemon = document.getElementById('lemon');

let isHappy = true;

lemon.addEventListener('click', () => {
  if (isHappy) {
    lemon.innerHTML = '<div class="mouth serious"></div>';
    isHappy = false;
  } else {
    lemon.innerHTML = '<div class="mouth happy"></div>';
    isHappy = true;
  }
});

// Start with a happy mouth
lemon.innerHTML = '<div class="mouth happy"></div>';
