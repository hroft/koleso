import React, { Component } from 'react';
// import { Button } from 'reactstrap';
import KolesoCardItem from './KolesoCardItem';
import MainNavbar from './MainNavbar';
import axios from 'axios';
import { Container } from 'reactstrap';
export class KolesoCard extends Component {
    constructor(){
        super();
        this.state={
                items:[],
                isLoaded: false,
                token:''
            };
        }
    componentDidMount(){
        const api = 'http://localhost:3000/koleso';
        const token = localStorage.getItem('cool-jwt'); 
        axios.get(api, { headers: {"Authorization" : `Bearer ${token}`} })
        .then(res=>{
            console.log(res.data);
            this.setState({
                items: res.data,
                isLoaded: true,
            })
        });

    }

    render() {
       
            if(!this.state.isLoaded){
                return(<div>Loading...</div>);
            }else {
                return(
                    <Container>
                <MainNavbar />
                
                <li>
                    {
                        this.state.items.map((item) =>
                        <KolesoCardItem 
                            key={item._id}
                            name={item.Name1} 
                            brand={item.BRAND}
                            disk={item.Disk}
                            photo={item.Photo[0]}
                            feature={item.Feature}
                        
                        />
                )}
                </li>
                </Container>
                
                )
            }
        
}}

export default KolesoCard;

