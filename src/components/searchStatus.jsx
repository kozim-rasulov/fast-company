const SearchStatus = ({ length }) => {
  return (
    <>
      <h1 className={`btn btn-${length ? "primary" : "danger"}`}>
        {length
          ? `${length} человек тусанет с тобой сегодня`
          : "Никто с тобой не тусанёт"}
      </h1>
    </>
  );
};

export default SearchStatus;
