
const SingleUser = ({user}) => {
    console.log(user)
    return (
        <tr className="bg-base-200">
        <th>{user.id} </th>
        <td>
          {user.displayName}
        </td>
        <td>{user.email}</td>
      </tr>
    );
};

export default SingleUser;