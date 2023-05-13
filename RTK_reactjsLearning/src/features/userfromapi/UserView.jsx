import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchUser } from "./userSlice";

const UserView = () => {
  const user = useSelector(state => state.users)
  const disptch = useDispatch()

  useEffect(() => {
    disptch(fetchUser()) 
  },[])
  return (
    <div>
      <h2>List of Users</h2>
      <div>{user.loading && <h3>loadding ...</h3>}</div>
      {!user.loading && user.error ? <p>{user.error}</p> : null}
      {!user.loading && user.users.length>0 ? (
        <ul>
          {user.users.map(user => {
            console.log(user.name)
            return (
              <li key={user.id}>{user.name}</li> 
              )
          })}
        </ul>
      ):null}
    </div>
  );
};

export default UserView;
