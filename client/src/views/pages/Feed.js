const Feed = () => {
  const logoutUser = () => {};

  return (
    <div>
      Feed
      <div className="btn btn-primary mt-2 " onClick={() => logoutUser()}>
        click here to logout
      </div>
    </div>
  );
};

export default Feed;
