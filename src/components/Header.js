import React from 'react';
import { Navbar,Container,Nav,FormControl,Button,Dropdown,Col,Row,NavDropdown,Offcanvas,Form} from 'react-bootstrap';
import logoOrange from '../assets/freeLogo.png';
import logo from '../assets/buying.gif'
import styles from  './Header.css'
import { useState } from 'react';

const Header = () => {


    const [show, setShow] = useState(false);
    const showDropdown = e=>
    {setShow(!show);}

    const hideDropdown = e =>
    {setShow(false);}


    return (
        <div>
            {[,  'lg'].map((expand) => (
    <Navbar fluid fixed="top" key={expand} bg="light" expand={expand} className="mb-3">
      <Container className='container1'   fluid>
        <Navbar.Brand className='navbarBrand' href="#">
        <img src={logo}  class='img' />
                        <br></br>
                        
                        <div class="vl"></div>
                        <Button className={styles.btn} variant="outline-success">ورود | ثبت‌ نام</Button>
        </Navbar.Brand>
        <Navbar.Toggle className='tggleNav' aria-controls={`offcanvasNavbar-expand-${expand}`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${expand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement="end"
          className='offcanves1'
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
              Offcanvas
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3 navbarToggle">
              <Nav.Link href="#action1">سوپرمارکت</Nav.Link>
              <Nav.Link href="#action2">پرفروش‌ترین‌ه</Nav.Link>
              <Nav.Link href="#action2">تخفیف‌ها و پیشنهادها</Nav.Link>
              <Nav.Link href="#action2">شگفت‌انگیزها</Nav.Link>
              <Nav.Link href="#action2">سوالی دارید؟</Nav.Link>

              <NavDropdown
                title="دسته‌بندی کالاها"
                id={`offcanvasNavbarDropdown-expand-${expand}`}
                className='dropdownNavbar'
                show={show}
                onMouseEnter={showDropdown} 
                onMouseLeave={hideDropdown}
              >
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            
          </Offcanvas.Body>
          <Form className="d-flex formNavbar">
              <FormControl
                type="search"
                placeholder="... جستجو "
                className="me-2 inputNav"
                aria-label="Search"
              />
              <img src={logoOrange} class='logoShop' />
            </Form>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  ))}

        </div>
    );
};

export default Header;