import { useEffect, useState, useRef } from "react";
import "./Home.css";
import Trash from "../../assets/trash.svg";
import api from "../../services/api.js"

function Home() {
  const [users, setUsers] = useState([])

  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()

  async function getUsers(){
    const usersFromApi = await api.get('/users')
    setUsers(usersFromApi.data)
  }
  
  
  async function deleteUsers(id){
   await api.delete(`/users/${id}`)
   getUsers()
  }
  
  async function createUsers(){
    await api.post('/users', {
      name: inputName.current.value,
      age: inputAge.current.value,
      email: inputEmail.current.value
    })
    
    getUsers()
  }
  
  useEffect(() => {
    getUsers()
  }, [])


  return (
    <div className="container">
      <form method="POST">
        <h1>Cadrasto de Usuários</h1>
        <input name="name" type="text" placeholder="Seu Nome" required ref={inputName}/>
        <input name="age" type="number" placeholder="Sua Idade" required ref={inputAge}/>
        <input name="email" type="email" placeholder="Seu Email" required ref={inputEmail}/>
        <button type="button" onClick={createUsers}>Cadastrar</button>
      </form>

      {users.map((user) => (
        <div key={user.id} className="card">
        <div>
          <p>Nome: <span>{user.name}</span></p>
          <p>Idade: <span>{user.age}</span></p>
          <p>Email: <span>{user.email}</span></p>
        </div>
        <button onClick={() => deleteUsers(user.id)}>
          <img src={Trash} alt="Excluir" />
        </button>
      </div>
      ))}
    </div>
  );
}

export default Home;
