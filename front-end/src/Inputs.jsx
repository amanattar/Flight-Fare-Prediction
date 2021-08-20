import React,{useState} from 'react';
// import ReactDOM from 'react-dom';
import * as tf from '@tensorflow/tfjs'
import DateTimePicker from 'react-datetime-picker'


function Inputs(props) {
    const [value, onChange] = useState(new Date());
    const [value2, onChange2] = useState(new Date());
    


    async function run(evt){
        // const model = await tf.loadLayersModel('https://raw.githubusercontent.com/amanattar/Flight-Fare-Prediction/UI/Keras/model.json')
        // console.log('Model loaded');
        // const input_xs = tf.tensor2d(
        //     [[0.        , 0.66666667, 0.42307692, 0.73913043, 0.18181818,
        //         0.82608696, 0.72727273, 0.05      , 0.54545455, 0.        ,
        //         0.        , 0.        , 0.        , 0.        , 0.        ,
        //         0.        , 1.        , 0.        , 0.        , 0.        ,
        //         0.        , 1.        , 0.        , 0.        , 0.        ,
        //         0.        , 0.        , 0.        ]]
        // )
        // const output = model.predict(input_xs)
        // const op = output.dataSync()
        // const op2=op[0]
        // const op3=op2*(79512-1759)+1759
        // seta(op3)
        // console.log(op);
        evt.preventDefault()
        
        var depDay=value.getDate()
        depDay=(depDay-1)/(27-1)

        var depMonth=value.getMonth()+1
        depMonth=(depMonth-3)/(6-3)

        var depHr=value.getHours()
        depHr=(depHr-0)/(23-0)

        var depMin=value.getMinutes()
        depMin=(depMin-0)/(55-0)

        var arrHr=value2.getHours()
        arrHr=(arrHr-0)/(23-0)

        var arrMin=value2.getMinutes()
        arrMin=(arrMin-0)/(55-0)

        var durHr=Math.abs(depHr-arrHr)
        durHr=(durHr-0)/(47-0)

        var durMin=Math.abs(depMin-arrMin)
        durMin=(durMin-0)/(55-0)

        // alert(`Name ${stops} ${durHr}`)
        var mm=document.getElementById('stops').value
        var mm2=parseInt(mm)
        mm2=(mm2-0)/(4-0)

        var air=document.getElementById('airlines').value
        var src=document.getElementById('source').value
        var dest=document.getElementById('destination').value

        var Jet_Airways,IndiGo,Air_India,Multiple_carriers,SpiceJet,Vistara,GoAir,Multiple_carriers_Premium_economy,Jet_Airways_Business,Vistara_Premium_economy
        var s_Delhi,s_Mumbai,s_Chennai,s_Kolkata
        var d_Delhi,d_New_Delhi,d_Cochin,d_Hyderabad,d_Kolkata

        if (air==='Jet Airways'){
            Jet_Airways = 1.0
            IndiGo = 0.0
            Air_India = 0.0
            Multiple_carriers = 0.0
            SpiceJet = 0.0
            Vistara = 0.0
            GoAir = 0.0
            Multiple_carriers_Premium_economy = 0.0
            Jet_Airways_Business = 0.0
            Vistara_Premium_economy = 0.0}
        else if (air==='IndiGo'){
            Jet_Airways = 0.0
            IndiGo = 1.0
            Air_India = 0.0
            Multiple_carriers = 0.0
            SpiceJet = 0.0
            Vistara = 0.0
            GoAir = 0.0
            Multiple_carriers_Premium_economy = 0.0
            Jet_Airways_Business = 0.0
            Vistara_Premium_economy = 0.0}
        else if (air==='Air India'){
            Jet_Airways = 0.0
            IndiGo = 0.0
            Air_India = 1.0
            Multiple_carriers = 0.0
            SpiceJet = 0.0
            Vistara = 0.0
            GoAir = 0.0
            Multiple_carriers_Premium_economy = 0.0
            Jet_Airways_Business = 0.0
            Vistara_Premium_economy = 0.0}            
        else if (air==='Multiple carriers'){
            Jet_Airways = 0.0
            IndiGo = 0.0
            Air_India = 0.0
            Multiple_carriers = 1.0
            SpiceJet = 0.0
            Vistara = 0.0
            GoAir = 0.0
            Multiple_carriers_Premium_economy = 0.0
            Jet_Airways_Business = 0.0
            Vistara_Premium_economy = 0.0}            
        else if (air==='SpiceJet'){
            Jet_Airways = 0.0
            IndiGo = 0.0
            Air_India = 0.0
            Multiple_carriers = 0.0
            SpiceJet = 1.0
            Vistara = 0.0
            GoAir = 0.0
            Multiple_carriers_Premium_economy = 0.0
            Jet_Airways_Business = 0.0
            Vistara_Premium_economy = 0.0}            
        else if (air==='Vistara'){
            Jet_Airways = 0.0
            IndiGo = 0.0
            Air_India = 0.0
            Multiple_carriers = 0.0
            SpiceJet = 0.0
            Vistara = 1.0
            GoAir = 0.0
            Multiple_carriers_Premium_economy = 0.0
            Jet_Airways_Business = 0.0
            Vistara_Premium_economy = 0.0}
        else if (air==='GoAir'){
            Jet_Airways = 0.0
            IndiGo = 0.0
            Air_India = 0.0
            Multiple_carriers = 0.0
            SpiceJet = 0.0
            Vistara = 0.0
            GoAir = 1.0
            Multiple_carriers_Premium_economy = 0.0
            Jet_Airways_Business = 0.0
            Vistara_Premium_economy = 0.0}
        else if (air==='Multiple carriers Premium economy'){
            Jet_Airways = 0.0
            IndiGo = 0.0
            Air_India = 0.0
            Multiple_carriers = 0.0
            SpiceJet = 0.0
            Vistara = 0.0
            GoAir = 0.0
            Multiple_carriers_Premium_economy = 1.0
            Jet_Airways_Business = 0.0
            Vistara_Premium_economy = 0.0}
        else if (air==='Jet Airways Business'){
            Jet_Airways = 0.0
            IndiGo = 0.0
            Air_India = 0.0
            Multiple_carriers = 0.0
            SpiceJet = 0.0
            Vistara = 0.0
            GoAir = 0.0
            Multiple_carriers_Premium_economy = 0.0
            Jet_Airways_Business = 1.0
            Vistara_Premium_economy = 0.0}
        else if(air==='Vistara Premium economy'){
            Jet_Airways = 0.0
            IndiGo = 0.0
            Air_India = 0.0
            Multiple_carriers = 0.0
            SpiceJet = 0.0
            Vistara = 0.0
            GoAir = 0.0
            Multiple_carriers_Premium_economy = 0.0
            Jet_Airways_Business = 0.0
            Vistara_Premium_economy = 1.0} 
        else{
            Jet_Airways = 0.0
            IndiGo = 0.0
            Air_India = 0.0
            Multiple_carriers = 0.0
            SpiceJet = 0.0
            Vistara = 0.0
            GoAir = 0.0
            Multiple_carriers_Premium_economy = 0.0
            Jet_Airways_Business = 0.0
            Vistara_Premium_economy = 0.0
        }

        if (src === 'Delhi'){
            s_Delhi = 1.0
            s_Kolkata = 0.0
            s_Mumbai = 0.0
            s_Chennai = 0.0}

        else if (src === 'Kolkata')
            {s_Delhi = 0.0
            s_Kolkata = 1.0
            s_Mumbai = 0.0
            s_Chennai = 0.0}
        else if (src === 'Mumbai')
            {s_Delhi = 0.0
            s_Kolkata = 0.0
            s_Mumbai = 1.0
            s_Chennai = 0.0}
        else if (src === 'Chennai')
            {s_Delhi = 0.0
            s_Kolkata = 0.0
            s_Mumbai = 0.0
            s_Chennai = 1.0}
        else
            {s_Delhi = 0.0
            s_Kolkata = 0.0
            s_Mumbai = 0.0
            s_Chennai = 0.0}

        if (dest === 'Delhi'){
            d_Delhi = 1.0
            d_Kolkata = 0.0
            d_Cochin = 0.0
            d_Hyderabad=0.0
            d_New_Delhi = 0.0
        }

        else if (dest === 'Kolkata')
        {   d_Delhi = 0.0
            d_Kolkata = 1.0
            d_Cochin = 0.0
            d_Hyderabad=0.0
            d_New_Delhi = 0.0}
        else if (dest === 'Cochin')
            {   d_Delhi = 1.0
                d_Kolkata = 0.0
                d_Cochin = 1.0
                d_Hyderabad=0.0
                d_New_Delhi = 0.0}
        else if (dest === 'Hyderabad')
            {   d_Delhi = 1.0
                d_Kolkata = 0.0
                d_Cochin = 0.0
                d_Hyderabad=1.0
                d_New_Delhi = 0.0}
        else if(dest==='New Delhi'){
            d_Delhi = 0.0
            d_Kolkata = 0.0
            d_Cochin = 0.0
            d_Hyderabad=0.0
            d_New_Delhi = 1.0
        }
        else
            {   d_Delhi = 0.0
                d_Kolkata = 0.0
                d_Cochin = 0.0
                d_Hyderabad=0.0
                d_New_Delhi = 0.0}

        const model = await tf.loadLayersModel('https://raw.githubusercontent.com/amanattar/Flight-Fare-Prediction/UI/Keras/model.json')
        console.log('Model loaded');
        const input_xs = tf.tensor2d(
            [[mm2, depDay, depMonth,depHr, depMin,
                arrHr, arrMin,durHr      , durMin, Air_India     ,
                GoAir ,IndiGo        , Jet_Airways        , Jet_Airways_Business        , Multiple_carriers        ,
                Multiple_carriers_Premium_economy        , SpiceJet        , Vistara,Vistara_Premium_economy       ,s_Chennai,
                s_Delhi,
                s_Kolkata,
                s_Mumbai,d_Cochin,
                d_Delhi,
                d_Hyderabad,
                d_Kolkata,
                d_New_Delhi]]
        )
        const output = model.predict(input_xs)
        const op = output.dataSync()
        const op2=op[0]
        var op3=op2*(79512-1759)+1759
        op3=Math.floor(op3)
        document.getElementById('output').innerHTML=op3+'₹'
        

            
 


    }


    return (
        <form onSubmit={run}>
        <h2>Departure date</h2>
        <DateTimePicker
        onChange={onChange}
        value={value}
        />
        <hr></hr>
        <h2>Arrival date</h2>
        <DateTimePicker
        onChange={onChange2}
        value={value2}
        />
        <hr></hr>
        <h2>Stops</h2>
        <select id="stops">
        <option selected disabled>Choose number stops</option>
        <option value='0'>0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
    </select>
    <hr></hr>
        <h2>Airline</h2>
        <select id="airlines">
        <option selected disabled>Choose your airline</option>
        <option value='Jet Airways'>Jet Airways</option>
        <option value=" IndiGo"> IndiGo</option>
        <option value="Air_India">Air_India</option>
        <option value="Multiple_carriers">Multiple_carriers</option>
        <option value="SpiceJet">SpiceJet</option>
        <option value="Vistara">Vistara</option>
        <option value="Multiple_carriers_Premium_economy">Multiple_carriers_Premium_economy</option>
        <option value="Jet_Airways_Business">Jet_Airways_Business</option>
        <option value="Vistara_Premium_economy">Vistara_Premium_economy</option>
    </select>
    <hr></hr>
    <h2>Source</h2>
    <select id="source">
    <option selected disabled>Choose your source</option>
    <option value='Delhi'>Delhi</option>
    <option value="Mumbai">Mumbai</option>
    <option value="Chennai">Chennai</option>
    <option value="Kolkata">Kolkata</option>
</select>
<hr></hr>
<h2>Destination</h2>
<select id="destination">
<option selected disabled>Choose your destination</option>
<option value="Cochin">Cochin</option>
<option value="New Delhi">New Delhi</option>
<option value="Delhi">Delhi</option>
<option value="Kolkata">Kolkata</option>
<option value="Hyderabad">Hyderabad</option>
</select>
        <hr></hr>
      <input type="submit" value="Submit" />
      <h1 id='output'>Price</h1>
    </form>
    );
}

export default Inputs;