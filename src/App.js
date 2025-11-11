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
import Splitwise from "./components/splitwise/splitwise";
import ProtectedRoute from "./components/splitwise/ProtectedRoute";
import Login from "./components/splitwise/login";
// import { initWorker } from "./worker";
import ImageGallery from "./components/imageGallery";

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
        <Route path='/login' element={<Login />} />
        <Route path='/splitwise' element={<ProtectedRoute component={<Splitwise />} />} />
        <Route path='/image-gallery' element={<ImageGallery />} />
      </Routes>

    </Router>
  );
}

export default App;
