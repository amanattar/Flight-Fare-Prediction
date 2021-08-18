import React from 'react';
// import ReactDOM from 'react-dom';
import * as tf from '@tensorflow/tfjs'

async function Inputs() {

    const model = await tf.loadLayersModel('https://raw.githubusercontent.com/Techdevweb/TensorflowModel/main/Keras/model.json')
    console.log('Model loaded');
    const input_xs = tf.tensor2d(
        [[-1.22058845, -1.46761891, 1.23719214, 1.65408522, -0.23504749,
        -1.80032841, -0.89000221, -0.97068144, 1.27894431, -0.44280992,
        -0.13601137, 2.05003178, -0.75058525, -0.02370782, -0.35509693,
        -0.03490842, -0.2879865, -0.21668313, -0.01676161, -0.1923286,
        -0.85916303, -0.6063049, -0.26401621, -0.85916303, -0.36653212,
        -0.26401621, -0.1923286, 3.23423877]]
    )
    const output = model.predict(input_xs)
    const op = output.dataSync()
    console.log(op);
    return <h1>Hello world</h1>;
}

export default Inputs;