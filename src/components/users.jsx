import { useState } from "react";
import api from "../api";

const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll());

  return (
    <>
      <h1 className="badge bg-primary">12 человек тусанет с тобой сегодня</h1>
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
              <td>{user.qualities.map((qualities, id) => {
                return <span key={id} className={`badge bg-${qualities.color} m-1`}>{qualities.name}</span>
              })}</td>
              <td>{user.profession.name}</td>
              <td>{user.completedMeetings}</td>
              <td>{user.rate} / 5</td>
              <td><span className="btn btn-danger">Удалить</span></td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
export default Users;
