import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const features = useLoaderData();

  const [faqs, setFaqs] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/faq").then((res) => setFaqs(res.data));
  }, []);

  return (
    <div>
      <div>
        <img
          className="w-full object-contain rounded-lg hero-overlay bg-opacity-25"
          src="https://i.ibb.co/nmmp4hT/windows-p74ndn-YWRY4-unsplash.jpg"
          alt="Banner image"
        />
      </div>

      <div className="text-center my-8">
        <h1 className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-4xl font-bold text-transparent bg-clip-text mb-6">
          Features
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
          {features?.map((feature) => {
            return (
              <div
                key={feature._id}
                className="bg-slate-200 p-4 rounded-lg w-96 mx-auto"
              >
                <div className=" rounded-md w-max mx-auto bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px]">
                  <img
                    className="h-64 w-80 bg-white "
                    src={feature?.image}
                    alt=""
                  />
                </div>
                <h2 className="text-xl my-1 font-bold">{feature?.name}</h2>
                <p className="text-sm text-gray-500 w-72 mx-auto">
                  {feature?.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <div>
        <h1 className="text-center text-3xl mb-6 font-bold">
          FAQ(Frequently Asked Question)
        </h1>
        {faqs?.map((faq) => {
          return (
            <div
              key={faq._id}
              className="collapse collapse-plus bg-base-200 mb-4"
            >
              <input type="radio" name="my-accordion-1" />
              <div className="collapse-title text-xl font-medium">
                {faq?.question}
              </div>
              <div className="collapse-content">
                <p>{faq.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
