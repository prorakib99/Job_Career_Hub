import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='bg-[#F8F9FF]'>
            <div className='container mx-auto px-8'>
                <div className='flex items-center justify-between pt-12 pb-10'>
                    <div>
                        <Link to='/'><h2 className="text-zinc-900 text-[32px] font-extrabold">Job Career Hub</h2></Link>
                    </div>
                    <div className='flex gap-10'>
                        <Link to='/'><span className="text-indigo-400 text-base font-bold">Home</span></Link>
                        <Link to='/applied-jobs'><span className="text-neutral-500 text-base font-medium">Applied Jobs</span></Link>
                        <Link to='/'><span className="text-neutral-500 text-base font-medium">Statistics</span></Link>
                    </div>
                    <div>
                        <button className="px-7 py-4 bg-gradient-to-r from-indigo-400 to-violet-500 rounded-lg text-white text-xl font-extrabold">Start Applying</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;