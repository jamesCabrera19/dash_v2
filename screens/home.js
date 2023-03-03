import { useContext, useEffect, useState, useCallback } from "react";
import { Text, SafeAreaView, View, ScrollView, Pressable } from "react-native";

import { Context as DataContext } from "../context/yelp";
import { CategoryBtn } from "../components/categoryBtn";
import { MySeparator } from "../components/separator";
import { MyAds } from "../components/ads";

import { MyFilterButtons } from "../components/filterBtn";
import { StoreCards } from "../components/storeCards";
import { filterSystemB } from "../utils";
import { useFilter } from "../hooks/useFilter";
import { FlatList } from "react-native-gesture-handler";

const OPTIONS = {
    price: "$$$$$",
    ratings: 1,
    time: 60,
    transactions: "",
    distance: 15,
};
const RenderBody = ({}) => {
    const {
        state: { data, isLoading, error },
        fetchMore, // [], bool, null
    } = useContext(DataContext);
    const [first, setFirst] = useState(0);

    const results = useCallback(
        (options) => {
            const objReducer = (array, key) => {
                return array.reduce((group, item) => {
                    if (group[item[key]] === undefined) {
                        group[item[key]] = [];
                    }
                    group[item[key]].push(item.id);

                    return group;
                    // const x = Object.assign(group, {
                    //     [item[key]]: (group[item[key]] || []).concat(item),
                    // });

                    // console.log("group[item[key]], ", group[item[key]]);
                    // return x;
                }, {});
            }; // returns obj.id by key

            const onlyIds = (arr) => {
                const [res] = Array.from(Object.values(arr));
                return res;
            };
            const y = filterSystemB(options, data, false);
            const xy = objReducer(y, "price");

            return onlyIds(xy);
        },
        [data, filterSystemB]
    ); // returns {}

    const props = {
        onPress: (ids = []) =>
            function (e) {
                console.log(
                    "navigate to screen and display these stores:",
                    ids
                );
            },

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

    const titles = [
        {
            title: "Fastest And Affordable",
            type: results({ ...OPTIONS, price: "$", distance: 3 }),
            id: 1,
        },
        {
            title: "Closest To You",
            type: results({ ...OPTIONS, distance: 2 }),
            id: 2,
        },
        {
            title: "Wallet Friendly",
            type: results({ ...OPTIONS, price: "$", ratings: 4 }),
            id: 3,
        },
        {
            title: "Hidden Gems",
            type: results({ ...OPTIONS, ratings: 4, price: "$$$" }),
            id: 4,
        },
    ];
    const items = [{ item: "one" }];
    const renderItem = ({ item }) => (
        <StoreCards
            title={item.title}
            storeIds={item.type}
            onTitlePress={() => () => {
                fetchMore("tacos", "Richardson");
            }}
            onCardPress={(store) => () => {
                // data.forEach((el) => console.log(el.name, el.id));
                console.log(items);
                // console.log(titles[first]);

                console.log(titles[first]);
            }}
        />
    );
    console.log(items);

    return (
        <>
            {isLoading ? (
                <Text>loading...</Text>
            ) : (
                <>
                    <FlatList
                        horizontal={false}
                        data={titles}
                        renderItem={renderItem}
                        keyExtractor={(item, index) => item.id}
                        onEndReachedThreshold={0.2}
                        onEndReached={(el) => {
                            setFirst((prev) => prev + 1);
                            items.push({ items: "two" });
                        }}
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
        // setStateData((prev) => {
        //     if (response.length === 0) {
        //     }
        // });
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
            <>
                <CategoryBtn
                    height={60}
                    dataType="category"
                    {...props.category}
                />
                {/* <MySeparator>
                    <CategoryBtn
                        height={40}
                        dataType="subCategory"
                        {...props.category}
                    />
                </MySeparator> */}
                {/*  */}
                <MyFilterButtons {...props.filter} />
                {/*  */}

                <MySeparator>
                    <MyAds />
                </MySeparator>
                <RenderBody />
            </>
        </SafeAreaView>
    );
};

export default Home;
