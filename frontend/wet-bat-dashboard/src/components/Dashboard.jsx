import React from 'react';
import QuoteList from './QuoteList';
import QuotesForm from './QuotesForm';

const Dashboard = () => (
  <div>
    <h1>Dashboard</h1>
    <QuotesForm />
    <QuoteList />
  </div>
);

export default Dashboard;
