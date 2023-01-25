import { Text, FlatList, TouchableOpacity } from "react-native";
import uuid from "react-native-uuid";

const data = [
    {
        title: "ad one",
        id: uuid.v4(),
    },
    {
        title: "ad two",
        id: uuid.v4(),
    },
    {
        title: "ad three",
        id: uuid.v4(),
    },
];

const styles = {
    container: {
        borderWidth: 1,
        height: 120,
        width: 300,
        borderRadius: 10,
        marginVertical: 10,
        marginHorizontal: 5,
    },
};

const Item = ({ item, onPress }) => (
    <TouchableOpacity onPress={onPress} style={styles.container}>
        <Text>{item.title}</Text>
    </TouchableOpacity>
);

const MyAds = ({ onPress }) => {
    const renderItem = ({ item }) => {
        return <Item item={item} onPress={() => console.log(item.id)} />;
    };
    return (
        <>
            <FlatList
                horizontal
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                showsHorizontalScrollIndicator={false}
            />
        </>
    );
};

export { MyAds };
