// index.tsx
import React, { useState } from "react";
import { View, StyleSheet, TextInput, Button, Text } from "react-native";
import { PaperProvider } from "react-native-paper";
import CustomBanner from "../components/Banner";

const App = () => {
  const [input, setInput] = useState("");
  const [visible, setVisible] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [color, setColor] = useState("");

  const validateHex = (hex: string) => {
    const hexRegex = /^#?([A-Fa-f0-9]{3}){1,2}$/i;
    const valid = hexRegex.test(hex);

    if (valid) {
      const normalized = hex.startsWith("#") ? hex : `#${hex}`;
      setColor(normalized.toUpperCase());
    } else {
      setColor("");
    }

    setIsValid(valid);
    setVisible(true);
  };

  return (
    <PaperProvider>
      <View style={styles.container}>
        <TextInput
          placeholder="#FFFFFF"
          value={input}
          onChangeText={setInput}
          style={styles.input}
          maxLength={7}
          autoCapitalize="characters"
        />

        <Button title="Validate Color" onPress={() => validateHex(input)} />

        {color ? (
          <View style={[styles.colorBox, { backgroundColor: color }]}>
            <Text style={styles.colorText}>{color}</Text>
          </View>
        ) : null}

        <CustomBanner
          visible={visible}
          isValid={isValid}
          message={
            isValid
              ? `Valid color: ${color}`
              : "Invalid hex code! Use # followed by 3 or 6 hex digits (0-9, A-F)"
          }
          onDismiss={() => setVisible(false)}
        />
      </View>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 100,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
  },
  colorBox: {
    width: "100%",
    height: 100,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  colorText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textShadowColor: "rgba(0, 0, 0, 0.5)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
});

export default App;
