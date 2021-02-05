import React, { useState, useEffect } from "react";

function DataFeatchById() {
  const [post, setPost] = useState(null);
  const [id, setId] = useState(1);
  const [loading, setLoading] = useState(true);
  const fetchData = async () => {
    // post-id の度 に データを取得する為、取得するまでの間、初期値は true にセットする。
    setLoading(true);
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await res.json();
    setPost(data);
    setLoading(false);
  };
  // 「id の変化」は 監視し、走られたい為、配列ないに id を入れる。
  useEffect(() => {
    fetchData();
  }, [id]);

  return (
    <div>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      {loading ? <h1>Loading..</h1> : <h1>{post.title}</h1>}
    </div>
  );
}

export default DataFeatchById;
