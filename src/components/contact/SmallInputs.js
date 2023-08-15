import React, { Fragment } from "react";

const SmallInputs = () => {
  return (
    <Fragment>
      <div className="col-md-6">
        <label htmlFor="inputEmail4" className="form-label">
          Name
        </label>
        <input type="text" className="form-control" id="inputName4" />
      </div>
      <div className="col-md-6">
        <label htmlFor="inputEmail4" className="form-label">
          Email
        </label>
        <input type="email" className="form-control" id="inputEmail4" />
      </div>

      <div className="col-md-6">
        <label htmlFor="inputAddress" className="form-label">
          Address
        </label>
        <input
          type="text"
          className="form-control"
          id="inputAddress"
          placeholder="1234 Main St"
        />
      </div>
      <div className="col-md-6">
        <label htmlFor="inputAddress2" className="form-label">
          Address 2
        </label>
        <input
          type="text"
          className="form-control"
          id="inputAddress2"
          placeholder="Apartment, studio, or floor"
        />
      </div>
      <div className="col-md-6">
        <label htmlFor="inputCity" className="form-label">
          City
        </label>
        <input type="text" className="form-control" id="inputCity" />
      </div>
      <div className="col-md-6">
        <label htmlFor="inputCity" className="form-label">
          Age
        </label>
        <input type="number" className="form-control" id="inputCity" />
      </div>
    </Fragment>
  );
};

export default SmallInputs;
