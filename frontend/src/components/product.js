import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Figure from 'react-bootstrap/Figure';
import { Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import e from  './images/k9.png'

const product= ({p}) => {  
  
  return (
    <>
   <diV>
     <Figure>
      <Figure.Image
        width={260}
        height={280}
        alt="171x180"
        src={e}
      />
       </Figure>
     
       </diV>
<div>
  

<Card style={{ alignItems:'center', width: '19rem' }}>
      <Card.Img  variant="top" src={p.image} />
      <Card.Body>
      <center> <Card.Title  style={{color:"blue",textDecoration:"underline"}}>{p.name}</Card.Title></center> 
        <Card.Text  style={{color:'black'}}>
         {p.description}
        </Card.Text>
        <Link to={`/join`}>    <Button variant="primary" style={{color:"blue"}} >JOIN CLUB</Button></Link>
        <br></br> <br></br> 
        <Link to={`/Message`}>    <Button variant="primary" style={{color:"blue"}} >MESSAGE</Button></Link>
      </Card.Body>     
    </Card>
    </div>
    <br></br> <br></br> <br></br> <br></br>
 <center><div className="fixed-bottom"  >
 <Link to={`/about`}> <Button style={{ bottom: "0", right: "0"}} variant="outline-info"  >About us </Button></Link>
</div></center>   
    
    </>
    

    
  );
 
}








export default product;