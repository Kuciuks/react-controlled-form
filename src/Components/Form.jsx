import { useForm } from "react-hook-form"
import '../Styles/Form.css'


export default function Form(){
    
  const {register, handleSubmit, formState: {errors}} = useForm()

  const submittedData = (data) =>{
    console.log(data)
  }

  return(
    <form onSubmit={handleSubmit(submittedData)}>
      <fieldset>
        <label htmlFor="user-first-name">First name: </label>
        <input {...register("firstName", {
          pattern: { //Pattern validation
            value: /^[A-Za-z\s]+$/, //Pattern
            message: "Using invalid symbols!" //Error message
          },
          required: "Required field!" //Error message
        })}
        id="user-first-name"></input>
        <p>{errors.firstName?.message}</p>
      </fieldset>
      <fieldset>
        <label htmlFor="user-last-name">Last name: </label>
        <input {...register("lastName", {
          pattern: { //Pattern validation
            value: /^[A-Za-z\s]+$/, //Pattern
            message: "Using invalid symbols!" //Error message
          },
          required: "Required field!", //Error message
        })}
        id="user-last-name"></input>
        <p>{errors.lastName?.message}</p>
      </fieldset>
      <fieldset>
        <label htmlFor="user-gender">Choose your gender: </label>
        <select {...register("gender")} id="user-gender" defaultValue="Select">
          <option disabled value="Select">Select</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <p>{errors.gender?.message}</p>
      </fieldset>
      <fieldset>
        <label htmlFor="user-email">E-mail: </label>
        <input {...register("emailAddress",{
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "Using invalid symbols"
          }
        })}
        id="user-email"></input>
        <p>{errors.emailAddress?.message}</p>
      </fieldset>

      <button type="submit">Submit</button>
    </form>
  )
}