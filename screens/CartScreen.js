import React, { useContext, useMemo, useState } from "react";
import { View, Text, FlatList, StyleSheet, Pressable } from "react-native";
import { CartContext } from "../CartContext";

const CartScreen = ({ navigation }) => {
  const { cartItems, removeAllFromCart } = useContext(CartContext);
  // const cartItems = [
  //   { id: 1, name: "Apple", price: 50, quantity: 2 },
  //   { id: 2, name: "Banana", price: 30, quantity: 3 },
  //   { id: 3, name: "Orange", price: 40, quantity: 1 },
  //   { id: 4, name: "Grapes", price: 80, quantity: 1 },
  //   { id: 5, name: "Mango", price: 60, quantity: 2 },
  //   { id: 6, name: "Watermelon", price: 90, quantity: 1 },
  //   { id: 7, name: "Pineapple", price: 75, quantity: 1 },
  //   { id: 8, name: "Strawberry", price: 120, quantity: 2 },
  //   { id: 9, name: "Papaya", price: 55, quantity: 1 },
  //   { id: 10, name: "Kiwi", price: 100, quantity: 3 },
  //   { id: 11, name: "Tomato", price: 25, quantity: 2 },
  //   { id: 12, name: "Potato", price: 20, quantity: 5 },
  //   { id: 13, name: "Onion", price: 35, quantity: 3 },
  //   { id: 14, name: "Carrot", price: 40, quantity: 2 },
  //   { id: 15, name: "Cucumber", price: 30, quantity: 4 },
  //   { id: 16, name: "Broccoli", price: 70, quantity: 1 },
  //   { id: 17, name: "Lettuce", price: 45, quantity: 2 },
  //   { id: 18, name: "Cauliflower", price: 50, quantity: 1 },
  //   { id: 19, name: "Spinach", price: 35, quantity: 2 },
  //   { id: 20, name: "Cabbage", price: 40, quantity: 1 },
  // ];
  const totalAmount = useMemo(
    () => cartItems.reduce((sum, i) => sum + i.price * i.quantity, 0),
    [cartItems]
  );

  const [pay, setPay] = useState(false);

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.itemTxt}>
        {item.name} (x{item.quantity})
      </Text>
      <Text style={styles.itemTxt}>₹{item.price * item.quantity}</Text>
    </View>
  );

  function handlePaymentResponse(success) {
    navigation.navigate("PaymentResult", { isSuccess: success });
    setPay(false);
    removeAllFromCart();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        My Cart ({cartItems.reduce((t, i) => t + i.quantity, 0)} items)
      </Text>

      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        removeClippedSubviews
        initialNumToRender={10}
        maxToRenderPerBatch={10}
        windowSize={10}
      />

      <View style={styles.footer}>
        <View style={styles.total}>
          <Text style={styles.totalTxt}>Total</Text>
          <Text style={styles.totalTxt}>₹{totalAmount}</Text>
        </View>
        {!pay ? (
          <Pressable style={styles.paymentBtn} onPress={() => setPay(true)}>
            <Text style={styles.btnTxt}>Place Order</Text>
          </Pressable>
        ) : (
          <View style={styles.devOption}>
            <Pressable
              style={styles.sucessBtn}
              onPress={() => handlePaymentResponse(true)}
            >
              <Text style={styles.btnTxt}>Success</Text>
            </Pressable>
            <Pressable
              style={styles.failBtn}
              onPress={() => handlePaymentResponse(false)}
            >
              <Text style={styles.btnTxt}>Fail</Text>
            </Pressable>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  listContent: {
    paddingBottom: "7%",
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    paddingVertical: 12,
  },
  itemTxt: {
    color: "#302d2d",
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#fff",
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
  },
  total: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  totalTxt: {
    fontWeight: "bold",
    fontSize: 16,
  },
  paymentBtn: {
    backgroundColor: "#1E90FF",
    borderRadius: 8,
    paddingVertical: 14,
  },
  btnTxt: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
  devOption: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  sucessBtn: {
    backgroundColor: "#28A745",
    borderRadius: 8,
    paddingVertical: 14,
    width: "45%",
  },
  failBtn: {
    backgroundColor: "#FF4444",
    borderRadius: 8,
    paddingVertical: 14,
    width: "45%",
  },
});

export default CartScreen;
