import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import ReCAPTCHA from 'react-google-recaptcha';

type FormValues = {
    email: string,
    nome: string,
    empresa: string,
    assunto: string,
    texto: string
};

const Form = () => {

    

    const recaptchRef = React.createRef<ReCAPTCHA>()

    const { register, formState: { errors }, handleSubmit, reset } = useForm<FormValues>({
        
        defaultValues: {
            email: '',
            nome: '',
            empresa: '',
            assunto: '',
            texto: ''
        },
    });

    const enviarDados: SubmitHandler<FormValues> = data => {
        reset();
        console.log(data)
    };



    return(
        <form onSubmit={handleSubmit(enviarDados)}
         className="flex flex-col items-center border-b border-around-lg border-solid  border-b-azulEscuro gap-3 p-3 md:mx-20">

            <input             
             {...register("email", { required: true, minLength: 20 })}
             type={'email'}
             placeholder={'Seu melhor e-mail'}
             className={'bg-gray-200 p-2 w-full text-azulEscuro md:w-2/4 rounded-xl'}
             required
            />
            {errors.email && <span className="text-[10px] inline-block text-red-500">O campo e-mail precisa ter 20 palavras ou mais</span>}

            <div className="flex flex-col gap-3 md:gap-1 w-full md:flex-row justify-center">

                <input
                 {...register("nome", { required: true, minLength: 10 })}
                 type={'text'} 
                 placeholder={'Nome'}
                 className={'bg-gray-200 p-2 text-azulEscuro md:w-1/4 rounded-xl'}
                 required
                />
                
            
                <input
                 {...register("empresa", { required: true, minLength: 5 })}
                 type={'text'}
                 placeholder={'Empresa'}
                 className={'bg-gray-200 p-2 text-azulEscuro md:w-1/4 rounded-xl'}
                 required
                />
                

            </div>
            {errors.nome && <span className="text-[10px] inline-block text-red-500">O campo nome precisa ter dez palavras ou mais</span>}
            {errors.empresa && <span className="text-[10px] inline-block text-red-500">O campo nome da empresa precisa ter cinco palavras ou mais</span>}
            
            <input
             {...register("assunto", { required: true, minLength: 5 })}
             type={'text'}
             placeholder={'Assunto'}
             className={'bg-gray-200 p-2 w-full text-azulEscuro md:w-2/4 rounded-xl'}
             required
            />
            {errors.empresa && <span className="text-[10px] inline-block text-red-500">O campo nome da empresa precisa ter cinco palavras ou mais</span>}

            <textarea
             {...register("texto", { required: true, minLength: 20 })}
             className="w-full bg-gray-200 h-60 md:w-2/4 rounded-xl"
             required
            />
            {errors.texto && <span className="text-[10px] inline-block text-red-500">O campo texto precisa ter mais de vinte palavras</span>}

            <div className="w-full px-1 md:flex md:justify-center">

                <div className="md:w-1/4">
                    <input
                     type="checkbox"
                     placeholder="Não sou um robô" 
                     id="check" 
                     name="ckeck"
                     className="p-3 mb-2 "
                     required
                    />                    
                    <label
                     htmlFor="check"
                     className="text-azulEscuro ml-2 text-[14px]"
                    >
                        Não sou um robô
                    </label>
                </div>

                <button 
                 type="submit" 
                 className="bg-verde w-full md:w-1/4 md:items-center p-2 rounded-xl text-white">
                    Entre em contato
                </button>

            </div>

            <ReCAPTCHA
             ref={recaptchRef}
             sitekey="6Lfq6MoiAAAAANkwUdIoFTXPxga80Re7fF0VojfJ"
            />
            
        </form>
    );
}

export default Form;