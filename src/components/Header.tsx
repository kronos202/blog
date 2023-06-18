import React, { useState } from 'react'
import { images } from '../constants'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { MdKeyboardArrowDown } from 'react-icons/md'


type navItemProps = {
    name: string
    type: string
    item?: string[]
}


const navItemsInfo = [
    { name: "Home", type: 'link' },
    { name: "Articles", type: 'link' },
    { name: "Pages", type: 'dropdown', items: ['About us', 'Contact us'] },
    { name: "Pricing", type: 'link' },
    { name: "Faq", type: 'link' },
]


const NavItem = ({ name, type, item }: navItemProps) => {
    const [dropdown, setDropdown] = useState(false)

    const toggleDropdownHandler = () => {
        setDropdown((curState) => {
            return !curState
        })
    }
    return (
        <li className='relative group'>
            {type === 'link' ?
                (<>
                    <a href="/" className='px-4 py-2'>{name}</a>
                    <span className='cursor-pointer text-blue-500 absolute transition-all duration-500 font-bold right-0 top-0 group-hover:right-[90%] opacity-0 group-hover:opacity-100'>/</span>
                </>
                ) :
                (
                    <div className='flex flex-col items-center'>
                        <button className='px-4 py-2 flex gap-x-1 items-center' onClick={toggleDropdownHandler}>
                            <span>{name}</span>
                            <MdKeyboardArrowDown />
                        </button>
                        <div className={`${dropdown ? 'block' : 'hidden'} lg:hidden transition-all duration-500 pt-4 lg:absolute lg:bottom-0 lg:right-0 lg:transform lg:translate-y-[90%] lg:group-hover:block w-max`}>
                            <ul className='bg-dark-soft lg:bg-transparent text-center flex flex-col shadow-lg  rounded-lg overflow-hidden'>
                                {item?.map((page, index) => (
                                    <a key={index} href="/" className='hover:bg-dark-hard hover:text-white px-4 py-2 text-white lg:text-dark-soft'>
                                        {page}
                                    </a>
                                ))}
                            </ul>
                        </div>
                    </div>
                )}
        </li>
    )
}

const Header = () => {

    const [navIsVisible, setNavIsVisible] = useState(false)
    const navVisibilityHandler = () => {
        setNavIsVisible((curState) => {
            return !curState
        })
    }

    return (
        <section className='sticky top-0 left-0 right-0 z-50 bg-white'>
            <header className='container mx-auto px-5 flex justify-between py-4 items-center'>
                <div>
                    <img className='w-16' src={images.Logo} alt="Logo" />
                </div>
                <div className='z-50 lg:hidden'>{navIsVisible ? (<AiOutlineClose className='w-6 h-6' onClick={navVisibilityHandler} />) : (<AiOutlineMenu className='w-6 h-6' onClick={navVisibilityHandler} />)}</div>
                <div className=
                    {`${navIsVisible ? "right-0" : "-right-full"} 
                mt-[56px] transition-all duration-300 lg:mt-0 
                rounded-lg  lg:bg-transparent z-[49] 
                flex fixed lg:static flex-col justify-center w-full 
                lg:w-auto lg:justify-end lg:flex-row top-0 bottom-0 
                gap-x-9 items-center bg-dark-hard`}>
                    <ul className='flex items-center flex-col text-white gap-y-5 lg:text-dark-soft lg:flex-row gap-x-2 font-semibold'>
                        {navItemsInfo.map((item) => (
                            <NavItem item={item.items} key={item.name} type={item.type} name={item.name} />
                        ))}
                    </ul>
                    <button className='mt-5 lg:mt-0 border-2 border-blue-500 px-6 py-2 rounded-full text-blue-500 font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300'>Sign In</button>
                </div>
            </header>
        </section>
    )
}

export default Header