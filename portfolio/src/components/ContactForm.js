import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useEffect } from "react";
import Footer from './Footer'

export  function ContactForm() {
  const schema = z.object({
    name: z.string().min(1, { message: "🖊️Please Enter your Name" }),
    mobile: z
      .number({
   
    invalid_type_error: "🖊️Mobile Number is required"
})
      .min(1000000000, { message: "Number is small" })
      .max(9999999999, { message: "Number is not valid!" })
     
      ,
    email: z
      .string()
      .min(1, { message: "🖊️Please Enter your Email Id" })
      .email("This is not a valid email."),
      message:z.string().min(1,{message:"🖊️Write and send Something"})
    // .refine((e) => e === "abcd@fg.com", "This email is not in our database") // change logic
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });


  
const getLocalData = () => {
  const lists = localStorage.getItem("mytodolist")

  if(lists){
      return JSON.parse(lists)
  }else{
      return []
  }
}


let items={};
useEffect(() => {localStorage.setItem("mytodolist", JSON.stringify(items))},[items]);

  return (
    <div id="Contact-divv">
  <div className="cheaders">
      <h5>CONTACT ME</h5>
      <h3 >Fill Form</h3>
      </div>
    <form onSubmit={handleSubmit((d) => {items=d;console.log(items)})}>
   

      <div id="Contact-div">
    
        <div className="input-div">
          <input
            {...register("name")}
            type="text"
            placeholder="Enter your Name"
          />
          {errors.name?.message && <p className="margin-5">{errors.name?.message}</p>}
          <input {...register("email")} placeholder="Enter your Email" />
          {errors.email?.message && <p className="margin-5">{errors.email?.message}</p>}
          <input
            {...register("mobile", { valueAsNumber: true,required:true })}
            type="number"
            placeholder="Enter your Mobile Number"
          />
          {errors.mobile?.message && <p className="margin-5">{errors.mobile?.message}</p>}
          <input onClick={getLocalData} className="submit-btn" type="submit" />
        </div>

        <div className="Message-input">
          <textarea  {...register("message")}placeholder="Enter your Message here" />
          {errors.message?.message && <p className="margin-5">{errors.message?.message}</p>}
        </div>
      </div>
    </form>
    <Footer/>
    </div>
  );
}
