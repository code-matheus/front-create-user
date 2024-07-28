import "./Home.css";
import Trash from "../../assets/trash.svg";
function Home() {
  const users = [
    {
      id: "1203921039dsd",
      name: "Matheus",
      age: "22",
      email: "email@email.com",
    },
    {
      id: "12039210gfdg39dsd",
      name: "Matheusnf",
      age: "24",
      email: "emadil@email.com",
    }
  ];

  return (
    <div className="container">
      <form>
        <h1>Cadrasto de Usuários</h1>
        <input name="name" type="text" placeholder="Seu Nome" required />
        <input name="age" type="number" placeholder="Sua Idade" required />
        <input name="email" type="email" placeholder="Seu Email" required />
        <button type="submit">Cadastrar</button>
      </form>

      {users.map((user) => (
        <div key={user.id} className="card">
        <div>
          <p>Nome: <span>{user.name}</span></p>
          <p>Idade: <span>{user.age}</span></p>
          <p>Email: <span>{user.email}</span></p>
        </div>
        <button>
          <img src={Trash} alt="Excluir" />
        </button>
      </div>
      ))}
    </div>
  );
}

export default Home;
