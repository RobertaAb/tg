import React from 'react';
import { View, TextInput, StyleSheet, ScrollView } from 'react-native';

const CustomTextInputMulti = ({ value, setValue }) => {
  return (
    <ScrollView style={styles.container}>
      <TextInput
        multiline
        numberOfLines={4}
        onChangeText={setValue}
        value={value}
        editable
        style={[styles.input]}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#fff',
    borderColor: '#e8e8e8',
    borderWidth: 1,
    padding: 18,
    marginVertical: 8,
    borderRadius: 2
  },
  input: {
    fontSize: 16,
    color: '#0044aa',
    textAlignVertical: 'top'
  }
});

export default CustomTextInputMulti;