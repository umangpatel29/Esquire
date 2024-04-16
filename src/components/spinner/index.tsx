import { useState, CSSProperties } from "react";
import { PulseLoader } from "react-spinners";

const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
};

function Spinner() {
    let [loading, setLoading] = useState(true);

    return (
        <div className="sweet-loading">
            <div className="flex ga-2 items-end">
                <div className="font-medium ">Loading</div>
                <PulseLoader color="#3b3a39" loading={loading} size={4} />
            </div>
        </div>
    );
}

export default Spinner;