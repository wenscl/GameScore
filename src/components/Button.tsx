import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { primaryColor } from '../constants/colors';

type TProps = {
  title: string;
  onPress: () => void;
};

function Button({ title, onPress }: TProps) {
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.pressable}
        onPress={onPress}
        android_ripple={{ color: 'white', borderless: true }}
      >
        <Text style={styles.text}>{title}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 8,
    borderRadius: 8,
    shadowColor: 'white',
    elevation: 2,
    backgroundColor: primaryColor,
  },
  pressable: {
    padding: 12,
  },
  text: {
    color: 'white',
  },
});

export default Button;
