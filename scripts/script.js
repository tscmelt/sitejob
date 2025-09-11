const menuIcon = document.querySelector('.menu-icon');
const nav = document.querySelector('.navbar nav');
const body = document.body;

menuIcon.addEventListener('click', () => {
  nav.classList.toggle('active');
  menuIcon.classList.toggle('active');
  body.classList.toggle('no-scroll');
});

const questionCards = Array.from(document.querySelectorAll('.question-card'));
const singleOpen = true;

function closeCard(card) {
  const answer = card.querySelector('.answer-container');
  answer.style.maxHeight = answer.scrollHeight + 'px';
  requestAnimationFrame(() => {
    answer.style.maxHeight = '0px';
  });
  card.classList.remove('active');
}

function openCard(card) {
  const answer = card.querySelector('.answer-container');
  answer.style.maxHeight = answer.scrollHeight + 'px';
  card.classList.add('active');

  const onTransitionEnd = () => {
    if (card.classList.contains('active')) {
      answer.style.maxHeight = 'none';
    }
    answer.removeEventListener('transitionend', onTransitionEnd);
  };
  answer.addEventListener('transitionend', onTransitionEnd);
}

questionCards.forEach((card) => {
  const answer = card.querySelector('.answer-container');
  if (card.classList.contains('active')) {
    answer.style.maxHeight = 'none';
  } else {
    answer.style.maxHeight = '0px';
  }

  const header = card.querySelector('.question-header');
  header.addEventListener('click', () => {
    const isActive = card.classList.contains('active');

    if (isActive) {
      closeCard(card);
    } else {
      if (singleOpen) {
        questionCards.forEach((c) => {
          if (c !== card && c.classList.contains('active')) {
            closeCard(c);
          }
        });
      }
      openCard(card);
    }
  });
});

window.addEventListener('load', () => {
  questionCards.forEach((card) => {
    const answer = card.querySelector('.answer-container');
    if (card.classList.contains('active')) {
      answer.style.maxHeight = answer.scrollHeight + 'px';
      setTimeout(() => {
        answer.style.maxHeight = 'none';
      }, 350);
    }
  });
});

window.addEventListener('resize', () => {
  questionCards.forEach((card) => {
    const answer = card.querySelector('.answer-container');
    if (
      card.classList.contains('active') &&
      answer.style.maxHeight !== 'none'
    ) {
      answer.style.maxHeight = answer.scrollHeight + 'px';
    }
  });
});
