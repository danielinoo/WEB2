import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { View, Text, FlatList, StyleSheet, ScrollView, SafeAreaView } from 'react-native';

const Vis_Aer = () => {
  const [data, setData] = useState([]); 
  useEffect(() => {
   
    axios.get('http://127.0.0.1:5004/visualizza_aeroporti')
      .then(response => {
        setData(response.data);
      })
      .catch(error => console.error(error)); 
  }, []);

  // Render the list of airports
  return (


    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Dati degli aeroporti:</Text>
      <View style={styles.tableHeader}>
        <Text style={[styles.cell, styles.tableHeaderCell]}>Codice aeroporto</Text>
        <Text style={[styles.cell, styles.tableHeaderCell]}>Nome</Text>
        <Text style={[styles.cell, styles.tableHeaderCell]}>Citta</Text>
        <Text style={[styles.cell, styles.tableHeaderCell]}>Nazione</Text>
      </View>
      <ScrollView >
      <FlatList
        data={data}
        keyExtractor={item => item.codice.toString()} 
        renderItem={({ item, index }) => (
          // serve per cambiare il colore delle righe della tabella
          <View style={[styles.tableRow, { backgroundColor: index % 2 === 0 ? '#fff' : '#90caf9' }]}> 
            <Text style={styles.cell}>{item.codice}</Text>
            <Text style={styles.cell}>{item.nome}</Text>
            <Text style={styles.cell}>{item.citta}</Text>
            <Text style={styles.cell}>{item.nazione}</Text>
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
    padding: 10,
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
    paddingVertical: 10,
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
});

export default Vis_Aer;
