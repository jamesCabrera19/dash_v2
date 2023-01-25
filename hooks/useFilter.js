import { useReducer } from "react";

const useFilter = (price, ratings, time, transactions, distance) => {
    function reducer(state, action) {
        switch (action.type) {
            case "ratings":
                return { ...state, ratings: action.payload };
            case "under 30 min":
                return { ...state, time: action.payload };
            case "price":
                return { ...state, price: action.payload };
            case "transactions":
                return { ...state, transactions: action.payload };
            case "cancel":
                let { title, idx } = action.payload;
                if (title === "under 30 min") {
                    title = "time";
                }
                for (const key in state) {
                    if (key === title) {
                        if (key === "ratings") {
                            return { ...state, ratings: 1 };
                        }
                        if (key === "time") {
                            return { ...state, time: 60 };
                        }
                        if (key === "price") {
                            return { ...state, price: "$$$$$" };
                        }
                        if (key === "transactions") {
                            return { ...state, transactions: "" };
                        }
                        if (key === "distance") {
                            return { ...state, distance: DISTANCE };
                        }
                    }
                }
                break;
            case "reset_state":
                return filterOptions;
            default:
                return state;
        }
    }
    //
    const example = `dispatch({ type: newTitle={ratings||time||transactions||etc}, payload: 3||"$$"||'["delivery"]' })`;
    //
    const filterOptions = {
        price: price || "$$$$$", // default $$ el.price <= this
        ratings: ratings || 1, // default 3 ---- el.rating >= this
        time: time || 60, // default 30 ---- el.delivery_time <= this
        transactions: transactions || "", // el.transactions must include this or el.transactions === array
        distance: distance || 15, // number
    };
    const [options, dispatch] = useReducer(reducer, filterOptions);

    const callback = (title, index, subtitle, userInput) => {
        const newTitle = title.toLowerCase();
        let usr = userInput; // USER INPUT
        switch (newTitle) {
            case "ratings":
                return dispatch({ type: newTitle, payload: 3 });
            case "under 30 min":
                return dispatch({ type: newTitle, payload: 30 });
            case "price":
                return dispatch({ type: newTitle, payload: "$" });
            case "transactions":
                return dispatch({
                    type: newTitle,
                    payload: "delivery",
                });
            case "cancel":
                return dispatch({
                    type: newTitle,
                    payload: {
                        title: subtitle.toLowerCase(),
                        idx: index,
                    },
                });
            case "reset state":
                // setStateData([]); // resetting data
                // setUserInput(undefined); // resetting userInput
                return dispatch({ type: "reset_state" }); // resetting filter options
            default:
                break;
        }
    };

    return [options, dispatch, callback, example];
};

export { useFilter };
