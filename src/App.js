import { useState } from "react";
import API from "./api";
import SearchStatus from "./components/searchStatus";
import Users from "./components/users";

const App = () => {
  const [users, setUsers] = useState(API.users.fetchAll());
  const handleDelete = (id) => {
    setUsers(users.filter((user) => user._id !== id));
  };
  const handleToggleBookmark = (id) => {
    const bookmarkIndex = users.findIndex((user) => user._id === id);
    const bookmarkStatus = users[bookmarkIndex].bookmark;
    const newUsers = [...users];
    newUsers[bookmarkIndex].bookmark = !bookmarkStatus;
    setUsers(newUsers);
  };
  return (
    <>
      <SearchStatus length={users.length} />
      <Users
        users={users}
        onDelete={handleDelete}
        onToggleBookmark={handleToggleBookmark}
      />
    </>
  );
};

export default App;
