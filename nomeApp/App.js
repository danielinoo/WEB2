import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, SafeAreaView } from 'react-native';
import Navbar from './Screens/Navbar';
import RicercaVolo from './Screens/RicercaVolo';
import Vis_volo from './Screens/Vis_volo';
import Vis_Aer from './Screens/Vis_aer';
import Vis_com from './Screens/Vis_com';
import HomeScreen from './Screens/HomeScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      {/* Wrapper for the whole app */}
      <SafeAreaView style={styles.container}>
        {/* Navbar component */}
        <Navbar />

        {/* Stack navigator for routes */}
        <Stack.Navigator initialRouteName= "Home">
          <Stack.Screen name = "Home" component={HomeScreen} />
          <Stack.Screen name="RicercaVolo" component={RicercaVolo} />
          <Stack.Screen name="Volo" component={Vis_volo} />
          <Stack.Screen name="Aer" component={Vis_Aer} />
          <Stack.Screen name="Comp" component={Vis_com} />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0', // Light background color
  },
});

export default App;
