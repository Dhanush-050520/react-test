import React from 'react'
import './App.css'
import { FaUserGroup,FaArrowUpFromGroundWater,FaArrowRightArrowLeft,FaHeart} from "react-icons/fa6";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { CategoryScale, LinearScale, PointElement, LineElement, Title, Filler } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import { Col,  Row, Card, Container } from 'react-bootstrap'





ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend);
ChartJS.register(ArcElement, Tooltip, Legend);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data1 = {
  labels,
  datasets: [
    {
      fill: true,
      label: 'Dataset 2',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

export const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'red',
        'blue',
        'yellow',
        'green',
        'purple',
        'orange',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};



const Dash = () => {
    return (

      <Container>
        <Row>
       <Col>
            <h1>Dashboard </h1>
      <div className='oneup' style={{backgroundColor:"#7fd4b3"}}>
      <h2><FaArrowUpFromGroundWater/></h2>
        <h4>Total Revenues</h4>
        <h2 >$2,129,430</h2>
      </div>
      </Col>

      <Col>
      <div className='oneup' style={{backgroundColor:"#f79494"}}>
      <h2><FaArrowRightArrowLeft/></h2>
      <h4>Total Transactions</h4>
        <h2>1520</h2>
      </div>
      </Col>

      <Col>
      <div className='oneup' style={{backgroundColor:"#c17feb"}}>
      <h2><FaHeart/></h2>
      <h4 >Total Likes</h4>
        <h2>9721</h2>
      </div>
      </Col>

      <Col>
      <div className='oneup' style={{backgroundColor:"#17dae8"}}>
        <h2><FaUserGroup/></h2>
      <h4 style={{marginTop:"0px",marginRight:"0px"}}>Total Users</h4>
        <h2 >892</h2>
      </div>
      </Col>

      </Row>


{/* <Row>
          <Col >
            <Card style={{ width: '15rem', height: "10rem", backgroundColor: "#7fd4b3" }}>
              <Card.Body>
                <h1>hello</h1>
                <p>{state}</p>
              </Card.Body>
            </Card>
          </Col>

               <Col>
               <Card style={{ width: '15em' ,height:"10rem",backgroundColor:"#f79494"}}>
               <Card.Body>
                      <h1>hi</h1>
               </Card.Body>
               </Card>
               </Col>

          <Col>
            <Card style={{ width: '15rem', height: "10rem", backgroundColor: "#c17feb" }}>
              <Card.Body>
                <h1>hello</h1>
              </Card.Body>
            </Card>
          </Col>

               <Col>
               <Card style={{ width: '15rem',height:"10rem",backgroundColor:"#17dae8"}}>
               <Card.Body>
                      <h1>hello</h1>
               </Card.Body>
               </Card>
               </Col>
            </Row> */}





      <Row>
          <Col xs lg="6">
          <Card style={{width:"40rem"}}>
              <Line options={options} data={data1}  />
          </Card>
          </Col>
          
          <Col xs lg="4">
          <Card style={{width:"20rem",marginLeft:"800px",marginTop:"-350px"}}>
              <Pie data={data} />
          </Card>
          </Col>
        </Row>
        
        
        </Container>


    )
}

export default Dash;
