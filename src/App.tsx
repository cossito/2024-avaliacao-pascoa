import { useState } from "react";
import axios, { AxiosResponse } from "axios";
import "./App.css";

type Tarefa = {
  id: number,
  titulo: string;
  concluido: boolean;
};

type Publicacao = {
  id: number,
  titulo: string;
  corpo: string;
};

type Usuario = {
  id: number,
  nome: string;
  nomeUsuario: string;
  email: string;
};

type Album = {
  id: number,
  titulo: string;
};

const ListaDeTarefas = () => {
  const [tarefas, setTarefas] = useState([]);
  const escutarCliqueAcessarAPI = () => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((resposta: AxiosResponse) => {
      const dados = resposta.data.map((item: { id: number; title: string; completed: boolean; }) => {
        return {
          id: item.id,
          titulo: item.title,
          concluido: item.completed,
        };
      });
      setTarefas(dados);
    });
  };
  
  return (
    <>
      <h4>Tarefas</h4>
      <div>
        <button onClick={escutarCliqueAcessarAPI}>Atualizar lista de tarefas</button>
      </div>
      <ul>
        {
          tarefas.map((item: Tarefa) => {
            return <ItemTarefa key={item.id} titulo={item.titulo} />
          })
        }
      </ul>
    </>
  );
}

const ItemTarefa = (props: {titulo: string}) => {
  return (<li>{props.titulo}</li>);
}

const ListaDePublicacoes = () => {
  const [publicacoes, setPublicacoes] = useState([]);
  const escutarCliqueAcessarAPI = () => {
    axios.get("https://jsonplaceholder.typicode.com/posts/").then((resposta: AxiosResponse) => {
      const dados = resposta.data.map((item: { id: number; title: string; body: string; }) => {
        return {
          id: item.id,
          titulo: item.title,
          corpo: item.body
        };
      });
      setPublicacoes(dados);
    });
  };
  return (
    <>
      <h4>Publicações</h4>
      <div>
        <button onClick={escutarCliqueAcessarAPI}>Atualizar lista de publicações</button>
      </div>
      <ul>
        {
          publicacoes.map((item: Publicacao) => {
            return <ItemPublicacao key={item.id} titulo={item.titulo}  corpo={item.corpo} />
          })
        }
      </ul>
    </>
  );
}
const ItemPublicacao = (props: {titulo: string; corpo: string}) => {
  return (<li>| {props.titulo} ---- {props.corpo} |</li>);
}

const ListaDeUsuarios = () => {
  const [usuarios, setUsuarios] = useState([]);
  const escutarCliqueAcessarAPIUsuario = () => {
    axios.get("https://jsonplaceholder.typicode.com/users/").then((resposta: AxiosResponse) => {
      const dados = resposta.data.map((item: { id: number; name: string; username: string; email: string; }) => {
        return {
          id: item.id,
          nome: item.name,
          nomeUsuario: item.username,
          email: item.email
        };
      });
      setUsuarios(dados);
    });
  };
  return (
    <>
      <h4>Usuario</h4>
      <div>
        <button onClick={escutarCliqueAcessarAPIUsuario}>Atualizar lista de usuarios</button>
      </div>
      <ul>
        {
          usuarios.map((item: Usuario) => {
            return <ItemUsuario key={item.id} nome={item.nome}  nomeUsuario={item.nomeUsuario} email={item.email}/>
          })
        }
      </ul>
    </>
  );
}
const ItemUsuario = (props: {nome: string; nomeUsuario: string; email: string}) => {
  return (<li>{props.nome} - {props.nomeUsuario} - {props.email}</li>);
}

const ListaDeAlbuns = () => {
  const [albuns, setAlbuns] = useState([]);
  const escutarCliqueAcessarAPI = () => {
    axios.get("https://jsonplaceholder.typicode.com/albums/").then((resposta: AxiosResponse) => {
      const dados = resposta.data.map((item: { id: number; title: string; }) => {
        return {
          id: item.id,
          titulo: item.title,
        };
      });
      setAlbuns(dados);
    });
  };
  return (
    <>
      <h4>Albuns</h4>
      <div>
        <button onClick={escutarCliqueAcessarAPI}>Atualizar lista de albuns</button>
      </div>
      <ul>
        {
          albuns.map((item: Album) => {
            return <ItemAlbum key={item.id} titulo={item.titulo}  />
          })
        }
      </ul>
    </>
  );
}
const ItemAlbum = (props: {titulo: string}) => {
  return (<li>| Titulo album: {props.titulo} |</li>);
}

const App = () => {
  return (
    <div className="avaliacao">
      <h1>Infoweb - React</h1>
      <ListaDeTarefas />
      <ListaDePublicacoes />
      <ListaDeAlbuns />
      <ListaDeUsuarios />
    </div>
  );
}

export default App;
