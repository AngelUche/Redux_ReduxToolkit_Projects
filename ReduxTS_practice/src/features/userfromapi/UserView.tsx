import { useEffect } from "react";
import { fetchUser } from "./userSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

const UserView = () => {
  const user = useAppSelector((state) => state.users);
  const disptch = useAppDispatch();

  useEffect(() => {
    disptch(fetchUser());
  }, []);
  return (
    <div>
      <h2>List of Users</h2>
      <div>{user.loading && <h3>loadding ...</h3>}</div>
      {!user.loading && user.error ? <p>{user.error}</p> : null}
      {!user.loading && user.users.length > 0 ? (
        <ul>
          {user.users.map((user) => {
            console.log(user.name);
            return <li key={user.id}>{user.name}</li>;
          })}
        </ul>
      ) : null}
    </div>
  );
};

export default UserView;
