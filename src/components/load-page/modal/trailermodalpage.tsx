import React, { useReducer } from "react";
import { trailersTypes } from "../../tms-object/equipmenrs";
import { BiCheck } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import {
  Container,
  Form,
  Row,
  Col,
  FormGroup,
  Label,
  Input,
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";

type FormAction =
  | { type: "SET_unit"; payload: string }
  | { type: "SET_vin"; payload: string }
  | { type: "SET_year"; payload: string }
  | { type: "SET_make"; payload: string }
  | { type: "SET_ownership"; payload: string }
  | { type: "SET_modal"; payload: string }
  | { type: "SET_purchaseDate"; payload: string }
  | { type: "SET_purchasePrice"; payload: string }
  | { type: "SET_driver"; payload: string }
  | { type: "SET_plate"; payload: string }
  | { type: "SET_plateState"; payload: string }
  | { type: "SET_notes"; payload: string }
  | { type: "SET_history"; payload: string };

const formReducer = (
  state: trailersTypes,
  action: FormAction
): trailersTypes => {
  switch (action.type) {
    case "SET_unit":
      return { ...state, unit: action.payload };
    case "SET_vin":
      return { ...state, vin: action.payload };
    case "SET_year":
      return { ...state, year: action.payload };
    case "SET_make":
      return { ...state, make: action.payload };
    case "SET_ownership":
      return { ...state, ownership: action.payload };
    case "SET_modal":
      return { ...state, modal: action.payload };
    case "SET_purchaseDate":
      return { ...state, purchaseDate: action.payload };
    case "SET_purchasePrice":
      return { ...state, purchasePrice: action.payload };
    case "SET_driver":
      return { ...state, driver: action.payload };
    case "SET_plate":
      return { ...state, plate: action.payload };
    case "SET_plateState":
      return { ...state, plateState: action.payload };
    case "SET_notes":
      return { ...state, notes: action.payload };
    case "SET_history":
      return { ...state, history: action.payload };
    default:
      return state;
  }
};

const initialState: trailersTypes = {
  unit: "",
  vin: "",
  year: "",
  make: "",
  ownership: "",
  modal: "",
  purchaseDate: "",
  purchasePrice: "",
  driver: "",
  plate: "",
  plateState: "",
  notes: "",
  history: "",
};

interface TrailerModalPageProps {
  isTrailerOpen: boolean;
  toggle: () => void;
}
const TrailerModalPage = ({ isTrailerOpen, toggle }: TrailerModalPageProps) => {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(state);
  };
  return (
    <>
      <Modal isOpen={isTrailerOpen} toggle={toggle} size="lg">
        <ModalHeader toggle={toggle} style={{ backgroundColor: "#E9F3FB" }}>
          New Trailer
        </ModalHeader>
        <ModalBody>
          <Container>
            <Form onSubmit={handleSubmit} className="traileritem">
              <Row>
                <Col>
                  <Row>
                    <Col md={4}>
                      <FormGroup>
                        <Label for="exampleunit">Unit</Label>
                        <Input
                          bsSize="sm"
                          style={{
                            color: "black",
                            border: "1px solid #418ECB",
                          }}
                          type="text"
                          value={state.unit}
                          onChange={(e) => {
                            dispatch({
                              type: "SET_unit",
                              payload: e.target.value,
                            });
                          }}
                        />
                      </FormGroup>
                    </Col>
                    <Col md={4}>
                      <FormGroup>
                        <Label>VIN</Label>
                        <Input
                          bsSize="sm"
                          style={{
                            color: "black",
                            border: "1px solid #418ECB",
                          }}
                          type="text"
                          value={state.vin}
                          onChange={(e) => {
                            dispatch({
                              type: "SET_vin",
                              payload: e.target.value,
                            });
                          }}
                        />
                      </FormGroup>
                    </Col>
                    <Col md={4}></Col>
                  </Row>
                  <Row>
                    <Col md={4}>
                      <FormGroup>
                        <Label for="exampleyear">Year</Label>
                        <Input
                          bsSize="sm"
                          style={{
                            color: "black",
                            border: "1px solid #418ECB",
                          }}
                          id="exampleyear"
                          name="year"
                          type="text"
                          value={state.year}
                          onChange={(e) => {
                            dispatch({
                              type: "SET_year",
                              payload: e.target.value,
                            });
                          }}
                        />
                      </FormGroup>
                    </Col>
                    <Col md={4}>
                      <FormGroup>
                        <Label for="examplemake">Make</Label>
                        <Input
                          bsSize="sm"
                          style={{
                            color: "black",
                            border: "1px solid #418ECB",
                          }}
                          id="examplemake"
                          name="make"
                          type="text"
                          value={state.make}
                          onChange={(e) => {
                            dispatch({
                              type: "SET_make",
                              payload: e.target.value,
                            });
                          }}
                        />
                      </FormGroup>
                    </Col>
                    <Col md={4}>
                      <FormGroup tag="fieldset">
                        <h5 className="fw-bold">OwnerShip</h5>
                        <div className="d-flex">
                          <FormGroup check>
                            <Input name="radio1" type="radio" />
                            <Label
                              check
                              className="me-2"
                              style={{ marginBottom: "0px", fontSize: "small" }}
                            >
                              Owned
                            </Label>
                          </FormGroup>
                          <FormGroup check>
                            <Input name="radio1" type="radio" />
                            <Label
                              check
                              style={{ marginBottom: "0px", fontSize: "small" }}
                            >
                              Leased
                            </Label>
                          </FormGroup>
                        </div>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={4}>
                      <FormGroup>
                        <Label for="examplemodal">Modal</Label>
                        <Input
                          bsSize="sm"
                          style={{
                            color: "black",
                            border: "1px solid #418ECB",
                          }}
                          id="examplemodal"
                          name="modal"
                          type="text"
                          value={state.modal}
                          onChange={(e) => {
                            dispatch({
                              type: "SET_modal",
                              payload: e.target.value,
                            });
                          }}
                        />
                      </FormGroup>
                    </Col>
                    <Col md={4}></Col>
                    <Col md={4}> </Col>
                  </Row>
                  <Row>
                    <Col md={4}>
                      <FormGroup>
                        <Label for="exampledriver">Driver</Label>
                        <Input
                          bsSize="sm"
                          style={{
                            color: "black",
                            border: "1px solid #418ECB",
                          }}
                          id="exampledriver"
                          name="driver"
                          type="text"
                          value={state.driver}
                          onChange={(e) => {
                            dispatch({
                              type: "SET_driver",
                              payload: e.target.value,
                            });
                          }}
                        />
                      </FormGroup>
                    </Col>
                    <Col md={4}>
                      <FormGroup>
                        <Label for="exampleSelect">Plate</Label>
                        <Input
                          bsSize="sm"
                          style={{
                            color: "black",
                            border: "1px solid #418ECB",
                          }}
                          type="select"
                          id="exampleSelect"
                          name="select"
                          value={state.plate}
                          onChange={(e) => {
                            dispatch({
                              type: "SET_plate",
                              payload: e.target.value,
                            });
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
                    <Col md={4}>
                      <FormGroup>
                        <Label for="examplepurchaseDate">Purchase Date</Label>
                        <Input
                          bsSize="sm"
                          style={{
                            color: "black",
                            border: "1px solid #418ECB",
                          }}
                          id="examplepurchaseDate"
                          name="purchaseDate"
                          type="date"
                          value={state.purchaseDate}
                          onChange={(e) => {
                            dispatch({
                              type: "SET_purchaseDate",
                              payload: e.target.value,
                            });
                          }}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={4}>
                      <FormGroup>
                        <Label for="exampleplateState">Plate State</Label>
                        <Input
                          bsSize="sm"
                          style={{
                            color: "black",
                            border: "1px solid #418ECB",
                          }}
                          id="exampleplateState"
                          name="plateState"
                          type="text"
                          value={state.plateState}
                          onChange={(e) => {
                            dispatch({
                              type: "SET_plateState",
                              payload: e.target.value,
                            });
                          }}
                        />
                      </FormGroup>
                    </Col>
                    <Col md={4}></Col>
                    <Col md={4}>
                      <FormGroup>
                        <Label for="examplepurchaseprice">Purchase Price</Label>
                        <Input
                          bsSize="sm"
                          style={{
                            color: "black",
                            border: "1px solid #418ECB",
                          }}
                          id="examplepurchaseprice"
                          name="purchaseprice"
                          type="text"
                          value={state.purchasePrice}
                          onChange={(e) => {
                            dispatch({
                              type: "SET_purchasePrice",
                              payload: e.target.value,
                            });
                          }}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6}>
                      <FormGroup>
                        <Label for="examplenotes">Notes</Label>
                        <Input
                          bsSize="sm"
                          style={{
                            color: "black",
                            border: "1px solid #418ECB",
                          }}
                          id="examplenotes"
                          name="notes"
                          type="textarea"
                          rows="3"
                          value={state.notes}
                          onChange={(e) => {
                            dispatch({
                              type: "SET_notes",
                              payload: e.target.value,
                            });
                          }}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6}>
                      <FormGroup>
                        <Label for="examplehistory">Histoy</Label>
                        <Input
                          bsSize="sm"
                          style={{
                            color: "black",
                            border: "1px solid #418ECB",
                          }}
                          id="examplehistory"
                          name="history"
                          type="textarea"
                          rows="3"
                          value={state.history}
                          onChange={(e) => {
                            dispatch({
                              type: "SET_history",
                              payload: e.target.value,
                            });
                          }}
                        />
                      </FormGroup>
                    </Col>
                    <Col md={3}></Col>
                    <Col md={3} className="mt-5"></Col>
                  </Row>
                </Col>
              </Row>
            </Form>
          </Container>
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            size="sm"
            className="me-3"
            style={{
              color: "black",
              border: "1px solid #1E5367",
              backgroundColor: "#418ECB",
            }}
          >
            <BiCheck fontSize={"16px"} />
            Save
          </Button>
          <Button
            size="sm"
            style={{
              color: "red",
              border: "1px solid red",
              backgroundColor: "white",
            }}
            onClick={toggle}
          >
            <RxCross2 fontSize={"16px"} color="red" />
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default TrailerModalPage;