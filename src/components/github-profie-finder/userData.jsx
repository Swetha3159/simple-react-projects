import React from "react";

const UserData = ({ userData }) => {
  const {
    avatar_url,
    followers,
    following,
    public_repos,
    name,
    login,
    created_at,
  } = userData;
  const createdDate = new Date(created_at);
  return (
    <div className="user">
      <div>
        <img src={avatar_url} alt={name} />
      </div>
      <div className="name-container">
        <a href={`https://github.com/${login}`}>{name || login}</a>
        {userData ? (
          <p>
            User joined on {""}
            {`${createdDate.getDate()} ${createdDate.toLocaleDateString(
              "en-us",
              {
                month: "short",
              }
            )} ${createdDate.getFullYear()}`}
          </p>
        ) : (
          " "
        )}
      </div>
      <div className="profile-info">
        <div>
          <p>Public Repos</p>
          <p>{public_repos}</p>
        </div>
        <div>
          <p>Followers</p>
          <p>{followers}</p>
        </div>
        <div>
          <p>Following</p>
          <p>{following}</p>
        </div>
      </div>
    </div>
  );
};

export default UserData;
