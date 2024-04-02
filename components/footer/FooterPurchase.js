// FooterPurchase.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import CheckBox from '../Item/CheckBox';

export default function FooterPurchase() {
  // Giả sử bạn có một state hoặc prop để lưu trữ tổng số tiền
  const totalPrice = '20$'; // Thay thế bằng giá trị thực tế từ state/props

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.selectAll}>
        <CheckBox/>
        <Text style={styles.selectAllText}>Chọn tất cả</Text>
      </TouchableOpacity>
      <View style={styles.totalContainer}>
        <Text style={styles.totalPrice}>Tổng cộng: {totalPrice}</Text>
        <TouchableOpacity style={styles.checkoutButton}>
          <Text style={styles.checkoutButtonText}>Thanh toán</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#e2e2e2',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  selectAll: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  selectAllText: {
    marginLeft: 8,
    fontSize: 16,
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  totalPrice: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  checkoutButton: {
    backgroundColor: '#20A090',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  checkoutButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
