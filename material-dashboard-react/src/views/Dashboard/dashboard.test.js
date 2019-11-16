import React from 'react'
import {render, getByText} from '@testing-library/react'
//import '@testing-library/jest-dom'
import Dashboard from './Dashboard.js'

test('Dashboard should render passed props as content body and respond to callback props', () => {
  const {getByTestId} = render(<Dashboard/>)
  const {queryAllByTestId} = render(<Dashboard/>)

  expect(queryAllByTestId('studiesTable')).toBeTruthy();
  expect(queryAllByTestId('upcomingStudies')).toBeTruthy();
  expect(getByTestId('upcomingStudies').textContent).toBe('Study IDtitletimerequirementpaymentlocationstart date/timeend date/time');
  expect(queryAllByTestId('pastStudies')).not.toBeTruthy();
})
