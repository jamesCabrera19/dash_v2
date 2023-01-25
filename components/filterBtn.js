import { useContext, useEffect, useState } from "react";
import uuid from "react-native-uuid";

import { View, FlatList } from "react-native";
import { Button } from "react-native-paper";

const btndata = [
    {
        title: "Ratings",
        id: uuid.v4(),
        isCheck: false,
    },
    {
        title: "Under 30 min",
        id: uuid.v4(),
        isCheck: false,
    },
    {
        title: "Price",
        id: uuid.v4(),
        isCheck: false,
    },

    {
        title: "Transactions",
        id: uuid.v4(),
        isCheck: false,
    },
];
const styles = {
    text: { fontWeight: "600" },

    button: {
        shadowOffset: {
            width: 3,
            height: 1,
        },
        shadowOpacity: 0.19,
        margin: 5,
    },
};

function FilterButtons({ onPress, setReset, reset }) {
    const [state, setState] = useState(btndata || []);
    // const [reset, setReset] = useState(0);

    const handleBtnPress = (title, index) => (e) => {
        const items = [...state]; // state shallow copy
        let currentItem = items[index]; // item shallow copy

        const highlightFilterBtn = (boolean) => {
            currentItem.isCheck = boolean; // updating single value
            items[index] = currentItem; // updating array
            setState(items); // updating STATE with new array
            // keeping track of every button that is pressed
            boolean
                ? (setReset((prev) => prev + 1), onPress(title, index))
                : (setReset((prev) => prev - 1),
                  onPress("cancel", index, title));
        };
        //
        state[index].isCheck
            ? highlightFilterBtn(false)
            : highlightFilterBtn(true);
    };

    const handleReset = (boolean) => () => {
        btndata.forEach((el) => (el.isCheck = boolean));
        setState(btndata); // resetting filter data
        onPress("reset state");
        setReset(0); // resetting showBtn === 0=> no button
    };

    const renderItem = ({ item, index }) => {
        const textColor = item.isCheck ? "white" : "black";
        const buttonColor = item.isCheck ? "black" : "white";
        return (
            <Button
                textColor={textColor}
                buttonColor={buttonColor}
                mode="contained"
                onPress={handleBtnPress(item.title, index)}
                style={[styles.button, { margin: 5 }]}
            >
                {item.title}
            </Button>
        );
    };

    return (
        <View>
            <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                data={state}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
            {reset > 0 ? (
                <Button
                    onPress={handleReset(false)}
                    textColor="black"
                    buttonColor="white"
                    mode="contained"
                    style={[
                        styles.button,
                        { marginRight: 5, alignSelf: "flex-end" },
                    ]}
                >
                    Reset
                </Button>
            ) : null}
        </View>
    );
}
function MyFilterButtons({ onPress }) {
    const [reset, setReset] = useState(0);

    return (
        <FilterButtons onPress={onPress} setReset={setReset} reset={reset} />
    );
}

export { MyFilterButtons };
