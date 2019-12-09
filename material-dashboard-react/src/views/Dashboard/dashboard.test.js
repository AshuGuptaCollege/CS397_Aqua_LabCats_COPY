import React from 'react'
import {render, getByText, fireEvent} from '@testing-library/react'
//import '@testing-library/jest-dom'
import Dashboard from './Dashboard.js'

test('Dashboard should render without error and display proper elements', () => {
  const {queryByTestId} = render(<Dashboard/>)

  expect(queryByTestId('studiesTable')).toBeTruthy();
  expect(queryByTestId('upcomingStudies')).toBeTruthy();
  expect(queryByTestId('pastStudies')).toBeNull();
})

test('Dashboard should have proper text', () => {
  const {getByTestId} = render(<Dashboard/>)

  expect(getByTestId('upcomingStudies').textContent).toBe('Study IDtitletimerequirementpaymentlocationstart date/timeend date/time');
})

test('Clicking on past studies should change visible studies', () => {
  const {queryByTestId} = render(<Dashboard/>)

  fireEvent.click(queryByTestId('Past Studies'))
  expect(queryByTestId('studiesTable')).toBeTruthy();
  expect(queryByTestId('upcomingStudies')).toBeNull();
  expect(queryByTestId('pastStudies')).toBeTruthy();
})
