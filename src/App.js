import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Pokedex from './Components/Pokedex';
import Topheader from './Components/Topheader';
import './style.css';
import { Navbar } from 'react-bootstrap';

const App = () => {
  const [filterList, setFilterList] = useState([]);
  const [pokemonList, setPokemonList] = useState([]);
  const [typeFilter, setTypeFilter] = useState([]);
  const [weaknessesFil, setWeaknessesFil] = useState([]);

  const [filterTypeData, setFilterTypeData] = useState([]);
  const [filterWeekData, setFilterWeekData] = useState([]);

  const [selectedType, setSelectedType] = useState(null);
  const [selectedWeakness, setSelectedWeakness] = useState(null);

  useEffect(() => {
    axios
      .get(
        'https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json'
      )
      .then((res) => {
        // console.log('data', JSON.stringify(res.data));
        let listData = res.data.pokemon;
        const typeData = [];
        const weekData = [];
        listData.map((deviceObject) => {
          deviceObject.type.map(async (type) => {
            await typeData.push(type);
          });
          deviceObject.weaknesses.map(async (weaknesses) => {
            await weekData.push(weaknesses);
          });
        });
        setTypeFilter(typeData);
        setWeaknessesFil(weekData);
        setPokemonList(listData);
        setFilterList(listData);
      })
      .then((error) => {
        console.log('error', error);
      });
  }, []);

  useEffect(() => {
    if (typeFilter.length > 0) {
      let unique = typeFilter.filter((item, i, ar) => ar.indexOf(item) === i);
      setFilterTypeData(unique);
    }
  }, [typeFilter]);

  useEffect(() => {
    if (weaknessesFil.length > 0) {
      let unique = weaknessesFil.filter(
        (item, i, ar) => ar.indexOf(item) === i
      );
      setFilterWeekData(unique);
    }
  }, [weaknessesFil]);

  const onChangeType = (type) => {
    setSelectedType(type);
  };

  const onChangeWeakness = (weaknes) => {
    setSelectedWeakness(weaknes);
  };

  const clickFilterType = () => {
    let filteredType = pokemonList.filter((list) => {
      if (selectedType)
        return list.type.some((type) => {
          return type.indexOf(selectedType) !== -1;
        });
    });
    console.log('filteredType', filteredType);
  };

  const clickFilterWeak = () => {
    let filterWeakness = pokemonList.filter((list) => {
      if (selectedWeakness)
        return list.weaknesses.some((weaknesses) => {
          return weaknesses.indexOf(selectedWeakness) !== -1;
        });
    });
    console.log('filterWeakness', filterWeakness);
  };

  return (
    <div>
      <Topheader
        typeProps={filterTypeData}
        weaknessesProps={filterWeekData}
        onChangeSelect={onChangeType}
        onSelectWeakness={onChangeWeakness}
        onClickFilterType={clickFilterType}
        onClickFilterWeakpe={clickFilterWeak}
      />
      {filterList &&
        filterList.length > 0 &&
        filterList.map((list) => {
          return <Pokedex key={list.id} poemonData={list} />;
        })}
    </div>
  );
};

export default App;
