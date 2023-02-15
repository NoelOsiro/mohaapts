import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import RentDue from '../../Components/Tables/RentDue';
import { Section, Grid, Row2, Row3 } from '../../Components/globalStyles';
import { Row1 } from './houseStyles';
import Tenants from '../../Components/Tables/OcuppancyPie';
import DashAnalytics from '../DashBoard/dashAnlytics';
const Houses = () => {
  return (
    <Section>
      <Navbar title={"Spaces"} />
      <Grid>
        <Row1>
          <RentDue />
        </Row1>
        <Row2>
          
        </Row2>
        <Row3>
        <Tenants />
          <DashAnalytics />
        </Row3>
      </Grid>
    </Section>
  );
}

export default Houses;

