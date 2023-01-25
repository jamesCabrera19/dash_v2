import { useState } from "react";
import { Text, FlatList, Pressable } from "react-native";
import { IconButton } from "react-native-paper";
import { categories, subCategories } from "../fakeData";

const Item = ({ item, onPress, size }) => {
    const [Icon, iconName] = item.icon;

    return (
        <Pressable
            onPress={onPress}
            style={{
                flexDirection: "column",
                alignItems: "center",
                marginHorizontal: 5,
            }}
        >
            <IconButton icon={iconName} size={size} />
            <Text variant="titleSmall">{item.title}</Text>
        </Pressable>
    );
};

const CategoryBtn = ({ onPress, dataType, height }) => {
    const [selectedId, setSelectedId] = useState();

    const renderItem = ({ item }) => {
        const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
        const color = item.id === selectedId ? "white" : "black";
        const size = height ? height : 60;

        return <Item item={item} onPress={onPress(item.title)} size={size} />;
    };
    return (
        <>
            <FlatList
                horizontal
                data={dataType === "category" ? categories : subCategories}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                extraData={selectedId}
                showsHorizontalScrollIndicator={false}
            />
        </>
    );
};

export { CategoryBtn };
