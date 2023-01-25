import {
    StyleSheet,
    View,
    FlatList,
    Pressable,
    ScrollView,
} from "react-native";
import uuid from "react-native-uuid";

import {
    IconButton,
    Text,
    Button,
    Searchbar,
    TextInput,
} from "react-native-paper";
import {
    useContext,
    useEffect,
    useState,
    useCallback,
    useReducer,
} from "react";
import { MyFilterButtons } from "../components/filterBtn";
import { StoreCards } from "../components/storeCards";
import { data } from "../testData";
import { filteringSystem, filterSystemB } from "../utils";
import { useFilter } from "../hooks/useFilter";
const Colors = () => {
    const [first, setFirst] = useState({ colors: [], names: [] });
    const x = () => {
        const data = MD3Colors;
        const names = [];
        const colors = [];
        for (const [key, value] of Object.entries(data)) {
            // console.log(`${key}: ${value}`);
            names.push(key);
            colors.push(value);
        }
        setFirst({ names, colors });
    };
    return (
        <View style={{ backgroundColor: MD3Colors.error90 }}>
            <IconButton
                icon="camera"
                iconColor={MD3Colors.error50}
                size={20}
                onPress={() => x()}
            />
            <ScrollView>
                {first.colors.map((item, idx) => {
                    return (
                        <Pressable
                            onPress={() => console.log(first.names[idx], item)}
                            key={idx}
                            style={{
                                backgroundColor: item,
                                height: 100,
                                width: 100,
                                borderWidth: 1,
                            }}
                        ></Pressable>
                    );
                })}
            </ScrollView>
        </View>
    );
};

// const DISTANCE = 15;
// const filterOptions = {
//     price: "$$$$$", // default $$ el.price <= this
//     ratings: 1, // default 3 ---- el.rating >= this
//     time: 60, // default 30 ---- el.delivery_time <= this
//     transactions: "", // el.transactions must include this or el.transactions === array
//     distance: DISTANCE, // number
// };

// function reducer(state, action) {
//     switch (action.type) {
//         case "ratings":
//             return { ...state, ratings: action.payload };
//         case "under 30 min":
//             return { ...state, time: action.payload };
//         case "price":
//             return { ...state, price: action.payload };
//         case "transactions":
//             return { ...state, transactions: action.payload };
//         case "cancel":
//             let { title, idx } = action.payload;
//             if (title === "under 30 min") {
//                 title = "time";
//             }
//             for (const key in state) {
//                 if (key === title) {
//                     if (key === "ratings") {
//                         return { ...state, ratings: 1 };
//                     }
//                     if (key === "time") {
//                         return { ...state, time: 60 };
//                     }
//                     if (key === "price") {
//                         return { ...state, price: "$$$$$" };
//                     }
//                     if (key === "transactions") {
//                         return { ...state, transactions: "" };
//                     }
//                     if (key === "distance") {
//                         return { ...state, distance: DISTANCE };
//                     }
//                 }
//             }
//             break;
//         case "reset_state":
//             return filterOptions;
//         default:
//             return state;
//     }
// }

const Search = () => {
    const [stateData, setStateData] = useState([]);
    const [userInput, setUserInput] = useState(undefined);

    const [options, dispatch, callback, example] = useFilter();
    // const [options, dispatch] = useReducer(reducer, filterOptions);

    const props = {
        filter: {
            onPress: (title, index, subtitle) =>
                callback(title, index, subtitle),
            // onPress: (title, index, subtitle) => {
            //     const newTitle = title.toLowerCase();
            //     let TEMP; // USER INPUT
            //     switch (newTitle) {
            //         case "ratings":
            //             return dispatch({ type: newTitle, payload: 3 });
            //         case "under 30 min":
            //             return dispatch({ type: newTitle, payload: 30 });
            //         case "price":
            //             return dispatch({ type: newTitle, payload: "$" });
            //         case "transactions":
            //             return dispatch({
            //                 type: newTitle,
            //                 payload: "delivery",
            //             });
            //         case "cancel":
            //             return dispatch({
            //                 type: newTitle,
            //                 payload: {
            //                     title: subtitle.toLowerCase(),
            //                     idx: index,
            //                 },
            //             });
            //         case "reset state":
            //             // setStateData([]); // resetting data
            //             // setUserInput(undefined); // resetting userInput
            //             return dispatch({ type: "reset_state" }); // resetting filter options
            //         default:
            //             break;
            //     }
            // },
        },
    };

    useEffect(() => {
        const uniqueValues = data.reduce(
            (map, item) => map.set(item.name, item),
            new Map()
        );
        const uniqueStores = [...uniqueValues.values()];
        const res = filterSystemB(options, uniqueStores, false);

        // console.log(uniqueStores.length, res.length);
        // console.log(options);
    }, [options, data]);
    //
    //
    const closeToYou = useCallback(
        (miles) => {
            const options = {
                price: "$$$$$", // default $$ el.price <= this
                ratings: 1, // default 3 ---- el.rating >= this
                time: 60, // default 30 ---- el.delivery_time <= this
                transactions: "", // el.transactions must include this or el.transactions === array
                distance: miles,
            };

            const distance = filterSystemB(options, data, false);

            const objectReducer = distance.reduce((group, item) => {
                const name = "store";
                if (group[name] == null) {
                    group[name] = [];
                }
                group[name].push(item.id);
                return group;
            }, {});

            const res = objectReducer.store?.filter((el, i) => i < 5);
            console.log(objectReducer.store);
            return res;
        },
        [data, filteringSystem]
    ); // returns []

    return (
        <View>
            <MyFilterButtons {...props.filter} />
            <Pressable styles={{}} />
            <StoreCards storeIds={closeToYou(4)} />
            <Button onPress={() => console.log(closeToYou(4))}>
                Print Current Options
            </Button>
        </View>
    );
};

export default Search;
