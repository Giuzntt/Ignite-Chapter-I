import { RepositoryItem } from "./RepositoryItem";

const repositoryProps = {
  name: "unform",
  description: "Forms in React",
  url: "www.github.com/unform/unform",
};

export function RepositoryList(props){
    return (
      <section className="repository-list">
        <h1>Lista de Repositorios</h1>
        <ul>
          <RepositoryItem repositoryProps={repositoryProps} />
          <RepositoryItem repositoryProps={repositoryProps} />
          <RepositoryItem  />
        </ul>
      </section>
    );

}