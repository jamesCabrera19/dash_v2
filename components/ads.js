import { Text, FlatList, Pressable, Image, View } from "react-native";
import uuid from "react-native-uuid";

const data = [
    {
        title: "ad one",
        id: uuid.v4(),
        img: () => "https://picsum.photos/300",
    },
    {
        title: "ad two",
        id: uuid.v4(),
        img: () => "https://picsum.photos/300",
    },
    {
        title: "ad three",
        id: uuid.v4(),
        img: () => "https://picsum.photos/300",
    },
];

const styles = {
    container: {
        borderRadius: 10,
        marginVertical: 10,
        marginHorizontal: 5,
    },
    img: {
        height: 120,
        width: 300,
        borderRadius: 10,
    },
};

const Item = ({ item, onPress }) => (
    <Pressable onPress={onPress} style={styles.container}>
        <Image source={{ uri: item.img() }} style={styles.img} />
        <View style={{ position: "absolute", padding: 45 }}>
            <Text>this is an ad</Text>
        </View>
    </Pressable>
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
