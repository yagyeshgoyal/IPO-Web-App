import React from 'react'
import {assest} from '../assets/assets'
import Broker from './Broker';


function AllBrokers(){
    return (
        <div>
            <p className='text-[30px] font-bold text-[#7059EBE5] px-4'>Made to<span className='text-[#2AB479]'>Trade</span></p>
            <Broker name="Upstox" color="rgba(131, 162, 255, 0.302)" image={assest.upstox}/>
            <Broker name="AngleOne" color="#FFD28F66" image={assest.Angleone}/>
            <Broker name="Groww" color="#83A2FF4D" image={assest.Groww}/>
            <Broker name="Dhan" color="#FFD28F66" image={assest.Dhan}/>
            <Broker name="Alice Blue" color="#83A2FF4D" image={assest.Aliceblue}/>
            <Broker name="Axis Direct" color="#FFD28F66" image={assest.Axisdirect}/>
            <Broker name="Fyers" color="#83A2FF4D" image={assest.Fyers}/>
            <Broker name="Geojit" color="#FFD28F66" image={assest.Geojit}/>
            <Broker name="HDFC Securities" color="#83A2FF4D" image={assest.HDFC}/>
            <Broker name="IIFL securities" color="#FFD28F66" image={assest.IIFL}/>
            <Broker name="Kotak securities" color="#83A2FF4D" image={assest.Kotak}/>
            <Broker name="Motilal Oswal" color="#FFD28F66" image={assest.Motilal}/>
            <Broker name="Nuvama" color="#83A2FF4D" image={assest.Nuvama}/>
            <Broker name="Paytm Money" color="#FFD28F66" image={assest.Paytm}/>
            <Broker name="SBI securities" color="#83A2FF4D" image={assest.SBI}/>
            <Broker name="Sharekhan" color="#FFD28F66" image={assest.Sharekhan}/>
            <Broker name="SMC Global" color="#83A2FF4D" image={assest.SMC}/>
            <Broker name="5Paisa" color="#FFD28F66" image={assest.Paisa}/>
            <Broker name="Zerodha" color="#83A2FF4D" image={assest.Zerodha}/>
            
            
        </div>
    )
};

export default AllBrokers;