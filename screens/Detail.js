import {View, Text, StyleSheet, Image, Button, Linking} from 'react-native';
import React, { useCallback } from 'react';
import data from './attractions.json';

const Detail = ({navigation, route}) => {
  let item = data.find(o => o.id === route.params.id);

  const handleMap = useCallback(async () => {
    await Linking.openURL("https://maps.google.com/maps?q=" + item.latitude + ',' + item.longitude);
  })
  return (
    <View>
      <Image
        style={styles.coverIMG}
        source={{
          uri: item.coverimage,
        }}
      />
      <View style={styles.textBox}>
        <Text style={{fontSize: 23}}>{item.name}</Text>
        <Text>{item.detail}</Text>
        <Button title="Map" onPress={handleMap}/>
      </View>
    </View>
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

export default Detail;
