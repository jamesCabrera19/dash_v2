import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PickUp from "../screens/pickup";
const Stack = createNativeStackNavigator();

const PickUpStack = ({ navigation }) => {
    return (
        <Stack.Navigator initialRouteName="PickUp">
            <Stack.Screen
                name="PickUp"
                component={PickUp}
                options={{
                    headerShown: true,
                    headerBackVisible: true,
                }}
            />
            {/* ALL OTHER SCREENS related to this tab should go here */}
        </Stack.Navigator>
    );
};

export default PickUpStack;
