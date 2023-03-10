import React from 'react';
import ButtonPlayer from './elements/ButtonPlayer';
import TimePlayer from './elements/TimePlayer';
import {Films} from '../../mocks/films';
import {useNavigate} from 'react-router-dom';

export type PlayerProps = 'videoLink' | 'previewImage' ;

const Player = ({videoLink, previewImage}: Pick<Films, PlayerProps>) => {
  const navigate = useNavigate();

  return (
    <div className="player">
      <video src={videoLink} className="player__video" poster={previewImage}></video>
      <button type="button" className="player__exit" onClick={() => navigate(-1)}>Exit</button>

      <div className="player__controls">
        <TimePlayer/>
        <ButtonPlayer/>
      </div>
    </div>
  );
};

export default Player;
