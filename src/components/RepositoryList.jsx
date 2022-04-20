import { RepositoryItem } from "./RepositoryItem";

import '../styles/repositories.scss'
import { useState, useEffect } from "react";


export function RepositoryList(props){
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/Giuzntt/repos")
      .then((response) => response.json())
      .then((data) => setRepositories(data));
  }, []);

    return (
      <section className="repository-list">
        <h1>Lista de Repositorios</h1>
        <ul>
          {
            repositories.map(repository=>{
              return (
                <RepositoryItem key={repository.name} repository={repository} />
              );
            })
          }
          
        </ul>
      </section>
    );

}