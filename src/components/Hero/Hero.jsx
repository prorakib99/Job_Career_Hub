import RakibImg from '../../assets/rakib.png'
const Hero = () => {
    return (
        <div className='bg-[#F8F9FF] pb-20'>
            <div className='container mx-auto px-8'>
                <div className='grid md:grid-cols-2 md:gap-80 items-center'>
                    <div className='mt-14'>
                        <h1 className="text-zinc-900 md:text-[5rem] mb-6 font-extrabold leading-[100px]">One Step Closer To Your <span className="text-indigo-400">Dream Job</span></h1>
                        <p className="text-neutral-500 text-lg font-medium mb-8 leading-[30px]">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.
                        </p>
                        <button className="px-7 py-4 bg-gradient-to-r from-indigo-400 to-violet-500 rounded-lg text-white text-xl font-extrabold">Get Started</button>
                    </div>
                    <div>
                        <img className='mx-auto' src={RakibImg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;