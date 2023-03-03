import createDataContext from "./index";
import yelp from "../api/yelp";
import { products } from "../fakeData";

const yelpDataReducer = (state, action) => {
    switch (action.type) {
        case "get_data":
            return { ...state, data: action.payload };
        case "fetch more":
            let newData = [...state.data, ...action.payload];
            const uniqueValues = newData.reduce(
                (map, item) => map.set(item.id, item),
                new Map()
            );
            const uniqueStores = [...uniqueValues.values()];

            return { ...state, data: uniqueStores };
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
        limit: 25,
        term: Term,
    };

    if (coords) {
        const lat = coords.latitude;
        const lon = coords.longitude;
        params = {
            ...params,
            latitude: lat,
            longitude: lon,
        };
    } else {
        params = {
            ...params,
            location: Location,
        };
    }

    try {
        dispatch({ type: "isLoading", payload: true });
        const res = await yelp.get("/search?", { params });

        let newDataArr = []; // all businesses, estimated length = 50

        res.data.businesses.forEach((element) => {
            // insert new data on every temp item
            if (!element.rating) {
                newDataArr.push({
                    ...element,
                    delivery_time: Math.floor(
                        Math.random() * (MAX_TIME - MIN_TIME) + MIN_TIME
                    ),
                    // products: products(10),
                    rating: Math.floor(Math.random() * (5 - 1) + 1),
                });
            } else {
                newDataArr.push({
                    ...element,
                    delivery_time: Math.floor(
                        Math.random() * (MAX_TIME - MIN_TIME) + MIN_TIME
                    ),
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

const fetchMore = (dispatch) => async (term, location) => {
    const MAX_TIME = 59;
    const MIN_TIME = 5;

    let Term = term ? term : "convenience";
    let Location = location ? location : "Dallas";

    let params = {
        limit: 10,
        term: Term,
        location: Location,
    };
    try {
        dispatch({ type: "isLoading", payload: true });
        const res = await yelp.get("/search?", { params });
        let newDataArr = [];
        res.data.businesses.forEach((element) => {
            if (!element.rating) {
                newDataArr.push({
                    ...element,
                    delivery_time: Math.floor(
                        Math.random() * (MAX_TIME - MIN_TIME) + MIN_TIME
                    ),
                    // products: products(10),
                    rating: Math.floor(Math.random() * (5 - 1) + 1),
                });
            } else {
                newDataArr.push({
                    ...element,
                    delivery_time: Math.floor(
                        Math.random() * (MAX_TIME - MIN_TIME) + MIN_TIME
                    ),
                    // products: products(10),
                });
            }
        });
        dispatch({
            type: "fetch more",
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
    { fetchYelpData, fetchMore }, // action Functions
    { data: [], isLoading: true, error: null } // init STATE
);
