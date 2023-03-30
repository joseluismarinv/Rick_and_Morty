const validate = (userData) => {
    let errors = {};
  
    if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(userData.username)) { errors.username = 'Debe ser un correo electrónico'}; 
    if(!userData.username) {errors.username = 'Este campo no puede estar vacío'};
    if(userData.username.length > 35) {errors.username = 'No puede tener más de 35 caracteres'};

    if(!userData.password) {errors.password = 'Este campo no puede estar vacío'};
    if(!userData.password.match(/\d/)) {errors.password = 'La contreseña debe contener por lo menos 1 número'};
    if(userData.password.length < 6 && userData.password.length > 10) {errors.password = 'La constraseña debe contener entre 6 y 10 caracteres'}

    return errors;
  }

export default validate;