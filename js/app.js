const adviceNum = document.querySelector('.card__advice-number span');
const quote = document.querySelector('.card__advice');
const btn = document.querySelector('.card__btn');

const renderUI = (id, advice) => {
  adviceNum.innerText = `#${id}`;
  quote.innerText = `“${advice}”`;
};

const fetchAdvice = async () => {
  try {
    const data = await fetch('https://api.adviceslip.com/advice', {
      cache: 'no-cache',
    });
    const res = await data.json();
    const { id, advice } = res.slip;
    renderUI(id, advice);
  } catch (e) {
    console.log(e);
  }
};

const handleClick = (e) => {
  fetchAdvice();
};

btn.addEventListener('click', handleClick);
