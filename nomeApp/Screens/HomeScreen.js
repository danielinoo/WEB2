import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Benvenuto nella nostra app di voli!</Text>
      <Text style={styles.subText}>Prenota il tuo prossimo volo in modo semplice e veloce.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    padding: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4C9FF2',
    marginBottom: 10,
  },
  subText: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
  },
});

export default HomeScreen;
