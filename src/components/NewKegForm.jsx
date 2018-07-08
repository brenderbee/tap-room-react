import React from 'react';

function NewKegForm() {
  let _name = null;
  let _brewer = null;
  let _abv = null;
  let _price = null;
  let _description = null;

  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    console.log(_name);
    console.log(_brewer);
    console.log(_abv);
    console.log(_price);
    console.log(_description);
  }

  return(
    <div>
      <div className="content">
        <form onSubmit={handleNewKegFormSubmission}>
          <h2>Add New Keg</ h2>
          <div className="form-group">
            <label for="brewer">Brewer</label><br/>
            <input
              type="text"
              className="form-control"
              id="brewer"
              ref={(input) => {_brewer = input;}}
              placeholder="enter brewer name"
            />
          </div>
          <div className="form-group">
            <label for="name">Beer Name</label><br/>
            <input
              type="text"
              className="form-control"
              id="name"
              ref={(input) => {_name = input;}}
              placeholder="enter beer name"
            />
          </div>
          <div className="form-group">
            <label for="abv">ABV</label><br/>
            <input
              type="text"
              className="form-control"
              id="beer"
              ref={(input) => {_abv = input;}}
              placeholder="enter ABV content"
            />
          </div>
          <div className="form-group">
            <label for="desc">description</label><br/>
            <input
              type="text"
              className="form-control"
              id="desc"
              ref={(input) => {_description = input;}}
              placeholder="enter beer description"
            />
          </div>
          <div className="form-group">
            <label for="price">price</label><br/>
            <input
              type="text"
              className="form-control"
              id="price"
              ref={(input) => {_price = input;}}
              placeholder="enter price"
            />
          </div>
          <button>Add Keg</button>
        </form>
      </div>
      <style jsx>
        {`
          button {
            background: red;
            B
          }

          label {
            text-transform: uppercase;
          }

          input {
            margin-top: 0.375rem;
          }

          form {
            padding: 1.6rem;
          }

          .content {
            border: 2px solid white;
            border-radius: 10px;
            margin: 0 auto;
          }
          .form-control {
            display: block;
            width: 90%;
            padding: 0.375rem 0.75rem;
            font-size: 1rem;
            line-height: 1.5;
            color: #495057;
            background-color: #fff;
            background-clip: padding-box;
            border: 1px solid #ced4da;
            border-radius: 0.25rem;
            transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
          }

          .form-control::-ms-expand {
            background-color: transparent;
            border: 0;
          }

          .form-control:focus {
            color: #495057;
            background-color: #fff;
            border-color: #80bdff;
            outline: 0;
            box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
          }

          .form-control::-webkit-input-placeholder {
            color: #6c757d;
            opacity: 1;
          }

          .form-control::-moz-placeholder {
            color: #6c757d;
            opacity: 1;
          }

          .form-control:-ms-input-placeholder {
            color: #6c757d;
            opacity: 1;
          }

          .form-control::-ms-input-placeholder {
            color: #6c757d;
            opacity: 1;
          }

          .form-control::placeholder {
            color: #6c757d;
            opacity: 1;
          }

          .form-control:disabled, .form-control[readonly] {
            background-color: #e9ecef;
            opacity: 1;
          }

          .form-group {
            margin-bottom: 1rem;
          }

          button {
            margin-right: 1rem;
            border: none;
            transition: background 0.3s ease;
            background: #8256fd;
            border-radius: 10px;
          }

          button:hover {
            background: green;
            cursor: pointer;
          }

        `}
      </style>
    </div>
  );
}

export default NewKegForm;
