import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';


// IMPORTS COMPONENTS
import CustomInput from '../../components/Input/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';

const HomeScreen = () => {
  const [search, setSearch] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [masterData, setMasterData] = useState([]);

  const navigation = useNavigation();

  const onPressEvent = () => {
    try {
      navigation.navigate('Detalhes');
    } catch (error) {
      console.warn(error);
    }
  }

  const onItemPressEvent = (item) => {
    console.warn(item);
  }

  const DATA = [
    {
      id: 0,
      category: 'HW',
      title: "Troca de placa de rede"
    },
    {
      id: 1,
      category: 'SW',
      title: "Atualização de antivírus"
    },
    {
      id: 2,
      category: 'EXT',
      title: "Switch de 24 portas"
    },
    {
      id: 3,
      category: 'INT',
      title: "Limpeza de arquivo temporário"
    },
    {
      id: 4,
      category: 'CFG',
      title: "Instalação de driver"
    },
    {
      id: 5,
      category: 'INT',
      title: "Limpeza de arquivo temporário"
    },
    {
      id: 6,
      category: 'CFG',
      title: "Instalação de driver"
    }
  ];

  useEffect(() => {
    setFilteredData(DATA);
    setMasterData(DATA);
  }, []);

  const fetchData = () => {
    // const apiURL = 'https://coronavirus-19-api.herokuapp.com/countries';
    // fetch(apiURL)
    //   .then((response) => response.json())
    //   .then((responseJson) => {
    //     setFilteredData(responseJson);
    //     setMasterData(responseJson);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
  };

  const SearchFilter = (text) => {
    if (text) {
      const newData = filteredData.filter((item) => {
        const itemData = item.title;
        const textData = text.toLowerCase();

        return itemData.toLowerCase().indexOf(textData) > -1;
      });

      setFilteredData(newData);
      setSearch(text);
    } else {
      setFilteredData(masterData);
      setSearch(text);
    }
  };

  const ItemSeparatorView = () => {
    return (
      <View
        style={{
          height: 1.5,
          width: '90%',
          marginLeft: 35,
          backgroundColor: '#000',
        }}
      />
    );
  };


  const ItemView = ({ item }) => {
    // onPress={() =>
    //   navigation.navigate('Screen2', { item: item, name: item.country })
    // }
    // style={[
    //   styles.searchcontainer,
    //   {
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     height: 50,
    //   },
    // ]}
    return (
      <TouchableOpacity
        style={styles.listItem}
        onPress={()=>{
          onPressEvent();
        }}
      >
        <Text>
          {item.category}{item.id} - {item.title.toUpperCase()}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.space}></View>
        <CustomInput
          placeholder="Procurar por..."
          setValue={(text) => SearchFilter(text)}
        />

        {/* <FlatList
          data={filteredData}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={ItemSeparatorView}
          renderItem={ItemView}
          style={styles.listcontainer}
        /> */}

        <Text style={styles.title}>Lista de procedimentos</Text>

        <FlatList
          data={filteredData}
          renderItem={ItemView}
          keyExtractor={item => item.id}
          style={{
            width: '100%',
            height: '78%'
          }}
        />
        <View style={styles.space}></View>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  login: {
    alignItems: 'flex-start',
    padding: 18
  },
  title: {
    color: '#2a2aff',
    fontWeight: '500',
    alignSelf: 'flex-start',
    marginTop: 24,
    marginBottom: 8
  },
  container: {
    marginHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listItem: {
    backgroundColor: '#fff',
    width: '100%',
    paddingVertical: 24,
    paddingHorizontal: 10,
    marginVertical: 4
  },
  space: {
    marginVertical: 10
  }
});

export default HomeScreen;