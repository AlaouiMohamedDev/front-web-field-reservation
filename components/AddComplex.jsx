import axios from 'axios';
import React, { useState } from 'react'
import Select from 'react-select'
import swal from 'sweetalert2'
import { setCookie,getCookie } from 'cookies-next'
import {  useRouter } from 'next/router';
import BASE_URL from './global';


export default function AddComplex() {
  
  const router = useRouter();


    const [complexInput,setComplex] = useState({
      name:'',
      address:'',
      lat:'',
      long:'',
      desc:'',
      error_list:[],
  });

  const [category,setCategory] = useState({
    typeTerrain:'',
    price:'',
    complexeSportif:'',
    area:''
  })
 
  const handleCategoryInput =(e) =>{
    e.persist();
    setCategory({...category,[e.target.name]:e.target.value});
    setCategory(prevState => ({...prevState, complexeSportif: complexId}));
}

const resetCategory = () => {
  setCategory({
    typeTerrain:'',
    price:'',
    area:''
  });
}

const [categoriesList, setCategoriesList] = useState([]);

const AddCategory = () => {
  setCategoriesList([...categoriesList, category]);
  resetCategory()
};



const handleFieldInput =(e) =>{
  e.persist();
  setField({...field,[e.target.name]:e.target.value});

}

const resetField = () => {
  setField({
    name:'',
    category:'',
    url:'',
    number_of_players:'',
  });
  setImageSrc(null)
}
const [field,setField] = useState({
  name:'',
  category:'',
  number_of_players:'',
  url:''
})
const [fieldList, setFieldList] = useState([]);

const [imageSave,setImageSave] = useState();

const AddField = async () => {
  document.querySelector('.addField').classList.remove('hidden')
  document.querySelector('.addField').classList.add('inline')
  if(imageSrc != null){
      const body = new FormData();
      // console.log("file", image)
      body.append("file", imageSrc);  
      body.append("upload_preset","my-uploads")
      const response = await fetch('https://api.cloudinary.com/v1_1/kritirank/image/upload', {
      method: "POST",
      body:body
    }).then(
      r=>r.json()
      );

      setFieldList([...fieldList, {
        ...field,
        url: response.secure_url
      }]);
      document.querySelector('.addField').classList.add('hidden')
      document.querySelector('.addField').classList.remove('inline')
      resetField()
    }

};

  const handleComplexInput =(e) =>{
    e.persist();
    setComplex({...complexInput,[e.target.name]:e.target.value});
   
}
const [complexId, setComplexId] = useState(null);
      //async
     const  addComplex  = async (e)=>{
      if (complexInput.name=="" || complexInput.address=="" || complexInput.lat=="" || complexInput.long=="" || complexInput.desc=="" || zone == null)
      {
          setComplex({...complexInput,error_list:{'messageErr':"Un champs est vide",'error':true}})
          
          return false
      }

      else{
        document.querySelector('.addComplexe').classList.remove('hidden')
        document.querySelector('.addComplexe').classList.add('inline')
        if(imageSrc != null){
            const body = new FormData();
            // console.log("file", image)
            body.append("file", imageSrc);  
            body.append("upload_preset","my-uploads")
            const response = await fetch('https://api.cloudinary.com/v1_1/kritirank/image/upload', {
            method: "POST",
            body:body
          }).then(
            r=>r.json()
            );

        const data = {

              name:complexInput.name,
              adresse:complexInput.address,
              lattitude:complexInput.lat,
              longtitude:complexInput.long,
              description:complexInput.desc,
              url:response.secure_url,
              zone:zone.value,
          jwt:getCookie('jwt')
        }
        console.log("🚀 ~ file: AddComplex.jsx:129 ~ addComplex ~ data:", data)
        axios.post(`${BASE_URL}/entity/complexe-create/`,data).then(res => {
                      
        if(res.data.status === 200){
          document.querySelector('.addComplexe').classList.remove('inline')
          document.querySelector('.addComplexe').classList.add('hidden')
          setComplexId(res.data.complexe_id)
           /* setCookie('name',res.data.name);
            setCookie('email',res.data.email);
            setCookie('public_id',res.data.public_id);
            setCookie('id',res.data.id);
            setCookie('token',res.data.token);
            setCookie('name',res.data.name);
            setCookie('adress',res.data.adresse);
            setCookie('tel',res.data.tel);
            setCookie('image',res.data.image);
            if(res.data.admin){
                setCookie('admin',res.data.admin);
            }*/
            swal.fire("Complex add","","success");
            
            const first= document.querySelector('.first')
            const second= document.querySelector('.second')
            const last= document.querySelector('.last')
    
            const complex= document.querySelector('.complex')
            const type= document.querySelector('.type')
            const field= document.querySelector('.field')

            complex.classList.remove('grid')
            complex.classList.add('hidden')
    
            type.classList.remove('hidden')
            type.classList.add('grid')
  
            first.classList.remove('activeM')
            first.classList.add('bg-white')
            first.classList.add('text-gray-300')
  
            second.classList.remove('bg-white')
            second.classList.remove('text-gray-300')
            second.classList.add('activeM')

            setImageSrc(null)
            return true
            
        }
        else
        {
            swal.fire("Echec !!",res.data.message,"warning");
            return false

        }
        })
      }

        return true
      }
      return true
    }

    const customStyles = {

        menuList :()=>({
            backgroundColor:'#ffffff',
            display:'absolute',
          }),
        dropdownIndicator :()=>({
          color:'gray',
          padding:'0px 5px'
        }),
        option: (provided, state) => ({
          ...provided,
          width:'inherit',
          borderBottom: '1px ',
          color: 'black',
          backgroundColor:'#ffffff',
        }), placeholder: (provided) => ({
        ...provided,
        fontSize: '13px',
        color : '#9CA3C1' // add font size here
      }),
        control: (provided, state) => ({
          // none of react-select's styles are passed to <Control />
          display: 'flex',
          outline:'none',
          border:'1px solid #E9E9E9',
          borderRadius:'4px',
          backgroundColor:'#ffffff',
          color:'#ffffff',
          boxShadow: state.isFocused ? '0 0 0 1px #03C988' : 'none',

        }),
        singleValue: (provided, state) => {
          const opacity = state.isDisabled ? 0.5 : 1;
          const transition = 'opacity 300ms';
            
          return { ...provided, opacity, transition,color:"black",fontSize: '14px' };
        }
    }

    const [categoryError,setCategoryError]= useState(null)

    const addCategories = () =>{
            if(categoriesList.length == 0)
            {
              setCategoryError('Please add at least one category')
            }

      const data = {
        categories :categoriesList,
        jwt:getCookie('jwt')
      }

      axios.post(`${BASE_URL}/entity/fieldCategory-create/`,data).then(res => {
                      
        if(res.data.status === 200){
           /* setCookie('name',res.data.name);
            setCookie('email',res.data.email);
            setCookie('public_id',res.data.public_id);
            setCookie('id',res.data.id);
            setCookie('token',res.data.token);
            setCookie('name',res.data.name);
            setCookie('adress',res.data.adresse);
            setCookie('tel',res.data.tel);
            setCookie('image',res.data.image);
            if(res.data.admin){
                setCookie('admin',res.data.admin);
            }*/
       swal.fire("Categories added","","success");


            const first= document.querySelector('.first')
            const second= document.querySelector('.second')
            const last= document.querySelector('.last')

            const complex= document.querySelector('.complex')
            const type= document.querySelector('.type')
            const field= document.querySelector('.field')

            type.classList.remove('grid')
            type.classList.add('hidden')
    
            field.classList.remove('hidden')
            field.classList.add('grid')
  
            second.classList.remove('activeM')
            second.classList.add('bg-white')
            second.classList.add('text-gray-300')
  
            last.classList.remove('bg-white')
            last.classList.remove('text-gray-300')
            last.classList.add('activeM')
            
        }
        else
        {
            swal.fire("Echec !!",res.data.message,"warning");
            return false
        }
      })

       return true

    }


    //async
    const sumbitComplex = ()=>{

      if(fieldList.length != 0)
      {

        const data = {
          fields:fieldList,
          jwt:getCookie('jwt')
        }
        console.log("🚀 ~ file: AddComplex.jsx:261 ~ sumbitComplex ~ data:", data)
        axios.post(`${BASE_URL}/entity/field-create/`,data).then(res => {
                        
          if(res.data.status === 200){
            /* setCookie('name',res.data.name);
              setCookie('email',res.data.email);
              setCookie('public_id',res.data.public_id);
              setCookie('id',res.data.id);
              setCookie('token',res.data.token);
              setCookie('name',res.data.name);
              setCookie('adress',res.data.adresse);
              setCookie('tel',res.data.tel);
              setCookie('image',res.data.image);
              if(res.data.admin){
                  setCookie('admin',res.data.admin);
              }*/
              swal.fire("Fields added","","success");
              router.push('/owner')
              
          }
          else
          {
              swal.fire("Echec !!",res.data.message,"warning");
              return false
          }
        })
      }


    }
      const [zone,setZone] = useState(null)
      
      const handlerZone = (e) =>{
        setZone(e)
      }

      const [fieldCategory,setFieldCategory] = useState(null)
      
      const handlerFieldCategory = (e) =>{
        setFieldCategory(e)
        setField({ ...field, category: e.label });
      }
      

      const options = [
        { value: 1, label: 'Sidi Youssef' },
        { value: 2, label: 'Lmhamid' },
        { value: 3, label: 'Massira' }
      ]

      const [imageSrc, setImageSrc] = useState();
      const [imageSrcField, setImageSrcField] = useState();
      const [uploadData, setUploadData] = useState();

      /**
       * handleOnChange
       * @description Triggers when the file input changes (ex: when a file is selected)
       */
    
      function handleOnChange(changeEvent) {
        const reader = new FileReader();
    
        reader.onload = function(onLoadEvent) {
          setImageSrc(onLoadEvent.target.result);
          setUploadData(undefined);
        }
    
        reader.readAsDataURL(changeEvent.target.files[0]);
      }


    
  return (
    // col-span-3 2xl:col-span-4
    <div className='mt-10 hidden addComplex'>
          <div className="p-7 flex flex-col  space-y-2">
            <h1 className="text-2xl text-Cblue font-bold">Complex <c className="text-main">Configuration</c></h1>
            <div className='flex items-center space-x-2 '>
              <span className='bg-main h-1 w-[200px] rounded'></span>
            </div>
          </div>
          <div className="flex flex-col p-7 ">
            <div className=" flex items-center ">
                <div className="rounded py-5 flex justify-center text-sm px-5 md:px-10 activeM first x">
                        <h1>First step</h1>
                </div>
                <div className="rounded py-5 flex justify-center text-sm px-5 md:px-10 text-gray-300 bg-white second x">
                    <h1>Second Step</h1>
                </div>
                <div className="rounded py-5  flex justify-center text-sm px-5 md:px-10 text-gray-300 bg-white last x">
                    <h1>Final Step</h1>
                </div>
            </div>
            {/* First Step */}
              <div className="bg-white grid grid-cols-1 md:grid-cols-2 py-5 px-5 gap-5 complex">
                  <h1 className="col-span-2 font-semibold text-gray-500 border-b-2 border-main w-max">Add your complex</h1>
                  <input name="name" value={complexInput.name} onChange={handleComplexInput}  placeholder = "Name of the complex" type="text" className = "col-span-2 md:col-span-1 focus:border-main placeholder:text-xs text-sm p-2 border border-gray-100 outline-none text-gray-600" />
                  <input name="address" value={complexInput.address} onChange={handleComplexInput}  placeholder = "Address of the complex" type="text" className = "col-span-2 md:col-span-1 focus:border-main placeholder:text-xs text-sm p-2 border border-gray-100 outline-none text-gray-600" />
                  <input name="lat" value={complexInput.lat} onChange={handleComplexInput}  placeholder = "Latitude of the complex" type="text" className = "col-span-2 md:col-span-1 focus:border-main placeholder:text-xs text-sm p-2 border border-gray-100 outline-none text-gray-600" />
                  <input name="long" value={complexInput.long} onChange={handleComplexInput}  placeholder = "Longitude of the complex" type="text" className = "col-span-2 md:col-span-1 focus:border-main placeholder:text-xs text-sm p-2 border border-gray-100 outline-none text-gray-600" />
                  
                  <textarea name="desc" rows="1" value={complexInput.desc} onChange={handleComplexInput}  placeholder="Desciprtion" className="col-span-2 md:col-span-1 focus:border-main h-full outline-none border border-gray-100 text-sm py-2 px-3 rounded-md" />           
                  <Select
                              name="zone"
                                  options={options}
                                  styles={customStyles}
                                  value={zone}
                                  placeholder="Complex Zone"
                                  onChange={handlerZone}
                                  />
                  <div className="col-span-2 md:col-span-1 flex  items-center justify-center ">
                        <label for="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                <svg aria-hidden="true" className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> your Complexe image</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                            </div>
                            <input name='file' id="dropzone-file" type="file" className="hidden" onChange={handleOnChange} />
                        </label>
                    </div> 
                    <div className="col-span-2 md:col-span-1">
                      <div className="h-64 w-full flex items-center justify-center border border-gray-100 rounded">
                        {imageSrc == null ? 
                            <img src="./images/inputFile.jpg" className='rounded object-cover w-full h-full opacity-25'/> 
                        : 
                        <img src={imageSrc} className='rounded object-cover h-full w-full'/>
                        } 
                      </div>

                    </div>



                  <button onClick={addComplex} className="bg-main py-2 col-span-2 w-1/2 flex items-center justify-center  text-white text-xs rounded">
                  <div role="status">
                            <svg class="hidden addComplexe mr-2 w-5 h-5 text-gray-200 animate-spin dark:text-gray-600 fill-custGreen" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                            </svg>
                            <span class="sr-only">Loading...</span>
                  </div>
                    Valid and go to the next Step
                  </button>
                  {
                              (complexInput.error_list.error)
                              &&
                              <div className="flex text-xs text-red-500">
                                  {
                                      complexInput.error_list.messageErr
                                  }
                              </div>
                  }
              </div>
              {/* Second Step */}
              <div className="bg-white  grid-cols-1 md:grid-cols-2 py-5 px-5 gap-5 hidden type">
                  <h1 className="col-span-2 font-semibold text-gray-500 border-b-2 border-main w-max">Add your Categories</h1>
                  <input name="typeTerrain" value={category.typeTerrain} onChange={handleCategoryInput}  placeholder = "Field Category" type="text" className = "col-span-2 md:col-span-1 focus:border-main placeholder:text-xs text-sm p-2 border border-gray-100 outline-none text-gray-600" />
                  <input name="price"  value={category.price} onChange={handleCategoryInput} placeholder = "Price of the field" type="text" className = "col-span-2 md:col-span-1 focus:border-main placeholder:text-xs text-sm p-2 border border-gray-100 outline-none text-gray-600" />
                  <input name="area"  value={category.area} onChange={handleCategoryInput} placeholder = "Area of the field" type="text" className = "col-span-2 md:col-span-1 focus:border-main placeholder:text-xs text-sm p-2 border border-gray-100 outline-none text-gray-600" />
                <div className="flex items-center col-span-2 space-x-5">
                    <button onClick={AddCategory} className="bg-white border flex items-center justify-center space-x-2 border-main py-2  w-1/4  text-gray-600 text-xs rounded">
                    <i className='bx bxs-plus-square'></i>
                      <span>Add another Category</span>
                      </button>
                    <button onClick={addCategories} className="bg-main py-2  w-1/4  text-white text-xs rounded">Valid and go to the next Step</button>
                </div>
                {categoryError != null 
                  &&
                  <span className='text-sm text-red-500'>{categoryError}</span>
                }
              </div>
              {/* Final Step */}
              <div className="bg-white  grid-cols-1 md:grid-cols-2 py-5 px-5 gap-5 hidden field">
                  <h1 className="col-span-2 font-semibold text-gray-500 border-b-2 border-main w-max">Add Fields</h1>
                  <input name="name" value={field.name} onChange={handleFieldInput}  placeholder = "Name of the field" type="text" className = "col-span-2 md:col-span-1 focus:border-main placeholder:text-xs text-sm p-2 border border-gray-100 outline-none text-gray-600" />
                  <input name="number_of_players" value={field.number_of_players} onChange={handleFieldInput}  placeholder = "Number of players field" type="text" className = "col-span-2 md:col-span-1 focus:border-main placeholder:text-xs text-sm p-2 border border-gray-100 outline-none text-gray-600" />
                  
                  <Select
                              name="fieldCategory"
                                  options={ categoriesList.map((item, index) => {
                                    return { value: index, label: item.typeTerrain };
                                  })}
                                  styles={customStyles}
                                  value={fieldCategory}
                                  placeholder="Field Category"
                                  onChange={handlerFieldCategory}
                                  
                                  />
                  <div></div>
                        <div className="flex col-span-2 md:col-span-1 items-center justify-center ">
                            <label for="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                    <svg aria-hidden="true" className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> your Complexe image</p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                </div>
                                <input name='file' id="dropzone-file" type="file" className="hidden" onChange={handleOnChange} />
                            </label>
                        </div> 
                        <div className="col-span-2 md:col-span-1">
                          <div className="h-64 w-full flex items-center justify-center border border-gray-100 rounded">
                            {imageSrc== null ? 
                                <img src="./images/inputFile.jpg" className='rounded object-cover h-full w-full opacity-25'/> 
                            : 
                            <img src={imageSrc} className='rounded object-cover h-full w-full'/>
                            } 
                          </div>

                        </div>

                    <div className="col-span-2 flex flex-col md:flex-row items-center w-full space-y-2 md:space-y-0 md:space-x-6">
                        <button onClick={AddField} className="bg-white border flex items-center justify-center space-x-2 border-main py-2 w-full md:w-1/4  text-gray-600 text-xs rounded">
                              <div role="status">
                                      <svg class="hidden addField mr-2 w-5 h-5 text-gray-200 animate-spin dark:text-gray-600 fill-custGreen" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                          <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                                      </svg>
                                      <span class="sr-only">Loading...</span>
                            </div>
                            <i className='bx bxs-plus-square'></i>
                              <span>Add another Field</span>
                          </button>
                          <button onClick={sumbitComplex} className="bg-main py-2 w-full md:w-2/4 text-white text-xs rounded">Valid and go to the next Step</button>
                    </div>
              </div>
          </div>
    </div>
  )
}
