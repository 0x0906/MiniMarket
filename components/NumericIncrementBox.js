import React, { useState, useContext, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { CartContext } from "../CartContext";

const NumericIncrementBox = ({ itemId, onZero }) => {
  const { cartItems, updateQuantity, removeFromCart, isEmpty } =
    useContext(CartContext);
  const [value, setValue] = useState(1);

  useEffect(() => {
    if (isEmpty()) setValue(0);
    const cartItem = cartItems.find((i) => i.id === itemId);
    if (cartItem) setValue(cartItem.quantity);
  }, [cartItems]);

  const increment = () => {
    const newValue = value + 1;
    setValue(newValue);
    updateQuantity(itemId, newValue);
  };

  const decrement = () => {
    if (value > 1) {
      const newValue = value - 1;
      setValue(newValue);
      updateQuantity(itemId, newValue);
    } else {
      removeFromCart(itemId);
      setValue(0);
      if (onZero) onZero();
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={decrement} style={styles.button}>
        <Text style={styles.buttonText}>−</Text>
      </TouchableOpacity>

      <View style={styles.valueBox}>
        <Text style={styles.valueText}>{value}</Text>
      </View>

      <TouchableOpacity onPress={increment} style={styles.button}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 7,
  },
  button: {
    backgroundColor: "#007AFF",
    width: 40,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
  },
  valueBox: {
    marginHorizontal: 12,
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
  },
  valueText: {
    fontSize: 15,
    fontWeight: "500",
  },
});

export default NumericIncrementBox;
