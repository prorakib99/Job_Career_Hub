import { useEffect, useState } from "react";
import SubHeader from "../SubHeader/SubHeader";
import Feature from "../Feature/Feature";

const Featured = () => {
    const [features, setFeatures] = useState([]);
    console.log(features);
    useEffect(() => {
        fetch('./data/jobs.json')
        .then(res => res.json())
        .then(data => setFeatures(data))
    }, []);

    const jobDetails = id =>  {
        console.log(id);
    }
    return (
        <div className="container mx-auto px-8">
            <SubHeader subTitle='Featured Jobs'></SubHeader>

            <div className="grid md:grid-cols-2 gap-6 mt-4">
                {
                    features.map(feature => <Feature key={feature.id} feature={feature} jobDetails={jobDetails}></Feature>)
                }
            </div>
        </div>
    );
};

export default Featured;