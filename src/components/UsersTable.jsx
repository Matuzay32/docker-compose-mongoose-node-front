import { React, useContext } from "react";
import { BsTrashFill } from "react-icons/bs";
import ContextCards from "../context/ContextCards";

export default function UsersTable() {
  const { user, setUser, deleteUserForId } = useContext(ContextCards);

  return (
    <div className="containerTable">
      <table>
        <tbody>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
          {user?.map((item) => {
            const { _id, username, email } = item;
            return (
              <tr key={_id}>
                <td>{username}</td>
                <td>{email}</td>
                <td>
                  <div className="containerButtonDeleteTable">
                    <button onClick={(ev) => deleteUserForId(_id)}>
                      <span>Delete</span>
                      <BsTrashFill></BsTrashFill>
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
