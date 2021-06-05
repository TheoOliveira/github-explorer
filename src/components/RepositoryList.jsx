import React from "react";
import RepositoryItem from './RepositoryItem'

const repository = {
  name: 'unform',
  description: 'Forms in React',
  link: 'https://github.com/unform/unform'
}
export default function RepositoryList() {
  return (
    <section className="repo-list">
      <h1>Lista de Repositórios</h1>

      <ul>
          <RepositoryItem repository={repository} />
          <RepositoryItem repository={repository} />
          <RepositoryItem repository={repository} />

      </ul>
    </section>
  );
}
