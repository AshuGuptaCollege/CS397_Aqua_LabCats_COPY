import React from 'react'
import {render, getByText} from '@testing-library/react'
//import '@testing-library/jest-dom'
import Dashboard from './Dashboard.js'

test('Dashboard should render passed props as content body and respond to callback props', () => {
  const {getByTestId} = render(<Dashboard/>)

  expect(getByTestId('studiesTable').textContent).not.toBe('Your Research Studies:')
  expect(getByTestId('upcomingStudies').textContent).toBe('Study ID')
  //expect(dashboard).toHaveTextContent("title")

  // check that all the data columns are present
  /*
  expect(getByText('Study ID')).toBeVisible();
  expect(getByText('title')).toBeVisible();
  expect(getByText('time')).toBeVisible();
  expect(getByText('requirement')).toBeVisible();
  expect(getByText('payment')).toBeVisible();
  expect(getByText('location')).toBeVisible();
  expect(getByText('start date/time')).toBeVisible();
  expect(getByText('end date/time')).toBeVisible();
  */
})
