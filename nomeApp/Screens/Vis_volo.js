import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { View, Text, FlatList, StyleSheet, ScrollView, Dimensions, SafeAreaView } from 'react-native';

const Vis_volo = () => {
  const [data, setData] = useState([]); 
  const { width } = Dimensions.get('window'); // Ottieni la larghezza dello schermo

  useEffect(() => {
    axios.get('http://127.0.0.1:5004/voli')
      .then(response => {
        setData(response.data); 
      })
      .catch(error => console.error(error)); 
  }, []);

  return (
    <SafeAreaView style={styles.container}>  {/* Usa SafeAreaView invece di View */}
      <Text style={styles.heading}>Dati dei voli:</Text>

      {/* Intestazione della tabella */}
      <View style={styles.tableHeader}>
        <Text style={[styles.cell, styles.tableHeaderCell]}>Codice volo</Text>
        <Text style={[styles.cell, styles.tableHeaderCell]}>Partenza</Text>
        <Text style={[styles.cell, styles.tableHeaderCell]}>Arrivo</Text>
        <Text style={[styles.cell, styles.tableHeaderCell]}>Orario partenza</Text>
        <Text style={[styles.cell, styles.tableHeaderCell]}>Orario arrivo</Text>
      </View>

      {/* Scroll per la lista di voli */}
      <ScrollView vertical style={styles.scrollView}>
        <FlatList
          data={data}
          keyExtractor={item => item.id.toString()} 
          renderItem={({ item, index }) => (
            <View style={[styles.tableRow, { backgroundColor: index % 2 === 0 ? '#fff' : '#90caf9' }]}>
              <Text style={styles.cell}>{item.codice}</Text>
              <Text style={styles.cell}>{item.partenza}</Text>
              <Text style={styles.cell}>{item.arrivo}</Text>
              <Text style={styles.cell}>{item.ora_partenza}</Text>
              <Text style={styles.cell}>{item.ora_arrivo}</Text>
            </View>
          )}
        />
      </ScrollView>
    </SafeAreaView> 
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    marginTop: 50,
    margin: 20,
    
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
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

  tableRow: {
    flexDirection: 'row',
    marginBottom: 10,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  cell: {
    flex: 1,
    fontSize: 16,
    textAlign: 'center',
    color: '#333',
  },
  
  // Responsività per schermi piccoli
  
  
  // Stili responsivi per schermi piccoli
  mobileCell: {
    fontSize: 14, // Riduci la dimensione del testo su schermi piccoli
  },
});

export default Vis_volo;
