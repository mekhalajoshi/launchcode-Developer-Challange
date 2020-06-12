import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as quoteActions from '../redux/actions/quoteActions';

const Dashboard = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(quoteActions.getQuoteList());
  }, [dispatch]);

  const data = useSelector((state) => state.quotes);
  console.log(data);
  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
};

export default Dashboard;
