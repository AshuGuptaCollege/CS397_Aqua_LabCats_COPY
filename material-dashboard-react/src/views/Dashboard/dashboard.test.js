import React from 'react'
import {render, getByText} from '@testing-library/react'
//import '@testing-library/jest-dom'
import Dashboard from './Dashboard.js'

test('Dashboard should render without error and display proper elements', () => {
  const {queryAllByTestId} = render(<Dashboard/>)

  expect(queryAllByTestId('studiesTable')).toBeTruthy();
  expect(queryAllByTestId('upcomingStudies')).toBeTruthy();
  expect(queryAllByTestId('pastStudies')).not.toBeTruthy();
})

test('Dashboard should have proper text', () => {
  const {getByTestId} = render(<Dashboard/>)

  expect(getByTestId('upcomingStudies').textContent).toBe('Study IDtitletimerequirementpaymentlocationstart date/timeend date/time');
})
