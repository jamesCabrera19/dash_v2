import {
    useContext,
    useEffect,
    useState,
    useCallback,
    useReducer,
} from "react";
import { filterSystemB } from "../utils";

// const customFilter = useCallback(
//     (data = [], results = Number, options = {}) => {
//         const response = filterSystemB(options, data, false);

//         const objectReducer = response.reduce((group, item) => {
//             const name = "store";
//             if (group[name] == null) {
//                 group[name] = [];
//             }
//             group[name].push(item.id);
//             return group;
//         }, {});

//         const res = objectReducer.store?.filter((el, i) => i < results);
//         return res;
//     },
//     [filterSystemB]
// );
// export default customFilter;
