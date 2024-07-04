import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const Input = ({ label, placeholder, onChangeText, value }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={[styles.label, isFocused && { color: '#6200ee' }]}>{label}</Text>
      <TextInput
        style={[styles.input, isFocused && { borderColor: '#6200ee' }]}
        placeholder={placeholder}
        placeholderTextColor="#aaa"
        onChangeText={onChangeText}
        value={value}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  label: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
  input: {
    height: 40,
    width: 180,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    fontSize: 16,
    color: '#333',
  },
});

export default Input;
