import React, { useState } from 'react'
import { Link } from 'react-scroll';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';


const Reservation = () => {
    // reservation data
    const [registrationId, setRegistrationId] = useState('');
    const [orgId, setOrgId] = useState('');
    const [registrationDate, setRegistrationDate] = useState('');
    const [status, setStatus] = useState('');
    const [downPaymentAmount, setDownPaymentAmount] = useState('');
    const [paymentTypeId, setPaymentTypeId] = useState('');
    const [totalUnitPrice, setTotalUnitPrice] = useState('');
    const [saleableAreaSqm, setSaleableAreaSqm] = useState('');
    const [VATRETTAmount, setVATRETTAmount] = useState('');
    const [brokerId, setBrokerId] = useState('');
    const [salesrepId, setSalesrepId] = useState('');
    const [releaseId, setReleaseId] = useState('');
    const [buildingLandId, setBuildingLandId] = useState('');
    const [floorParcelId, setFloorParcelId] = useState('');
    const [receiptNumber, setReceiptNumber] = useState('');
    const [paymentTerm, setPaymentTerm] = useState('');
    const [mortgageEmployeeName, setMortgageEmployeeName] = useState('');
    const [mortgageEmployeeContact, setMortgageEmployeeContact] = useState('');
    const [RETTVATExemption, setRETTVATExemption] = useState('');
    const [RETTVATReimbursementCertificateNumber, setRETTVATReimbursementCertificateNumber] = useState('');


    const [activeSubTab, setActiveSubTab] = useState('basicInfo');

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Create a Reservation object with all the form data
        const reservation = {
            registration_id: registrationId,
            org_id: orgId,
            registration_date: registrationDate,
            status,
            broker_id: brokerId,
            down_payment_amount: downPaymentAmount,
            payment_type_id: paymentTypeId,
            total_unit_price: totalUnitPrice,
            saleable_area_sqm: saleableAreaSqm,
            VAT_RETT_Amount: VATRETTAmount,
            salesrep_id: salesrepId,
            release_id: releaseId,
            building_land_id: buildingLandId,
            floor_parcel_id: floorParcelId,
            receipt_number: receiptNumber,
            payment_term: paymentTerm,
            Mortgage_Employee_name: mortgageEmployeeName,
            Mortgage_Employee_contact: mortgageEmployeeContact,
            RETT_VAT_Exemption: RETTVATExemption,
            RETT_VAT_Reimbursement_Certificate_Number: RETTVATReimbursementCertificateNumber,
        };
        let token = sessionStorage.getItem('token'); // get the token from session storage
        try {
            // Make a POST request to your backend API with the reservation data
            const response = await axios.post('https://daarconn-dev.alarkan.com/oracle/createcustomerreservation', reservation,
                {
                    // send token in authorization header
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
            console.log(response.data);
            toast.success('Reservation Reserved Successfully!', { position: 'top-right' });
        } catch (error) {
            console.error(error);
            toast.error(error?.response?.data?.message ?? "Something Went wrong Please try again!", { position: 'top-right' });
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
                        className={`nav-link ${activeSubTab === 'PaymentInfo' ? 'active' : ''}`}
                        to="PaymentInfo"
                        spy={true}
                        smooth={true}
                        onClick={() => setActiveSubTab('PaymentInfo')}
                    >
                        Payment Details
                    </Link>
                </li>
                <li className="nav-item">
                    <Link
                        className={`nav-link ${activeSubTab === 'IDdetails' ? 'active' : ''}`}
                        to="IDdetails"
                        spy={true}
                        smooth={true}
                        onClick={() => setActiveSubTab('IDdetails')}
                    >
                        ID Details
                    </Link>
                </li>
                <li className="nav-item">
                    <Link
                        className={`nav-link ${activeSubTab === 'AdditionalDetails' ? 'active' : ''}`}
                        to="AdditionalDetails"
                        spy={true}
                        smooth={true}
                        onClick={() => setActiveSubTab('AdditionalDetails')}
                    >
                        Additional Details
                    </Link>
                </li>
            </ul>
        

            <div className="tab-content">
                {/* Basic Info Subtab */}
                <div  id="basicInfo">       
                    <div className="accordion my-3" id="accordionBasicInfo">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="basicInfoHeading">
                                <button
                                    className="accordion-button"
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
                                                <label htmlFor="regId">Registeration ID</label>
                                                <input
                                                    required
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Registeration ID"
                                                    value={registrationId}
                                                    onChange={(e) => setRegistrationId(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <div class="col-4">
                                            <div className="form-group">
                                                <label htmlFor="regDate">Registeration Date</label>
                                                <input
                                                    type="Registeration Date"
                                                    className="form-control"
                                                    placeholder="Registeration Date"
                                                    value={registrationDate}
                                                    onChange={(e) => setRegistrationDate(e.target.value)}
                                                />
                                            </div>
                                        </div>

                                        <div class="col-4">
                                            <div className="form-group">
                                                <label htmlFor="orgId">Organization Id</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Organization Id"
                                                    value={orgId}
                                                    onChange={(e) => setOrgId(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="form-group">
                                                <label htmlFor="status">Status</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Status"
                                                    value={status}
                                                    onChange={(e) => setStatus(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Payment Info Subtab */}
                <div id="PaymentInfo">
                <div className="accordion my-3" id="accordionPaymentInfo">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="PaymentInfoHeading">
                            <button
                                className="accordion-button"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#PaymentInfoCollapse"
                                aria-expanded="true"
                                aria-controls="PaymentInfoCollapse"
                            >
                                Payment Details
                            </button>
                        </h2>
                        <div
                            id="PaymentInfoCollapse"
                            className="accordion-collapse collapse show"
                            aria-labelledby="PaymentInfoHeading"
                        >
                            <div className="accordion-body">
                     
                                <div class="row">
                                    <div class="col-4">
                                        <div className="form-group">
                                            <label htmlFor="Pay-type-id">Payment Type Id</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Payment Type Id"
                                                value={paymentTypeId}
                                                onChange={(e) => setPaymentTypeId(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div class="col-4">
                                        <div className="form-group">
                                            <label htmlFor='paymentTerm'>Payment Term</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder='Payment Term'
                                                value={paymentTerm}
                                                onChange={(e) => setPaymentTerm(e.target.value)}
                                            />
                                        </div>
                                    </div>

                                    <div class="col-4">
                                        <div className="form-group">
                                            <label htmlFor="down-payAmount">Down Payment Amount</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Down Payment Amount"
                                                value={downPaymentAmount}
                                                onChange={(e) => setDownPaymentAmount(e.target.value)}
                                            />

                                        </div>
                                    </div>

                                    <div className="col-4">
                                        <div className="form-group">
                                            <label htmlFor="TUnitprice">Total Unit Price</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Total Unit Price"
                                                value={totalUnitPrice}
                                                onChange={(e) => setTotalUnitPrice(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="form-group">
                                            <label htmlFor="receipt_no">Receipt Number</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Receipt Number"
                                                value={receiptNumber}
                                                onChange={(e) => setReceiptNumber(e.target.value)}
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
                <div  id="IDdetails">
                <div className="accordion my-3" id="accordionIDdetails">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="IDdetailsHeading">
                            <button
                                className="accordion-button"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#IDdetailsCollapse"
                                aria-expanded="true"
                                aria-controls="IDdetailsCollapse"
                            >
                                ID Details
                            </button>
                        </h2>
                        <div
                            id="IDdetailsCollapse"
                            className="accordion-collapse collapse show"
                            aria-labelledby="IDdetailsHeading"
                        >
                            <div className="accordion-body">
                                {/* Add fields for ID Info here */}
                                <div class="row">
                                    <div class="col-4">
                                        <div className="form-group">
                                            <label htmlFor="rep_id">Sales Representative Id</label>
                                            <input
                                                type="phone"
                                                className="form-control"
                                                placeholder="Sales Representative Id"
                                                value={salesrepId}
                                                onChange={(e) => setSalesrepId(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div class="col-4">
                                        <div className="form-group">
                                            <label htmlFor="landi">Building Land Id</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Building Land Id"
                                                value={buildingLandId}
                                                onChange={(e) => setBuildingLandId(e.target.value)}
                                            />
                                        </div>
                                    </div>

                                    <div class="col-4">
                                        <div className="form-group">
                                            <label htmlFor='releaseId'>Release Id</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder='Release Id'
                                                value={releaseId}
                                                onChange={(e) => setReleaseId(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="form-group">
                                            <label htmlFor='flr-parcel-id'>Floor Parcel Id</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder='Floor Parcel Id'
                                                value={floorParcelId}
                                                onChange={(e) => setFloorParcelId(e.target.value)}
                                            />
                                        </div>
                                    </div>

                                </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* additional info sub tab */}
                <div id="AdditionalDetails">   
                <div className="accordion my-3" id="accordionAdditionalDetails">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="AdditionalDetailsHeading">
                            <button
                                className="accordion-button"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#AdditionalDetailsCollapse"
                                aria-expanded="true"
                                aria-controls="AdditionalDetailsCollapse"
                            >
                                Additional Details
                            </button>
                        </h2>
                        <div
                            id="AdditionalDetailsCollapse"
                            className="accordion-collapse collapse show"
                            aria-labelledby="AdditionalDetailsHeading"
                        >
                            <div className="accordion-body">
                    
                                <div class="row">
                                    <div className="col-4"><div className="form-group">
                                        <label htmlFor="Mortgage-emp-name">Mortgage Employee Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Mortgage Employee Name"
                                            value={mortgageEmployeeName}
                                            onChange={(e) => setMortgageEmployeeName(e.target.value)}
                                        />
                                    </div></div>
                                    <div class="col-4">
                                        <div className="form-group">
                                            <label htmlFor='VATRETT-Amount'>VAT RETT Amount</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder='VAT RETT Amount'
                                                value={VATRETTAmount}
                                                onChange={(e) => setVATRETTAmount(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div class="col-4">
                                        <div className="form-group">
                                            <label htmlFor='saleable-area'>Saleable Area</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder='Saleable Area'
                                                value={saleableAreaSqm}
                                                onChange={(e) => setSaleableAreaSqm(e.target.value)}
                                            />
                                        </div>
                                    </div>

                                    <div class="col-4">
                                        <div className="form-group">
                                            <label htmlFor='releaseId'>Release Id</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder='Release Id'
                                                value={releaseId}
                                                onChange={(e) => setReleaseId(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="form-group">
                                            <label htmlFor='MortgageContact'>Mortgage Employee Contact</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder='Mortgage Employee Contact'
                                                value={mortgageEmployeeContact}
                                                onChange={(e) => setMortgageEmployeeContact(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="form-group">
                                            <label htmlFor='Reimbur_cer'>RETVATT Reimbursment Certificate Number</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder='Reimbursment Certificate Number'
                                                value={RETTVATReimbursementCertificateNumber}
                                                onChange={(e) => setRETTVATReimbursementCertificateNumber(e.target.value)}
                                            />
                                        </div>
                                    </div>

                                    <div className="col-4">
                                        <div className="form-group">
                                            <label htmlFor="Mortgage-emp-name">RETT VAT Exemption</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="RETT VAT Exemption"
                                                value={RETTVATExemption}
                                                onChange={(e) => setRETTVATExemption(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <button className='btn btn-primary px-4 py-2   mx-4' onClick={handleSubmit} >Sumbit</button>
            </div>
        </>
    )
}

export default Reservation