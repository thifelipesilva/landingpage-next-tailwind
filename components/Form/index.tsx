const Form = () => {
    return(
        <form  className="flex flex-col items-center border-b border-solid border-b-azulEscuro gap-3 p-3 md:mx-20">
            <input
             type={'text'}
             placeholder={'Seu melhor e-mail'}
             className={'bg-gray-200 p-2 w-full text-azulEscuro md:w-2/4'}
            />
            <div className="flex flex-col gap-3 md:gap-1 w-full md:flex-row justify-center">
                <input
                 type={'text'} 
                 placeholder={'Nome'}
                 className={'bg-gray-200 p-2 text-azulEscuro md:w-1/4'}
                />
                <input
                 type={'text'}
                 placeholder={'Empresa'}
                 className={'bg-gray-200 p-2 text-azulEscuro md:w-1/4'}
                />
            </div>
            <input
             type={'text'}
             placeholder={'Assunto'}
             className={'bg-gray-200 p-2 w-full text-azulEscuro md:w-2/4'}
            />

            <textarea
             className="w-full bg-gray-200 h-60 md:w-2/4"
            />
            <div className="w-full px-1 md:flex md:justify-center">
                <div className="md:w-1/4">
                    <input
                     type="checkbox"
                     placeholder="Não sou um robô" 
                     id="check" 
                     name="ckeck"
                     className="p-3 mb-2 "
                    />                    
                    <label
                     htmlFor="check"
                     className="text-azulEscuro ml-2 text-[14px]"
                    >
                        Não sou um robô
                    </label>
                </div>
                <button className="bg-verde w-full md:w-1/4 md:items-center p-2 text-white">
                    Entre em contato
                </button>
            </div>
        </form>
    );
}

export default Form;