import Link from "next/link";

const Footer = () => {

    let links =[
        {name:"Inicio",link:"/"},
        {name:"Conheça",link:"/conheca"},
        {name:"Funcionalidades",link:"/funcionalidades"},
        {name:"Contato",link:"/contato"},
    ];

    return (
        <footer className="px-4 pt-8 pb-10 md:flex md:items-center md:justify-between md:mx-20">
            <div className='w-32 h-8 mx-auto md:m-0'>
                <img src="/logo-footer.png" alt="" />
            </div>
            <ul className='flex items-center justify-between px-1'>
                {
                    links.map(link => (
                        <li key={link.name} >
                            <Link href={link.link} legacyBehavior>
                                <a
                                    className='text-azulEscuro text-[14px] md:ml-1 cursor-pointer hover:underline hover:text-verde duration-200'

                                >
                                    {link.name}
                                </a>
                            </Link>
                        </li>
                    ))
                }

            </ul>
        </footer>
    );
};

export default Footer;