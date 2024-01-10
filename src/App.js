import logo from './logo.svg';
import './App.css';
import React from 'react';
import Canvas from './Canvas/Canvas'

function App() {

  const draw = (ctx, frameCount) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    ctx.fillStyle = '#000000'
    ctx.beginPath()
    ctx.arc(ctx.canvas.width/2, ctx.canvas.height/2, 20*Math.sin(frameCount*0.05)**2, 0, 2*Math.PI)
    ctx.fill()
  }

  return <Canvas draw={draw} />
  
}

export default App;
