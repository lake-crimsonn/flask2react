import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch("/react")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);

  return (
    <div className="App">
      <h1>user memebers</h1>
      {typeof data.members === "undefined" ? (
        <h3>loading..</h3>
      ) : (
        data.members.map((u) => <p key={u.id}>{u.name}</p>)
      )}
    </div>
  );
}

export default App;
