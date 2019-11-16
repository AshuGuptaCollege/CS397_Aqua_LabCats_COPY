import React from 'react'
import {render, getByText} from '@testing-library/react'
//import '@testing-library/jest-dom'
import Dashboard from './Dashboard.js'

test('Dashboard should render passed props as content body and respond to callback props', () => {
  const {getByTestId} = render(<Dashboard/>)

  expect(getByTestId('studiesTable').textContent).not.toBeNull()
  expect(getByTestId('upcomingStudies').textContent).toBe('Study IDtitletimerequirementpaymentlocationstart date/timeend date/time')
  expect(getByTestId('pastStudies').textContent).toBe('Study IDtitletimerequirementpaymentlocationstart date/timeend date/time')
})
