import React from 'react';
// import '../style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FormSelect } from 'react-bootstrap';
const Topheader = ({
  typeProps,
  weaknessesProps,
  onChangeSelect,
  onSelectWeakness,
  onClickFilterType,
  onSearch,
  clickSearch,
}) => {
  const changeType = (value) => {
    onChangeSelect(value);
  };
  const changeWeakness = (value) => {
    onSelectWeakness(value);
  };

  const onFilterBtn = () => {
    onClickFilterType();
  };
  return (
    <div className="container">
      <h1 className="heading">Pokemens</h1>
      <div className="row">
        <nav className="navbar navbar-light bg-light">
          <div className="col-sm-4">
            <form className="form-inline">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={(e) => onSearch(e.target.value)}
              />{' '}
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="button"
                onClick={() => clickSearch()}
              >
                Search
              </button>
            </form>
          </div>
          <div className="col-sm-3">
            <FormSelect
              as="select"
              custom
              onChange={(e) => {
                changeType(e.target.value);
              }}
            >
              {typeProps.map((type, i) => {
                return (
                  <option key={i} value={type}>
                    {type}
                  </option>
                );
              })}
            </FormSelect>
          </div>
          <div className="col-sm-3">
            <FormSelect
              onChange={(e) => {
                changeWeakness(e.target.value);
              }}
            >
              {weaknessesProps.map((weaknesses, i) => {
                return (
                  <option key={i} value={weaknesses}>
                    {weaknesses}
                  </option>
                );
              })}
            </FormSelect>
          </div>
          <button
            type="button"
            className="btn btn-outline-primary"
            onClick={() => onFilterBtn()}
          >
            Filter
          </button>
        </nav>
      </div>
    </div>
  );
};

export default Topheader;
