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
// import { data, data } from "../testData";
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

const Search = () => {
    const data = [
        { name: "one", id: "abc" },
        { name: "two", id: "abcd" },
        { name: "three", id: "abcde" },
        { name: "four", id: "abcfg" },
    ];
    const newData = [
        { name: "three", id: "abcde" },
        { name: "five", id: "abcfge" },
    ];
    return (
        <View>
            <Button
                onPress={() => {
                    const datas = [...data, ...newData];
                    const uniqueValues = datas.reduce(
                        (map, item) => map.set(item.id, item),
                        new Map()
                    );
                    const uniqueStores = [...uniqueValues.values()];

                    console.log(uniqueStores);
                }}
            >
                Print Current Options
            </Button>
        </View>
    );
};

export default Search;
