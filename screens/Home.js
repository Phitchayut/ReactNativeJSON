import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  Pressable,
} from 'react-native';
import React from 'react';
import data from './attractions.json';

const Home = ({ navigation }) => {

  const pressDetail = (id) => {
    navigation.navigate('Detail' ,{id:id})
  }
  return (
    <ScrollView>
      {data.map(item => (
        <View key={item.id} style={{marginBottom: 15}}>
          <Pressable onPress={() => pressDetail(item.id)}>
            <Image
              style={styles.coverIMG}
              source={{
                uri: item.coverimage,
              }}
            />
            <View style={styles.textBox}>
              <Text style={{fontSize: 23}}>{item.name}</Text>
              <Text>{item.detail}</Text>
            </View>
          </Pressable>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  coverIMG: {
    width: '100%',
    height: 300,
  },
  textBox: {
    margin: 10,
  },
});
export default Home;
