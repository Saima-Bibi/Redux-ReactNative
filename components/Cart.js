import React, { useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../redux/action/Action';
const Cart = () => {
    const navigation = useNavigation()
    const items = useSelector(state => state.items)
    console.log(items)


    const dispatch = useDispatch()
    const removeItem = (index) => {
        dispatch(removeFromCart(index))
        
    }


    return (

        <View style={styles.container}>

            <View style={styles.header}>
                <Text style={styles.headerText} >Your added items</Text>
                <TouchableOpacity style={styles.cartIcon} onPress={() => { navigation.navigate('Cart') }}>
                    <AntDesign name="shoppingcart" size={24} color="black" />
                    <View style={styles.cartCounter}>
                        <Text style={styles.cartCounterText}>{items.length}</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <FlatList
                contentContainerStyle={styles.list}
                data={items}
                keyExtractor={(item) => item.id}
                renderItem={({ item, index }) => (
                    <View style={styles.productContainer}>
                        <Image source={{ uri: item.image }} style={styles.productImage} />
                        <Text style={styles.productName}>{item.name}</Text>
                        <Text style={styles.productPrice}>{item.price}</Text>
                        <TouchableOpacity style={styles.addButton} onPress={() => removeItem(item.id)}>
                            <AntDesign name="delete" size={20} color="white" />
                        </TouchableOpacity>
                    </View>)
                }


            />
        </View>
    )

}
export default Cart
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        backgroundColor: '#fff',
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    cartIcon: {
        position: 'relative',
    },
    cartCounter: {
        position: 'absolute',
        right: -8,
        top: -8,
        backgroundColor: 'red',
        borderRadius: 10,
        width: 20,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cartCounterText: {
        color: '#fff',
        fontSize: 12,
    },
    list: {
        padding: 10,
    },
    productContainer: {
        backgroundColor: '#fff',
        marginBottom: 10,
        padding: 15,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
    },
    productImage: {
        width: 80,
        height: 80,
        marginRight: 15,
    },
    productName: {
        fontSize: 16,
        flex: 1,
    },
    productPrice: {
        fontSize: 16,
        color: 'green',
        marginRight: 15,
        fontWeight: 'bold',
    },
    addButton: {
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 5,
    },
    addButtonText: {
        color: '#fff',
        fontSize: 14,
    },
});