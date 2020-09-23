import React from 'react';

function Header(props) {
  return (
    <header className="row header">
      <div className="col-8">
        <h1 className="mt-5 mb-4">{props.title}</h1>
      </div>

      <div className="col average-box d-flex align-items-center justify-content-end">
        <h3>Average Grade <span className="badge badge-primary ml-2 mt-5">{props.average}</span></h3>
      </div>
    </header>
  );
}

export default Header;
