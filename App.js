import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Login from './components/Login';
import { useState } from 'react';

export default function App() {

  const [displayLoginPage, setDisplayLoginPage] = useState(true);

  const toggleScreens = () => setDisplayLoginPage(prev => !prev);

  return (
    <View style={styles.container}>
    {
      displayLoginPage ? 
        <Login toggleScreens={toggleScreens} /> : 
        <Text>Signup Page</Text>
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
