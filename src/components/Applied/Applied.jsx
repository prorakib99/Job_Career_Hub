import { useContext } from "react";
import { Jobs } from "../Layout/Home";
import AppliedJob from "../AppliedJob/AppliedJob";

const Applied = () => {
    const jobs = useContext(Jobs)
    return (
        <div className="container mx-auto px-8">
            <div className="mt-20">
                <div className="flex justify-end">
                    <select name="filter" id="job-type" className="w-[150px] h-[50px] px-4 bg-zinc-100 rounded-lg">
                        <option className="text-zinc-700 text-xl px-3 font-semibold" value="" selected disabled hidden>Filter By</option>
                        <option value="remote">Remote Jobs</option>
                        <option value="onsite">Onsite Jobs</option>
                    </select>
                </div>
                    <div className="grid gap-6 mt-8">
                    {
                        jobs.map(job => <AppliedJob key={job.id} job={job}></AppliedJob>)
                    }
                    </div>
            </div>
        </div>
    );
};

export default Applied;