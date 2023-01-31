import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Accounts from '../Accounts';
import Analytics from '../Analytics';
import Payments from '../Payments';
import Profile from '../Profile';
import Tenants from '../Tenants';
import { Section, Grid, Row1, Row2, Row3 } from './dashStyles';

const Dashboard = () => {
  return (
    <Section>
      <Navbar />
      <Grid>
        <Row1>
          <Analytics />
          <Accounts />
        </Row1>
        <Row2>
          <Payments />

        </Row2>
        <Row3>
          <Tenants />
          <Analytics/>
        </Row3>
      </Grid>
    </Section>
  );
}

export default Dashboard;

