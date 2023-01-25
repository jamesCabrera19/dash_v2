import { Divider, Text } from "react-native-paper";
import { View } from "react-native";

const MySeparator = ({ children }) => (
    <View style={{ marginVertical: 10 }}>
        <Divider />
        {children}
        {/* <Divider /> */}
    </View>
);

export { MySeparator };
