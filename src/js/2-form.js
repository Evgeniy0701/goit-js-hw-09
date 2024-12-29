let formData = {
  email: '',
  message: '',
};

const feedbackFormEl = document.querySelector('.feedback-form');

// Ініціалізація форми зі збереженими даними
(() => {
  try {
    const storageData = JSON.parse(localStorage.getItem('feedback-form-state'));

    if (storageData === null) {
      return;
    }

    formData = storageData;

    for (const key in storageData) {
      if (feedbackFormEl.elements[key]) {
        feedbackFormEl.elements[key].value = storageData[key];
      }
    }
  } catch (error) {
    console.error('Error parsing storage data:', error);
  }
})();

// Обробка введення даних у форму
const onFeedbackFormElInput = event => {
  const { value, name } = event.target;

  formData[name] = value.trim();

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};

// Обробка сабміту форми
const onFeedbackFormElSubmit = event => {
  event.preventDefault();

  const isEmptyField = Object.values(formData).some(val => val === '');

  if (isEmptyField) {
    alert('Fill please all fields');
    return;
  }

  console.log('Submitted data:', formData);

  feedbackFormEl.reset();
  localStorage.removeItem('feedback-form-state');
  formData = { email: '', message: '' }; // Очищення formData
};

// Додавання слухачів подій
feedbackFormEl.addEventListener('input', onFeedbackFormElInput);
feedbackFormEl.addEventListener('submit', onFeedbackFormElSubmit);
