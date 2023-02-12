import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Earnings from '../../Components/Charts/EarningsGraph';
import DashAnalytics from './dashAnlytics';
import RentDue from '../../Components/Tables/RentDue';
import Profile from '../Profile';
import Tenants from '../../Components/Tables/OcuppancyPie';
import { Section, Grid, Row1, Row2, Row3 } from '../../Components/globalStyles';

const Dashboard = () => {
  return (
    <Section>
      <Navbar />
      <Grid>
        <Row1>
          <DashAnalytics />
          <Earnings/>
        </Row1>
        <Row2>
          <RentDue/>
        </Row2>
        <Row3>
          <Tenants />
          <DashAnalytics/>
        </Row3>
      </Grid>
    </Section>
  );
}

export default Dashboard;

