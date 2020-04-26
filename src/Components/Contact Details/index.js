export default function ContactDetails(props) {

    return (
        <>
            <h3 className="dashTitle">Contact Details</h3>
            <form className="text-center" action="#!">
                <div className="dashDetail">
                    <div className="dashContactInfo">
                        <div className="form-row">
                            <div className="col-6">
                                <div className="md-form">
                                    <label>First name</label>
                                    <input type="text" className="form-control" value={props.firstName} readOnly/>
                                </div>
                            </div>
                            <div className="col-6">

                                <div className="md-form">
                                    <label>Last name</label>
                                    <input type="text" className="form-control" value={props.lastName} readOnly/>
                                </div>
                            </div>
                        </div>
                        <div className="form-row contactRow2">
                            <div className="col-6">
                                <div className="md-form mt-0">
                                    <label>E-mail</label>
                                    <input type="email" className="form-control" value={props.email} readOnly/>
                                </div>
                            </div>

                            <div className="col-6">
                                <div className="md-form">
                                    <label>Phone Number</label>
                                    <input type="tel" className="form-control" value={props.phone} readOnly/>
                                </div>
                            </div>
                        </div>
                        <div className="form-row contactRow2">
                            <div className="col-6">
                                <div className="md-form mt-0">
                                    <label>Address 1</label>
                                    <input type="text" className="form-control" value={props.address1} readOnly/>
                                </div>
                            </div>

                            <div className="col-6">
                                <div className="md-form">
                                    <label>Address 2</label>
                                    <input type="text" className="form-control" value={props.address2} readOnly/>
                                </div>
                            </div>
                        </div>
                        <div className="form-row contactRow2">
                            <div className="col-5">
                                <div className="md-form mt-0">
                                    <label>City</label>
                                    <input type="text" className="form-control" value={props.city} readOnly/>
                                </div>
                            </div>

                            <div className="col-2">
                                <div className="md-form">
                                    <label>State</label>
                                    <input type="text" className="form-control" value={props.state} readOnly/>
                                </div>
                            </div>
                            <div className="col-5">
                                <div className="md-form">
                                    <label>Zip</label>
                                    <input type="text" className="form-control" value={props.zip} readOnly/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="contactRow3">
                        <button type="button" className="contactButton" onClick={props.openModal}>Edit Contact Details</button>
                    </div>
                </div>
            </form>
            {props.children}
        </>
    )
}