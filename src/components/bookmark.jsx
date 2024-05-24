const Bookmark = ({ status, onToggleBookmark, id }) => {
  const isChosen = status ? "-heart-fill" : "";
  return (
    <>
      <button onClick={() => onToggleBookmark(id)}>
        <i className={`bi bi-bookmark${isChosen} fs-4`}></i>
      </button>
    </>
  );
};

export default Bookmark;
