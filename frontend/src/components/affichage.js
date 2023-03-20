import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Figure from 'react-bootstrap/Figure';
import { Link } from "react-router-dom";
import c from './images/k9.png'

function affichage() { 
  return (
    <>
    <br></br>
    <br></br><br></br>
   <center> <Figure>
      <Figure.Image
        width={350}
        height={180}
        alt="350x180"
        src={c}
      />
       </Figure>
       </center>
    <Form>
    <center>  <h1>Hello admin welcome back!</h1>
  <p>choose the table you want to show it</p>
  </center>
    <center>  <Link to={`/memberstable`}><Button style={{color:'blue'}}type = "submit" value = "members table" >members app table</Button></Link> </center>
     
  <br></br>
    <center>  <Link to={`/adminstable`}><Button style={{color:'blue'}} type = "submit" value = "adminsmemberstable"  >admins app table</Button></Link> </center>
     
  <br></br>
    <center>  <Link to={`/jointable`}><Button   style={{color:'blue'}}type = "submit" value = "members join clubs"  >members join clubs</Button> </Link></center>
     
  <br></br>
    <center>  <Link to={`/clubmsgtable`}><Button style={{color:'blue'}} type = "submit" value = "clubs messages"  >clubs messages table</Button></Link> </center>
     
  <br></br>
    <center>  <Link to={`/msgmembertable`}><Button  style={{color:'blue'}} type = "submit" value = "members messages"  >members messages</Button> </Link></center>
     
  <br></br>
    <center>  <Link to={`/addclubtable`}><Button style={{color:'blue'}} type = "submit" value = "addclubs"  >add clubs table </Button> </Link></center>
   
 

  
  <br></br><br></br><br></br>
 
 
  </Form>
  </>
  )
}

export default affichage