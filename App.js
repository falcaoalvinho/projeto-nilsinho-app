import { SplashPage } from "./pages/Splash/Splash.js";
import { LoginPage } from "./pages/Login/Login.js";
import { MainHubPage } from "./pages/MainHub/MainHub.js";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator()

export default function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName="Splash"
          screenOptions={{
            headerStyle: {backgroundColor: '#101010'},
            headerTintColor: '#d9d9d9'
          }}
        >
          <Stack.Screen name="Splash" component={SplashPage} />
          <Stack.Screen name="Login" component={LoginPage} />
          <Stack.Screen name="MainHub" component={MainHubPage} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }