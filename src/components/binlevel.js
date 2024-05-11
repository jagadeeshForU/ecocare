import React, { useEffect, useState } from 'react';
import { getBinLevel } from './api';
import Navigation from './Navigation/Navigation';
const BinLevel = () => {
  const [binLevel, setBinLevel] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    // const fetchBinLevel = async () => {
    //   try {
    //     const data = await getBinLevel();
    //     setBinLevel(data);
    //   } catch (error) {
    //     setError('Failed to fetch bin level data. Please try again later.');
    //   } finally {
    //     setLoading(false);
    //   }
    // };

    // fetchBinLevel();
  }, []);

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  // if (error) {
  //   return <div>{error}</div>;
  // }

  return (
    <>
    <Navigation></Navigation>
    <div >
      <h2>Bin Level Indication</h2>
      {binLevel ? (
        <div>
          <p>Current bin level: {binLevel}</p>
          
        </div>
      ) : (
        <h4>80% of the bin is full</h4>
      )}
    </div>
    </>
  );
};

export default BinLevel;
