import React, { useEffect, useState } from "react";
import Dashboard from "./components/fullScreenModal/dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import TicTacToe from "./components/ticTacToe/ticTacToe";
import Header from "./components/header";
import Folder from './components/folder/folderComponent';
import Timer from "./components/timer/Timer";
import DetectClick from "./components/outsideClickDetect/DetectClick";
import './global.css'
import Feedback from "./components/feebback/Feedback";
import LoginWithMobile from "./components/otpBox/loginWithMobile";
import OtpBox from "./components/otpBox/otpBox";
import UserList from "./components/apiResponse/UserData";
import TicTacToeGame from "./components/games/tictacToeGame/TicTacToeGame";
import CardGame from "./components/games/CardGame/CardGame";
import SnakeAndLadder from "./components/snakeAndLadder/snakeAndLadder";
// import { initWorker } from "./worker";

export const WorkerContext = React.createContext()

function App() {


  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Header />} />
        <Route exact path='/outside-click' element={<DetectClick />} />
        <Route path='/modal' element={<Dashboard />} />
        <Route path='/tic-tac-toe' element={<TicTacToeGame />} />
        <Route path='/folder-structure' element={<Folder />} />
        <Route path='/timer' element={<Timer />} />
        <Route path='/feedback' element={<Feedback />} />
        <Route path='/login-mobile' element={<LoginWithMobile />} />
        <Route path='/otp' element={<OtpBox />} />
        <Route path='/users' element={<UserList />} />
        <Route path='/card-game' element={<CardGame />} />
        <Route path='/snl' element={<SnakeAndLadder gridSize={[10, 10]} />} />
      </Routes>

    </Router>
  );
}

export default App;
