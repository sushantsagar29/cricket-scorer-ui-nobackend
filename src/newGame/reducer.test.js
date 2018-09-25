import reducer from './reducer';
import PlayerStatus from './gameConstants';
import initialState from './defaultData';
import { selectNewBatsmanAction } from '../home/actions';

describe('gameInformation/reducer', () => {
  it('should return initial state of 11 players in each team', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should return given team1 name as India', () => {
    const modifiedState = reducer(undefined, {});
    expect(modifiedState.team1.name).toEqual('India');
  });

  it('should return given team2 name as Afghanistan', () => {
    const modifiedState = reducer(undefined, {});
    expect(modifiedState.team2.name).toEqual('Afghanistan');
  });
});

describe('newBatsmanSelection/reducer', () => {
  it('selected player in batting team should become the Striker', () => {
    const selectedPlayer = '3';

    const newState = {
      ...initialState,
      team1: {
        ...initialState.team1,
        isBatting: false,
      },
      team2: {
        ...initialState.team2,
        isBatting: true,
      },

    };
    selectNewBatsmanAction.batsmanId = selectedPlayer;
    const actualValueReturned = reducer(newState, selectNewBatsmanAction);

    const battingTeam = actualValueReturned.team1.isBatting ?
      actualValueReturned.team1 : actualValueReturned.team2;

    const isSelectedPlayerAStriker = battingTeam
      .players
      .filter(player => player.id === selectedPlayer
        && player.status === PlayerStatus.STRIKER).length === 1;

    expect(isSelectedPlayerAStriker).toEqual(true);
  });

  it('player in bowling team should not be updated as Striker', () => {
    const selectedPlayer = '3';
    selectNewBatsmanAction.batsmanId = selectedPlayer;
    const actualValueReturned = reducer(undefined, selectNewBatsmanAction);
    const bowlingTeam = !actualValueReturned.team1.isBatting ?
      actualValueReturned.team1 : actualValueReturned.team2;

    const isSelectedPlayerNotAStriker = bowlingTeam
      .players
      .filter(player => player.id === selectedPlayer
        && player.status === PlayerStatus.STRIKER).length === 0;

    expect(isSelectedPlayerNotAStriker).toEqual(true);
  });
});

/* describe('record score/reducer', () => {
  it('should return initial state of 11 players in each team', () => {
    expect(reducer(undefined, { CREATE_GAME })).toEqual(initialState);
  });

  it('test total score updated for the batting team', () => {
    const localState = { ...initialState };
    expect(reducer(localState, recordScore(4)).team1.totalRun).toEqual(4);
  });

  it('test total score not updated for the bowling team', () => {
    const localState = { ...initialState };
    expect(reducer(localState, recordScore(4)).team2.totalRun).toEqual(0);
  });

  it('test the current score of the batsman', () => {
    const localState = { ...initialState };
    localState.team1.players[0].runsScored = 0;
    expect(reducer(localState, recordScore(2)).team1.players[0].runsScored).toEqual(2);
  });

  it('test the current ball faced by current player', () => {
    const localState = { ...initialState };
    localState.team1.players[0].ballsFaced = 0;
    expect(reducer(localState, recordScore(2)).team1.players[0].ballsFaced).toEqual(1);
  });

  it('test the current player 4s updated', () => {
    const localState = { ...initialState };
    localState.team1.players[0].numberOfFours = 0;
    expect(reducer(localState, recordScore(4)).team1.players[0].numberOfFours).toEqual(1);
  });

  it('test the current player 6s updated', () => {
    const localState = { ...initialState };
    localState.team1.players[0].numberOfSixes = 0;
    reducer(localState, recordScore(6));
    expect(reducer(localState, recordScore(6)).team1.players[0].numberOfSixes).toEqual(2);
  });

  it('current bowler run given', () => {
    const localState = { ...initialState };
    localState.team2.players[0].runsGiven = 0;
    expect(reducer(localState, recordScore(4)).team2.players[0].runsGiven).toEqual(4);
  });

  it('Current bowler ball bowled', () => {
    const localState = { ...initialState };
    localState.team2.players[0].ballsBowled = 0;
    reducer(localState, recordScore(1));
    expect(reducer(localState, recordScore(2)).team2.players[0].ballsBowled).toEqual(2);
  });
});
 */
