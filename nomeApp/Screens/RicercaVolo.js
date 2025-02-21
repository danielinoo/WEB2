import React, { useState } from 'react';
import axios from 'axios';
import { View, Text, TextInput, Button, FlatList, StyleSheet, Alert, Dimensions } from 'react-native';
import { SafeAreaView, ScrollView } from 'react-native-web';

const RicercaVolo = () => {
  const [partenza, setPartenza] = useState('');
  const [arrivo, setArrivo] = useState('');
  const [data, setData] = useState([]); // Store the flight data
  const [vis, setVis] = useState(false);  // Visibility of the results
  const [nessunRisultato, setNessunRisultato] = useState(false);  // No results flag

  const handleSubmit = (e) => {
    e.preventDefault();

    const searchData = {
      partenza: partenza,
      arrivo: arrivo,
    };

    axios
      .post('http://127.0.0.1:5004/RicercaVolo', searchData, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        setData(response.data); 
        setVis(true);
        if (response.data.length === 0) {
          setNessunRisultato(true); 
        } else {
          setNessunRisultato(false);
        }
      })
      .catch((error) => {
        console.error('Errore durante la ricerca', error);
        Alert.alert('Errore', 'errore');
      });
  };

  // Get screen width for responsiveness
  const { width } = Dimensions.get('window');
  const isMobile = width <= 768; // Check if the screen is smaller than or equal to 768px

  return (
    
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <Text style={styles.heading}>Cerca Volo</Text>

      <View style={styles.form}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Scegli aeroporto partenza:</Text>
          <TextInput
            style={[styles.input, isMobile && styles.inputMobile]} //applica lo stile al dispositivo mobile
            value={partenza}
            onChangeText={setPartenza}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Scegli aeroporto arrivo:</Text>
          <TextInput
            style={[styles.input, isMobile && styles.inputMobile]} 
            value={arrivo}
            onChangeText={setArrivo}
          />
        </View>

        <Button title="Cerca" onPress={handleSubmit} />
      </View>
      </ScrollView>

      {/* se non ci sono risultati */}
      {nessunRisultato && (
        <View style={styles.noResultsContainer}>
          <Text style={styles.noResultsText}>
            AL MOMENTO NON CI SONO VOLI PER QUESTA TRATTA
          </Text>
        </View>
      )}

      {/* se ci sono risultati*/}
      {vis && !nessunRisultato && (
        <View style={styles.resultsContainer}>
          <Text style={styles.resultsHeading}>Risultati:</Text>
                <View style={styles.tableHeader}>
                  <Text style={[styles.cell, styles.tableHeaderCell]}>Codice volo</Text>
                  <Text style={[styles.cell, styles.tableHeaderCell]}>Partenza</Text>
                  <Text style={[styles.cell, styles.tableHeaderCell]}>Arrivo</Text>
                  <Text style={[styles.cell, styles.tableHeaderCell]}>Orario partenza</Text>
                  <Text style={[styles.cell, styles.tableHeaderCell]}>Orario arrivo</Text>
                </View>
        <ScrollView>
          <FlatList
            data={data}
            keyExtractor={(item) => item.codice.toString()}
            renderItem={({ item }) => (
              <View style={styles.tableRow}>
                <Text style={styles.tableCell}>{item.codice}</Text>
                <Text style={styles.tableCell}>{item.partenza}</Text>
                <Text style={styles.tableCell}>{item.arrivo}</Text>
                <Text style={styles.tableCell}>{item.ora_partenza}</Text>
                <Text style={styles.tableCell}>{item.ora_arrivo}</Text>
              </View>
            )}
          />
        </ScrollView>
        </View>
      )}
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 50,
    margin: 20,
    
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333', 
  },
  form: {
    marginBottom: 20,
    backgroundColor: 'lightgrey',
    padding: 20,
    borderRadius: 10, 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3, 
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333', 
    fontWeight: '600',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    fontSize: 16,
    backgroundColor: '#fff', 
    color: '#333',
  },
  inputMobile: {
    width: '100%', 
  },
  button: {
    backgroundColor: '#4CAF50', 
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  
  noResultsContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  noResultsText: {
    fontSize: 18,
    color: 'red',
  },
  
  resultsContainer: {
    marginTop: 20,
  },
  resultsHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  tableRow: {
    flexDirection: 'row',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  tableCell: {
    flex: 1,
    textAlign: 'center',
    fontSize: 16,
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    marginBottom: 10,
    borderRadius: 5,
  },
  tableHeaderCell: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
});

export default RicercaVolo;
