import React, { useEffect, useState } from "react";
import swal from 'sweetalert2'
import axios from 'axios'
import { setCookie,getCookie, deleteCookie } from 'cookies-next'
import { useRouter } from 'next/router'
import BASE_URL from "./global";
import {useSession,signIn,signOut, getSession} from 'next-auth/react'


// Now you can use BASE_URL anywhere in this file


/*
import  { useRouter} from 'next/router';
import { setCookie,getCookie } from 'cookies-next';*/


export default function AuthModal({session}) {
console.log("🚀 ~ file: AuthModal.jsx:19 ~ AuthModal ~ session:", session)

    useEffect(()=>{
        if(getCookie('login') ==  true && session != null)
        {
            loginSocials()
            deleteCookie('login')
        }
        if(session == null)
        {
            deleteCookie('login')
        }
    },[getCookie('login')])
    
    const router = useRouter();
    const [registerInput,setRegister] = useState({
        userName:'',
        password:'',
        email:'',
        confirm:'',
        error_list:[],
    });

    const loginSocials = async () => {
        const nameParts = session.user.name.split(" ");
        const firstName = nameParts[0];
        const lastName = nameParts[1];

        const data ={
            first_name: firstName,
            last_name : lastName,
            email : session.user.email,
            profile_pic : session.user.image
        }
        console.log("🚀 ~ file: AuthModal.jsx:48 ~ loginSocials ~ data:", data)

        axios.post(`${BASE_URL}/api/googleAuth/`,data).then(res => {
                      
            if(res.data.status === 200){
                setCookie('jwt',res.data.jwt);
                setCookie('first_name',res.data.user.first_name);
                setCookie('last_name',res.data.user.last_name);
                setCookie('email',res.data.user.email);
                setCookie('id',res.data.user.id);
                setCookie('role',res.data.user.role);
                setCookie('image',res.data.user.profile_pic)
                
                /*
                setCookie('public_id',res.data.public_id);
                setCookie('token',res.data.token);
                setCookie('name',res.data.name);
                setCookie('adress',res.data.adresse);
                setCookie('tel',res.data.tel);
                setCookie('image',res.data.image);
                if(res.data.admin){
                    setCookie('admin',res.data.admin);
                }*/
                swal.fire("Bienvenue","","success");
                const currentUrl = router.asPath;
                router.push(currentUrl)
            }
            else
            {
                swal.fire("Echec !!",res.data.message,"warning");
            }
        })
        
    }

    const [isChecked, setIsChecked] = useState(false);
    function handleCheckboxChange(event) {
        setIsChecked(event.target.checked);
        
      }
    const [loginInput,setLogin] = useState({
        email:'',
        password:'',
        error_list:[],
    });

    const loginForm = () =>{
        const login= document.querySelector('.login')
        const register = document.querySelector('.register')
        login.classList.remove('hidden')
        login.classList.add('flex')
        register.classList.remove('flex')
        register.classList.add('hidden')
    }
    const registerForm = () =>{
        const login= document.querySelector('.login')
        const register = document.querySelector('.register')
        login.classList.remove('flex')
        login.classList.add('hidden')
        register.classList.remove('hidden')
        register.classList.add('flex')
        console.log("Hi")
    }

    
    const handleRegisterInput =(e) =>{
        e.persist();
        setRegister({...registerInput,[e.target.name]:e.target.value});
    }
    const handleInput =(e) =>{
        e.persist();
        setLogin({...loginInput,[e.target.name]:e.target.value});
    }
    //const router = useRouter();
    
   
    const loginSubmit=(e)=>
    {
        e.preventDefault();
        if (loginInput.email=="" || loginInput.password=="")
        {
            setLogin({...loginInput,error_list:{'messageErr':"Un champs est vide",'error':true}})
        }
        else
        {
            const data ={
                email:loginInput.email,
                password:loginInput.password,
            }


            //https://kritirankk.pythonanywhere.com/
           
            axios.post(`${BASE_URL}/api/login`,data).then(res => {
                      
                if(res.data.status === 200){
                    setCookie('jwt',res.data.jwt);
                    setCookie('first_name',res.data.user.first_name);
                    setCookie('last_name',res.data.user.last_name);
                    setCookie('email',res.data.user.email);
                    setCookie('id',res.data.user.id);
                    setCookie('role',res.data.user.role);
                    setCookie('lat',res.data.user.lat);
                    setCookie('long',res.data.user.long);
                    if(res.data.user.role == 'admin')
                    {
                        setCookie('admin',true);
                    }
                    setCookie('image',res.data.user.profile_pic)
                    
                    /*
                    setCookie('public_id',res.data.public_id);
                    setCookie('token',res.data.token);
                    setCookie('name',res.data.name);
                    setCookie('adress',res.data.adresse);
                    setCookie('tel',res.data.tel);
                    setCookie('image',res.data.image);
                    if(res.data.admin){
                        setCookie('admin',res.data.admin);
                    }*/
                    swal.fire("Bienvenue","","success");
                    ModalAuth()
                    const currentUrl = router.asPath;
                    
                    if (currentUrl.includes("destination")) {
                        router.reload();
                      } else {
                        router.push(currentUrl)
                      }
                    
                }
                else
                {
                    swal.fire("Echec !!",res.data.message,"warning");
                }
            })
        }
    }
    
   

    const registerSubmit=(e)=>
    {

        const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        e.preventDefault();
        if(registerInput.userName=="" ||registerInput.email=="" || registerInput.password=="" || registerInput.confirm=="")
        {
            setRegister({...registerInput,error_list:{'messageErr':"Un champs est vide",'error':true}})
        }
        else if(registerInput.confirm!=registerInput.password)
        {
            setRegister({...registerInput,error_list:{'messageErr':"Confirmation invalide du mot de passe ",'error':true}})
        }
        else if(!registerInput.email.match(mailformat))
        {
               setRegister({...registerInput,error_list:{'messageErr':"Email Incorrecte",'error':true}})
        }
        else
        {
            const data ={
                first_name:registerInput.userName,
                last_name:registerInput.userName,
                password:registerInput.password,
                email:registerInput.email,
                role:isChecked ? "host" : "client"
            }
            console.log("🚀 ~ file: AuthModal.jsx:131 ~ AuthModal ~ data:", data)
            
    
            axios.post(`${BASE_URL}/api/register`,data).then(res => {
                if(res.data.status === 200){
                    swal.fire("Bienvenue","","success");
                    loginForm();
                }
                else
                {
                    swal.fire("Echec !!",res.data.message,"warning");
                }
            })
        }
        
    }


    
    const ModalAuth =()=>{
        const modal= document.querySelector('.authmodal')
        modal.classList.add('hidden')
        modal.classList.remove('flex')
    }

    const authGoogle = () => {
        setCookie('login',true)
        signIn("google")
    }

    const authFacebook = () => {
        setCookie('login',true)
        signIn("facebook")
    }

    const authTwitter= () => {
        setCookie('login',true)
        signIn("twitter")
    }
  return (
    <div className="fixed z-100 w-full h-screen top-0 hidden items-center justify-center bg-gray-900/70 authmodal fade">
        <div className="bg-[#023535]  text-white flex flex-col space-y-3 items-center py-6 px-7 rounded absolute top-2 right-2">
            <div className="font-bold flex items-center space-x-1 text-sm">
                 <i className='bx bx-error-circle text-lg'></i>
                 <h1>These accounts are only visible for the sake of the testing the app</h1>
            </div>
            <div className=" py-2 px-3 flex flex-col text-white w-full rounded-lg text-sm">
                <div className="font-semibold flex flex-col space-y-2">
                    <span className="underline underline-offset-4">Admin account :</span>
                    <div className="pl-5 flex items-center space-x-2">
                        <i className='bx bx-envelope text-lg' ></i>
                        <span>admin@gmail.com</span>
                        <i className='pl-5 bx bx-hide text-lg' ></i>
                        <span>123</span>
                    </div>
                    <span className="underline underline-offset-4">Owner account :</span>
                    <div className="pl-5 flex items-center space-x-2">
                        <i className='bx bx-envelope text-lg' ></i>
                        <span>owner@gmail.com</span>
                        <i className='pl-5 bx bx-hide text-lg' ></i>
                        <span>123</span>
                    </div>
                    <span className="underline underline-offset-4">User account : </span>
                    <div className="pl-5 flex items-center space-x-2">
                        <i className='bx bx-envelope text-lg' ></i>
                        <span>user@gmail.com</span>
                        <i className='pl-5 bx bx-hide text-lg' ></i>
                        <span>123</span>
                    </div>

                </div>
            </div>
            <div className='py-2'>

            </div>
            <div className="text-white border-t relative  justify-evenly border-white pt-5 flex items-center space-x-5 w-full">
                <span className='bg-[#023535] absolute -top-4 px-4'>You can also sign in using </span>
                <div className="flex flex-col items-center">
                        <div className="text-blue-500 w-[30px] h-[30px] rounded-full bg-white flex items-center justify-center">
                            <i className='bx bxl-facebook text-2xl' ></i>
                        </div>
                        <span className="text-white">Facebook</span>
                </div>

                <div className="flex flex-col items-center">
                        <div className="text-red-600 w-[30px] h-[30px] rounded-full bg-white flex items-center justify-center">
                            <i className='bx bxl-google text-2xl' ></i>
                        </div>
                        <span className="text-white">Google</span>
                </div>

                <div className="flex flex-col items-center">
                        <div className="text-main w-[30px] h-[30px] rounded-full bg-white flex items-center justify-center">
                            <i className='bx bxl-twitter text-2xl' ></i>
                        </div>
                        <span className="text-white">Twitter</span>
                </div>
            </div>
        </div>
        <div className="relative flex items-center justify-center w-full h-full md:w-[850px] md:h-[510px] bg-white  zoom-in">
            <div className="flex px-7 md:w-1/2 flex-col items-center space-y-5">
                <div className = "absolute left-0 p-4 top-0" >
                      <i className = "bx bx-x cursor-pointer text-2xl font-semibold hover:text-main" onClick={ModalAuth}/>
                </div>
                {/* Register Modal */}
                <div className="w-full hidden flex-col space-y-4 register relative z-100">
                    <h2 className = "text-2xl text-center font-bold text-gray-900 ">
                        Crée votre compte
                    </h2>
                    <form onSubmit={registerSubmit} className = "flex w-full flex-col space-y-3">
                        <input name="userName" value={registerInput.userName} onChange={handleRegisterInput} placeholder = "Nom d'utilisateur" type="text" className = "focus:border-main placeholder:text-xs text-sm p-2 border border-gray-100 outline-none text-gray-600" />
                        <input name="email" value={registerInput.email} onChange={handleRegisterInput} placeholder = "Email" type="text" className = "focus:border-main placeholder:text-xs text-sm p-2 border border-gray-100 outline-none text-gray-600" />
                        <input name="password" value={registerInput.password} onChange={handleRegisterInput} placeholder = "Password" type="password" className = "focus:border-main placeholder:text-xs text-sm p-2 border border-gray-100 outline-none text-gray-600" />
                        <input name="confirm" value={registerInput.confirm} onChange={handleRegisterInput} placeholder = "Confirmer votre Mot de passe" type="password" className = "focus:border-main placeholder:text-xs text-sm p-2 border border-gray-100 outline-none text-gray-600" />

                        <div className="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
                            <input name="isChecked" value={isChecked} onChange={handleCheckboxChange} type="checkbox" className="w-4 h-4 text-main bg-gray-100 border-gray-300 rounded checked:bg-main focus:ring-main dark:focus:ring-main dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label htmlFor="bordered-checkbox-2" className="w-full py-2 ml-2 text-xs font-medium text-gray-600 dark:text-gray-300">Complex owner</label>
                        </div>

                        <button className = "bg-main text-white flex items-center justify-center py-2 rounded text-sm" >
                                <span>S'inscrire</span>
                        </button>
                    </form>
                    <div className="grid grid-cols-3 gap-5">
                        <div onClick={authGoogle} className="cursor-pointer bg-red-600 text-white text-lg drop-shadow-md flex justify-center py-2 rounded">
                             <i className='bx bxl-google-plus'></i>
                        </div>
                        <div onClick={authFacebook} className="cursor-pointer bg-blue-600 text-white text-lg drop-shadow-md flex justify-center py-2 rounded">
                            <i className='bx bxl-facebook' ></i>
                        </div>
                        <div onClick={authTwitter} className="cursor-pointer border border-blue-500 text-white text-lg drop-shadow-md flex justify-center py-2 rounded">
                            <i className='bx bxl-twitter text-blue-500' ></i>
                        </div>
                    </div>
                    <div className = "flex items-center w-full justify-between" >
                        <p onClick={loginForm} className = "text-sm hover:text-main cursor-pointer font-semibold duration-300" >
                           Se connectez!
                        </p>
                        <p className = "text-sm hover:text-main cursor-pointer font-semibold duration-300" >
                            Mot de passe oublier ?
                        </p>
                    </div>
                    {
                        (registerInput.error_list.error)
                        &&
                        <div className="flex text-xs text-red-500 absolute -bottom-10">
                            {
                                registerInput.error_list.messageErr
                            }
                        </div>
                    }
                </div>
                {/* Login Modal */}
                <div  className="w-full flex flex-col space-y-4 login relative">
                    <h2 className = "text-2xl text-center font-bold text-gray-900 ">
                        Se connectez à votre compte
                    </h2>
                    <form onSubmit={loginSubmit} method="post"  className = "flex w-full flex-col space-y-3">
                        <input name="email" onChange={handleInput} value={loginInput.email} placeholder = "Adresse Email" type="text" className = "focus:border-main placeholder:text-xs text-sm p-2 border border-gray-100 outline-none text-gray-600" />
                        <input name="password" onChange={handleInput} value={loginInput.password} placeholder = "Mot de passe" type="password" className = "focus:border-main placeholder:text-xs text-sm p-2 border border-gray-100 outline-none text-gray-600" />
                        <button className = "bg-main text-white flex items-center justify-center py-2 rounded text-sm" >
                                <span>Se connectez</span>
                        </button>
                    </form>
                    <div className="grid grid-cols-3 gap-5">
                        <div onClick={authGoogle} className="cursor-pointer bg-red-600 text-white text-lg drop-shadow-md flex justify-center py-2 rounded">
                             <i className='bx bxl-google-plus'></i>
                        </div>
                        <div onClick={authFacebook} className="cursor-pointer bg-blue-600 text-white text-lg drop-shadow-md flex justify-center py-2 rounded">
                            <i className='bx bxl-facebook' ></i>
                        </div>
                        <div onClick={authTwitter} className="cursor-pointer border border-blue-500 text-white text-lg drop-shadow-md flex justify-center py-2 rounded">
                            <i className='bx bxl-twitter text-blue-500' ></i>
                        </div>
                    </div>
                    <div className = "flex items-center w-full justify-between" >
                        <p onClick={registerForm} className = "text-sm hover:text-main cursor-pointer font-semibold duration-300" >
                           Inscription içi!
                        </p>
                        <p className = "text-sm hover:text-main cursor-pointer font-semibold duration-300" >
                            Mot de passe oublier ?
                        </p>
                    </div>
                    {
                        (loginInput.error_list.error)
                        &&
                        <div className="flex text-xs text-red-500 absolute -bottom-10">
                            {
                                loginInput.error_list.messageErr
                            }
                        </div>
                    }
                </div>
            </div>
            <img alt="logo" src="https://res.cloudinary.com/realmoro/image/upload/v1683230137/logo_lfhogd.png" className="absolute bottom-5 right-5 w-24" />
            {/* <img alt="logo-a" src="images/logo-a.png" className="absolute top-5 right-[52%] w-24" /> */}
            <img src="https://res.cloudinary.com/realmoro/image/upload/v1683230302/authModal_etvej9.jpg" className="hidden md:flex w-1/2 object-right object-cover h-full "/>
        </div>
    </div>
  )
}