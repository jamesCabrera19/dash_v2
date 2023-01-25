import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Account from "../screens/account";
//
const Stack = createNativeStackNavigator();

const AccountStack = ({ navigation }) => {
    return (
        <Stack.Navigator initialRouteName="Account">
            <Stack.Screen
                name="Account"
                component={Account}
                options={{
                    headerShown: true,
                    headerBackVisible: true,
                }}
            />
            {/* ALL OTHER SCREENS related to this tab should go here */}
        </Stack.Navigator>
    );
};

export default AccountStack;
