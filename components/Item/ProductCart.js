import { StyleSheet, Pressable, Text, Image, SafeAreaView } from 'react-native';

import PriceNotFree from './PriceNotFree';
import ProductName from './ProductName';
import Owner from './Owner';
import Status from './Status';
import CheckBox from './CheckBox';
import Quantity from './Quantity';
import Delete from './Delete';

export default function ProductCart() {
    return (
        <SafeAreaView style={styles.container}>
            <Pressable style={styles.container__details} >
                <Image style={styles.image} source={require('../../assets/images/product1.png')} />
                <SafeAreaView style={styles.info}>
                    <ProductName />
                    <PriceNotFree/>
                    <Quantity/>
                </SafeAreaView>
                <SafeAreaView style={styles.infor}>
                    <Delete/>
                    <CheckBox/>
                    <Owner/>
                </SafeAreaView>
            </Pressable>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 8,
        width: '100%',
        height: 130,
        backgroundColor: '#fff',
        borderRadius: 10,
        elevation: 4
    },
    container__details: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 8
    },
    image: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#00000000',
        width: 100,
        height: 100,
        borderRadius: 8,
    },
    info: {
        flex: 2,
        marginLeft: 16,
    },
});
