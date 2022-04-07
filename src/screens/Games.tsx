import { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { connect, ConnectedProps } from 'react-redux';
import { getGameNames } from '../../redux/reducers/games';
import { RootState } from '../../redux/store';
import GameCard from '../components/GameCard';
import { screenBackgroundColor } from '../constants/colors';
import { GamesStackParamList } from '../navigation/GamesStack';

type TProps = NativeStackScreenProps<GamesStackParamList, 'Games'> &
  PropsFromRedux;

function GamesScreen({ gameNames, getGameNames, navigation, route }: TProps) {
  React.useEffect(() => {
    getGameNames();
  }, []);

  return (
    <View style={styles.container}>
      {gameNames.map((name) => (
        <GameCard
          key={name}
          name={name}
          navigation={navigation}
          route={route}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    backgroundColor: screenBackgroundColor,
  },
});

const mapState = (state: RootState) => ({
  gameNames: state.games.gameNames,
});

const mapDispatch = {
  getGameNames,
};

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(GamesScreen);
