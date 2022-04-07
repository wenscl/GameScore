import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from '../components/Button';
import { primaryColor, screenBackgroundColor } from '../constants/colors';
import { GamesStackParamList } from '../navigation/GamesStack';

type TProps = StackScreenProps<GamesStackParamList, 'NewGame'>;

function NewGame({ route }: TProps) {
  const { name } = route.params;

  function openCalculator() {
    console.log('openCalculator');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name}</Text>
      <View style={styles.table}>
        <View style={styles.column}>
          <Text style={styles.playerNames}>Name1</Text>
          <View style={styles.dividerH} />
          <Text style={styles.points}>1</Text>
          <Text style={styles.points}>2</Text>
          <Button title='Score' onPress={openCalculator} />
        </View>
        <View style={styles.dividerV} />
        <View style={styles.column}>
          <Text style={styles.playerNames}>Name2</Text>
          <View style={styles.dividerH} />
          <Text style={styles.points}>10</Text>
          <Text style={styles.points}>20</Text>
          <Button title='Score' onPress={openCalculator} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
    flex: 1,
    flexDirection: 'column',
    // flexWrap: 'wrap',
    // justifyContent: 'space-evenly',
    backgroundColor: screenBackgroundColor,
  },
  title: {
    fontSize: 26,
    textAlign: 'center',
    marginBottom: 16,
    color: 'white',
  },
  table: {
    width: '100%',
    height: '100%',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  column: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  points: {
    color: 'white',
    fontSize: 20,
    marginTop: 4,
    marginBottom: 4,
  },
  playerNames: {
    color: 'white',
    fontSize: 20,
    marginTop: 4,
    marginBottom: 4,
  },
  dividerV: {
    width: 1,
    height: '100%',
    borderColor: 'white',
    borderWidth: 0.5,
  },
  dividerH: {
    width: '100%',
    height: 1,
    borderColor: 'white',
    borderWidth: 0.5,
  },
});

export default NewGame;
