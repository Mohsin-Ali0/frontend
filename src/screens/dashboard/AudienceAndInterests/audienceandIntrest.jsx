import React from "react";
import {
  Col,
  Container,
  Form,
  Row,
  Button,
  InputGroup,
  FormControl,
  Badge,
  Image,
  Stack,
  Modal,
} from "react-bootstrap";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import {
  AudienceIcon,
  CountriesIcon,
  IntrestIcon,
  KeywordsIcon,
  ModalIcon,
} from "../../../assets/images";
import "./audienceandIntrest.css";
import SiteButton from "../../../components/Button/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faX } from "@fortawesome/free-solid-svg-icons";

const animatedComponents = makeAnimated();

export const AudienceAndInterests = ({
  handleStepChange,
  audienceAndInterestsData,
  setAudienceAndInterestsData,
  checked,
  setChecked,
  genders,
  setGenders,
  ages,
  setAges,
  interests,
  setInterests,
  keywords,
  setKeywords,
  keywordInput,
  setKeywordInput,
  selectedCountries,
  setselectedCountries,
  show,
  setShow,
  handleGenderSelect,
  handleAgeCheck,
  handleInterestCheck,
  handleKeywordAdd,
  handleKeywordRemove,
  handleCheckboxClick,
  OpenOptions,
  options,
}) => {
  const customStyles = {
    control: (provided) => ({
      ...provided,
      // Add your own styles here to customize the look of the control
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected
        ? "#dee2e6"
        : state.isFocused
        ? "#f8f9fa"
        : null,
      color: "#495057",
    }),
    multiValue: (provided) => ({
      ...provided,
      backgroundColor: "#e9ecef",
    }),
    multiValueLabel: (provided) => ({
      ...provided,
      color: "#495057",
    }),
    multiValueRemove: (provided) => ({
      ...provided,
      color: "#495057",
      ":hover": {
        backgroundColor: "#dc3545",
        color: "white",
      },
    }),
    // ... more custom styles
  };
  // COUNTRY


  return (
    <Container>
      <Row className="justify-content-between align-items-center flex-column">
        <Col xl={12}>
          <h1>Audience and interests</h1>
          <Form>
            {["checkbox"].map((type) => (
              <div key={`default-${type}`} className="mb-3">
                <Form.Check // prettier-ignore
                  type={type}
                  id={`default-${type}`}
                  // label={``}
                  label={
                    <span>
                      Automatically add the most relevant targeting for your
                      channel
                    </span>
                  }
                  checked={checked}
                  // onClick={handleCheckboxClick}
                  onChange={handleCheckboxClick}
                />
              </div>
            ))}
            {checked ? null : (
              <>
                {/* Countries dropdown */}
                <Row className="justify-content-between align-items-center flex-column">
                  <Col
                    xl={12}
                    className="justify-content-between align-items-center mb-4"
                  >
                    <div className="icon-container">
                      <Image src={CountriesIcon} height={32} width={32} />
                      <h1 className="icon-container-text">Countries</h1>
                    </div>
                    <p>
                      The number of estimated views can vary if you manually
                      choose countries
                    </p>
                    <Form.Group controlId="formCountries">
                      <Form.Label>Countries</Form.Label>
                      {/* Replace with a real dropdown component */}
                      <Select
                        components={animatedComponents}
                        isMulti
                        options={options}
                        value={selectedCountries}
                        onChange={setselectedCountries}
                        styles={customStyles}
                        placeholder="Add a country"
                      />
                    </Form.Group>
                  </Col>
                </Row>

                {/* Audience gender */}
                <Row className="justify-content-between align-items-center flex-column">
                  <Col
                    xl={12}
                    className="justify-content-between align-items-center mb-4"
                  >
                    <div className="icon-container">
                      <Image src={AudienceIcon} height={32} width={32} />
                      <h1 className="icon-container-text">Audience</h1>
                    </div>
                    <Col xl={4} lg={6} md={8} sm={10}>
                      <Form.Group className="justify-content-between gender-container">
                        <Form.Label>Gender:</Form.Label>
                        <Form.Check
                          type="radio"
                          name="gender"
                          label="All genders"
                          onChange={() => handleGenderSelect("all")}
                          checked={genders === "all"}
                        />
                        <Form.Check
                          type="radio"
                          name="gender"
                          label="Male"
                          onChange={() => handleGenderSelect("male")}
                          checked={genders === "male"}
                        />
                        <Form.Check
                          type="radio"
                          name="gender"
                          label="Female"
                          onChange={() => handleGenderSelect("female")}
                          checked={genders === "female"}
                        />
                      </Form.Group>
                    </Col>
                  </Col>
                </Row>

                {/* Audience age */}
                <Form.Group className="age-container pb-4">
                  <Form.Label>Age:</Form.Label>
                  <div className="age-options">
                    {Object.entries(ages).map(([ageRange, value]) => (
                      <Form.Check
                        key={ageRange}
                        type="checkbox"
                        label={ageRange}
                        onChange={() => handleAgeCheck(ageRange)}
                        checked={value}
                        id={`interest-${ageRange}`}
                      />
                    ))}
                  </div>
                </Form.Group>

                {/* Interests */}
                <div className="icon-container">
                  <Image src={IntrestIcon} height={32} width={32} />
                  <h1 className="icon-container-text">Interest</h1>
                </div>
                <Form.Group className="age-container pb-4">
                  <Form.Text style={{ paddingBottom: "20px" }}>
                    Please select up to 3 interests.
                  </Form.Text>
                  <div className="interest-options">
                    {[
                      "Children Education",
                      "Cookery",
                      "Music and music videos",
                      "Travelling",
                      "Buisness and carrers",
                      "Cars and tranportation",
                      "Vlogs and Interviews",
                      "Sports and fitness",
                      "Science and Technology",
                      "Construction and repair",
                      "Hobbies and Intrest",
                    ].map((interest, index) => (
                      <Form.Check
                        key={index}
                        type="checkbox"
                        // label={interest}
                        label={<p>{interest}</p>}
                        onChange={() => handleInterestCheck(interest)}
                        checked={interests.includes(interest)}
                        id={`interest-${index}`}
                      />
                    ))}
                  </div>
                </Form.Group>

                {/* Keywords */}
                <div className="icon-container">
                  <Image src={KeywordsIcon} height={32} width={32} />
                  <h1 className="icon-container-text">Keywords</h1>
                </div>
                <Form.Group>
                  {/* <Form.Label>Keywords</Form.Label> */}
                  <Form.Text style={{ paddingBottom: "20px" }}>
                    Please add up to 10 keywords or phrases that can help our
                    algorithms show your channel to people searching for similar
                    content.
                  </Form.Text>
                  <InputGroup className="mb-3 mt-3">
                    <FormControl
                      name="keyword"
                      placeholder="Enter keyword"
                      value={keywordInput}
                      onChange={(e) => setKeywordInput(e.target.value)}
                      // disabled={keywords.length > 10}
                    />
                    {/* <InputGroup.Append> */}
                    <Button
                      variant="outline-primary"
                      disabled={!keywordInput}
                      onClick={handleKeywordAdd}
                    >
                      Add
                    </Button>
                    {/* </InputGroup.Append> */}
                  </InputGroup>
                  <div className="tags-container pb-3">
                    {keywords.map((keyword, index) => (
                      <Stack
                        direction="horizontal"
                        gap={2}
                        className="tag-bubble"
                      >
                        <Badge
                          // pill
                          // variant="secondary"
                          key={index}
                          // className="mr-2"
                          className="tag-text"
                        >
                          {keyword}{" "}
                          <span
                            role="button"
                            onClick={() => handleKeywordRemove(index)}
                            className="tag-text"
                          >
                            &times;
                          </span>
                        </Badge>
                      </Stack>
                    ))}
                  </div>
                  <Form.Text>
                    For example, if you are selling women's clothes, you can add
                    keywords like skirt, women's jeans, shorts, XXL Blazer,
                    women's dress, etc.
                  </Form.Text>
                </Form.Group>
              </>
            )}
          </Form>
        </Col>
        <Row>
          <Col xl={6} md={5} className="p-4 next-btn-container">
            <SiteButton
              onClick={() => handleStepChange(2)}
              className="site-btn next-btn"
              style={{ backgroundColor: "white", color: "#139DFF" }}
            >
              Back
            </SiteButton>
          </Col>
          <Col xl={6} md={5} className="p-4 next-btn-container">
            <SiteButton
              onClick={() => handleStepChange(4)}
              className="site-btn next-btn"
            >
              Next
            </SiteButton>
          </Col>
        </Row>
      </Row>
      <ShowModal setShow={setShow} show={show} OpenOptions={OpenOptions} />
    </Container>
  );
};

const ShowModal = ({ setShow, show, OpenOptions }) => {
  const handleClose = () => setShow(false);
  return (
    <>
      <Modal show={show} onHide={handleClose} centered size="lg">
        <Modal.Body>
          <Container>
            <Row className="justify-content-around align-items-start py-3">
              <Col xl={6} lg={6} md={12} className="order1">
                <h3 className="modal-h1">
                  Prodvigate recommends to set the promotion campaign for the
                  automatic targeting
                </h3>
              </Col>
              <Col xl={4} lg={4} md={12} className="order2">
                <Image src={ModalIcon} height={150} />
                <div className="modal-cross-icon" onClick={handleClose}>
                  <FontAwesomeIcon icon={faX} size="1x" />
                </div>
              </Col>
            </Row>
            <Row className="justify-content-around align-items-center">
              <Col
                xl={11}
                lg={11}
                style={{
                  display: "flex",
                  gap: "10px",
                }}
              >
                <FontAwesomeIcon icon={faCheck} size="2x" color="#139DFF" />
                <p>
                  Automatic Targeting will use YouTube Ads Algorithm to show
                  your videos in the recommended list only to interested viewers
                  that were watching similar content worldwide.
                </p>
              </Col>
              <Col
                xl={11}
                lg={11}
                style={{
                  display: "flex",
                  gap: "10px",
                }}
              >
                <FontAwesomeIcon icon={faCheck} size="2x" color="#139DFF" />
                <p>
                  Usually the automatic target provides the best results for
                  interactions and subscribers and also brings more views than
                  the manual target.
                </p>
              </Col>
            </Row>
            <Row>
              <Col xl={6} lg={6} md={12} className="p-4 next-btn-container">
                <SiteButton
                  onClick={() => OpenOptions("Manual")}
                  className="site-btn next-btn"
                  style={{ backgroundColor: "white", color: "#139DFF" }}
                >
                  Select Manually
                </SiteButton>
              </Col>
              <Col xl={6} lg={6} md={12} className="p-4 next-btn-container">
                <SiteButton
                  onClick={() => OpenOptions("Auto")}
                  className="site-btn next-btn"
                >
                  Keep Automatic
                </SiteButton>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    </>
  );
};
