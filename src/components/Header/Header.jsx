
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='container mx-auto px-8'>
            <div className='flex items-center justify-between pt-12 pb-10'>
                <div>
                    <Link to='/'><h2 className="text-zinc-900 text-[32px] font-extrabold font-['Manrope']">Job Career Hub</h2></Link>
                </div>
                <div className='flex gap-10'>
                    <Link to='/'><span className="text-indigo-400 text-base font-bold font-['Manrope']">Statistics</span></Link>
                    <Link to='/'><span className="text-neutral-500 text-base font-medium">Applied Jobs</span></Link>
                    <Link to='/'><span className="text-neutral-500 text-base font-medium">Blog</span></Link>
                </div>
                <div>
                    <button className="px-7 py-[19px] bg-gradient-to-r from-indigo-400 to-violet-500 rounded-lg text-white text-xl font-extrabold">Start Applying</button>
                </div>
            </div>
        </div>
    );
};

export default Header;