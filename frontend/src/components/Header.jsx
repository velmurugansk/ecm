import React from 'react'
import logo from '../assests/images/myn-logo.png';
// import { Link } from 'react-router-dom';

const navigation = [
    { name: 'MEN' },
    { name: 'WOMEN' },
    { name: 'KIDS', href: '#', current: false },
    { name: 'HOME & LIVING', href: '#', current: false },
    { name: 'BEAUTY', href: '#', current: false },
]

const Header = () => {
    return (
        <div className="fixed h-16 w-full z-[50] shadow-lg">
            <div className='flex items-center px-4 py-2 h-full'>
                <img src={logo} alt="logo" className='h-12 w-12' />
                <div className="flex">
                    <nav>
                        <ul>
                            {navigation.map(item => {
                                return <li className='px-3 py-2'>{item.name}</li>
                            })}
                        </ul>
                    </nav>
                </div>
            </div>
        </div>        
    )
}

export default Header



