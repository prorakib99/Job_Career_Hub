import { Link } from "react-router-dom";

const Feature = ({feature}) => {
    const {logo, job_title, company_name, remote_or_onsite, salary, location} = feature;
    return (
        <>
            <div className="rounded-lg border border-gray-200 p-10">
                <img src={logo} alt="" />
                <h5 className="text-zinc-700 text-2xl font-extrabold mt-8">{job_title}</h5>
                <p className="text-neutral-500 text-xl font-semibold mt-2">{company_name}</p>
                <div className="mt-4 flex gap-4">
                    <p className="text-indigo-400 text-base font-extrabold rounded border border-indigo-400 py-2 px-4">{remote_or_onsite}</p>
                </div>
                <div className="flex gap-6 items-center mt-4">
                    <p className="text-neutral-500 text-xl font-semibold">Salary : {salary}</p>
                    <p className="text-neutral-500 text-xl font-semibold">{location}</p>
                </div>
                <div className="mt-6 flex">
                    <Link ><p className="px-[18px] py-[11px] text-white text-xl font-extrabold bg-gradient-to-r from-indigo-400 to-violet-500 rounded">View Details</p></Link>
                </div>
            </div>
        </>
    );
};

export default Feature;