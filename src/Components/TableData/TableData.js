import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Table } from 'antd';
import { CountrySearch } from './CountrySearch';
import { setData } from '../../redux/actionCreators';
const TableData = (props) => {
  const datasets = useSelector((state) => state?.covidData?.data)
  const [search, setSearch] = useState(datasets);
  const dispatch = useDispatch();
  const columns = [
    {
      title: 'Country',
      render: (value) => value.country,
      sorter: {
        compare: (a, b) => a.country.localeCompare(b.country)
      },
    },
    {
      title: 'Population',
      render: (value) => value.population,
      sorter: (a, b) => a.population - b.population
    },
    {
      title: 'Tests',
      render: (value) => value.tests,
      sorter: (a, b) => a.tests - b.tests
    },
    {
      title: 'Total Cases',
      render: (value) => value.cases,
      sorter: (a, b) => a.cases - b.cases
    },
    {
      title: 'Active',
      render: (value) => value.active,
      sorter: (a, b) => a.active - b.active
    },
    {
      title: 'Critical',
      render: (value) => value.critical,
      sorter: (a, b) => a.critical - b.critical
    },
    {
      title: 'Deaths',
      render: (value) => value.deaths,
      sorter: (a, b) => a.deaths - b.deaths
    },
    {
      title: 'Recovered',
      render: (value) => value.recovered,
      sorter: (a, b) => a.recovered - b.recovered
    },
    {
      title: 'Today Cases',
      render: (value) => value.todayCases,
      sorter: (a, b) => a.todayCases - b.todayCases
    },
    {
      title: 'Today Deaths',
      render: (value) => value.todayDeaths,
      sorter: (a, b) => a.todayDeaths - b.todayDeaths
    },
    {
      title: 'Today Recovered',
      render: (value) => value.todayRecovered,
      sorter: (a, b) => a.todayRecovered - b.todayRecovered
    }
  ];
  function onChange(pagination, filters, sorter, extra) {
    // console.log('params', pagination, filters, sorter, extra);
  }

  const handleSearch = searchText => {
    const filteredEvents = datasets?.filter(({ country }) => {
      country = country.toLowerCase();
      return country.includes(searchText);
    });

    dispatch(
      setData({
        covidData: filteredEvents
      })
    );
    setSearch(filteredEvents)
  };
  
  return (
    <>
      <div className="row mx-0">
        <div className="col-11 mx-auto pt-3">
          <h6 className='font-weight-bold my-3'>Covid-19 Data of All Countries</h6>
          <CountrySearch onSearch={handleSearch} />
          <Table columns={columns} bordered dataSource={search?.length === 0 ? datasets : search} onChange={onChange} className="mt-3 table-responsive" />
        </div>
      </div>
    </>
  )
}

export default TableData;