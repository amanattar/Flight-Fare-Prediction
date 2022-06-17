import logo from './logo.svg';
import './App.css';
import * as tf from '@tensorflow/tfjs'


async function loadModel() {
  model = undefined
  model = await tf.loadLayersModel('C:\Users\User\Downloads\FFP\Flight-Fare-Prediction\models');
  console.log('Model loaded')
}
loadModel()
function make_pred() {
  var a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17, a18, a19, a20, a21, a22, a23, a24, a25, a26, a27, a28
  a1 = Number(document.getElementById('1').value)
  a2 = Number(document.getElementById('2').value)
  a3 = Number(document.getElementById('3').value)
  a4 = Number(document.getElementById('4').value)
  a5 = Number(document.getElementById('5').value)
  a6 = Number(document.getElementById('6').value)
  a7 = Number(document.getElementById('7').value)
  a8 = Number(document.getElementById('8').value)
  a9 = Number(document.getElementById('9').value)
  a10 = Number(document.getElementById('10').value)
  a11 = Number(document.getElementById('11').value)
  a12 = Number(document.getElementById('12').value)
  a13 = Number(document.getElementById('13').value)
  a14 = Number(document.getElementById('14').value)
  a15 = Number(document.getElementById('15').value)
  a16 = Number(document.getElementById('16').value)
  a17 = Number(document.getElementById('17').value)
  a18 = Number(document.getElementById('18').value)
  a19 = Number(document.getElementById('19').value)
  a20 = Number(document.getElementById('20').value)
  a21 = Number(document.getElementById('21').value)
  a22 = Number(document.getElementById('22').value)
  a23 = Number(document.getElementById('23').value)
  a24 = Number(document.getElementById('24').value)
  a25 = Number(document.getElementById('25').value)
  a26 = Number(document.getElementById('26').value)
  a27 = Number(document.getElementById('27').value)
  a28 = Number(document.getElementById('28').value)

  input = tf.tensor2d([
    [a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17, a18, a19, a20, a21, a22, a23, a24, a25, a26, a27, a28]
  ])
  
  var output = model.predict(input)
  console.log(output);
  document.getElementById('ans').value = Number(output[0])
}

function App() {

  return (
    <div className="App">
      <input id='1'></input>
      <input id='2'></input>
      <input id='3'></input>
      <input id='4'></input>
      <input id='5'></input>
      <input id='6'></input>
      <input id='7'></input>
      <input id='8'></input>
      <input id='9'></input>
      <input id='10'></input>
      <input id='11'></input>
      <input id='12'></input>
      <input id='13'></input>
      <input id='14'></input>
      <input id='15'></input>
      <input id='16'></input>
      <input id='17'></input>
      <input id='18'></input>
      <input id='19'></input>
      <input id='20'></input>
      <input id='21'></input>
      <input id='22'></input>
      <input id='23'></input>
      <input id='24'></input>
      <input id='25'></input>
      <input id='26'></input>
      <input id='27'></input>
      <input id='28'></input>

      <button onClick={make_pred}>Make prediction</button>

      <center><input id='ans'></input></center>

    </div>
  );
}

export default App;
