import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import style from "styled-components";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 10px 100px;
`;

const Title = style.Text`
  font-weight: 600;
  font-size: 32px;
`;

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
