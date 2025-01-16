import React, { useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const App = () => {
    const navigation = useNavigation()
    const products = [
        { 
          id: '1', 
          name: 'Sneakers', 
          price: '$50', 
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNS-LpJ5MsusCNRvH38bgUavsCCKvURY7prA&s' 
        },
        { 
          id: '2', 
          name: 'Boots', 
          price: '$80', 
          image: 'https://unze.com.pk/cdn/shop/files/gs8343e.jpg?v=1706075641' 
        },
        { 
          id: '3', 
          name: 'Sandals', 
          price: '$30', 
          image: 'https://footsteps.pk/cdn/shop/products/PSX_20221018_183515.jpg?v=1690914633&width=1445' 
        },
        { 
          id: '4', 
          name: 'Loafers', 
          price: '$60', 
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMS3MPD02aiGyBKDCi9Wzx1lAR6P9zemdm7w&s' 
        },
        { 
          id: '5', 
          name: 'Flip Flops', 
          price: '$20', 
          image: 'https://dressfair.pk/image/cache/catalog/product-2513/pink-platform-flip-flops-with-gold-chain-design-slipper-5TJIjGt9Ea-550x550.jpeg' 
        },
        { 
          id: '6', 
          name: 'Shoes', 
          price: '$70', 
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZs5JHBNl4d0v4ZzgIALq6ZDM0IKnBpyZWBQ&s' 
        },
        { 
          id: '7', 
          name: 'High Heels', 
          price: '$90', 
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqbbFb92-hdVbknu61c1PIkqF4Voyfe4W9rA&s' 
        },
        { 
          id: '8', 
          name: 'Slippers', 
          price: '$25', 
          image: 'https://ae01.alicdn.com/kf/H007fbc2e79c84f1b8750b88c330dc578n.jpg?width=800&height=800&hash=1600' 
        },
        { 
          id: '9', 
          name: 'Clogs', 
          price: '$40', 
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwa7nVCtQd5V_OJw1sUAIUUvVE7EjHG4K6LA&s' 
        },
        
      ];
      

  const [cartCount, setCartCount] = useState(0);

  const addToCart = () => {
    setCartCount(cartCount + 1);
  };

  const renderItem = ({ item }) => (
    <View style={styles.productContainer}>
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>{item.price}</Text>
      <TouchableOpacity style={styles.addButton} onPress={addToCart}>
        <Text style={styles.addButtonText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>All Products</Text>
        <TouchableOpacity style={styles.cartIcon} onPress={() =>{ navigation.navigate('Cart')}}>
          <AntDesign name="shoppingcart" size={24} color="black" />
          <View style={styles.cartCounter}>
            <Text style={styles.cartCounterText}>{cartCount}</Text>
          </View>
        </TouchableOpacity>
      </View>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

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
    right: -5,
    top: -5,
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
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 14,
  },
});

export default App;
