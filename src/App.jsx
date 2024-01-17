import './App.css';

// importando los modulos de firebase
import {getAuth, onAuthStateChanged} from 'firebase/auth'
import appFirebase from '../src/Credenciales';
const auth = getAuth(appFirebase)

// importar los componentes

import Login from './Components/Login';
import Home from './Components/Home';
import { useState } from 'react';



export default function App () {

  const [usuario, setUsuario] = useState(null)

  onAuthStateChanged(auth, (usuarioFirebase)=>{
    if(usuarioFirebase){
      console.log("El usuario ha iniciado sesion")
      setUsuario(usuarioFirebase)
    }
    else {
      setUsuario(null)
    }
  })


  return(
    <div>
      {usuario ? <Home correoUsuario={usuario.email}></Home> : <Login></Login> }
    </div>
  )
}