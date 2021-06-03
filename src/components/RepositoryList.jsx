import React from "react";
import RepositoryList from './RepositoryItem'
export default function RepositoryList() {
  return (
    <section className="repo-list">
      <h1>Lista de Repositórios</h1>

      <ul>
          <RepositoryItem />
      </ul>
    </section>
  );
}
