import React, { useState, useEffect } from "react";

const SearchComponent = () => {
  //setear los hooks useState
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  //funcion para traer los datos de la Api
  const URL = "https://jsonplaceholder.typicode.com/users";

  const showData = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setUsers(data);
    console.log({ data });
  };

  //funcion de busqueda
  const searcher = (e) => {
    setSearch(e.target.value);
    console.log(e);
  };

  useEffect(() => {
    showData();
  }, []);

  //metodo de filtrado
  //let results = [];
  /*if (!search) {
    results = users;
  } else {
    users.filter((user) =>
      user.name.tolowerCase().include(search.toLocaleLowerCase())
    );
  }*/
  let results = !search
    ? users
    : users.filter(
        (user) => {
          return user.name.toLowerCase().includes(search.toLowerCase());
        }
        //user.name.toLowerCase().include(search.toLocaleLowerCase())
      );

  //renderizamos la vista

  return (
    <div>
      <input
        value={search}
        onChange={searcher}
        type="text"
        placeholder="Search"
        className="form-control"
      />
      <table className="table table-striped table-hover mt-5 shadow-lg">
        <thead>
          <tr className="">
            <th>NAME</th>
            <th>USER NAME</th>
          </tr>
        </thead>
        <tbody>
          {results.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.username}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SearchComponent;
