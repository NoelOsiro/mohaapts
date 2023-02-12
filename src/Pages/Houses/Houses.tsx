import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import RentDue from '../../Components/Tables/RentDue';
import { Section, Grid, Row1, Row2, Row3 } from '../../Components/globalStyles';
const Houses = () => {
  return (
    <Section>
      <Navbar />
      <Grid>
        <Row1>
        <RentDue/>
        </Row1>
        <Row2>
          
        </Row2>
        <Row3>
          
        </Row3>
      </Grid>
    </Section>
  );
}

export default Houses;

