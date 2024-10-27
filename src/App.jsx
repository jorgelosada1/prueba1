import { useState } from "react"
import Tarjeta from "./Tarjeta"

function App() {
  const [nombre, setNombre]= useState("");
  const [usuario, setUsuario]= useState("");
  const [usuarios, setUsuarios] = useState([]);

  
const handleClick = () => {
  if (nombre && usuario) {
    
    setUsuarios([...usuarios, { nombre, usuario }]);
    setNombre("");  
    setUsuario(""); 
  }

}
  return (
    <>
    <div style={{display: 'flex', alignItems:'center', justifyContent:'center', flexDirection:'column', gap:'15px'}}>
    <input type="text" placeholder="Ingresa tu nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
    <input type="text" placeholder="Ingresa tu nombre de usuario" value={usuario} onChange={(e) => setUsuario(e.target.value)} />
    <button onClick={handleClick}>Enviar</button>
    </div>
   
    <div>
        {usuarios.map((usuarioObj, index) => (
          <Tarjeta
            key={index} 
            nombre={usuarioObj.nombre}
            usuario={usuarioObj.usuario}
          />
        ))}
      </div>

    </>
  )
}

export default App
