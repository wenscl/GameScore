import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackNavigationProp } from '@react-navigation/stack';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { connect, ConnectedProps } from 'react-redux';
import { getGameNames } from '../../redux/reducers/games';
import { RootState } from '../../redux/store';
import { GamesStackParamList } from '../navigation/GamesStack';
const Image = require('../../assets/dice.jpg');

type TProps = NativeStackScreenProps<GamesStackParamList, 'Games'> &
  PropsFromRedux & {
    name: string;
  };

function GameCard({ name, navigation }: TProps) {
  function onPressGame() {
    navigation.navigate('NewGame', { name });
  }

  return (
    <View style={styles.card}>
      <Pressable
        style={styles.pressable}
        onPress={onPressGame}
        android_ripple={{ color: 'red', borderless: true }}
      >
        <ImageBackground
          source={Image}
          resizeMode='cover'
          style={styles.image}
          imageStyle={{ borderRadius: 8 }}
        >
          <LinearGradient
            colors={['transparent', 'rgba(0,0,0,0.8)']}
            style={styles.gradient}
          />
          <Text style={styles.text}>{name}</Text>
        </ImageBackground>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 160,
    height: 160,
    margin: 8,
    borderRadius: 8,
    shadowColor: 'white',
    elevation: 2,
  },
  pressable: {
    height: '100%',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  image: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: '100%',
  },
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
    borderRadius: 8,
  },
});

const mapState = (state: RootState) => ({
  games: state.games.gamesInProgress,
});

const mapDispatch = {
  getGameNames,
};

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(GameCard);
