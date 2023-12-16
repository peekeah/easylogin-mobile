import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import Login from './components/Login';
import { useState } from 'react';
import SignUp from './components/Signup';

export default function App() {

  const [displayLoginPage, setDisplayLoginPage] = useState(false);

  const toggleScreens = () => setDisplayLoginPage(prev => !prev);

  return (
    <View style={styles.container}>
    {
      displayLoginPage ? 
        <Login toggleScreens={toggleScreens} /> : 
        <SignUp toggleScreens={toggleScreens} />
    }
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginTop: '100px'
  },
});
