import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { screenBackgroundColor } from '../constants/colors';

function InProgressScreen() {
  return (
    <View style={styles.container}>
      <Text>In Progress Screen</Text>
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

export default InProgressScreen;
