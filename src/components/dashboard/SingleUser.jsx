
const SingleUser = ({u}) => {
    console.log(u)
    return (
        <tr className="bg-base-200">
        <th>{u.id} </th>
        <td>{u.name}</td>
        <td>{u.email}</td>
      </tr>
    );
};

export default SingleUser;