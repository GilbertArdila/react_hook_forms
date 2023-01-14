import React from 'react';
import './styles.css';
import {useForm} from 'react-hook-form';
import {regex_email,regex_password,regex_phone} from '../regex/regex';

const Form = () => {

const {register,handleSubmit,watch,formState:{errors}} = useForm({
    defaultValues: {
        name:'Geronimo'
    }
});

const onSubmit = (data) => {
    console.log(data)
};

    return (
        <form className='Form' onSubmit={handleSubmit(onSubmit)}>

            <label htmlFor="name">Nombre</label>
            <input type="text" name="name" {...register('name',{
                required:true,
                minLength:3
            })}/>
            {errors.name?.type === 'minLength' && <p>El nombre debe tener como minimo una longitud de tres carácteres</p>}
            {errors.name?.type === 'required' && <p>El campo  nombre es obligatorio</p>}



            <label htmlFor="last_name">Apellido</label>
            <input type="text" name="last_name"  {...register('last_name',{
                  required:true,
                  minLength:3
            })} />
            {errors.last_name?.type === 'minLength' && <p>El apellido debe tener como minimo una longitud de tres carácteres</p>}
            {errors.last_name?.type === 'required' && <p>El campo  apellido es obligatorio</p>}



            <label htmlFor="email">Correo electronico</label>
            <input type="text" name="email"  {...register('email',{
                required:true,
                pattern: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
            })} />
             {errors.email?.type === 'required' && <p>El campo Correo electronico es obligatorio</p>}
             {errors.email?.type === 'pattern' && <p>El correo electronico ingresado no cumple con la estrucutura requerida</p>}



            <label htmlFor="phone">Tel&eacute;fono</label>
            <input type="tel" name="phone" id="phone" {...register('phone',{
               pattern: /^[0-9](\d{9})(?!.*[ +/_=-])$/,
                required:true
            })} />
             {errors.phone?.type === 'required' && <p>El campo Tel&eacute;fono es obligatorio</p>}
             {errors.phone?.type === 'pattern' && <p>El n&uacute;mero tel&eacute;fonico debe tener 10 d&iacute;gitos sin espacios ni carácteres especiales</p>}

            <label htmlFor="password">Contraseña</label>
            <input type='password' name="password" id="password" {...register('password',{
                required:true,
               pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$#*])(?!.*[ +-/_=]).{6,12}$/
            })}/>

            <p className='watch'>{watch('password')}</p>
            {errors.password?.type === 'required'  && <p>El campo Contraseña es obligatorio</p>}
            {errors.password?.type === 'pattern'  && <p>La Contraseña debe ser entre 6 y 12 car&aacute;cteres, almenos una letra en mayúscula, una letra en ,minúscula un número y un caráctere especial (@*$#)</p>}


    


            <label htmlFor='usuario'>Tipo de usuario</label>
            <select name="usuario" id="usuario" {...register('usuario')}>
                <option value="admin">Administrador</option>
                <option value="seller">Vendedor</option>
                <option value="ware-house">Bodega</option>
            </select>

            <input className='btn send' type="submit" value="Enviar" />


        </form>
    )
}

export { Form }