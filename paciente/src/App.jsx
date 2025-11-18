import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Agendar from './pages/Agendar'
import MinhasConsultas from './pages/MinhasConsultas'
import Documentos from './pages/Documentos'
import Perfil from './pages/Perfil'
import Login from './pages/Login'

export default function App(){
 return(
   <div style={{padding:20,fontFamily:'sans-serif'}}>
     <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/agendar' element={<Agendar/>}/>
       <Route path='/consultas' element={<MinhasConsultas/>}/>
       <Route path='/documentos' element={<Documentos/>}/>
       <Route path='/perfil' element={<Perfil/>}/>
       <Route path='/login' element={<Login/>}/>
     </Routes>
   </div>
 )
}
