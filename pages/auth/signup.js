import { createUserWithEmailAndPassword } from 'firebase/auth';
import Link from 'next/link';
import React, { useState } from 'react'
import {auth} from '../../firebase'

// function signup() {

    

//   return (
//     <div>
//         <input type='email' value={email} onChange={e => setEmail(e.target.value)}/>
//         <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>
//         <button onClick={signup}>Sign up</button>
//          <div>
//             <p>Don't have an account?</p>
//             <Link href='/login'>Sign up</Link>
//          </div>
//     </div>
//   )
// }

// export default signup




export default function signup() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function signup(e) {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, name, email, password)
      .then(() => {

      })
      .catch(err => console.log(err))
  }
  return (
    <>
      {/* <div className="container mx-auto px-4 h-full ">
        <div className="flex content-center items-center justify-center h-full">
          <div className=" w-full lg:w-6/12 px-4">
            <div className=" flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
              
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                
                <form>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Email"
                      value={email}
                      onChange={e=>setEmail(e.target.value)}
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Password"
                      value={password}
                      onChange={e=>setPassword(e.target.value)}
                    />
                  </div>

                  <div className="text-center mt-6">
                    <button
                      className="bg-black text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="button"
                      onClick={signup}
                    >
                      Create Account
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className='h-screen flex flex-col  items-center justify-center '>
          <div className=" flex flex-col break-words mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0 p-10">
             <form className='w-60'>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring   w-full ease-linear transition-all duration-150"
                      placeholder="Email"
                      value={email}
                      onChange={e=>setEmail(e.target.value)}
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Password"
                      value={password}
                      onChange={e=>setPassword(e.target.value)}
                    />
                  </div>

                  <div className="text-center mt-6">
                    <button
                      className="bg-black text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="button"
                      onClick={signup}
                    >
                      Create Account
                    </button>
                  </div>
             </form>
          </div>
      </div>
    </>
  );
}

