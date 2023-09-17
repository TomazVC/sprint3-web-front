export function emailValidation(email) {
  let re = /\S+@\S+\.\S+/;
  if (re.test(email) !== true) {
    alert('Dados inválidos, formato: nome@mail.com');
    return false;
  }
  return true;
}

export function passwordValidation(pass) {
  let passwordPattern =
    /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  if (passwordPattern.test(pass) !== true) {
    alert(
      'Dados inválidos, A senha deve ter no mínimo 6 caracteres, um caracter especial e um número. '
    );
    return false;
  }
  return true;
}
export function nameValidation(name) {
    if (name.length < 2) {
      alert('Dados inválidos, nome precisa ter no máximo 2 caracteres');
      return false;
    }
    return true;
  }

export function telValidation(tel) {
      if ( tel.length < 14 ) {
        alert('Dados inválidos, formato: (11)11111-1111');
        return false;
      }
      return true;
    }