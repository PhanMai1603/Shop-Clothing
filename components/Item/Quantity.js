import React from 'react';
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Quantity() {
    return (
        <TouchableOpacity style={styles.checkbox}>
            <Ionicons name="remove-circle-outline" size={24} color="black" />
                <Text style={styles.text}>2</Text>
                <Ionicons name="add-circle-outline" size={24} color="black" />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    checkbox: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        fontSize: 15,
        color: 'black',
    }
});
