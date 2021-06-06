import React, { useState, useEffect } from "react";
import RepositoryItem from "./RepositoryItem";
import "../styles/repositories.scss";

const repository = {
  name: "unform",
  description: "Forms in React",
  link: "https://github.com/unform/unform",
};
export default function RepositoryList() {
  const [repolist, setRepolist] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/orgs/rocketseat/repos")
    .then((res) =>
      res.json()
    ).then(data => setRepolist(data))
  }, [repolist]);
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
