import { Link } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react';
import Password from '../components/Password';
import { toast } from 'react-toastify';
import { Icon } from '@iconify/react';

const Signup = () => {

  const [data, setData] = useState({})
  const [processing, setProcessing] = useState(false)
  const postUserEndPoint = `http://localhost:2000/signup`;


  // Get input data from user
  const dataVal = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  const submitHandler = (e) => {
    e.preventDefault()
    // Normal data is passed, and stringified data is passed
    setProcessing(true)
    const createUser = async () => {
      try {
        const awaitedData = await axios.post(postUserEndPoint, data, {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        })

        console.log(awaitedData.data)
        // console.log('Successfully sent to the database')
        toast.success('User created successfully', {
          // icon: '👍'
        })
        setProcessing(false)
        localStorage.setItem('token', awaitedData.data.token)
        // Create an otp verification



      } catch (err) {
        console.error(err.response.data)
        toast.error(err.response.data.errMessage ? 'An error occured. Try filling in your details properly' : err.response.data.message)
        setProcessing(false)
      }
    }
    createUser()
  }




  return (
    <>
      <>
        <div className='flex items-center h-[90vh] md:block md:h-[0]'>
          <div className="shadow-slate-600 md:shadow-lg max-w-[400px] pb-1 my-6 mx-auto rounded-xl p-4">
            <h2 className="text-center text-3xl p-4 underline underline-offset-1">Sign Up</h2>

            <form onSubmit={submitHandler} method='POST' className=" max-w-[320px] w-screen my-6 mx-auto">

              <label htmlFor="input" className="label_style">First Name</label>
              <input type="text" className="input_style " name='firstName' onChange={dataVal} />

              <label htmlFor="input" className="label_style">Last Name</label>
              <input type="text" className=" input_style" name='lastName' onChange={dataVal} />

              <label htmlFor="input" className="label_style">Email</label>
              <input type='email' className=" input_style" name='email' onChange={dataVal} />

              <Password onChange={dataVal} name='password' password='Password' />

              <Password onChange={dataVal} name='confirmPassword' password='Confirm Password' />

              <button className="w-full py-3 bg-black duration-300 hover:bg-slate-400 text-xl text-white rounded hover:cursor-pointer mt-3 active:scale-105" >{processing ? <Icon icon="eos-icons:loading" className='m-auto' /> : `Submit`}</button>


              <p className='text-right text-slate-400 hover:scale-105 duration-300 active:scale-105'> <Link to='/login'>Already have an account? LogIn</Link></p>
            </form>

          </div>
        </div>
      </>
    </>
  );
};

export default Signup;


