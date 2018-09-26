import PlayerStatus from '../newGame/gameConstants';

function updatePlayerStatus(players, playerId, newStatus) {
  const updatedPlayers = [];
  players.forEach((player) => {
    const newPlayer = { ...player };

    if (newPlayer.id === playerId) {
      newPlayer.status = newStatus;
    }
    updatedPlayers.push(newPlayer);
  });

  return updatedPlayers;
}

function updateBattingPlayerScore(players, currentRun) {
  const updatedPlayers = [];
  players.forEach((player) => {
    const newPlayer = { ...player };
    if (newPlayer.status === PlayerStatus.STRIKER) {
      newPlayer.runsScored += currentRun;
      newPlayer.ballsFaced += 1;
      if (currentRun === 4) {
        newPlayer.numberOfFours += 1;
      }
      if (currentRun === 6) {
        newPlayer.numberOfSixes += 1;
      }
    }
    updatedPlayers.push(newPlayer);
  });

  return updatedPlayers;
}

function updateBowlingPlayerScore(players, currentRun, isBatsmanOut) {
  const updatedPlayers = [];
  players.forEach((player) => {
    const newPlayer = { ...player };
    if (newPlayer.status === PlayerStatus.BOWLING) {
      newPlayer.runsGiven += currentRun;
      newPlayer.ballsBowled += 1;

      if (isBatsmanOut) {
        newPlayer.wicketsTaken += 1;
      }
    }
    updatedPlayers.push(newPlayer);
  });

  return updatedPlayers;
}

function updatePlayer(isBattingTeam, players, currentRun, isBatsmanOut) {
  const updatedPlayersList = isBattingTeam ?
    updateBattingPlayerScore(players, currentRun) :
    updateBowlingPlayerScore(players, currentRun, (!isBattingTeam && isBatsmanOut));

  if (isBatsmanOut && isBattingTeam) {
    const selectedPlayerId = updatedPlayersList.filter(player =>
      player.status === PlayerStatus.STRIKER)[0].id;
    return updatePlayerStatus(updatedPlayersList, selectedPlayerId, PlayerStatus.OUT);
  }

  return updatedPlayersList;
}

function getCurrentOverScore(currentOverArray, currentRun, battingTeamTotalBalls) {
  const overArray = [];

  if ((battingTeamTotalBalls) % 6 !== 0) {
    for (let i = 0; i < currentOverArray.length; i += 1) {
      overArray.push(currentOverArray[i]);
    }
  }
  return overArray.concat([currentRun]);
}

export { updatePlayerStatus, updatePlayer, getCurrentOverScore };
