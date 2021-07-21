import Navbar from "./components/Navbar";
import Body from "./components/Body";
import "./styles/Mainstyles.scss";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const today = new Date().toISOString().substr(0, 10);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});

  const fetchData = (data: string) => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?date=${data}&api_key=7mSCDimqegOvlZth9mkKxpkIF6uSfGy4Ni4kEs4h`
      )
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(true);
        console.log(err);
      });
  };

  const onEntrySubmitted = (data: any) => {
    setLoading(true);
    if (new Date(data) > new Date(today)) {
      alert("Choose a Date Before Today");
    } else {
      fetchData(data);
    }
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    fetchData(today);
  }, [today]);

  return (
    <>
      <Navbar initialDate={today} onSubmit={onEntrySubmitted} />
      <Body isLoading={loading} displayData={data} />
    </>
  );
}

export default App;
