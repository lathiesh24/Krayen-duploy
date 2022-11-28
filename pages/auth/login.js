import { signInWithEmailAndPassword } from "firebase/auth";
import Link from "next/link";
import { useState } from "react";
import { auth } from "../../firebase";

export default function login() {
    const[email , setEmail] = useState('');
    const [password,setPassword]=useState('');

    function login(e){
    e.preventDefault();
    signInWithEmailAndPassword(auth,email,password)
      .then(()=>{
        window.location.replace('/')
      }).catch(err => console.log(err))
    }
    
    return (
      <>
        {/* <div className="container h-full px-4 mx-auto">
          <div className="flex items-center content-center justify-center h-full">
            <div className="w-full px-4 lg:w-4/12">
              <div className="relative flex flex-col w-full min-w-0 mb-6 break-words border-0 rounded-lg shadow-lg bg-blueGray-200">
                
                <div className="flex-auto px-4 py-10 pt-0 lg:px-10">
                  <div className="mb-3 font-bold text-center text-blueGray-400">
                    <small>Or sign in with credentials</small>
                  </div>
                  <form>
                    <div className="relative w-full mb-3">
                      <label
                        className="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                        htmlFor="grid-password"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        className="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                        placeholder="Email"
                        value={email}
                        onChange={e=>setEmail(e.target.value)}
                      />
                    </div>
  
                    <div className="relative w-full mb-3">
                      <label
                        className="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                        htmlFor="grid-password"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        className="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                        placeholder="Password"
                        value={password}
                        onChange={e=>setPassword(e.target.value)}
                      />
                    </div>
                    <div className="mt-6 text-center">
                      <button
                        className="w-full px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-black rounded shadow outline-none active:bg-blueGray-600 hover:shadow-lg focus:outline-none"
                        type="button"
                        onClick={login}
                      >
                        Sign In
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="relative flex flex-wrap mt-6">
                <div className="w-1/2">
                  <a
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    className="text-blueGray-200"
                  >
                    <small>Forgot password?</small>
                  </a>
                </div>
                <div className="w-1/2 text-right">
                  <Link href="/auth/signup">
                    <a href="#pablo" className="text-blueGray-200">
                      <small>Create new account</small>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <div className='flex flex-col items-center justify-center h-screen '>
         <div className='text-3xl'>Log in to your existing account</div>
          <div className="flex flex-col p-10 mb-6 break-words border-0 rounded-lg shadow-lg bg-blueGray-200">

             <form className='w-60'>
                
                  <div className="relative w-full mb-3">
                    <label
                      className="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                      htmlFor="grid-password"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                      placeholder="Email"
                      value={email}
                      onChange={e=>setEmail(e.target.value)}
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                      htmlFor="grid-password"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      className="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                      placeholder="Password"
                      value={password}
                      onChange={e=>setPassword(e.target.value)}
                    />
                  </div>

                  <div className="mt-6 text-center">
                    <button
                      className="w-full px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-black rounded shadow outline-none active:bg-blueGray-600 hover:shadow-lg focus:outline-none"
                      type="button"
                      onClick={login}
                    >
                      Log in
                    </button>
                  </div>
             </form>
          </div>
      </div>
      </>
    );
  }