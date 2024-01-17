import appFirebase from '../Credenciales'

import {getAuth, signOut} from 'firebase/auth'

const auth = getAuth(appFirebase)

const Home = ({correoUsuario}) => {
  return (
    <div>
      <h2 className="text-center">
          bienvenido usuario {correoUsuario}
          <button className="btn btn-primary" onClick={()=>signOut(auth)}>logout</button>
      </h2>
    </div>
  )
}

export default Home