import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Chat } from './src/screens/Chat';
import { Discussion } from './src/screens/Discussion';
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from './src/navigations/AppNavigator';
import { Profile } from './src/components/Profile';
import { ProfileCard } from './src/components/ProfileCard';



export default function App() {
  return (
    <NavigationContainer >
      <AppNavigator />
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
