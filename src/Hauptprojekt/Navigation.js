import React from 'react' 
import Navbar from './NavBar'
import List from './Liste/liste'

class Navigation extends React.Component{
    render(){
        return(
            <>
            <Navbar></Navbar>

             <List></List> 
            </>
    )
        }
}

export default Navigation;
