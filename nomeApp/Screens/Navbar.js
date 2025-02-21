import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Hook for navigation

const Navbar = () => {
  const navigation = useNavigation(); // Use navigation hook

  const { width } = Dimensions.get('window'); // Get the screen width

  // Check if the screen size is small (mobile or tablet)
  const isMobile = width <= 768;

  return (
    <View style={[styles.navbar, isMobile && styles.mobileNavbar]}>
      {/* Logo section */}
      <View style={styles.logo}>
        <Text style={styles.logoText}>Sito voli</Text>
      </View>

      {/* Navigation links */}
      <View style={[styles.navLinks, isMobile && styles.mobileNavLinks]}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text style={styles.navLink}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('RicercaVolo')}>
          <Text style={styles.navLink}>Cerca Volo</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Volo')}>
          <Text style={styles.navLink}>Voli</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Comp')}>
          <Text style={styles.navLink}>Compagnie</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Aer')}>
          <Text style={styles.navLink}>Aeroporti</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#2c65d7',
    paddingVertical: 15,
    paddingHorizontal: 20,
   
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10, // Ensures the navbar is on top of other content
    
  },
  logo: {
    flex: 1,
    alignItems: 'center',
    marginBottom: 10,
  },
  logoText: {
    fontSize: 24,
    color: 'white',
    fontFamily: 'Arial, sans-serif',
    fontWeight: 'bold',
  },
  navLinks: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
  },
  navLink: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    paddingVertical: 10,
    paddingHorizontal: 20,
    textAlign: 'center',
  },
  // Responsivity for mobile devices
  mobileNavbar: {
    flexDirection: 'column',
    paddingVertical: 10,
  },
  mobileNavLinks: {
    flexDirection: 'column',
    width: '100%',
    alignItems: 'center', // Center the nav items
    gap: 15, // Space between links
  },
});

export default Navbar;
