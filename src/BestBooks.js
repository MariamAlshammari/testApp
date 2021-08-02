import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './BestBooks.css';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';
import { Card, Button } from 'react-bootstrap'
import MyForm from './components/MyForm.js'
import UpdateForm from './components/UpdateForm';


class MyFavoriteBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      booksArr: [],
      userEmail: '',
      showBooksComponent: false,
      showModel:false,
      showUpdateForm: false,
      idx: 0,
      name: '',
      description: '',
      status:'',
    }

  }
  componentDidMount = async () => {
    try {
      const { user } = this.props.auth0;
      await this.setState({
        userEmail: `${user.email}`
      })

      // console.log(userEmail);
      let url = `${process.env.REACT_APP_PORT}/book?userEmail=${this.state.userEmail}`;
      console.log(url);
      let result = await axios.get(url);
      await this.setState({
        booksArr: result.data,
        showBooksComponent: true
      })
    }
    catch (error) {
      console.log(error);
    }
    //http://localhost:3001/book?userEmail=malshammari37@gmail.com

  }
  showFormModal=async()=>{
    await this.setState({
      showModel:true,
      // showUpdateForm:true
    })
  }
  showFormModal2=async()=>{
    await this.setState({
      showModel:true,
      showUpdateForm:true
    })
  }
  handleClose=()=>{
    this.setState({
      showModel:false,
      showUpdateForm:false

    })
  }
  addBooks=async(e)=>{
  e.preventDefault();
  try{
    let url=`${process.env.REACT_APP_PORT}/addbooks`
    // let name=e.target.name.value;
    // let status=e.target.status.value;
    // let description=e.target.description.value;
    // let userEmail=this.state.userEmail;

    const bookFormData={
      name:e.target.name.value,
      status:e.target.status.value,
      description:e.target.description.value,
      userEmail:this.state.userEmail
    }
    let result=await axios.post(url,bookFormData)
    await this.setState({
      booksArr:result.data,


    })
    // console.log('hii',userEmail);
  }
  catch(error){    console.log('error');
}
}


showUpdateBookForm=async(idx)=>{
  await this.setState({
    showUpdateForm: true,
    idx: idx,
    name:this.state.booksArr[idx].name,
    description:this.state.booksArr[idx].description,
    status:this.state.booksArr[idx].status
  })
  console.log('hhh',this.state.description)

}

updateForm=async(e)=>{
e.preventDefault();
try{ 



  let url=`${process.env.REACT_APP_PORT}/updateBooks/${this.state.idx}`
  let bookFormData={
    name:e.target.name1.value,
    status:e.target.status1.value,
    description:e.target.description1.value,
    userEmail:this.state.userEmail
  }
  console.log(bookFormData);
  let result=await axios.put(`${process.env.REACT_APP_PORT}/updateBooks/${this.state.idx}`,bookFormData)
  console.log(url);
  this.setState({
    booksArr:result.data
  })


}catch(error){
  console.log('errorrr');

}
}

deleteBook=async(idx)=>{
  let paramsObj={
    userEmail:this.state.userEmail
  }
let url=`${process.env.REACT_APP_PORT}/deleteBooks/${idx}`
let result=await axios.delete(url,{params:paramsObj})
this.setState({
  booksArr:result.data
})
}

  render() {
    return (
      <Jumbotron>
        <h1>My Favorite Books</h1>
        <p>
          This is a collection of my favorite books
        </p>
        <>
        {
          this.state.booksArr.map((item,idx)=>
          { 
          return(
          <div key={idx}>
            <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={`${item.image}`} />
          <Card.Body>
            <Card.Title>{item.name}
            </Card.Title>
            <Card.Text>
              {item.status}
            </Card.Text>
            <Card.Text>
              {item.description}
            </Card.Text>
            <Button variant="primary" onClick={()=>this.showUpdateBookForm(idx)} >Update</Button>
            <Button variant="primary" onClick={()=>this.deleteBook(idx)}>Delete</Button>

          </Card.Body>
        </Card>
          </div>)}
         )
        }
        <button onClick={this.showFormModal}>Add Book</button>
        <MyForm addBooks={this.addBooks} showFormModal={this.showFormModal} showModel={this.state.showModel} handleClose={this.handleClose}/>
        {/* <UpdateForm updateForm={this.updateForm} showFormModal={this.showFormModal} showUpdateForm={this.state.showUpdateForm} handleClose={this.handleClose}/> */}
        {this.state.showUpdateForm &&
          <UpdateForm
            name={this.state.name}
            description={this.state.description}
            status={this.state.status}
            updateForm={this.updateForm}
            showFormModal2={this.showFormModal2} showUpdateForm={this.state.showUpdateForm} handleClose={this.handleClose}
            
            
          />}
          
        </>
      </Jumbotron>
    )
  }
}

export default withAuth0(MyFavoriteBooks);
