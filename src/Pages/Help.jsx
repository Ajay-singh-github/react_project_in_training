import "../css/Help.css";
import Navbar from "../Components/Navbar";
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
export default function helpPage() {
    return(<>
     <Navbar/>
     <div className="help-parent-container">
        <div className="help-parent-first-container">
        <h1 className="help-content1">Help & Support</h1>
        <h4 className="help-content2">Let's take a step ahead and help you better.</h4>
        </div>

        <div className="help-parent-second-container">
            <div className="help-parent-second-container1">
               <div style={{height:"60px",width:"280px",backgroundColor:"white",marginLeft:"12px",marginTop:"20px"}}><h3 style={{ marginLeft:"60px",paddingTop:"20px"}}>Partner Onboarding</h3> </div>
              <div className="help-parent-second-left"> <h3 style={{marginLeft:"60px", paddingTop:"40px"}}>Legal</h3> </div>
              <div className="help-parent-second-left"> <h3 style={{ marginLeft:"60px",paddingTop:"40px"}}>FAQs</h3> </div>
              <div className="help-parent-second-left"> <h3 style={{ marginLeft:"60px",paddingTop:"40px"}}>Instamart Onboarding</h3> </div>
              <div className="help-parent-second-left"> <h3 style={{ marginLeft:"60px",paddingTop:"40px"}}>IRCTC FAQ</h3> </div>
            </div>

            <div className="help-parent-second-container2"> 
                <h1>Partner Onboarding</h1>
          <Accordion style={{marginTop:"20px"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span">I want to partner my restaurant with swiggys</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <h3 style={{color:"orangered"}}>Partner with us</h3>
        <button style={{height:"40px",width:"180px",border:"2px solid orangered",marginTop:"10px",backgroundColor:"white",color:"orangered"}}>Send an Email</button>
        </AccordionDetails>
      </Accordion>
      <Accordion  style={{marginTop:"20px"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="span">What are the mandatory documents needed to list my restaurant on Swiggy?</Typography>
        </AccordionSummary>
        <AccordionDetails>
         -  Copies of the below documents are mandatory<br/>
         -  FSSAI Licence OR FSSAI Acknowledgement<br/>
         -  Pan Card<br/>
         -  GSTIN Certificate<br/>
         -  Cancelled Cheque OR bank Passbook<br/>
         -  Menu
        </AccordionDetails>
      </Accordion>
      <Accordion style={{marginTop:"20px"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <Typography component="span">After I submit all documents, how long will it take for my restaurant to go live on Swiggy?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <p>After all mandatory documents have been received and verified it takes upto 7-10 working days for the onboarding to be completed and make your restaurant live on the platform.</p>
        </AccordionDetails>
        <AccordionActions>
          
        </AccordionActions>
      </Accordion>
      <Accordion style={{marginTop:"20px"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="span">How much commission will I be charged by Swiggy?</Typography>
        </AccordionSummary>
        <AccordionDetails>
        The commission charges vary for different cities. You will be able to see the commission applicable for you once the preliminary onboarding details have been filled.

        </AccordionDetails>
      </Accordion>
      <Accordion style={{marginTop:"20px"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="span">How much commission will I be charged by Swiggy?</Typography>
        </AccordionSummary>
        <AccordionDetails>
        The commission charges vary for different cities. You will be able to see the commission applicable for you once the preliminary onboarding details have been filled.

        </AccordionDetails>
      </Accordion>
            </div>
        </div>
     </div>
      
      </>
    )
}