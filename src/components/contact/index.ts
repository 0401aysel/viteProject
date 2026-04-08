let text = document.querySelector('.inner-txt') as HTMLElement;
let form = document.querySelector('.contact-form') as HTMLFormElement;
let nameInput = document.querySelector('#name') as HTMLInputElement;
let surnameInput = document.querySelector('#surname') as HTMLInputElement;
let emailInput = document.querySelector('#email') as HTMLInputElement;
let btnSubmit = document.querySelector(
  '.contact-form button',
) as HTMLButtonElement;
let errorName = document.querySelector('.errorName') as HTMLElement;
let errorSurname = document.querySelector('.errorSurname') as HTMLElement;
let errorMail = document.querySelector('.errorMail') as HTMLElement;

btnSubmit.addEventListener('click', (e) => {
  let hasError = false;
  e.preventDefault();

  const formData = new FormData(form);

  let formDatas: [string, FormDataEntryValue][] = Array.from(
    formData.entries(),
  );
  const name = (formData.get('name')?.toString() || '').trim();
  const surname = (formData.get('surname')?.toString() || '').trim();
  const email = (formData.get('email')?.toString() || '').trim();

  errorName.innerText = '';
  errorSurname.innerText = '';
  errorMail.innerText = '';

  if (!name) {
    errorName.innerText = '*Please enter name';
    hasError = true;
  }

  if (!surname) {
    errorSurname.innerText = '*Please enter surname';
    hasError = true;
  }

  if (!/[@]/.test(email)) {
    errorMail.innerText = '*Not correct mail address';
    hasError = true;
  } else if (email.length < 7) {
    errorMail.innerText = '*Not valid mail address';
    hasError = true;
  }

  console.log(!hasError);
  if (!hasError) {
    text.innerHTML = 'Form Datas is:<br>';

    for (let [key, value] of formDatas) {
      text.innerHTML += `${value}<br>`;
    }

    form.reset();
  }
});
