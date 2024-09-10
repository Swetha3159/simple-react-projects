import React, { useEffect, useState } from "react";
import UserData from "./userData";
const GithubProfileFinder = () => {
  const [username, setUsername] = useState("swetha");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const handleSubmit = () => {
    fetchUserData();
  };
  useEffect(() => {
    fetchUserData();
  }, [username]);
  console.log(userData);
  const fetchUserData = async (username) => {
    try {
      setLoading(true);
      const response = await fetch(`https://api.github.com/users/${username}`);
      const result = await response.json();
      if (result) {
        setUserData(result);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(true);
    }
  };

  if (loading) {
    return <h1>Loading data ! Please wait</h1>;
  }
  return (
    <div className="github-profile-container">
      <div className="input-wrapper">
        <input
          type="text"
          className=""
          placeholder="Please Enter Name"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <button
          onClick={() => {
            handleSubmit();
          }}
        >
          Search
        </button>
      </div>
      {userData !== null ? <UserData userData={userData} /> : null}
      {/* {userData !== null && <UserData userData={userData} />} */}
    </div>
  );
};

export default GithubProfileFinder;
