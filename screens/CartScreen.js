import Checkbox from 'expo-checkbox';
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Product from '../components/Item/Product.js';

const ShoppingCartScreen = () => {
  // Hàm xử lý khi nhấn nút Delete
  const handleDelete = (productId) => {
    // Xử lý xóa sản phẩm ở đây
    console.log('Deleted product with id:', productId);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Shopping Cart</Text>
      {/* Danh sách sản phẩm */}
      <View style={styles.productList}>
        {/* Sản phẩm */}
        <View style={styles.productItem}>
          <Product/>
          <Text style={styles.productName}>English Book</Text>
          <Text style={styles.productPrice}>$25</Text>
          <Text style={styles.productStock}>9 products left</Text>
           {/* Nút Delete */}
           <Button title="Delete" onPress={() => handleDelete(productId)} color="red" />
          {/* Nút điều chỉnh số lượng */}
          <View style={styles.quantityControl}>
            <Button title="-" onPress={() => {}} />
            <Text style={styles.quantity}>1</Text>
            <Button title="+" onPress={() => {}} />
          </View>
        </View>
        {/* Thêm sản phẩm khác tương tự */}
      </View>

      {/* Thanh công cụ dưới cùng */}
      <View style={styles.toolbar}>
        <Checkbox title="Select all" onPress={() => {}} />
        <Text style={styles.totalPayment}>Total payment $75</Text>
        <Button title="Purchase (3)" onPress={() => {}} color='#20A090' />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  productList: {
    flex: 1,
  },
  productItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  productName: {
    fontSize: 18,
  },
  productPrice: {
    fontSize: 18,
    color: 'green',
  },
  productStock: {
    fontSize: 14,
    color: 'red',
  },
  quantityControl: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantity: {
    marginHorizontal: 10,
  },
  toolbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxLabel: {
    marginLeft: 8,
  },
  totalPayment: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ShoppingCartScreen;
