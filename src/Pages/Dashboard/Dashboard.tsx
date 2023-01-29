import React from 'react';
import styled from 'styled-components';
import Navbar from '../../Components/Navbar/Navbar';
import Accounts from '../Accounts';
import Analytics from '../Analytics';
import Payments from '../Payments';
import Profile from '../Profile';
import Tenants from '../Tenants';
import { Section,Grid, Row1, Row2 } from './dashStyles';

const Dashboard=() =>{
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
          <Tenants />
          <Profile />
        </Row2>
      </Grid>
    </Section>
  );
}

export default Dashboard;

