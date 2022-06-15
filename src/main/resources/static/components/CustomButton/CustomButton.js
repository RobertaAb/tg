import { View, Text, StyleSheet, Pressable } from 'react-native';

const CustomButton = ({onPress, text}) => {
  return (
    <Pressable 
    android_ripple  
    onPress={onPress} 
    style={styles.container}>
      <Text
      style={styles.textBtn}
        title="Press me"
      >{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#2a2aff',
    marginVertical: 32,
    padding: 12,
    alignItems: 'center',
    borderRadius: 2
  },
  textBtn: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#fff'
  }
});

export default CustomButton;