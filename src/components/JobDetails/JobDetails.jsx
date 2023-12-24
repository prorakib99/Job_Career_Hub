import { Link, useParams } from 'react-router-dom';
import calenderIcon from '../../assets/calendar.png';
import emailIcon from '../../assets/email.png';
import locationIcon from '../../assets/location2.png';
import moneyIcon from '../../assets/money.png';
import phoneIcon from '../../assets/phone.png';
import { useContext } from 'react';
import { Jobs } from '../Layout/Home';
import { addToDb } from '../../utilities/fakedb';
const JobDetails = () => {

    const { jobId } = useParams();
    const jobs = useContext(Jobs);
    const findJob = jobs.find(job => job.id === parseInt(jobId));
    const { id, job_description, job_responsibility, educational_requirements, experiences, salary, job_title, contact_information } = findJob;
    return (
        <div className="container mx-auto px-8">
            <div className="mt-28 grid md:grid-cols-[2fr_1fr] gap-6">
                <div className="grid gap-6">
                    <p className="text-zinc-900 text-base font-extrabold leading-loose">Job Description: <span className="text-neutral-500 font-medium">{job_description}</span>
                    </p>
                    <p className="text-zinc-900 text-base font-extrabold leading-loose">Job Responsibility: <span className="text-neutral-500 font-medium">{job_responsibility}</span>
                    </p>

                    <p className="text-zinc-900 text-base font-extrabold leading-loose flex flex-col">Educational Requirements: <span className="text-neutral-500 font-semibold">{educational_requirements}</span>
                    </p>
                    <p className="text-zinc-900 text-base font-extrabold leading-loose flex flex-col">Experiences: <span className="text-neutral-500 font-semibold">{experiences}</span>
                    </p>
                </div>

                <div>
                    <div className="bg-gradient-to-r from-indigo-100 to-violet-200 rounded-lg p-[30px]">
                        <div className="mb-8">
                            <h4 className="text-zinc-900 text-xl font-extrabold pb-5 border-b border-indigo-400">Job Details</h4>
                            <div className="mt-6 grid gap-4">
                                <div className="flex items-start gap-2">
                                    <img src={moneyIcon} alt="" />
                                    <p className="text-zinc-700 text-xl font-bold">Salary <span className="font-extrabold">:</span> <span className="text-neutral-500 font-medium">{salary} (Per Month)</span></p>
                                </div>
                                <div className="flex items-start gap-2">
                                    <img src={calenderIcon} alt="" />
                                    <p className="text-zinc-700 text-xl font-bold">Job Title <span className="font-extrabold">:</span> <span className="text-neutral-500 font-medium">{job_title}</span></p>
                                </div>
                            </div>
                        </div>

                        <div className="">
                            <h4 className="text-zinc-900 text-xl font-extrabold pb-5 border-b border-indigo-400">Contact Information</h4>
                            <div className="mt-6 grid gap-4">
                                <div className="flex items-start gap-2">
                                    <img src={phoneIcon} alt="" />
                                    <p className="text-zinc-700 text-xl font-bold">Phone <span className="font-extrabold">:</span> <span className="text-neutral-500 font-medium">{contact_information.phone}</span></p>
                                </div>
                                <div className="flex items-start gap-2">
                                    <img src={emailIcon} alt="" />
                                    <p className="text-zinc-700 text-xl font-bold">Email <span className="font-extrabold">:</span> <span className="text-neutral-500 font-medium">{contact_information.email}</span></p>
                                </div>
                                <div className="flex items-start gap-2">
                                    <img src={locationIcon} alt="" />
                                    <p className="text-zinc-700 text-xl font-bold">Address <span className="font-extrabold">:</span> <span className="text-neutral-500 font-medium">{contact_information.address}</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Link to='/applied-jobs'>
                        <button onClick={() => addToDb(id)} className="w-full text-center text-white text-xl mt-6 font-extrabold bg-gradient-to-r from-indigo-400 to-violet-500 rounded-lg">Apply Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;