import { Modal } from 'react-bootstrap';

export default function ContactModal(props) {

    return (
        <div className='modal-div'>
            <Modal size='lg' show={props.openModal} onHide={props.closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Contact Details</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <form className="text-center" action="#!">
                        <div className="modal-detail">
                            <div className="modal-contactInfo">
                                <div className="form-row">
                                    <div className="col-6">
                                        <div className="md-form">
                                            <label>First name</label>
                                            <input type="text" className="form-control" value={props.firstName} onChange={props.firstNameOnChange}/>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="md-form">
                                            <label>Last name</label>
                                            <input type="text" className="form-control" value={props.lastName} onChange={props.lastNameOnChange}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-row contactRow2">
                                    <div className="col-6">
                                        <div className="md-form mt-0">
                                            <label>E-mail</label>
                                            <input type="email" className="form-control" value={props.email} onChange={props.emailOnChange}/>
                                        </div>
                                    </div>

                                    <div className="col-6">
                                        <div className="md-form">
                                            <label>Phone Number</label>
                                            <input type="phoneNumber" className="form-control" value={props.phone} onChange={props.phoneOnChange}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-row contactRow2">
                                    <div className="col-6">
                                        <div className="md-form mt-0">
                                            <label>Address 1</label>
                                            <input type="text" className="form-control" value={props.address1} onChange={props.address1OnChange}/>
                                        </div>
                                    </div>

                                    <div className="col-6">
                                        <div className="md-form">
                                            <label>Address 2</label>
                                            <input type="text" className="form-control" value={props.address2} onChange={props.address2OnChange}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-row contactRow2">
                                    <div className="col-5">
                                        <div className="md-form mt-0">
                                            <label>City</label>
                                            <input type="text" className="form-control" value={props.city} onChange={props.cityOnChange}/>
                                        </div>
                                    </div>
                                    <div className="col-2">
                                        <div className="md-form">
                                            <label>State</label>
                                            <input type="text" className="form-control" value={props.state} onChange={props.stateOnChange}/>
                                        </div>
                                    </div>
                                    <div className="col-5">
                                        <div className="md-form">
                                            <label>Zip</label>
                                            <input type="text" className="form-control" value={props.zip} onChange={props.zipOnChange}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="contactRow3">
                                <button type="submit" className="contactButton" onClick={props.contactUpdate}>Save Contact Details</button>
                            </div>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        </div>
    )
}