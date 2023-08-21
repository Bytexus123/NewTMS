import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  Nav,
  Table,
  Button,
  Card,
  CardBody,
  Collapse,
  FormGroup,
  Input,
  InputGroup,
  InputGroupText,
  Label,
  Form,
  Col,
  Row,
  NavItem,
  TabPane,
} from "reactstrap";
import { Header, SideBar } from "../../header";
import Profile from "../../pofile";
import { BiCheck } from "react-icons/bi";
import { BsSearch, BsSliders2 } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import { AiOutlineFileExcel, AiOutlinePlus } from "react-icons/ai";
import { MdOutgoingMail } from "react-icons/md";
import { PiFilePdfDuotone } from "react-icons/pi";
import { TabPage } from "../../driver-page";

const ExpansesPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState(1);

  function searchToggle(): void {
    console.log("search");
    setIsOpen((isOpen) => !isOpen);
  }

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("search");
  };
  return (
    <>
      <Navbar
        style={{ border: "1px solid #1B56AE" }}
        color="light"
        className="py-0"
      >
        <Header
          sidebarToggle={() => {
            setIsSidebarOpen(!isSidebarOpen);
          }}
        />
        <NavbarBrand>Expenses</NavbarBrand>
        <Nav className="me-auto" navbar>
          <div className="d-flex gap-2">
            <NavItem>Export</NavItem>
            <div className="d-flex justify-content-between gap-2">
              <Link to={"#!"}>
                <PiFilePdfDuotone className="text-danger fs-4" />
              </Link>
              <Link to={"#"}>
                <AiOutlineFileExcel className="text-success fs-4" />
              </Link>
              <Link to={"#!"}>
                <MdOutgoingMail className="fs-4" />
              </Link>
            </div>
          </div>
        </Nav>
        <div className="d-flex align-items-center gap-3">
          <div className="d-flex justify-content-end ms-auto align-items-center column-gap-2">
            <InputGroup className="shadow-sm border-secondary">
              <InputGroupText className="bg-white">
                <BsSearch size={16} />
              </InputGroupText>
              <Input
                placeholder="Search"
                className="border-start-0 border-end-0"
              />
              <InputGroupText className="bg-white">
                <Button
                  color="link"
                  size="sm"
                  className="p-0"
                  onClick={() => searchToggle()}
                >
                  <BsSliders2 size={16} />
                </Button>
              </InputGroupText>
            </InputGroup>
          </div>
          {name === 1 ? (
            <Link className="btn buttonLink" to="/createexpensesschedulepage">
              <AiOutlinePlus />
              New Schedule
            </Link>
          ) : (
            <Link className="btn buttonLink" to="/createexpansespage">
              <AiOutlinePlus />
              New Expense
            </Link>
          )}
          <Profile />
        </div>
      </Navbar>
      <div className="content d-flex">
        <SideBar isSidebarOpen={!isSidebarOpen} />
        <div className="aria-content">
          <TabPage tabTitles={["All", "Recurring Schedule"]} onclick={setName}>
            <TabPane tabId={1} className="m-4">
              {isOpen && (
                <Collapse isOpen={isOpen}>
                  <Card style={{ backgroundColor: "#E9F3FB" }} className="mb-3">
                    <CardBody>
                      <Form onSubmit={handleSearchSubmit}>
                        <Row className="px-5">
                          <Col>
                            <h5 className="fw-bold text-info">Search Filter</h5>
                            <Row>
                              <Col sm={2}>
                                <FormGroup>
                                  <Label for="exampleSelect">Type</Label>
                                  <Input
                                    bsSize="sm"
                                    id="exampleSelect"
                                    name="select"
                                    type="select"
                                    style={{
                                      color: "black",
                                      border: "1px solid #418ECB",
                                    }}
                                  >
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                  </Input>
                                </FormGroup>
                              </Col>
                              <Col sm={2}>
                                <FormGroup>
                                  <Label for="exampleSelect">Status</Label>
                                  <Input
                                    bsSize="sm"
                                    id="exampleSelect"
                                    name="select"
                                    type="select"
                                    style={{
                                      color: "black",
                                      border: "1px solid #418ECB",
                                    }}
                                  >
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                  </Input>
                                </FormGroup>
                              </Col>
                              <Col sm={2}>
                                <FormGroup>
                                  <Label for="exampleSelect">Load#</Label>
                                  <Input
                                    bsSize="sm"
                                    id="exampleSelect"
                                    name="select"
                                    type="text"
                                    style={{
                                      color: "black",
                                      border: "1px solid #418ECB",
                                    }}
                                  />
                                </FormGroup>
                              </Col>
                            </Row>
                            <Row>
                              <Col sm={2}>
                                <FormGroup>
                                  <Label for="exampleSelect">
                                    Amount Range:To
                                  </Label>
                                  <Input
                                    bsSize="sm"
                                    id="exampleSelect"
                                    name="select"
                                    type="text"
                                    style={{
                                      color: "black",
                                      border: "1px solid #418ECB",
                                    }}
                                  />
                                </FormGroup>
                              </Col>
                              <Col sm={2}>
                                <FormGroup>
                                  <Label for="exampleSelect">
                                    Amount Range:Form
                                  </Label>
                                  <Input
                                    bsSize="sm"
                                    id="exampleSelect"
                                    name="select"
                                    type="text"
                                    style={{
                                      color: "black",
                                      border: "1px solid #418ECB",
                                    }}
                                  />
                                </FormGroup>
                              </Col>
                              <Col sm={2}>
                                <FormGroup>
                                  <Label for="exampleSelect">
                                    Date Range:To
                                  </Label>
                                  <Input
                                    bsSize="sm"
                                    id="exampleSelect"
                                    name="select"
                                    type="date"
                                    style={{
                                      color: "black",
                                      border: "1px solid #418ECB",
                                    }}
                                  />
                                </FormGroup>
                              </Col>
                              <Col sm={2}>
                                <FormGroup>
                                  <Label for="exampleSelect">
                                    Date Range:Form
                                  </Label>
                                  <Input
                                    bsSize="sm"
                                    id="exampleSelect"
                                    name="select"
                                    type="date"
                                    style={{
                                      color: "black",
                                      border: "1px solid #418ECB",
                                    }}
                                  />
                                </FormGroup>
                              </Col>
                            </Row>
                            <Row>
                              <Col sm={2}>
                                <FormGroup>
                                  <Label for="exampleSelect">Settlement</Label>
                                  <Input
                                    bsSize="sm"
                                    id="exampleSelect"
                                    name="select"
                                    type="text"
                                    style={{
                                      color: "black",
                                      border: "1px solid #418ECB",
                                    }}
                                  />
                                </FormGroup>
                              </Col>
                              <Col sm={2}>
                                <FormGroup>
                                  <Label for="exampleSelect">Category</Label>
                                  <Input
                                    bsSize="sm"
                                    id="exampleSelect"
                                    name="select"
                                    type="text"
                                    style={{
                                      color: "black",
                                      border: "1px solid #418ECB",
                                    }}
                                  />
                                </FormGroup>
                              </Col>
                              <Col sm={2}>
                                <FormGroup>
                                  <Label for="exampleSelect">Partner</Label>
                                  <Input
                                    bsSize="sm"
                                    id="exampleSelect"
                                    name="select"
                                    type="select"
                                    style={{
                                      color: "black",
                                      border: "1px solid #418ECB",
                                    }}
                                  >
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                  </Input>
                                </FormGroup>
                              </Col>
                              <Col sm={2}>
                                <FormGroup>
                                  <Label for="exampleSelect">Driver</Label>
                                  <Input
                                    bsSize="sm"
                                    id="exampleSelect"
                                    name="select"
                                    type="select"
                                    style={{
                                      color: "black",
                                      border: "1px solid #418ECB",
                                    }}
                                  >
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                  </Input>
                                </FormGroup>
                              </Col>
                              <Col sm={2} className="mt-4">
                                <Button
                                  size="sm"
                                  className="me-3"
                                  style={{
                                    color: "black",
                                    border: "1px solid #1E5367",
                                    backgroundColor: "#B7D1E6",
                                  }}
                                >
                                  <BiCheck fontSize={"16px"} />
                                  Apply
                                </Button>
                                <Button
                                  size="sm"
                                  style={{
                                    color: "red",
                                    border: "1px solid red",
                                    backgroundColor: "white",
                                  }}
                                >
                                  <RxCross2 fontSize={"16px"} color="red" />{" "}
                                  Clear
                                </Button>
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                      </Form>
                    </CardBody>
                  </Card>
                </Collapse>
              )}
              <Table responsive hover className="table-data text-nowrap">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Recurring Transaction</th>
                    <th>Date</th>
                    <th>Amount</th>
                    <th>Category</th>
                    <th>Payable To</th>
                    <th>Driver</th>
                    <th>Truck</th>
                    <th>Trailer</th>
                    <th>Driver Charge</th>
                    <th>Notes</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>Mark</td>
                    <td>Otto</td>
                  </tr>
                </tbody>
              </Table>
            </TabPane>
            <TabPane tabId={2} className="m-4">
              {isOpen && (
                <Collapse isOpen={isOpen}>
                  <Card style={{ backgroundColor: "#E9F3FB" }} className="mb-3">
                    <CardBody>
                      <Form onSubmit={handleSearchSubmit}>
                        <Row className="px-5">
                          <Col>
                            <h5 className="fw-bold text-info">Search Filter</h5>
                            <Row>
                              <Col sm={2}>
                                <FormGroup>
                                  <Label for="exampleSelect">Type</Label>
                                  <Input
                                    bsSize="sm"
                                    id="exampleSelect"
                                    name="select"
                                    type="select"
                                    style={{
                                      color: "black",
                                      border: "1px solid #418ECB",
                                    }}
                                  >
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                  </Input>
                                </FormGroup>
                              </Col>
                              <Col sm={2}>
                                <FormGroup>
                                  <Label for="exampleSelect">Status</Label>
                                  <Input
                                    bsSize="sm"
                                    id="exampleSelect"
                                    name="select"
                                    type="select"
                                    style={{
                                      color: "black",
                                      border: "1px solid #418ECB",
                                    }}
                                  >
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                  </Input>
                                </FormGroup>
                              </Col>
                              <Col sm={2}>
                                <FormGroup>
                                  <Label for="exampleSelect">Load#</Label>
                                  <Input
                                    bsSize="sm"
                                    id="exampleSelect"
                                    name="select"
                                    type="text"
                                    style={{
                                      color: "black",
                                      border: "1px solid #418ECB",
                                    }}
                                  />
                                </FormGroup>
                              </Col>
                            </Row>
                            <Row>
                              <Col sm={2}>
                                <FormGroup>
                                  <Label for="exampleSelect">
                                    Amount Range:To
                                  </Label>
                                  <Input
                                    bsSize="sm"
                                    id="exampleSelect"
                                    name="select"
                                    type="text"
                                    style={{
                                      color: "black",
                                      border: "1px solid #418ECB",
                                    }}
                                  />
                                </FormGroup>
                              </Col>
                              <Col sm={2}>
                                <FormGroup>
                                  <Label for="exampleSelect">
                                    Amount Range:Form
                                  </Label>
                                  <Input
                                    bsSize="sm"
                                    id="exampleSelect"
                                    name="select"
                                    type="text"
                                    style={{
                                      color: "black",
                                      border: "1px solid #418ECB",
                                    }}
                                  />
                                </FormGroup>
                              </Col>
                              <Col sm={2}>
                                <FormGroup>
                                  <Label for="exampleSelect">
                                    Date Range:To
                                  </Label>
                                  <Input
                                    bsSize="sm"
                                    id="exampleSelect"
                                    name="select"
                                    type="date"
                                    style={{
                                      color: "black",
                                      border: "1px solid #418ECB",
                                    }}
                                  />
                                </FormGroup>
                              </Col>
                              <Col sm={2}>
                                <FormGroup>
                                  <Label for="exampleSelect">
                                    Date Range:Form
                                  </Label>
                                  <Input
                                    bsSize="sm"
                                    id="exampleSelect"
                                    name="select"
                                    type="date"
                                    style={{
                                      color: "black",
                                      border: "1px solid #418ECB",
                                    }}
                                  />
                                </FormGroup>
                              </Col>
                            </Row>
                            <Row>
                              <Col sm={2}>
                                <FormGroup>
                                  <Label for="exampleSelect">Settlement</Label>
                                  <Input
                                    bsSize="sm"
                                    id="exampleSelect"
                                    name="select"
                                    type="text"
                                    style={{
                                      color: "black",
                                      border: "1px solid #418ECB",
                                    }}
                                  />
                                </FormGroup>
                              </Col>
                              <Col sm={2}>
                                <FormGroup>
                                  <Label for="exampleSelect">Category</Label>
                                  <Input
                                    bsSize="sm"
                                    id="exampleSelect"
                                    name="select"
                                    type="text"
                                    style={{
                                      color: "black",
                                      border: "1px solid #418ECB",
                                    }}
                                  />
                                </FormGroup>
                              </Col>
                              <Col sm={2}>
                                <FormGroup>
                                  <Label for="exampleSelect">Partner</Label>
                                  <Input
                                    bsSize="sm"
                                    id="exampleSelect"
                                    name="select"
                                    type="select"
                                    style={{
                                      color: "black",
                                      border: "1px solid #418ECB",
                                    }}
                                  >
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                  </Input>
                                </FormGroup>
                              </Col>
                              <Col sm={2}>
                                <FormGroup>
                                  <Label for="exampleSelect">Driver</Label>
                                  <Input
                                    bsSize="sm"
                                    id="exampleSelect"
                                    name="select"
                                    type="select"
                                    style={{
                                      color: "black",
                                      border: "1px solid #418ECB",
                                    }}
                                  >
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                  </Input>
                                </FormGroup>
                              </Col>
                              {/* <Col sm={2} className="mt-4">
                                <Button
                                  size="sm"
                                  className="me-3"
                                  style={{
                                    color: "black",
                                    border: "1px solid #1E5367",
                                    backgroundColor: "#B7D1E6",
                                  }}
                                >
                                  <BiCheck fontSize={"16px"} />
                                  Apply
                                </Button>
                                <Button
                                  size="sm"
                                  style={{
                                    color: "red",
                                    border: "1px solid red",
                                    backgroundColor: "white",
                                  }}
                                >
                                  <RxCross2 fontSize={"16px"} color="red" />{" "}
                                  Clear
                                </Button>
                              </Col> */}
                            </Row>
                          </Col>
                        </Row>
                      </Form>
                    </CardBody>
                  </Card>
                </Collapse>
              )}
              <Table responsive hover className="table-data text-nowrap">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Created</th>
                    <th>Amount</th>
                    <th>Category</th>
                    <th>Payable To</th>
                    <th>Schedule</th>
                    <th>Status</th>
                    <th>Driver</th>
                    <th>Truck</th>
                    <th>Trailer</th>
                    <th>Notes</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>Mark</td>
                    <td>Otto</td>
                  </tr>
                </tbody>
              </Table>
            </TabPane>
          </TabPage>
        </div>
      </div>
    </>
  );
};

export default ExpansesPage;