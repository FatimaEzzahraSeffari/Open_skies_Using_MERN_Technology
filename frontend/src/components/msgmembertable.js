import Table from 'react-bootstrap/Table';
import React from 'react'
import  { useEffect, useState } from 'react'
import Axios from "axios"
import { Link } from "react-router-dom";
import Figure from 'react-bootstrap/Figure';
import { Container } from 'react-bootstrap';
import e from  './images/k9.png'
import Button from 'react-bootstrap/Button';
function Msgmembertable() {
  const [data, setData] = useState([])
  useEffect(() => {
      const fetchProducts = async () => {
          const { data } = await Axios.get(("https://mern-club-gestion-backend.onrender.com/msgmembertable"))
          setData(data)
      }
      fetchProducts()
  }, [])
  useEffect(() => {
    getData();
}, []);

const getData = async () => {
  const { data } = await Axios.get("https://mern-club-gestion-backend.onrender.com/delete/msgmember");
  setData(data.data);
};
const deleteMsgmember = async (id) => {
  try {
      await Axios.delete(`https://mern-club-gestion-backend.onrender.com/delete/msgmember/${id}`);
      getData();
  } catch (error) {
      console.log(error);
  }
};


const refresh = () => window.location.reload(true)
  return (
    <Table striped="columns">
    <thead>
    <Figure>
    <Figure.Image
      width={260}
      height={280}
      alt="171x180"
      src={e}
    />
     </Figure>
    <Container>
    
     <div class="text-center"> 
     <p   className="text-dark ">message members table &#128221;</p>   
    
    </div>

      </Container>
      <tr>
      <th style={{color:"black"}}>name</th>
          <th style={{color:"black"}}>email</th>
          <th style={{color:"black"}}>subject</th>
          <th style={{color:"black"}}>message</th>
         

    
    <th colspan="4"style={{color:"black"}}>Actions</th>
        </tr>
        <tr> 
      </tr>
  </thead>
  <tbody>
  {data.map((item) => (
                    <tr key={item._id}>
                        <td style={{color:"black"}}>{item.name} </td>
                        <td style={{color:"black"}}>{item.email3} </td>
                        <td style={{color:"black"}}>{item.subject}</td>
                        <td style={{color:"black"}}>{item.message3}</td>
                        <td> <Button
                         style={{color:"black"}}
                                onClick={() => deleteMsgmember(item._id)}
                                className="button is-danger is-small"
                          
                            >
                                Delete
                                
                            </Button>
                            &ensp;&ensp;
                            <Link
                                to={`/editcontact/${item._id}`}
                               
                            >
                              <Button
                               style={{color:"black"}}
                               className="button is-info is-small mr-1"> Edit</Button>
                                
                            </Link>
                           </td>
                           </tr>
                           ))}
</tbody>
<br></br>
<Button style={{ bottom: "0", right: "0"}} variant="outline-info" onClick={refresh}>Refresh</Button>
    </Table>
  )
}

export default Msgmembertable
