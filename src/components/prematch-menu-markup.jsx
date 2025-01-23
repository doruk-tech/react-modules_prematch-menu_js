import {BranchPicker} from "./branch-picker.jsx";
import {QueryWrp} from "./query-wrp.jsx";


export const PrematchMenuMarkup = () => {
    return (
        <div>
            <h1>Prematch Menu</h1>
            <BranchPicker/>
            <QueryWrp/>
        </div>
    );
};