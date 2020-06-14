import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { RouteWithLayout } from './route';
import { Main as MainLayout } from './layouts';

import {
  Dashboard as DashboardView,
  Invoices as InvoicesView,
  Tours as ToursView,
  Analytics as AnalyticsView,
  Leads as LeadsView,
  Quotes as QuotesView,
  Support as SupportView,
  Team as TeamView,
  Admin as AdminView,
  NotFound as NotFoundView
} from './views';

const Routes = () => {
  return (
    <Switch>
      <Redirect
        exact
        from="/"
        to="/dashboard"
      />
      <RouteWithLayout
        component={DashboardView}
        exact
        layout={MainLayout}
        path="/dashboard"
      />
      <RouteWithLayout
        component={QuotesView}
        exact
        layout={MainLayout}
        path="/quotes"
      />
      <RouteWithLayout
        component={ToursView}
        exact
        layout={MainLayout}
        path="/tours"
      />
      <RouteWithLayout
        component={LeadsView}
        exact
        layout={MainLayout}
        path="/leads"
      />
      <RouteWithLayout
        component={InvoicesView}
        exact
        layout={MainLayout}
        path="/invoices"
      />
      <RouteWithLayout
        component={AnalyticsView}
        exact
        layout={MainLayout}
        path="/analytics"
      />
      <RouteWithLayout
        component={SupportView}
        exact
        layout={MainLayout}
        path="/support"
      />
      <RouteWithLayout
        component={TeamView}
        exact
        layout={MainLayout}
        path="/team"
      />
      <RouteWithLayout
        component={AdminView}
        exact
        layout={MainLayout}
        path="/admin"
      />
      <RouteWithLayout
        component={NotFoundView}
        exact
        layout={MainLayout}
        path="/not-found"
      />
      <Redirect to="/not-found" />
    </Switch>
  );
};

export default Routes;
