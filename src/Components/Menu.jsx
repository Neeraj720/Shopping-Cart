import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux';

function Menu() {
  let data =useSelector(state => state.productDetails.value)
 return(
  <Navbar bg="light" expand="lg" className="px-3 navbar-dark bg-dark d-flex justify-content-between fixed-top">
  <Navbar.Brand as={Link} to="/" className='fs-3'>
   Shoppy
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ms-auto">
      <Nav.Link as={Link} to="/" className="mx-2">Home</Nav.Link>
      <Nav.Link as={Link} to="/cart" className="mx-2">Cart : {data.length}</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>



 )
}
export default Menu;
