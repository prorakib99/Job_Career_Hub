import { Link } from "react-router-dom";
import locationIcon from '../../assets/location2.png';
import moneyIcon from '../../assets/money.png';

const AppliedJob = ({ job }) => {
    const { id, logo, job_title, company_name, remote_or_onsite, location, salary } = job;
    return (
        <div className="grid md:grid-cols-[1fr_5fr] items-center justify-center gap-12 rounded-lg border border-gray-200 p-7">
            <div className="w-60 h-60 bg-zinc-100 rounded-lg mx-auto flex items-center justify-center">
                <img src={logo} alt="" />
            </div>
            <div className="flex md:flex-row flex-col gap-12 items-center justify-between">
                <div>
                    <h5 className="text-zinc-700 mb-2 text-2xl font-extrabold">{job_title}</h5>
                    <p className="text-neutral-500 mb-4 text-2xl font-semibold">{company_name}</p>
                    <button className="w-[100px] px-[19px] mb-6 py-[9px] rounded border border-indigo-400 text-indigo-400 text-base font-extrabold">{remote_or_onsite}</button>
                    <div className="md:flex grid gap-6">
                        <div className="flex items-center gap-2">
                            <img src={locationIcon} alt="" />
                            <p className="text-neutral-500 text-xl font-semibold">{location}</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <img src={moneyIcon} alt="" />
                            <p className="text-neutral-500 text-xl font-semibold">Salary : {salary}</p>
                        </div>
                    </div>
                </div>
                <div className="">
                    <Link to={`/job/${id}`}>
                        <p className="px-[18px] py-3 bg-gradient-to-r from-indigo-400 to-violet-500 rounded text-white text-xl font-extrabold">View Details</p>
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default AppliedJob;