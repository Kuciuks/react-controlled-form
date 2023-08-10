import { useForm } from "react-hook-form"

export default function Form(){
    
  const {register, handleSubmit, formState: {errors}} = useForm()

  const submittedData = (data) =>{
    console.log(data)
  }
  console.log(errors)

  return(
    <form onSubmit={handleSubmit(submittedData)}>
      <fieldset>
        <label htmlFor="fName">First name: </label>
        <input {...register("firstName", {
          pattern: { //Pattern validation
            value: /^[A-Za-z\s]+$/, //Pattern
            message: "Using invalid symbols!" //Error message
          },
          required: "Required field!" //Error message
        })}
        id="fName"></input>
        <p>{errors.firstName?.message}</p>
      </fieldset>
      <button type="submit">Submit</button>
    </form>
  )
}