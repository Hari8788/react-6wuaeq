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
      <nav className="navbar navbar-light bg-light">
        <form className="form-inline">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />{' '}
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>

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

        <button
          type="button"
          className="btn btn-outline-primary"
          onSubmit={onFilterBtn()}
        >
          Filter
        </button>
      </nav>
    </div>
  );
};

export default Topheader;
