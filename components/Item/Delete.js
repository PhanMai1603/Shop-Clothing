// ProductCart.js
import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Quantity from './Quantity'; // Import the Quantity component

export default function ProductCart() {
  // Define a function to handle delete action
  const handleDelete = () => {
    // Perform delete action here
    console.log('Deleted!');
  };

  return (
    <View style={styles.container}>
      {/* Product image */}
      <Image
        style={styles.image}
        source={require('../../assets/images/product1.png')}
      />

      {/* Quantity component */}
      <Quantity />

      {/* Delete button */}
      <TouchableOpacity style={styles.deleteButton} onPress={handleDelete}>
        {/* You can use any icon library for the delete icon */}
        {/* For example, I'm using an "X" character here */}
        <Text style={styles.deleteButtonText}>X</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  deleteButton: {
    backgroundColor: 'red',
    padding: 5,
    borderRadius: 5,
  },
  deleteButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
