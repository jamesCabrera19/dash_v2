import { useState, useContext, useCallback } from "react";
import { FlatList, Pressable, TouchableOpacity, View } from "react-native";
import { Card, Text, IconButton, MD3Colors } from "react-native-paper";
import uuid from "react-native-uuid";
import { Context as DataContext } from "../context/yelp";
import useStoreFavorites from "../hooks/useStoreFavorites";
import { FontAwesome } from "@expo/vector-icons";

const styles = {
    header: {
        display: "flex",
        flexDirection: "row",
        borderWidth: 0,
        marginVertical: 0,
        marginHorizontal: 5,
        padding: 0,
        justifyContent: "space-between",
        alignItems: "center",
    },
    container: {
        marginVertical: 10,
        marginHorizontal: 5,
        width: 280,
    },
    cover: {
        borderRadius: 10,
        height: 120,
    },
    title: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: 280,
        margin: 0,
        padding: 0,
    },
    subTitle: { marginTop: -10, width: 280 },
};

const RenderHeader = ({ onPress, title }) => {
    // console.log(MD3Colors);
    return (
        <Pressable style={styles.header} onPress={onPress}>
            <Text variant="headlineSmall">{title}</Text>
            <View
                style={{
                    backgroundColor: MD3Colors.neutral80,
                    borderRadius: "50%",
                    justifyContent: "center",
                    alignItems: "center",
                    height: 30,
                    width: 30,
                }}
            >
                <IconButton
                    icon="arrow-right"
                    iconColor={MD3Colors.primary0}
                    size={20}
                />
            </View>
        </Pressable>
    );
};
const Cards = ({ item, onPress, onSave }) => {
    return (
        <Pressable style={styles.container} onPress={onPress}>
            <Card.Cover
                source={{ uri: item.image_url || "https://picsum.photos/700" }}
                style={styles.cover}
            />
            <Card.Content style={{ marginLeft: -15 }}>
                <View style={styles.title}>
                    <Text variant="bodyLarge">{item.name}</Text>

                    <IconButton
                        icon="heart-outline"
                        iconColor={MD3Colors.error50}
                        size={20}
                        onPress={onSave}
                    />
                </View>
                <View style={styles.subTitle}>
                    <Text variant="bodyMedium">
                        {Math.round(item.distance * 0.0006214)} mi •{" "}
                        {item.delivery_time} min • $0 delivery fee, first order
                    </Text>
                    <Text variant="bodyMedium">
                        {item.rating}{" "}
                        <FontAwesome
                            name="star"
                            size={16}
                            color={MD3Colors.neutralVariant30}
                        />{" "}
                        ({item.review_count}+)
                    </Text>
                </View>
            </Card.Content>
        </Pressable>
    );
};

const StoreCards = ({ storeIds, title, onPress }) => {
    const {
        state: { data, isLoading },
    } = useContext(DataContext);

    const storesTitles = useCallback(() => {
        let stores = data.filter((el) => storeIds.includes(el.id));

        const res = stores.reduce((group, item) => {
            const category = "category";
            if (group[category] == null) {
                group[category] = {};
            }
            group[category] = item.categories;

            return group.category;
        }, {});
        return res[0]?.title;
    }, [data, storeIds]);

    const renderItem = ({ item }) => {
        return (
            <Cards
                item={item}
                onPress={() => console.log(`navigate to ${item.name}`)}
                onSave={() => console.log(`save store ${item.id}`)}
            />
        );
    };
    return (
        <>
            <RenderHeader
                onPress={onPress(storeIds)}
                title={`Close to you - ${storesTitles()}`}
            />
            <FlatList
                horizontal
                data={data.filter((el) => storeIds.includes(el.id))}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                showsHorizontalScrollIndicator={false}
            />
        </>
    );
};

export { StoreCards };
