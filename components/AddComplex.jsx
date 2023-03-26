import axios from 'axios';
import React, { useState } from 'react'
import Select from 'react-select'
import swal from 'sweetalert2'
import { setCookie,getCookie } from 'cookies-next'

export default function AddComplex() {
    const [x,setX] = useState(1);

    const nextStep =()=>{
      console.log("🚀 ~ file: AddComplex.jsx:6 ~ AddComplex ~ x:", x)

        const first= document.querySelector('.first')
        const second= document.querySelector('.second')
        const last= document.querySelector('.last')

        const complex= document.querySelector('.complex')
        const type= document.querySelector('.type')
        const field= document.querySelector('.field')

        if(x==1){
          if(addComplex()==true){

            complex.classList.remove('grid')
            complex.classList.add('hidden')
    
            type.classList.remove('hidden')
            type.classList.add('grid')
  
            first.classList.remove('active')
            first.classList.add('bg-white')
            first.classList.add('text-gray-300')
  
            second.classList.remove('bg-white')
            second.classList.remove('text-gray-300')
            second.classList.add('active')
            setX((prevX) => prevX + 1);
          }
        }
        else{
          setX((prevX) => prevX + 1);

          type.classList.remove('grid')
          type.classList.add('hidden')
  
          field.classList.remove('hidden')
          field.classList.add('grid')

          second.classList.remove('active')
          second.classList.add('bg-white')
          second.classList.add('text-gray-300')

          last.classList.remove('bg-white')
          last.classList.remove('text-gray-300')
          last.classList.add('active')
        }

        

        

        
        
    }
    const [complexInput,setComplex] = useState({
      name:'',
      address:'',
      lat:'',
      long:'',
      desc:'',
      error_list:[],
  });

  const [category,setCategory] = useState({
    category:'',
    price:''
  })
 
  const handleCategoryInput =(e) =>{
    e.persist();
    setCategory({...category,[e.target.name]:e.target.value});
    
}

const [categoriesList, setCategoriesList] = useState([]);

const AddCategory = () => {
  setCategoriesList([...categoriesList, category]);
  category.forEach(element => {
    element.value="";
  });
};

const [field,setField] = useState({
  name:'',
  category:''
})

const handleFieldInput =(e) =>{
  e.persist();
  setField({...field,name:e.target.value});
}


const [fieldList, setFieldList] = useState([]);

const AddField = () => {
  setFieldList([...fieldList, field]);
};

  const handleComplexInput =(e) =>{
    e.persist();
    setComplex({...complexInput,[e.target.name]:e.target.value});
   
}
    const addComplex =(e)=>{
      if (complexInput.name=="" || complexInput.address=="" || complexInput.lat=="" || complexInput.long=="" || complexInput.desc=="" || zone == null)
      {
          setComplex({...complexInput,error_list:{'messageErr':"Un champs est vide",'error':true}})
          return false
      }
      else{
        const data = {
          name:complexInput.name,
          adresse:complexInput.address,
          lattitude:complexInput.lat,
          longtitude:complexInput.long,
          description:complexInput.desc,
          zone:zone.value,
          jwt:getCookie('jwt')
        }
        console.log("🚀 ~ file: AddComplex.jsx:129 ~ addComplex ~ data:", data)
        // axios.post('http://127.0.0.1:8000/entity/complexe-create/',data).then(res => {
                      
        // if(res.data.status === 200){
        //    /* setCookie('name',res.data.name);
        //     setCookie('email',res.data.email);
        //     setCookie('public_id',res.data.public_id);
        //     setCookie('id',res.data.id);
        //     setCookie('token',res.data.token);
        //     setCookie('name',res.data.name);
        //     setCookie('adress',res.data.adresse);
        //     setCookie('tel',res.data.tel);
        //     setCookie('image',res.data.image);
        //     if(res.data.admin){
        //         setCookie('admin',res.data.admin);
        //     }*/
        //     swal.fire("Complex add","","success");
            
        // }
        // else
        // {
        //     swal.fire("Echec !!",res.data.message,"warning");
        // }
    //})

        return true
      }

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


    const sumbitComplex =()=>{

     
      console.log("🚀 ~ file: AddComplex.jsx:65 ~ AddComplex ~ complexInput:", complexInput)
      console.log("🚀 ~ file: AddComplex.jsx:75 ~ handleCategoryInput ~ categoriesList:", categoriesList)
      console.log("🚀 ~ file: AddComplex.jsx:100 ~ AddComplex ~ setFieldList:", fieldList)


    }
      const [zone,setZone] = useState(null)
      
      const handlerZone = (e) =>{
        setZone(e)
      }

      const [fieldCategory,setFieldCategory] = useState(null)
      
      const handlerFieldCategory = (e) =>{
        setFieldCategory(e)
        setField({ ...field, category: e });
      }
      

      const options = [
        { value: 1, label: 'Sidi Youssef' },
        { value: 2, label: 'Lmhamid' },
        { value: 3, label: 'Massira' }
      ]
  return (
    <div className="flex flex-col p-7 ">
       <div className=" flex items-center ">
        <div className="rounded py-5 flex justify-center text-sm  px-10 active first x">
                <h1>First step</h1>
            </div>
            <div className="rounded py-5 flex justify-center text-sm px-10 text-gray-300 bg-white second x">
                <h1>Second Step</h1>
            </div>
            <div className="rounded py-5  flex justify-center text-sm px-10 text-gray-300 bg-white last x">
                <h1>Final Step</h1>
            </div>
       </div>
       {/* First Step */}
        <div className="bg-white grid grid-cols-2 py-5 px-5 gap-5 complex">
            <h1 className="col-span-2 font-semibold text-gray-500 border-b-2 border-main w-max">Add your complex</h1>
            <input name="name" value={complexInput.name} onChange={handleComplexInput}  placeholder = "Name of the complex" type="text" className = "focus:border-main placeholder:text-xs text-sm p-2 border border-gray-100 outline-none text-gray-600" />
            <input name="address" value={complexInput.address} onChange={handleComplexInput}  placeholder = "Address of the complex" type="text" className = "focus:border-main placeholder:text-xs text-sm p-2 border border-gray-100 outline-none text-gray-600" />
            <input name="lat" value={complexInput.lat} onChange={handleComplexInput}  placeholder = "Latitude of the complex" type="text" className = "focus:border-main placeholder:text-xs text-sm p-2 border border-gray-100 outline-none text-gray-600" />
            <input name="long" value={complexInput.long} onChange={handleComplexInput}  placeholder = "Longitude of the complex" type="text" className = "focus:border-main placeholder:text-xs text-sm p-2 border border-gray-100 outline-none text-gray-600" />
            <Select
                        name="zone"
                            options={options}
                            styles={customStyles}
                            value={zone}
                            placeholder="Complex Zone"
                            onChange={handlerZone}
                             />
            <textarea name="desc" rows="1" value={complexInput.desc} onChange={handleComplexInput}  placeholder="Desciprtion" className="focus:border-main h-full outline-none border border-gray-100 text-sm py-2 px-3 rounded-md" />           
            

            <button onClick={nextStep} className="bg-main py-2 col-span-2 w-1/2  text-white text-xs rounded">Valid and go to the next Step</button>
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
        <div className="bg-white  grid-cols-2 py-5 px-5 gap-5 hidden type">
            <h1 className="col-span-2 font-semibold text-gray-500 border-b-2 border-main w-max">Add your Categories</h1>
            <input name="category" value={category.category} onChange={handleCategoryInput}  placeholder = "Field Category" type="text" className = "focus:border-main placeholder:text-xs text-sm p-2 border border-gray-100 outline-none text-gray-600" />
            <input name="price"  value={category.price} onChange={handleCategoryInput} placeholder = "Price of the field" type="text" className = "focus:border-main placeholder:text-xs text-sm p-2 border border-gray-100 outline-none text-gray-600" />
          <div className="flex items-center col-span-2 space-x-5">
              <button onClick={AddCategory} className="bg-white border flex items-center justify-center space-x-2 border-main py-2  w-1/4  text-gray-600 text-xs rounded">
              <i class='bx bxs-plus-square'></i>
                <span>Add another Category</span>
                </button>
              <button onClick={nextStep} className="bg-main py-2  w-1/4  text-white text-xs rounded">Valid and go to the next Step</button>
          </div>
        </div>
        {/* Final Step */}
        <div className="bg-white  grid-cols-2 py-5 px-5 gap-5 hidden field">
            <h1 className="col-span-2 font-semibold text-gray-500 border-b-2 border-main w-max">Add Fields</h1>
            <input name="name" value={field.name} onChange={handleFieldInput}  placeholder = "Name of the field" type="text" className = "focus:border-main placeholder:text-xs text-sm p-2 border border-gray-100 outline-none text-gray-600" />
            <Select
                        name="fieldCategory"
                            options={ categoriesList.map((item, index) => {
                              return { value: index, label: item.category };
                            })}
                            styles={customStyles}
                            value={fieldCategory}
                            placeholder="Complex Zone"
                            onChange={handlerFieldCategory}
                             />
          <button onClick={AddField} className="bg-white border flex items-center justify-center space-x-2 border-main py-2  w-1/4  text-gray-600 text-xs rounded">
              <i class='bx bxs-plus-square'></i>
                <span>Add another Field</span>
                </button>
            <button onClick={sumbitComplex} className="bg-main py-2  text-white text-xs rounded">Valid and go to the next Step</button>
        </div>
    </div>
  )
}
