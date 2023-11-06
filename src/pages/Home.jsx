import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const Home = () => {
  const [faq, setFaq] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/faq").then((res) => setFaq(res.data));
  }, []);

  return (
    <div className="hero">
      <div className="hero-overlay bg-opacity-25">
        <img
          className="w-full object-contain rounded-lg"
          src="https://i.ibb.co/nmmp4hT/windows-p74ndn-YWRY4-unsplash.jpg"
          alt="Banner image"
        />
      </div>
    </div>
  );
};

export default Home;
