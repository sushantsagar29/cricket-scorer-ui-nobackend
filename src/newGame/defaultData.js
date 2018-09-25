import PlayerStatus from './gameConstants';

const initialState = {
  maxOvers: 20,
  team1: {
    name: 'India',
    totalRun: 0,
    totalWickets: 0,
    totalBalls: 0,
    isBatting: true,
    players: [
      {
        id: '1',
        name: 'Rohit Sharma',
        runsScored: 0,
        numberOfSixes: 0,
        numberOfFours: 0,
        ballsFaced: 0,
        runsGiven: 0,
        wicketsTaken: 0,
        ballsBowled: 0,
        numberOfMaidens: 0,
        status: PlayerStatus.STRIKER,
      },
      {
        id: '2',
        name: 'Shikhar Dhawan',
        runsScored: 0,
        numberOfSixes: 0,
        numberOfFours: 0,
        ballsFaced: 0,
        runsGiven: 0,
        wicketsTaken: 0,
        ballsBowled: 0,
        numberOfMaidens: 0,
        status: PlayerStatus.NON_STRIKER,
      },
      {
        id: '3',
        name: 'Virat Kohli',
        runsScored: 0,
        numberOfSixes: 0,
        numberOfFours: 0,
        ballsFaced: 0,
        runsGiven: 0,
        wicketsTaken: 0,
        ballsBowled: 0,
        numberOfMaidens: 0,
        status: PlayerStatus.YET_TO_PLAY,
      },
      {
        id: '4',
        name: 'M S Dhoni',
        runsScored: 0,
        numberOfSixes: 0,
        numberOfFours: 0,
        ballsFaced: 0,
        runsGiven: 0,
        wicketsTaken: 0,
        ballsBowled: 0,
        numberOfMaidens: 0,
        status: PlayerStatus.YET_TO_PLAY,
      },
      {
        id: '5',
        name: 'Kedar Jadhav',
        runsScored: 0,
        numberOfSixes: 0,
        numberOfFours: 0,
        ballsFaced: 0,
        runsGiven: 0,
        wicketsTaken: 0,
        ballsBowled: 0,
        numberOfMaidens: 0,
        status: PlayerStatus.YET_TO_PLAY,
      },
      {
        id: '6',
        name: 'Rishabh Pant',
        runsScored: 0,
        numberOfSixes: 0,
        numberOfFours: 0,
        ballsFaced: 0,
        runsGiven: 0,
        wicketsTaken: 0,
        ballsBowled: 0,
        numberOfMaidens: 0,
        status: PlayerStatus.YET_TO_PLAY,
      },
      {
        id: '7',
        name: 'Hardik Pandya',
        runsScored: 0,
        numberOfSixes: 0,
        numberOfFours: 0,
        ballsFaced: 0,
        runsGiven: 0,
        wicketsTaken: 0,
        ballsBowled: 0,
        numberOfMaidens: 0,
        status: PlayerStatus.YET_TO_PLAY,
      },
      {
        id: '8',
        name: 'Bhuvneshwar Kumar',
        runsScored: 0,
        numberOfSixes: 0,
        numberOfFours: 0,
        ballsFaced: 0,
        runsGiven: 0,
        wicketsTaken: 0,
        ballsBowled: 0,
        numberOfMaidens: 0,
        status: PlayerStatus.YET_TO_PLAY,
      },
      {
        id: '9',
        name: 'Jasprit Bumrah',
        runsScored: 0,
        numberOfSixes: 0,
        numberOfFours: 0,
        ballsFaced: 0,
        runsGiven: 0,
        wicketsTaken: 0,
        ballsBowled: 0,
        numberOfMaidens: 0,
        status: PlayerStatus.YET_TO_PLAY,
      },
      {
        id: '10',
        name: 'Kuldeep Yadav',
        runsScored: 0,
        numberOfSixes: 0,
        numberOfFours: 0,
        ballsFaced: 0,
        runsGiven: 0,
        wicketsTaken: 0,
        ballsBowled: 0,
        numberOfMaidens: 0,
        status: PlayerStatus.YET_TO_PLAY,
      },
      {
        id: '11',
        name: 'Y Chahal',
        runsScored: 0,
        numberOfSixes: 0,
        numberOfFours: 0,
        ballsFaced: 0,
        runsGiven: 0,
        wicketsTaken: 0,
        ballsBowled: 0,
        numberOfMaidens: 0,
        status: PlayerStatus.YET_TO_PLAY,
      },
    ],
  },
  team2: {
    name: 'Afghanistan',
    totalRun: 0,
    totalWickets: 0,
    totalBalls: 0,
    isBatting: false,
    players: [
      {
        id: '1',
        name: 'Asghar Afghan',
        runsScored: 0,
        numberOfSixes: 0,
        numberOfFours: 0,
        ballsFaced: 0,
        runsGiven: 0,
        wicketsTaken: 0,
        ballsBowled: 0,
        numberOfMaidens: 0,
        status: PlayerStatus.BOWLING,
      },
      {
        id: '2',
        name: 'Ihsanullah Janat',
        runsScored: 0,
        numberOfSixes: 0,
        numberOfFours: 0,
        ballsFaced: 0,
        runsGiven: 0,
        wicketsTaken: 0,
        ballsBowled: 0,
        numberOfMaidens: 0,
        status: PlayerStatus.YET_TO_PLAY,
      },
      {
        id: '3',
        name: 'Hashmatullah Shahidi',
        runsScored: 0,
        numberOfSixes: 0,
        numberOfFours: 0,
        ballsFaced: 0,
        runsGiven: 0,
        wicketsTaken: 0,
        ballsBowled: 0,
        numberOfMaidens: 0,
        status: PlayerStatus.YET_TO_PLAY,
      },
      {
        id: '4',
        name: 'Mohammad Shahzad',
        runsScored: 0,
        numberOfSixes: 0,
        numberOfFours: 0,
        ballsFaced: 0,
        runsGiven: 0,
        wicketsTaken: 0,
        ballsBowled: 0,
        numberOfMaidens: 0,
        status: PlayerStatus.YET_TO_PLAY,
      },
      {
        id: '5',
        name: 'Rahmat Shah',
        runsScored: 0,
        numberOfSixes: 0,
        numberOfFours: 0,
        ballsFaced: 0,
        runsGiven: 0,
        wicketsTaken: 0,
        ballsBowled: 0,
        numberOfMaidens: 0,
        status: PlayerStatus.YET_TO_PLAY,
      },
      {
        id: '6',
        name: 'Mohammad Nabi',
        runsScored: 0,
        numberOfSixes: 0,
        numberOfFours: 0,
        ballsFaced: 0,
        runsGiven: 0,
        wicketsTaken: 0,
        ballsBowled: 0,
        numberOfMaidens: 0,
        status: PlayerStatus.YET_TO_PLAY,
      },
      {
        id: '7',
        name: 'Samiullah Shenwari',
        runsScored: 0,
        numberOfSixes: 0,
        numberOfFours: 0,
        ballsFaced: 0,
        runsGiven: 0,
        wicketsTaken: 0,
        ballsBowled: 0,
        numberOfMaidens: 0,
        status: PlayerStatus.YET_TO_PLAY,
      },
      {
        id: '8',
        name: 'Gulbadin Naib',
        runsScored: 0,
        numberOfSixes: 0,
        numberOfFours: 0,
        ballsFaced: 0,
        runsGiven: 0,
        wicketsTaken: 0,
        ballsBowled: 0,
        numberOfMaidens: 0,
        status: PlayerStatus.YET_TO_PLAY,
      },
      {
        id: '9',
        name: 'Rashid Khan',
        runsScored: 0,
        numberOfSixes: 0,
        numberOfFours: 0,
        ballsFaced: 0,
        runsGiven: 0,
        wicketsTaken: 0,
        ballsBowled: 0,
        numberOfMaidens: 0,
        status: PlayerStatus.YET_TO_PLAY,
      },
      {
        id: '10',
        name: 'Mujeeb Ur Rahman',
        runsScored: 0,
        numberOfSixes: 0,
        numberOfFours: 0,
        ballsFaced: 0,
        runsGiven: 0,
        wicketsTaken: 0,
        ballsBowled: 0,
        numberOfMaidens: 0,
        status: PlayerStatus.YET_TO_PLAY,
      },
      {
        id: '11',
        name: 'Wafadar Momand',
        runsScored: 0,
        numberOfSixes: 0,
        numberOfFours: 0,
        ballsFaced: 0,
        runsGiven: 0,
        wicketsTaken: 0,
        ballsBowled: 0,
        numberOfMaidens: 0,
        status: PlayerStatus.YET_TO_PLAY,
      },
    ],
  },
};
export default initialState;