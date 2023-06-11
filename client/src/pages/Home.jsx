import React, { useEffect } from "react";
import axios from 'axios'

const Home = () => {

  useEffect(() => {

    const fetchData = async () => {
      try {
        const data = await axios.get('http://localhost:1000')
        console.log(data.data)
      } catch (err) {
        console.error(err);
      }
    }
    fetchData()

  }, [])

  return (
    <>
      <div className="flex justify-center items-center h-[75vh]">
        <h1 className=" text-3xl font-[600] hover:scale-125 duration-200 hover:cursor-pointer"> This is the Hompage</h1>
      </div>
    </>
  );
};

export default Home;
