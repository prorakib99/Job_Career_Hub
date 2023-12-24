import { Link } from "react-router-dom";

const AppliedJob = ({ job }) => {
    console.log(job);
    const {id, logo, job_title, company_name, remote_or_onsite, location, salary} = job;
    return (
        <div className="flex justify-between items-center rounded-lg border border-gray-200">
            <div className="flex gap-8 items-center">
                <div className="w-60 h-60 m-7 bg-zinc-100 rounded-lg flex items-center justify-center">
                    <img src={logo} alt="" />
                </div>
                <div>
                    <h5 className="text-zinc-700 mb-2 text-2xl font-extrabold">{job_title}</h5>
                    <p className="text-neutral-500 mb-4 text-2xl font-semibold">{company_name}</p>
                    <button className="w-[100px] px-[19px] mb-6 py-[9px] rounded border border-indigo-400 text-indigo-400 text-base font-extrabold">{remote_or_onsite}</button>
                    <div className="flex gap-6">
                        <div className="flex gap-2">
                            <img src="" alt="" />
                            <p className="text-neutral-500 text-xl font-semibold">{location}</p>
                        </div>
                        <div className="flex gap-2">
                            <img src="" alt="" />
                            <p className="text-neutral-500 text-xl font-semibold">Salary : {salary}</p>
                        </div>
                    </div>
                </div>
            </div>
            <Link to={`/job/${id}`} className="me-12">
                <p className="px-[18px] py-3 bg-gradient-to-r from-indigo-400 to-violet-500 rounded text-white text-xl font-extrabold">View Details</p>
            </Link>
        </div>
    );
};

export default AppliedJob;