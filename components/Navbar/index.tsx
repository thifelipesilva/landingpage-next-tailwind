import logo from '../../public/logo.png';
import { IoClose, IoMenu } from "react-icons/io5";
import { useState } from 'react';
const Navbar = () => {

    let links =[
        {name:"Inicio",link:"/"},
        {name:"Conheça",link:"/conheca"},
        {name:"Funcionalidades",link:"/funcionalidades"},
        {name:"Contato",link:"/contato"},
    ];

    const [menu, setMenu] = useState(false);


    return(
        <nav className="bg-azulEscuro shadow-lg w-full fixed top-0 left-0 p-3 ">
            <div className="md:flex items-center justify-between">

                <div className='bg-verde w-32 h-8'></div>

                <div className='absolute right-3 top-3 cursor-pointer md:hidden'
                    onClick={() => setMenu(!menu)}
                >
                  {
                    menu ? <IoClose  className='h-7 w-7 text-white'/> : <IoMenu  className='h-7 w-7 text-white'/>
                  }  
                    
                </div>
                <ul className={`bg-azulEscuro md:flex md:items-center md:pb-0 mt-0 pb-6 absolute md:static md:z-auto z-[1] left-0 w-full md:w-auto md:gap-6 md:pl-0 pl-4 transition-all duration-700 ease-in ${menu ? 'top-20' : 'top-[-490px]'}`}>
                    {
                        links.map(link => (
                            <li key={link.name} className='text-3 md:my-0 my-3'>
                                <a
                                 className='text-white cursor-pointer hover:underline hover:text-verde duration-200' 
                                 href={link.link}
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))
                    }
                     
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;