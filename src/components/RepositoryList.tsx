import React, { useState, useEffect } from "react";
import RepositoryItem from "./RepositoryItem";
import "../styles/repositories.scss";


interface Repository {
  name:string;
  description:string;
  html_url: string;

}
export default function RepositoryList() {
  const [repolist, setRepolist] = useState<Repository[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/orgs/rocketseat/repos")
      .then((res) => res.json())
      .then((data) => setRepolist(data));
  }, []);
  return (
    <section className="repo-list">
      <h1>Lista de Repositórios</h1>

      <ul>
        {repolist.map((repo) => {
          return <RepositoryItem key={repo.name} repository={repo} />;
        })}
      </ul>
    </section>
  );
}
