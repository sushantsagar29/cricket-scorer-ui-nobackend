import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import '../css/style.css';

const totalOversPassed = (totalBalls) => {
  let totalOvers = `${parseInt((totalBalls / 6), 10)}`;
  const ballsPlayedForCurrentOver = totalBalls % 6;

  if (ballsPlayedForCurrentOver !== 0) {
    totalOvers = `${totalOvers}.${ballsPlayedForCurrentOver}`;
  }
  return totalOvers;
};

const isBowlingTeamAlreadyPlayed = (bowlingTeam) => {
  if (bowlingTeam.totalBalls > 0) {
    return `${bowlingTeam.name}  scored ${bowlingTeam.totalRun}/${bowlingTeam.totalWickets}   in  ${totalOversPassed(bowlingTeam.totalBalls)} overs `;
  }
  return '';
};

const ScoreBoard = props =>
  (<Container>
    <br />
    <Row>
      <Col md={{ size: 6, offset: 3 }}>
        <Row>
          <Col md="5" xs="4">
            <b className="currentBattingTeam">{props.battingTeam.name}</b>
          </Col>
          <Col sm="1" xs="2" />
          <Col style={{ textAlign: 'right' }}>
            <b className="currentBattingTeam">{`${props.battingTeam.totalRun}/${props.battingTeam.totalWickets}  in  ${totalOversPassed(props.battingTeam.totalBalls)}/${props.maxOvers}`}</b>
          </Col>
        </Row>
      </Col>
    </Row>
    <br />
    <Row>
      <Col md={{ size: 6, offset: 3 }} sm="12">
        <Row>
          <Col className="scoreBoard">
            {isBowlingTeamAlreadyPlayed(props.bowlingTeam)}
          </Col>
        </Row>
      </Col>
    </Row>
    <Row>
      <Col md={{ size: 6, offset: 3 }} sm="12">
        <Row>
          <Col className="scoreBoard">
            This Over
          </Col>
        </Row>
      </Col>
    </Row>
  </Container>
  );


const mapStateToProps = (state) => {
  let battingTeam;
  let bowlingTeam;
  if (state.gameInformation.team1.isBatting === true) {
    battingTeam = state.gameInformation.team1;
    bowlingTeam = state.gameInformation.team2;
  } else {
    battingTeam = state.gameInformation.team2;
    bowlingTeam = state.gameInformation.team1;
  }
  return {
    battingTeam,
    bowlingTeam,
    maxOvers: state.gameInformation.maxOvers,
  };
};

const connectedTeamInfo = connect(mapStateToProps)(ScoreBoard);
export default connectedTeamInfo;

