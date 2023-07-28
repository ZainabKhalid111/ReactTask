import React, { useState } from 'react'
import { Link } from 'react-scroll';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';


const User = () => {

    const [documentType, setDocumentType] = useState('');
    const [lang, setLang] = useState('');
    const [signatureLang, setSignatureLang] = useState('');
    const [city, setCity] = useState('');
    const [phoneCountryCode, setPhoneCountryCode] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [leadId, setLeadId] = useState('');
    const [leadSource, setLeadSource] = useState('');
    const [brokerId, setBrokerId] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [customerName, setCustomerName] = useState('');
    const [nationality, setNationality] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [gender, setGender] = useState('');
    const [customerIdType, setCustomerIdType] = useState('');
    const [customerId, setCustomerId] = useState('');
    const [customerType, setCustomerType] = useState('');
    
    const [activeSubTab, setActiveSubTab] = useState('basicInfo');

    const handleNext = async (e) => {
        e.preventDefault();

        // Create a Customer object with all the form data
        const customer = {
            document_type: documentType,
            lang,
            signatureLang,
            Customer: {
                city,
                phone_country_code: phoneCountryCode,
                phone_number: phoneNumber,
                email_address: emailAddress,
                lead_id: leadId,
                lead_source: leadSource,
                broker_id: brokerId,
                first_name: firstName,
                last_name: lastName,
                customer_name: customerName,
                nationality,
                date_of_birth: dateOfBirth,
                gender,
                customer_id_type: customerIdType,
                id_number: customerId,
                customer_type: customerType,
            },
        }
        console.log(customer);
        let token = sessionStorage.getItem('token'); // get the token from session storage
        try {
            // Make a POST request to your backend API with the customer data
            const response = await axios.post('https://daarconn-dev.alarkan.com/oracle/createcustomerreservation', customer,
                {
                    // send token in authorization header
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }

            );
            console.log(response.data);
            toast.success('Customer Created Successfully', { position: 'top-right' });

        } catch (error) {
            console.error(error);
            // Handle error or show an error message to the user
            toast.error(error?.response?.data?.message ?? "Customer Creation Failed!", { position: 'top-right' });
        }
    };


    return (
        <>
            <ul className="nav bg-white py-2">
                <li className="nav-item">
                    <Link
                        className={`nav-link ${activeSubTab === 'basicInfo' ? 'active' : ''}`}
                        to="basicInfo"
                        spy={true}
                        smooth={true}
                        onClick={() => setActiveSubTab('basicInfo')}
                    >
                        Basic Details
                    </Link>
                </li>
                <li className="nav-item">
                    <Link
                        className={`nav-link ${activeSubTab === 'contactInfo' ? 'active' : ''}`}
                        to="contactInfo"
                        spy={true}
                        smooth={true}
                        onClick={() => setActiveSubTab('contactInfo')}
                    >
                        Contact Details
                    </Link>
                </li>
                <li className="nav-item">
                    <Link
                        className={`nav-link ${activeSubTab === 'IDInfo' ? 'active' : ''}`}
                        to="IDInfo"
                        spy={true}
                        smooth={true}
                        onClick={() => setActiveSubTab('IDInfo')}
                    >
                        ID Details
                    </Link>
                </li>
                <li className="nav-item">
                    <Link
                        className={`nav-link ${activeSubTab === 'AdditionalInfo' ? 'active' : ''}`}
                        to="AdditionalInfo"
                        spy={true}
                        smooth={true}
                        onClick={() => setActiveSubTab('AdditionalInfo')}
                    >
                        Additional Details
                    </Link>
                </li>
            </ul>

            <div className="tab-content">
                {/* Basic Info Subtab */}
                <div id="basicInfo">
               
                <div className="accordion my-3" id="accordionBasicInfo">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="basicInfoHeading">
                            <button
                                className="accordion-button fw-bolder"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#basicInfoCollapse"
                                aria-expanded="true"
                                aria-controls="basicInfoCollapse"
                            >
                                Basic Details
                            </button>
                        </h2>
                        <div
                            id="basicInfoCollapse"
                            className="accordion-collapse collapse show"
                            aria-labelledby="basicInfoHeading"
                        >
                            <div className="accordion-body">
                                <div class="row">
                                    <div class="col-4">
                                        <div className="form-group">
                                            <label htmlFor="firstName">First Name</label>
                                            <input
                                                required
                                                type="text"
                                                className="form-control"
                                                placeholder="First Name"
                                                value={firstName}
                                                onChange={(e) => setFirstName(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div class="col-4">
                                        <div className="form-group">
                                            <label htmlFor="email">Last Name</label>
                                            <input
                                                required
                                                type="text"
                                                className="form-control"
                                                placeholder="Last Name"
                                                value={lastName}
                                                onChange={(e) => setLastName(e.target.value)}
                                            />
                                        </div>
                                    </div>

                                    <div class="col-4">
                                        <div className="form-group">
                                            <label htmlFor="customerName">Customer Name</label>
                                            <input
                                                required
                                                type="text"
                                                className="form-control"
                                                placeholder="Customer Name"
                                                value={customerName}
                                                onChange={(e) => setCustomerName(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="form-group">
                                            <label htmlFor="DOB">Date of Birth</label>
                                            <input
                                                type="date"
                                                className="form-control"
                                                placeholder="Date of Birth"
                                                value={dateOfBirth}
                                                onChange={(e) => setDateOfBirth(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-4"><div className="form-group">
                                        <label htmlFor="gender">Gender</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Gender"
                                            value={gender}
                                            onChange={(e) => setGender(e.target.value)}
                                        />
                                    </div></div>
                                    <div className="col-4">
                                        <div className="form-group">
                                            <label htmlFor='city'>City</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder='City'
                                                value={city}
                                                onChange={(e) => setCity(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="form-group">
                                            <label htmlFor="nationality">Nationality</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Nationality"
                                                value={nationality}
                                                onChange={(e) => setNationality(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="form-group">
                                            <label htmlFor="customerType">Customer Type</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Customer Type"
                                                value={customerType}
                                                onChange={(e) => setCustomerType(e.target.value)}
                                            />
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Info Subtab */}
                <div  id="contactInfo">
            
                <div className="accordion my-3" id="accordionContactInfo">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="contactInfoHeading">
                            <button
                                className="accordion-button"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#contactInfoCollapse"
                                aria-expanded="true"
                                aria-controls="contactInfoCollapse"
                            >
                                Contact Details
                            </button>
                        </h2>
                        <div
                            id="contactInfoCollapse"
                            className="accordion-collapse collapse show"
                            aria-labelledby="contactInfoHeading"
                        >
                            <div className="accordion-body">
                                {/* fields for Contact Info  */}
                                <div class="row">
                                    <div class="col-4">
                                        <div className="form-group">
                                            <label htmlFor='country code'>Country Code</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder='Country code'
                                                value={phoneCountryCode}
                                                onChange={(e) => setPhoneCountryCode(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div class="col-4">
                                        <div className="form-group">
                                            <label htmlFor="nationality">Phone Number</label>
                                            <input
                                                type="phone"
                                                className="form-control"
                                                placeholder="Phone Number"
                                                value={phoneNumber}
                                                onChange={(e) => setPhoneNumber(e.target.value)}
                                            />
                                        </div>
                                    </div>

                                    <div class="col-4">
                                        <div className="form-group">
                                            <label htmlFor="email">Email</label>
                                            <input
                                                required
                                                type="email"
                                                className="form-control"
                                                placeholder="Email"
                                                value={emailAddress}
                                                onChange={(e) => setEmailAddress(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ID Info Subtab */}
                <div  id="IDInfo">
            
                <div className="accordion my-3" id="accordionIDInfo">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="IDInfoHeading">
                            <button
                                className="accordion-button"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#IDInfoCollapse"
                                aria-expanded="true"
                                aria-controls="IDInfoCollapse"
                            >
                                ID Details
                            </button>
                        </h2>
                        <div
                            id="IDInfoCollapse"
                            className="accordion-collapse collapse show"
                            aria-labelledby="IDInfoHeading"
                        >
                            <div className="accordion-body">
                                {/* Add fields for ID Info here */}
                                <div class="row">
                                    <div className="col-4"><div className="form-group">
                                        <label htmlFor="customer-id">Customer Id</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Customer Id"
                                            value={customerId}
                                            onChange={(e) => setCustomerId(e.target.value)}
                                        />

                                    </div></div>
                                    <div class="col-4">
                                        <div className="form-group">
                                            <label htmlFor="customerIDType">Customer ID Type</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Customer ID Type"
                                                value={customerIdType}
                                                onChange={(e) => setCustomerIdType(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div class="col-4">
                                        <div className="form-group">
                                            <label htmlFor='language'>Lead Id</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder='Lead Id'
                                                value={leadId}
                                                onChange={(e) => setLeadId(e.target.value)}
                                            />
                                        </div>
                                    </div>

                                    <div class="col-4">
                                        <div className="form-group">
                                            <label htmlFor="brokerId">Broker Id</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Broker Id"
                                                value={brokerId}
                                                onChange={(e) => setBrokerId(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* additional info tab */}
                <div id="AdditionalInfo">
               
                <div className="accordion my-3" id="accordionAdditionalInfo">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="AdditionalInfoHeading">
                            <button
                                className="accordion-button"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#AdditionalInfoCollapse"
                                aria-expanded="true"
                                aria-controls="AdditionalInfoCollapse"
                            >
                                Additional Details
                            </button>
                        </h2>
                        <div
                            id="AdditionalInfoCollapse"
                            className="accordion-collapse collapse show"
                            aria-labelledby="AdditionalInfoHeading"
                        >
                            <div className="accordion-body">
                              
                                <div class="row">
                                    <div className="col-4">
                                        <div className="form-group">
                                            <label htmlFor="sign-lang">Signature Language</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Signature Language"
                                                value={signatureLang}
                                                onChange={(e) => setSignatureLang(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div class="col-4">
                                        <div className="form-group">
                                            <label htmlFor='language'>Language</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder='Language'
                                                value={lang}
                                                onChange={(e) => setLang(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div class="col-4">
                                        <div className="form-group">
                                            <label htmlFor='document-type'>Document Type</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder='Document type'
                                                value={documentType}
                                                onChange={(e) => setDocumentType(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="form-group">
                                            <label htmlFor="lead source">Lead Source</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Lead Source"
                                                value={leadSource}
                                                onChange={(e) => setLeadSource(e.target.value)}
                                            />
                                        </div>
                                    </div>

                                </div>

                            </div>
                            </div>
                        </div>
                    </div>
                </div>

                <button className='btn btn-primary px-4 py-2 mx-4 ' onClick={handleNext}>Next</button>
            </div>
        </>
    )
}

export default User