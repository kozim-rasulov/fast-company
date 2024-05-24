import Qualitie from "./qualitie";
import Bookmark from "./bookmark";


const User = ({
  _id,
  name,
  profession,
  qualities,
  completedMeetings,
  rate,
  bookmark,
  onDelete,
  onToggleBookmark,
}) => {
  return (
    <>
      <tr>
        <th scope="row">{name}</th>
        <td>
          {qualities.map((qualitie) => (
            <Qualitie key={qualitie._id} {...qualitie} />
          ))}
        </td>
        <td>{profession.name}</td>
        <td>{completedMeetings}</td>
        <td>{rate} / 5</td>
        <td>
          <Bookmark
            status={bookmark}
            onToggleBookmark={onToggleBookmark}
            id={_id}
          />
        </td>
        <td>
          <span className="btn btn-danger" onClick={() => onDelete(_id)}>
            Удалить
          </span>
        </td>
      </tr>
    </>
  );
};

export default User;
