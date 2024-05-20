import { useState } from "react";
import api from "../api";

const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll());

  const handleDelete = (userId) => {
    setUsers((users) => users.filter((user) => user._id !== userId));
  };

  const UsersTable = () => {
    return (
      <table className="table text-center">
        <thead>
          <tr>
            <th scope="col">Имя</th>
            <th scope="col">Качества</th>
            <th scope="col">Профессия</th>
            <th scope="col">Встретился, раз</th>
            <th scope="col">Оценка</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <th scope="row">{user.name}</th>
              <td>
                {user.qualities.map((qualities, id) => {
                  return (
                    <span
                      key={id}
                      className={`badge bg-${qualities.color} m-1`}
                    >
                      {qualities.name}
                    </span>
                  );
                })}
              </td>
              <td>{user.profession.name}</td>
              <td>{user.completedMeetings}</td>
              <td>{user.rate} / 5</td>
              <td onClick={() => handleDelete(user._id)}>
                <span className="btn btn-danger">Удалить</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <>
      <h1 className={`btn btn-${users.length ? "primary" : "danger"}`}>
        {users.length
          ? `${users.length} человек тусанет с тобой сегодня`
          : "Никто с тобой не тусанёт"}
      </h1>
      {users.length ? <UsersTable /> : null}
    </>
  );
};
export default Users;
