import createDataContext from "./index";
import yelp from "../api/yelp";
import { products } from "../fakeData";

const yelpDataReducer = (state, action) => {
    switch (action.type) {
        case "get_data":
            return { ...state, data: action.payload };
        // case "get_business_info":
        //     return { ...state, data: action.payload };
        case "isLoading":
            return { ...state, isLoading: action.payload };
        case "error":
            return { ...state, error: action.payload };
        default:
            return state;
    }
};

const fetchYelpData = (dispatch) => async (term, location, coords) => {
    const MAX_TIME = 59;
    const MIN_TIME = 5;

    let Term = term ? term : "convenience";
    let Location = location ? location : "Dallas";

    let params = {
        limit: 10,
        term: Term,
    };

    if (coords) {
        const lat = coords.latitude;
        const lon = coords.longitude;
        params = {
            limit: 25,
            term: term,
            latitude: lat,
            longitude: lon,
        };
    } else {
        params = {
            limit: 50,
            term: Term,
            location: Location,
        };
    }

    try {
        dispatch({ type: "isLoading", payload: true });
        const res = await yelp.get("/search?", { params });
        const delivery_time = Math.floor(
            Math.random() * (MAX_TIME - MIN_TIME) + MIN_TIME
        );
        const rating = Math.floor(Math.random() * (5 - 1) + 1);

        let newDataArr = []; // all businesses, estimated length = 50

        res.data.businesses.forEach((element) => {
            // insert new data on every temp item
            if (!element.rating) {
                newDataArr.push({
                    ...element,
                    delivery_time,
                    // products: products(10),
                    rating: rating,
                });
            } else {
                newDataArr.push({
                    ...element,
                    delivery_time,
                    // products: products(10),
                });
            }
        });

        dispatch({
            type: "get_data",
            payload: newDataArr,
        });

        dispatch({ type: "isLoading", payload: false });
    } catch (error) {
        dispatch({
            type: "error",
            payload: error,
        });
    }
};
const fetchBusiness = (dispatch) => async (id) => {
    try {
        const res = await yelp.get(`/${id}`);
        dispatch({
            type: "get_business_info",
            payload: res.data,
        });
    } catch (error) {
        return dispatch({
            type: "error",
            payload: error,
        });
    }
};
// success - loading - error

export const { Context, Provider } = createDataContext(
    yelpDataReducer,
    { fetchYelpData }, // action Functions
    { data: [], isLoading: true, error: null } // init STATE
);
