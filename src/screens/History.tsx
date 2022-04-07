import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { screenBackgroundColor } from '../constants/colors';

function HistoryScreen() {
  return (
    <View style={styles.container}>
      <Text>History Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
    flex: 1,
    flexDirection: 'column',
    flexWrap: 'wrap',
    backgroundColor: screenBackgroundColor,
  },
});

export default HistoryScreen;
