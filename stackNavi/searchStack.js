import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Search from "../screens/search";

//
const Stack = createNativeStackNavigator();
const SearchStack = ({ navigation }) => {
    return (
        <Stack.Navigator initialRouteName="Search">
            <Stack.Screen
                name="Search"
                component={Search}
                options={{
                    headerShown: true,
                    headerBackVisible: true,
                }}
            />
            {/* ALL OTHER SCREENS related to this tab should go here */}
        </Stack.Navigator>
    );
};

export default SearchStack;
