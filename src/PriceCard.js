import React from 'react';

export function PriceCard({ plan, price, features }) {
  return (
    <div className="col-lg-4 col-md-6"> {/* Column layout for larger and medium screens */}
      <div className="card col-lg-12 mb-5"> {/* Card component with margin bottom */}
        <div className="card-body"> {/* Card body for content */}
          <h5 className="card-title text-center text-muted text-uppercase">{plan}</h5> {/* Card title with plan name */}
          <span className='period_price'><h4 className="card-price text-center">${price}/month</h4></span> {/* Price display */}
          <hr /> {/*horizontal rule, it insert a thematic break or horizontal line in the content, used for separating a sections*/}
          <ul className='fa-ul'> {/* List with FontAwesome icons */}  {/* Map over features and render each one */}
            {features.map(({ feature, isEnabled }, index) => (
              <li key={index} className={isEnabled ? "" : "text-muted"}>  {/* Apply muted style if feature is disabled */}
                <span className='fa-li'> {/* FontAwesome list item prefix */}
                  <i className={`fa fa-${isEnabled ? 'check-circle-o' : 'times'}`}></i>{/* Check or times icon */}
                </span>{feature}</li>))} {/* Display feature text */}
          </ul>
          <a href="#" className="btn btn-primary btn-block text-uppercase">Button</a> {/* Button */}
        </div>
      </div>
    </div>
  );
}
