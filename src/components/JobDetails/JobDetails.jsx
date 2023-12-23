import calenderIcon from '../../assets/calendar.png';
import emailIcon from '../../assets/email.png';
import locationIcon from '../../assets/location2.png';
import moneyIcon from '../../assets/money.png';
import phoneIcon from '../../assets/phone.png';
const JobDetails = () => {
    return (
        <div className="container mx-auto px-8">
            <div className="mt-28 grid md:grid-cols-[2fr_1fr] gap-6">
                <div className="grid gap-6">
                    <p className="text-zinc-900 text-base font-extrabold leading-loose">Job Description: <span className="text-neutral-500 font-medium">A UI/UX (User Interface/User Experience) designer is responsible for designing and creating engaging and effective interfaces for software and web applications. This includes designing the layout, visual design, and interactivity of the user interface.</span>
                    </p>
                    <p className="text-zinc-900 text-base font-extrabold leading-loose">Job Responsibility: <span className="text-neutral-500 font-medium">Collaborating with cross-functional teams: UI/UX designers often work closely with other teams, including product management, engineering, and marketing, to ensure that the user interface is aligned with business and technical requirements. You will need to be able to effectively communicate your design ideas and gather feedback from other team members.</span>
                    </p>

                    <p className="text-zinc-900 text-base font-extrabold leading-loose flex flex-col">Educational Requirements: <span className="text-neutral-500 font-semibold">Bachelor degree to complete any reputational university.</span>
                    </p>
                    <p className="text-zinc-900 text-base font-extrabold leading-loose flex flex-col">Experiences: <span className="text-neutral-500 font-semibold">2-3 Years in this field.</span>
                    </p>
                </div>

                <div>
                    <div className="bg-gradient-to-r from-indigo-100 to-violet-200 rounded-lg p-[30px]">
                        <div className="mb-8">
                            <h4 className="text-zinc-900 text-xl font-extrabold pb-5 border-b border-indigo-400">Job Details</h4>
                            <div className="mt-6 grid gap-4">
                                <div className="flex items-center gap-2">
                                    <img src={moneyIcon} alt="" />
                                    <p className="text-zinc-700 text-xl font-bold">Salary <span className="font-extrabold">:</span> <span className="text-neutral-500 font-medium">100K - 150K (Per Month)</span></p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <img src={calenderIcon} alt="" />
                                    <p className="text-zinc-700 text-xl font-bold">Job Title <span className="font-extrabold">:</span> <span className="text-neutral-500 font-medium">100K - 150K (Per Month)</span></p>
                                </div>
                            </div>
                        </div>

                        <div className="">
                            <h4 className="text-zinc-900 text-xl font-extrabold pb-5 border-b border-indigo-400">Contact Information</h4>
                            <div className="mt-6 grid gap-4">
                                <div className="flex items-center gap-2">
                                    <img src={phoneIcon} alt="" />
                                    <p className="text-zinc-700 text-xl font-bold">Phone <span className="font-extrabold">:</span> <span className="text-neutral-500 font-medium">100K - 150K (Per Month)</span></p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <img src={emailIcon} alt="" />
                                    <p className="text-zinc-700 text-xl font-bold">Email <span className="font-extrabold">:</span> <span className="text-neutral-500 font-medium">100K - 150K (Per Month)</span></p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <img src={locationIcon} alt="" />
                                    <p className="text-zinc-700 text-xl font-bold">Address <span className="font-extrabold">:</span> <span className="text-neutral-500 font-medium">100K - 150K (Per Month)</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="w-full text-center text-white text-xl mt-6 font-extrabold bg-gradient-to-r from-indigo-400 to-violet-500 rounded-lg">Apply Now</button>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;