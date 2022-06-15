import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

const Radio = () => {
  const [checked, setChecked] = useState(0);

  var categories = [
    {'tipo': 'Hardware', 'slug': 'HW'},
    {'tipo': 'Software', 'slug': 'SW'},
    {'tipo': 'Externo', 'slug': 'EXT'},
    {'tipo': 'Interno', 'slug': 'INT'},
    {'tipo': 'Configuração', 'slug': 'CFG'}
  ];

  return (
    <View>
      <View style={styles.btn}>
        {categories.map((category, slug) => {
          return (
            <View key={category}>
              {checked == slug ? (
                <TouchableOpacity style={styles.btn}>
                  <Image
                    style={styles.img}
                    source={require('../../assets/checked.png')}
                  />
                  <Text>{category.tipo}{console.log(slug)}</Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={() => {
                    setChecked(slug);
                  }}
                  style={styles.btn}>
                  <Image
                    style={styles.img}
                    source={require('../../assets/unchecked.png')}
                  />
                  <Text>{category.tipo}</Text>
                </TouchableOpacity>
              )}
            </View>
          );
        })}
      </View>
      {/* <Text>{gender[checked]}</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  radio: {
    flexDirection: 'row',
  },
  img: {
    height: 20,
    width: 20,
    marginHorizontal: 5,
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Radio;