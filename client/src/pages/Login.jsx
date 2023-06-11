import { Link } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react';
import Password from '../components/Password';
import { toast } from 'react-toastify';
import { Icon } from '@iconify/react';

const Login = () => {
  const [data, setData] = useState({});
  const postUserEndPoint = `http://localhost:2000/login`;
  const [processing, setProcessing] = useState(false)

  const dataVal = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
    // console.log(data)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setProcessing(true)

    const getUser = async () => {
      try {
        const awaiteddata = await axios.post(postUserEndPoint, data, {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        });
        // console.log(awaiteddata.data)
        toast.success('Logged In')
        setProcessing(false)
      } catch (err) {
        console.error(err.response.data)
        toast.error(err.response.data.message)
        setProcessing(false)
      }
    }
    getUser()

  }

  return (
    <>
      <div className='flex items-center h-[90vh] md:block md:h-[0]'>
        <div className="shadow-slate-600 md:shadow-lg  max-w-[400px] pb-1 p-4 my-6 mx-auto rounded-xl">
          <h2 className="text-center text-3xl p-4 underline underline-offset-1">Log In</h2>
          <form className="max-w-[320px] w-screen my-8 mx-auto" onSubmit={handleSubmit}>


            <label htmlFor="input" className="label_style">Email</label>
            <input type='email' className="input_style" name='email' onChange={dataVal} />

            <Password onChange={dataVal} name='password' password='Password' />

            <button className="w-full py-3 bg-black duration-300 hover:bg-slate-400 text-xl text-white rounded hover:cursor-pointer mt-3 active:scale-105" >{processing ? <Icon icon="eos-icons:loading" className='m-auto' /> : `Submit`}</button>
            <p className='text-right text-slate-400 hover:scale-105 duration-300 active:scale-105'> <Link to='/signup'>Don't have an account? SignUp</Link></p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
