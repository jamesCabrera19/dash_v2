import { useState } from "react";

let MY_SAVED_IDS = []; // ids stored in this array are persisted in every instance of the hook

export default () => {
    const [savedIds, setSaveIds] = useState(MY_SAVED_IDS);

    const saveId = (id) => {
        if (id !== undefined) {
            MY_SAVED_IDS.push(id);
            setSaveIds((prev) => [...prev, id]);
        }
    };

    const deleteId = (id) => {
        if (id !== undefined) {
            const newIds = savedIds.filter((el) => el !== id);
            MY_SAVED_IDS = newIds;
            setSaveIds(newIds);
        }
    };
    const handleIt = (id) => {
        MY_SAVED_IDS.includes(id) ? deleteId(id) : saveId(id);
    };

    return [MY_SAVED_IDS, handleIt, saveId, deleteId, savedIds];
};
