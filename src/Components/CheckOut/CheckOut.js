import React from 'react';
import './CheckOut.css';

const CheckOut = () => {
    return (
        <div>
            <div className='w-50 mx-auto border border-success p-5 mt-5 mb-5 rounded-3'>
                <form>
                    <h1 className='text-center text-primary'>Confirm Order</h1>
                    <div className="mb-3">
                        <label for="exampleInputName" className="form-label">Name</label>
                        <input type="text" className="form-control" id="exampleInputName" required />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputEmail" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputAddress" className="form-label">Address</label>
                        <input type="text" className="form-control" id="exampleInputAddress" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputMobile" className="form-label">Mobile No.</label>
                        <input type="text" className="form-control" id="exampleInputAddress" />
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" for="exampleCheck1">Accept our terms and Conditions.</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Confirm Purchase</button>
                </form>
            </div>
        </div>
    );
};

export default CheckOut;