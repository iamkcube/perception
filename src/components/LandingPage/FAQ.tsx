import AddIcon from '@mui/icons-material/Add';
import { Accordion, AccordionActions, AccordionDetails, AccordionSummary, Button } from "@mui/material";
import CustomButton from "@utils/CustomButton";
export default function FAQ() {
  return (
	<div style={{display:'flex',justifyContent:'space-between',marginInline: "clamp(2rem, 4vw + 1rem , 4rem)"}}>

    <div style={{flex:'1',backgroundColor:'black'}}>
      <h6 style={{position:'relative',left:'2rem'}}>[02]</h6>
     <h1 style={{fontSize:'2rem',textAlign:'left',position:'relative',left:'2rem'}}>Our Services</h1>
    </div>


    <div style={{flex:'1',backgroundColor:'black'}}>
      <br></br>
      <ul>
        <li style={{position:'relative',listStyleType:'none',right:'4rem',color:'white',fontSize:'1.5rem'}}>List of our services</li>
      </ul>
      <br></br>
      <br></br>
    <Accordion style={{backgroundColor:'black',position:'relative',right:'2rem'}}>
        <AccordionSummary
          expandIcon={<AddIcon/>}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Accordion 1
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      <Accordion style={{backgroundColor:'black',position:'relative',right:'2rem'}}>
        <AccordionSummary
         expandIcon={<AddIcon/>}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          Accordion 2
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      <Accordion style={{backgroundColor:'black',position:'relative',right:'2rem'}}>
        <AccordionSummary
         expandIcon={<AddIcon/>}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          Accordion 3
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      <Accordion style={{backgroundColor:'black',position:'relative',right:'2rem'}}>
        <AccordionSummary
         expandIcon={<AddIcon/>}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          Accordion 4
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      <Accordion style={{backgroundColor:'black',position:'relative',right:'2rem'}}>
        <AccordionSummary
         expandIcon={<AddIcon/>}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          Accordion 5
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded style={{backgroundColor:'black',position:'relative',right:'2rem'}}>
        <AccordionSummary
         expandIcon={<AddIcon/>}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          Accordion Actions
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
        <AccordionActions>
          <Button>Cancel</Button>
          <Button>Agree</Button>
        </AccordionActions>
      </Accordion>
      <CustomButton onClick={()=>{}}>See More</CustomButton>
    </div>
  </div>
  )
}
