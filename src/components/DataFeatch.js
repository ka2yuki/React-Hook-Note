import React, { useState, useEffect } from "react";

function DataFeatch() {
  // Save fetch data.
  // Show Loading when while fetching data.
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // fetching data function.
  const fetchData = async () => {
    const res = await fetch("https://api.randomuser.me/");
    const data = await res.json();
    const [item] = data.results;
    setUser(item);
    setLoading(false);
  };
  // 初回レンダー時のみ実行。
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <h1>Loading..</h1>
      ) : (
        <h1>
          {user.name.first} {user.name.last}
        </h1>
      )}
    </div>
  );
}

export default DataFeatch;
