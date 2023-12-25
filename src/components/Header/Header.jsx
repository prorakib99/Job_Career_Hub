import { Link } from 'react-router-dom';
import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react';


const Header = () => {

    const [navStatus, setNavStatus] = useState(false);

    const navigation = () => setNavStatus(!navStatus)

    console.log(navStatus);

    return (
        <div className='bg-[#F8F9FF]'>
            <div className='container mx-auto px-8'>
                <div className='flex items-center justify-between pt-12 pb-10 relative'>
                    <div className='md:w-1/5'>
                        <Link to='/'><h2 className="text-zinc-900 text-[32px] font-extrabold">Job Career Hub</h2></Link>
                    </div>
                    <button onClick={navigation} className='md:hidden'><Bars3Icon className='h-8 w-8'></Bars3Icon></button>
                    <div className={`flex md:w-3/5 w-full bg-slate-200 bg-opacity-95 shadow-xl md:shadow-none py-8 md:py-0 rounded-lg md:bg-transparent gap-10 md:flex-row flex-col items-center justify-between absolute md:static ${navStatus ? 'top-40' : 'top-[-400px]'} duration-500`}>
                        <div className='flex gap-10 md:flex-row flex-col text-center'>
                            <Link to='/'><span onClick={navigation} className="text-indigo-400 text-base font-bold">Home</span></Link>
                            <Link to='/applied-jobs'><span onClick={navigation} className="text-neutral-500 text-base font-medium">Applied Jobs</span></Link>
                            <Link to='/'><span onClick={navigation} className="text-neutral-500 text-base font-medium">Statistics</span></Link>
                        </div>
                        <div>
                            <button onClick={navigation} className="px-7 w-fit py-4 bg-gradient-to-r from-indigo-400 to-violet-500 rounded-lg text-white text-xl font-extrabold">Start Applying</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;