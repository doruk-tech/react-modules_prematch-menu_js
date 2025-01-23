import {BranchPicker} from "@components/branch-picker.jsx";
import {QueryWrp} from "@components/query-wrp.jsx";


export const PrematchMenu = () => {
    return (
        <div>
            <h1>Prematch Menu</h1>
            <BranchPicker/>
            <QueryWrp/>
        </div>
    );
};