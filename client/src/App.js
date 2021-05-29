// import './App.css';
import SideBar from './components/sidebar'
import Dough from './components/doughnut'
import Bars from './components/bar'
import TweetsCard from './components/tweets_card'
import PosCloud from './components/pos_cloud'
import NeuCloud from './components/neu_cloud'
import NegCloud from './components/neg_cloud'
import './components/sidebar.css'
import { Container,Row,Col,Button } from 'react-bootstrap';
import React, { Component} from 'react';

export default class App extends Component{
  
    constructor(props){
      super(props);
      this.state = {
          data: "india",
        
          _count:{
            'positive':100,
            'negative':100,
            'neutral':100,
            'tweets':['\nPlease wait..'],
            'freq_array':[{"text":"Welcome ","value":10}],
            
          }
      }
      this.handleCallback=this.handleCallback.bind(this)
  }


handleCallback = (childData) =>{
  this.setState({isLoading: true})
    this.setState({_count: childData})
   
    
    // console.log(this.state._count,"yo")
}


render (){

    return(
<Container fluid className="bgdark">
  
<Row>
                    <Col xs={4} sm={2} id="sidebar-wrapper" >      
                      <SideBar parentCallback = {this.handleCallback} />
                      
                    </Col>
                   
                    <Col  xs={8} sm={10}>
                  
                       <Row    >
                    
                         <Col xs={7} sm={3} md={3} style={{ height: '250px',paddingTop: 10,paddingLeft:0,paddingRight:0}}><span style={{color:'white'}}></span><Dough counts= {this.state._count} /></Col>
                         <Col xs={5} sm={9} md={9} style={{height: '300px', paddingTop: 10,paddingLeft:10}}><span style={{color:'white'}}></span><Bars counts= {this.state._count} /></Col>
                       </Row>
                       
                       <Row >
                        <Col xs={7} sm={3} md={3}   style={{paddingLeft:0}}><TweetsCard tweets={this.state._count.tweets}/></Col>
                      
                        <Col sm={7} md={7} style={{height: '10%',width:'10%',marginTop:50}} ><PosCloud freq={this.state._count.freq_array} /></Col>
                        <Col sm={2} md={2} style={{height: '10%',width:'10%',marginTop:50}}  >
                        <div style={{ background:"rgb(25, 32, 37)", height:'330px'}}>
                          <Row >
                          <Button variant="primary" size="md" style={{marginRight:10,marginLeft:20,marginTop:50,background:'#3342ff'}}>Detailed report</Button>
                          </Row>
                          <Row>
                          <Button variant="primary" size="md" style={{marginRight:10,marginLeft:20,marginTop:25,background:'#3342ff'}}>Contact us</Button>
                          </Row>
                          <Row>
                          <Button variant="primary" size="md" style={{marginRight:10,marginLeft:20,marginTop:20,background:'#3342ff'}}>About Us</Button>
                          </Row>
                          <Row>
                          <Button variant="primary" size="md" style={{marginRight:10,marginLeft:20,marginTop:20,background:'#3342ff'}}>Report Bug</Button>
                          </Row>
                          </div>
                        </Col>
                       
                       
                       </Row>
                    </Col> 
                </Row>
   

</Container>
  );
}

}
