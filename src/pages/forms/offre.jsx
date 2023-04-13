/**
    * @description      : 
    * @author           : belgacem
    * @group            : 
    * @created          : 12/04/2023 - 00:48:18
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 12/04/2023
    * - Author          : belgacem
    * - Modification    : 
**/
import React from 'react';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCardTitle,
    MDBIcon,
} from "mdb-react-ui-kit";


const Offre = () => {
    return (
        <div>



            <MDBContainer fluid className="my-5">
                <MDBRow className="justify-content-center">
                    <MDBCol md="6">
                        <MDBCard className="text-black">
                            <MDBIcon fab icon="apple" size="lg" className="px-3 pt-3 pb-2" />
                            <MDBCardImage
                                src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80"
                                position="top"
                                alt="Apple Computer"
                            />
                            <MDBCardBody>
                                <div className="text-center">
                                    <MDBCardTitle>Offre</MDBCardTitle>
                                    {/* <p className="text-muted mb-4">Apple pro display XDR</p> */}
                                </div>
                                <div>
                                    {/* <div className="d-flex justify-content-between">
                                        <span>Pro Display XDR</span>
                                        <span>$5,999</span>
                                    </div> */}
                                    {/* <div className="d-flex justify-content-between">
                                        <span>Pro stand</span>
                                        <span>$999</span>
                                    </div> */}
                                    <div className="d-flex justify-content-between">
                                        <span>3 book</span>
                                        <span>- 10%</span>
                                    </div>
                                </div>
                                {/* <div className="d-flex justify-content-between total font-weight-bold mt-4">
                                    <span>Total</span>
                                    <span>$7,197.00</span>
                                </div> */}
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>


        </div>
    );
}

export default Offre;
