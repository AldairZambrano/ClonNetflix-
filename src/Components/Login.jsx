import { useState } from "react"
// import Imagenes from "./Imagenes"

import appfirebase from '../Credenciales'
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'

const auth = getAuth(appfirebase)



const Login = () => {
    const [registrando, setRegistrando] = useState(false)

    const funcAutentication = async(e) => {
        e.preventDefault()  //evita que el formulario se recargue la pag
        const correo = e.target.email.value;
        const contraseña = e.target.password.value;

        if(registrando) {
            try{
                await createUserWithEmailAndPassword(auth, correo, contraseña)

            }catch (error) {
                alert("asegurate que la contraseña tenga mas de 8 caracteres")
            }
        }
        else{
            try {
                await signInWithEmailAndPassword(auth, correo, contraseña);

            }catch (error) {
                alert("el correo o la contraseña son incorrectos")
            }
        }
    }
    return (  
      <div className="body">
          <div className="form-wrapper">
            <h2>
           {registrando ? 'Registrate' : 'Inicia sesión'}
           </h2>
          <form onSubmit={funcAutentication}>
          {registrando ? <div className="form-control">
                <input type="text"  id="nombres" required />
                <label htmlFor="">Nombres</label>
              </div> :''}

              {registrando ? <div className="form-control">
                <input type="text"  id="apellidos" required />
                <label htmlFor="">Apellidos</label>
              </div> :''}

              {registrando ? <div className="form-control">
                <input type="number"  id="numero" required />
                <label htmlFor="">Numero telefonico</label>
              </div> :''}

              {registrando ? <div className="form-controll">
                <input type="date"  id="date" required />
                <label className="label">Fecha de nacimiento</label>
              </div> :''}
              <div className="form-control">
                <input type="text"  id="email" required />
                <label htmlFor="">Email</label>
              </div>
              <div className="form-control">
                <input type="password" id="password" required />
                <label htmlFor="">Contraseña</label>
              </div>
              <button type="submit">{registrando ? "Registrate" : "Inicia sesion"}</button>

              <div className="form-help">
                <div className="remember-me">
                  <input type="checkbox" name="" id="remember-me" />
                  <label htmlFor="remember-me">Recuerdame</label>
                </div>
                <a href="">¿Necesitas ayuda?</a>
              </div>
            </form>
            <p>
            {registrando ? "Si ya tienes cuenta " : "No tienes cuenta "}
                                  <button className="btnswicth" onClick={(()=> setRegistrando(!registrando))}>
                                      {registrando ? 'Inicia sesion' : 'Registrate'}
                                  </button>
            </p>
            <small>
            Esta página está protegida por Google reCAPTCHA para comprobar que no eres un robot.
            </small>
          </div>
    </div>
    )
}

export default Login