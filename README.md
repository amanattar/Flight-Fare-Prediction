# Flight-Fare-Prediction
Link to the React app (By Neel):https://friendly-liskov-8cc988.netlify.app
How app was built?
1. A Tensorflow regression model was created that predicts flight price using input parameters
2. Once good accuracy was achived our Tensorflow model was converted to TensorflowJS(TFJS) model to be used in ReactJS
3. Then this model was imported in react using async function
4. Once imported a front model was built that takes inputs like departure and arrival date, stops, airlines, source and destination
5. These inputs were forwarded to TFJS model and as a result the model returned the price as an output

Link to the Flask App: 
https://flight-fair-pred.herokuapp.com/
 
