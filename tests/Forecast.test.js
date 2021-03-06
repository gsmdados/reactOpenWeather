import React from 'react';
import snapshot from 'check-snapshot';
import Forecast from '../src/js/components/Forecast';
import { mappedForecast } from './fixtures/openweather/forecast';

describe('Forecast', () => {
  test('should render the Forecast component', () => {
    const labels = {
      temperature: 'F',
      windSpeed: 'km/h',
    };
    snapshot(
      <Forecast unitsLabels={labels} forecast={mappedForecast} theme={{}} />,
    );
  });
});
