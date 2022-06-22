import React from "react";
import { BsTrashFill } from "react-icons/bs";

export default function UsersTable() {
  return (
    <div className="containerTable">
      <table>
        <tr>
          <th>Username</th>
          <th>Email</th>
          <th>Action</th>
        </tr>
        <tr>
          <td>Alfreds Futterkiste</td>
          <td>Maria Anders</td>
          <td>
            <div className="containerButtonDeleteTable">
              <button>
                <span>Delete</span>
                <BsTrashFill></BsTrashFill>
              </button>
            </div>
          </td>
        </tr>
      </table>
    </div>
  );
}
