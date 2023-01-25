import { useContext, useEffect, useState, useCallback } from "react";
import { Text, SafeAreaView } from "react-native";

import { Context as DataContext } from "../context/yelp";
import { CategoryBtn } from "../components/categoryBtn";
import { MySeparator } from "../components/separator";
import { MyAds } from "../components/ads";

import { MyFilterButtons } from "../components/filterBtn";
import { StoreCards } from "../components/storeCards";
import { filterSystemB } from "../utils";
import { useFilter } from "../hooks/useFilter";

const RenderBody = ({}) => {
    const {
        state: { data, isLoading, error }, // [], bool, null
    } = useContext(DataContext);

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
            return res;
        },
        [data, filterSystemB]
    ); // returns []

    const props = {
        cards: {
            onPress:
                (ids = []) =>
                (e) => {
                    console.log(
                        "navigate to screen and display these stores:",
                        ids
                    );
                },
        },
    };

    return (
        <>
            {isLoading ? (
                <Text>loading...</Text>
            ) : (
                <>
                    <StoreCards
                        storeIds={closeToYou(3)}
                        onPress={props.cards.onPress}
                    />
                </>
            )}
        </>
    );
};

const Home = ({ navigation }) => {
    const {
        state: { data, isLoading, error }, // [], bool, null
        fetchYelpData,
    } = useContext(DataContext);
    const [options, dispatch, callback, example] = useFilter();
    const [stateData, setStateData] = useState([]);

    const [loaders, setLoaders] = useState({ a: false, b: false, c: false });

    useEffect(() => {
        const uniqueValues = data.reduce(
            (map, item) => map.set(item.name, item),
            new Map()
        );
        const uniqueStores = [...uniqueValues.values()];
        const response = filterSystemB(options, uniqueStores, false);
        // console.log("response", response);
        setStateData((prev) => {
            if (response.length === 0) {
            }
        });
    }, [options, data]);

    const props = {
        category: {
            onPress: (title) => (e) => {
                console.log("Fetch yelp data", title);
                fetchYelpData(title, "Richardson");
            },
        },
        filter: {
            onPress: (title, index, subtitle) =>
                callback(title, index, subtitle),
        },
    };

    return (
        <SafeAreaView>
            <CategoryBtn height={60} dataType="category" {...props.category} />
            <MySeparator>
                <CategoryBtn
                    height={40}
                    dataType="subCategory"
                    {...props.category}
                />
            </MySeparator>
            {/*  */}
            <MyFilterButtons {...props.filter} />
            {/*  */}
            <MyAds />
            <RenderBody />
            {/* {isLoading ? (
                <Text>loading...</Text>
            ) : (
                <>
                    <StoreCards
                        storeIds={closeToYou(3)}
                        // title={"Close to you"}
                    />
                </>
            )} */}
        </SafeAreaView>
    );
};

export default Home;
