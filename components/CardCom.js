import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React, { useState, useContext, useEffect } from "react";
import NumericIncrementBox from "./NumericIncrementBox";
import { CartContext } from "../CartContext";

const screenWidth = Dimensions.get("window").width;
const cardWidth = screenWidth / 2 - 16;

export default function CardCom({ id, name, price, imageUrl }) {
  const { addToCart, isEmpty } = useContext(CartContext);
  const [isAdded, setAdded] = useState(false);
  const addItems = () => {
    const product = { id, name, price, imageUrl, quantity: 1 };
    addToCart(product);
    setAdded(true);
  };
  useEffect(() => {
    if (isEmpty()) {
      setAdded(false);
    }
  });
  return (
    <View key={id} style={styles.card}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <Text style={styles.head}>{name}</Text>
      <Text style={styles.price}>₹{price}</Text>
      {!isAdded ? (
        <TouchableOpacity style={styles.button} onPress={addItems}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
      ) : (
        <NumericIncrementBox itemId={id} onZero={() => setAdded(false)} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: cardWidth,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 8,
    margin: 4,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 120,
    borderRadius: 8,
    resizeMode: "cover",
  },
  head: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 6,
    color: "#333",
  },
  price: {
    textAlign: "center",
    fontSize: 14,
    color: "#666",
    marginTop: 4,
  },
  button: {
    backgroundColor: "#007AFF",
    borderRadius: 8,
    paddingVertical: 6,
    width: "100%",
    marginTop: 8,
  },
  buttonText: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "600",
  },
});
