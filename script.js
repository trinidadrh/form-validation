const form = document.getElementsByTagName('form')[0];

const emailValidation = () => {
  const email = document.getElementById('mail');
  const emailError = document.querySelector('#mail + span.error');

  email.addEventListener('input', function () {
    if (email.validity.valid) {
      emailError.textContent = '';
      emailError.className = 'error';
    } else {
      showError();
    }
  });

  form.addEventListener('submit', function (event) {
    if(!email.validity.valid) {
      showError();
      event.preventDefault();
    }
  });

  function showError() {
    if(email.validity.valueMissing) {
      emailError.textContent = 'Please enter an e-mail address.';
    } else if(email.validity.typeMismatch) {
      emailError.textContent = 'An e-mail address with @ is required.';
    } else if(email.validity.tooShort) {
      emailError.textContent = `Email should be at least ${ email.minLength } characters; you entered ${ email.value.length }.`;
    }
    emailError.className = 'error active';
  }
}

const countryValidation = () => {
  const country = document.getElementById('country');
  const countryError = document.querySelector('#country + span.error');

  country.addEventListener('input', function () {
    if (country.validity.valid) {
      countryError.textContent = '';
      countryError.className = 'error';
    } else {
      showError();
    }
  });

  form.addEventListener('submit', function (event) {
    if(!country.validity.valid) {
      showError();
      event.preventDefault();
    }
  });

  function showError() {
    if(country.validity.valueMissing) {
      countryError.textContent = 'Please enter the name of your country.';
    } else if (country.validity.tooLong) {
      countryError.textContent = `The name should be no more than ${ country.maxLength } characters; you entered ${ country.value.length }.`;
    } else if (country.validity.tooShort) {
      countryError.textContent = `The name should be at least ${ country.minLength } characters; you entered ${ country.value.length }.`;
    }
    countryError.className = 'error active';
  }
}

const zipValidation = () => {
  const zip = document.getElementById('zip');
  const zipError = document.querySelector('#zip + span.error');

  zip.addEventListener('input', function () {
    if (zip.validity.valid) {
      zipError.textContent = '';
      zipError.className = 'error';
    } else {
      showError();
    }
  });

  form.addEventListener('submit', function (event) {
    if(!zip.validity.valid) {
      showError();
      event.preventDefault();
    }
  });

  function showError() {
    if (zip.validity.valueMissing) {
      zipError.textContent = 'Please enter your zip code.';
    } else if (zip.validity.rangeUnderflow) {
      zipError.textContent = 'The zip code should be at least 5 digits.';
    } else if (zip.validity.rangeOverflow) {
      zipError.textContent = 'The zip code should be no more than 12 digits.';
    }
    zipError.className = 'error active';
  }
}

const passwordValidation = () => {
  const pass = document.getElementById('pass');
  const passError = document.querySelector('#pass + span.error');

  pass.addEventListener('input', function () {
    if (pass.validity.valid) {
      passError.textContent = '';
      passError.className = 'error';
    } else {
      showError();
    }
  });

  form.addEventListener('submit', function (event) {
    if(!pass.validity.valid) {
      showError();
      event.preventDefault();
    }
  });

  function showError() {
    if(pass.validity.valueMissing) {
      passError.textContent = 'Please enter a password.';
    } else if (pass.validity.patternMisMatch) {
      passError.textContent = 'The password should contain letters and/or numbers only.';
    } else if (pass.validity.tooShort) {
      passError.textContent = `The password should be at least ${ pass.minLength } characters; you entered ${ pass.value.length }.`;
    }
    passError.className = 'error active';
  }
}

const passwordConfirmation = () => {
  const password = document.getElementById('pass');
  const confirm = document.getElementById('confirm');
  const confirmError = document.querySelector('#confirm + span.error');

  confirm.addEventListener('input', function () {
    if (password.value != confirm.value) {
      showError();
    } else if (confirm.validity.valid) {
      confirmError.textContent = '';
      confirmError.className = 'error';
    } else {
      showError();
    }
  });

  form.addEventListener('submit', function (event) {
      if(!confirm.validity.valid) {
        showError();
        event.preventDefault();
      }
  });

  function showError() {
    if(confirm.validity.valueMissing) {
      confirmError.textContent = 'Re-enter your password.';
    } else if (password.value != confirm.value) {
      confirmError.textContent = 'This password does not match.';
    }
    confirmError.className = 'error active';
  }
}

emailValidation();
countryValidation();
zipValidation();
passwordValidation();
passwordConfirmation();