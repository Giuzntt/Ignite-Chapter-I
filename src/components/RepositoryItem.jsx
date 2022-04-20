



export function RepositoryItem(props){
    return (
      <li>
        <strong>{props.repositoryProps?.name ?? "Default"}</strong>
        <p>
        {props.repositoryProps?.description ?? "lorem ipsum"}
        </p>
        <a href={props.repositoryProps?.url ?? 'www.github.com/Giuzntt'}>Acessar repositorio</a>
      </li>
    );






}




