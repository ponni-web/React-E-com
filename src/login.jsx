
import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';

export function LogIn(){

    let [userDetail, setUserDetail] = useState("");
    let [passWord, setPassWord] = useState("");
   
     let validUser = 123456;
    let validPassword = 666777;
    const nav = useNavigate()

    function validation(){
        
        if((userDetail == validUser) && (passWord == validPassword)){
            // return props.changeState(true);
            nav("/home")
        }
        else{
            // return props.changeState(false);
        }
    }

    
    return(
        
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",padding:"50px"}}>
            
           {/* -------main container div for image and login body ------------*/}
           
           <div style={{padding:"5px"}}>

            {/* ----------------- div for image  ----------------------------------------*/} 
             
             <div>
                <img src="https://downloadr2.apkmirror.com/wp-content/uploads/2022/05/40/62707eea16dc8.png"
               alt=""  width="150px"/></div>
             
             {/* --------------div for login body -------------------------------------------------*/}

              <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",
             boxShadow:"0px 0px 2px black",padding:"10px"}}>
            
                <div style={{marginLeft:"-68%"}}>
                 <h1 style={{fontFamily:"sans-serif",fontWeight:"lighter",margin:"20px"}}>Sign in</h1></div>
                
                
                <div style={{marginTop:"5%",marginBottom:"5%"}}><h5  >Email or mobile phone number</h5></div>
                
              {/* --------------------input 1------------------------------------------------------*/}  
                <div style={{padding:"10px"}}><input className="Inp" type="text" 
                style={{marginLeft:"-3%",width:"450px",padding:"10px",borderRadius:"5px",
                boxShadow:"Inset 0px 0px 3px #FF9033",border:"0.5px groove black"}} 
                onChange={(event) => setUserDetail(event.target.value)}/></div><br />

                
                <div >
                 <p style={{textAlign:"left"}}> Password 
                  </p>  </div>
                
            {/* --------------------input 2------------------------------------------------------*/}  
                
                <div style={{padding:"10px"}}><input className="Inp" type="password"
                style={{marginLeft:"-3%",width:"450px",padding:"10px",borderRadius:"5px",
                boxShadow:"Inset 0px 0px 3px #FF9033",border:"0.5px groove black"}}
                onChange={(passEvent)=> setPassWord(passEvent.target.value)}  /></div><br /><br />
                
                
                <div><button style={{width:"350px",padding:"10px",marginLeft:"-10%",
                borderRadius:"5px",backgroundColor:"#4630E4 ",cursor:"pointer",fontWeight:"bold"}}
                onClick={()=>validation()}>sign in</button></div><br /><br />
                
                <p style={{padding:"10px",paddingBottom:"20px"}}>© 1996-2023, shopsy.com, Inc. or its affiliates</p>

             </div>
     
          
             </div>
    
</div>
         );}