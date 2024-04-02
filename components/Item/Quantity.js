import React from 'react';
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Quantity() {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.checkbox}>
                <Ionicons name="add-circle-outline" size={24} color="black" />
                <Text style={styles.text}>2</Text>
                <Ionicons name="remove-circle-outline" size={24} color="black" />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // Định nghĩa kiểu dáng cho container chứa các thành phần
    },
    checkbox: {
        flexDirection: 'row',
        alignItems: 'center',
        // Thêm các thuộc tính kiểu dáng khác nếu cần
    },
    text: {
        fontSize: 15,
        color: 'black',
        // Thêm các thuộc tính kiểu dáng khác nếu cần
    }
});
