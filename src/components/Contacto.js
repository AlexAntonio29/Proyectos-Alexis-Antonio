import React from 'react'

export const Contacto = () => {

const enviar=(e)=>{
  e.preventDefault();

  const nombre= e.target.nombre.value;
  const apellidos=e.target.apellidos.value;
  const email=e.target.email.value;
  const descripcion=e.target.descripcion.value;

  console.log(`${nombre} ${apellidos} ${email} ${descripcion}`);

    const form = document.createElement('form');
  form.method = 'POST';
  form.action = 'https://formsubmit.co/alexantonioangel2910@gmail.com';
  
  // Añadir los campos
  const campos = {
    'nombre': `${nombre} ${apellidos}`,
    'email': email,
    'mensaje': descripcion,
    '_subject': 'Nuevo Contacto desde Portfolio'
  };
  
  for (let [key, value] of Object.entries(campos)) {
    const input = document.createElement('input');
    input.type = 'hidden';
    input.name = key;
    input.value = value;
    form.appendChild(input);
  }
  
  document.body.appendChild(form);
  form.submit(); 
  
}

  return (
    <div className='page'>
      <h1>Contacto :</h1>
      <h2>Mandame un Email a traves de este medio.</h2>

      <form className='contact' onSubmit={e=>enviar(e)}>

        <input type='text' placeholder='Nombre' name='nombre'></input>
        <input type='text' placeholder='Apellidos' name='apellidos'></input>
        <input type='text' placeholder='email' name='email'></input>
        <textarea placeholder='motivo de contacto' name='descripcion' />
        <input type='submit' name='enviar' value="Enviar"/>

      </form>

    </div>
  )
}
