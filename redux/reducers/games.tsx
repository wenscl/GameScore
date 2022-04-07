enum ActionType {
  GET_GAME_NAMES = 'GET_GAME_NAMES',
  GET_GAMES_IN_PROGRESS = 'GET_GAMES_IN_PROGRESS',
}

interface IGame {
  name: string;
  date: Date;
  isFinished: boolean;
}

type TGetGameNamesAction = {
  type: ActionType.GET_GAME_NAMES;
  payload: string[];
};

type TGetGamesInProgressAction = {
  type: ActionType.GET_GAMES_IN_PROGRESS;
  payload: IGame[];
};

type TActions = TGetGameNamesAction | TGetGamesInProgressAction;

export function getGameNames(): TGetGameNamesAction {
  return {
    type: ActionType.GET_GAME_NAMES,
    payload: ['10000', 'Generala'],
  };
}

export function getGamesInProgress(): TGetGamesInProgressAction {
  return {
    type: ActionType.GET_GAMES_IN_PROGRESS,
    payload: [
      { name: '10000', date: new Date(), isFinished: false },
      { name: 'Generala', date: new Date(), isFinished: false },
    ],
  };
}

type TState = {
  gameNames: string[];
  gamesInProgress: IGame[];
};

const initialState: TState = {
  gameNames: [],
  gamesInProgress: [],
};

const games = (state: TState = initialState, action: TActions): TState => {
  switch (action.type) {
    case ActionType.GET_GAME_NAMES:
      return {
        ...state,
        gameNames: action.payload,
      };
    case ActionType.GET_GAMES_IN_PROGRESS:
      return {
        ...state,
        gamesInProgress: action.payload,
      };
    default:
      return state;
  }
};

export default games;
