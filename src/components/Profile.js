import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import { Card, Button } from 'react-bootstrap/'


class Profile extends Component {
  render() {
    const { user } = this.props.auth0;
    console.log(user);
    return <><div>Hello {user.name}</div>
    <div>{user.email}</div>
    {/* <img src="user.picture" alt={user.name}/> */}
    <Card style={{ width: '18rem', backgroundColor: 'lightgrey', boxShadow: '2px 2px 2px black' }} >

{/* <Card.Body>
    <Card.Title>Hello {user.name}</Card.Title>
    <Card.Text>
        Email : {user.email}
    </Card.Text> */}
    <Card.Img style={{ boxShadow: '2px 2px 2px #ccc' }} variant="top" src={user.picture} alt={user.name} />
{/* </Card.Body> */}
</Card> 
    </>;
  }
}

export default withAuth0(Profile);