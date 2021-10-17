import React, { useState } from "react";
import LogoutButton from "./../components/LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";

const axios = require("axios");

interface IProps {}

const Home: React.FC<IProps> = () => {
  const { getAccessTokenSilently } = useAuth0();
  const [data, setData] = useState();

  const getData = async () => {
    try {
      const token = await getAccessTokenSilently();
      const response = await axios.get("http://localhost:8080/protected", {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      setData(response.data)
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  const getHelloWorld = () => {
    axios
      .get("http://localhost:8080/")
      .then((res: any) => console.log(res))
      .catch((err: any) => console.log(err));
  };

  return (
    <div className="App">
      <header className="App-header">
        <div>Bienvenue Chez TradingSignals</div>
        <LogoutButton />
        <button onClick={() => getHelloWorld()}>get hello world</button>
        <button onClick={() => getData()}>get data</button>
        <div>Data: {data}</div>
      </header>
    </div>
  );
};
export default Home;
