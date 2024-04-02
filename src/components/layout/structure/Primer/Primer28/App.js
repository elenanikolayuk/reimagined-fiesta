import { useForm } from "react-hook-form";
import './index2.css';

function App() {
  const {
    register,
    formState:{
      errors
    },
     handleSubmit,
     reset,
     watch,
    } = useForm({
      mode:"onBlur",
});


 const onSubmit = async (data) => {
    console.log(JSON.stringify(data))
    alert('Успешно зарегистрировано');
    reset();
 }

  return (
    <div>
      <h1 className="title">React Hook Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          <p className="form">Имя пользователя:</p>
        <input placeholder='Ваше имя'
        {...register('firstName',{
          required: "Введите имя",
          minLength: {
            value: 5,
            message: "Минимум 5 символов"
        }})}
        />
        </label>
        <div className="error" style={{height:20}}>
          {errors?.firstName && <p>{errors?.firstName.message || "Error!"}</p>}
        </div>
       

         <label>
         <p className="form">Электронная почта:</p>
         <input placeholder='name@mail.com'
         {...register('email',{
          required: "Введите email",
        pattern: {
        value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
        message: 'Введите корректный email',
           },
          })}
         />
         </label>
         <div className="error" style={{height:20}}>
          {errors?.email && <p>{errors?.email.message || "Error!"}</p>}
        </div>

         <label>
         <p className="form">Пароль:</p>
         <input type="password" placeholder='пароль'
         {...register('password',{
          required: "Нужно ввести пароль",
          min: {
            value: 6, 
            message: "Пароль должен содержать минимум 6 символов"
          },
          pattern: {
            value: /[A-Z]{1}/,
            message: 'Пароль должен содержать хотябы одну заглавную букву',
               },
         })}
         />
         </label>
         <div className="error" style={{height:20}}>
          {errors?.password && <p>{errors?.password.message || "Error!"}</p>}
        </div>

         <label>
         <p  className="form">Подтверждение пароля:</p>
         <input type="password" placeholder='пароль'
          {...register('cpassword',{
            required: "Нужно ввести пароль",
            validate: (value) => value === watch("password") || "Пароли не совпадают"
          })}
          />
         </label>
         <div className="error" style={{height:20}}>
          {errors?.cpassword && <p>{errors?.cpassword.message || "Error!"}</p>}
        </div>


         <label>
         <p className="form">Дата рождения:</p>
         <input type='date'
         {...register('dateBirth',{
          required: "Введите дату рождения",
         })}
         />
         </label>
         <div className="error" style={{height:20}}>
          {errors?.dateBirth && <p>{errors?.dateBirth.message || "Error!"}</p>}
        </div>


         <label>
         <p className="form">Пол:</p>
         <input type="radio" 
         {...register('gender', {
           required: 'Выберите пол' })}
           value="male" /> 
           <p className="form">мужской</p>
          <input type="radio" 
          {...register('gender', {
             required: 'Выберите пол' })}
             value="female" />
              <p className="form">женский</p>

         </label>
         <div className="error" style={{height:20}}>
          {errors?.gender && <p>{errors?.gender.message || "Error!"}</p>}
        </div>

         <label>
         <p className="form">Номер телефона:</p>
         <input type='tel' placeholder='+375333756644'
         {...register('number',{
          required: "Введите номер телефона",
         pattern: {
          value: /^([+]?[0-9\s]{12})$/,
        message: 'Не корректный номер',
           },
           minLength: {
            value: 13,
            message: "Не корректный номер",
          },
          maxLength:{
            value: 13,
            message: "Не корректный номер",
          
         }})}
         />
         </label>
         <div className="error" style={{height:20}}>
          {errors?.number && <p>{errors?.number.message || "Error!"}</p>}
        </div>

       <div>
        <button type='submit' > Зарегистрироваться </button>
       </div>
      </form>
    

    </div>
  );
}

export default App;
