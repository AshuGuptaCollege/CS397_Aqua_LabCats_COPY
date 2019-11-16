import React from 'react'
import {render, getByText} from '@testing-library/react'
//import '@testing-library/jest-dom'
import Dashboard from './Dashboard.js'

test('Dashboard should render passed props as content body and respond to callback props', () => {
  const {getByTestId} = render(<Dashboard/>)
  const {queryByTestId} = render(<Dashboard/>)

  expect(queryByTestId('studiesTable')).toBeTruthy();
  expect(queryByTestId('upcomingStudies')).toBeTruthy();
  expect(getByTestId('upcomingStudies').textContent).toBe('Study IDtitletimerequirementpaymentlocationstart date/timeend date/time');
  expect(queryByTestId('pastStudies')).not.toBeTruthy();
})
