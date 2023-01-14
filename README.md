# create form steps


1 sudo npm create vite@latest
2 cd hook_forms
3 sudo npm install
4 code .
5 create form component
6 create component styles
7 npm install react-hook-form
8 import {useForm} from 'react-hook-form'
9 const {register,handleSubmit,watch,formState:{errors}} = useForm()
10 onSubmit={handleSubmit(onSubmit)}
11 const onSubmit = (data) => {
    console.log(data)
}
12 {...register('name',{
                required:true,
                minLength:3
            })}
13 {errors.name?.type === 'minLength' && <p>El nombre debe tener como minimo una longitud de tres carácteres</p>}
14 <p>{watch('password')}</p>
20 const {register,handleSubmit,watch,formState:{errors}} = useForm({
    defaultValues: {
        name:'Geronimo'
    }
});