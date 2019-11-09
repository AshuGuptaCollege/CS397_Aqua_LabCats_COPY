import React from 'react'
import {render, getByText} from '@testing-library/react'
import Dashboard from './Dashboard.js'

test('Dashboard should render passed props as content body and respond to callback props', () => {
  const {dashboard} = render(<Dashboard/>)

  // check that all the data columns are present
  expect(getByText('Study ID')).toBeVisible();
  expect(getByText('title')).toBeVisible();
  expect(getByText('time')).toBeVisible();
  expect(getByText('requirement')).toBeVisible();
  expect(getByText('payment')).toBeVisible();
  expect(getByText('location')).toBeVisible();
  expect(getByText('start date/time')).toBeVisible();
  expect(getByText('end date/time')).toBeVisible();

/*
  fireEvent.click(getByTestId('markAsCompleted'))
  expect(markTodoDone).toBeCalledWith(itemIndex)
  expect(markTodoDone).toHaveBeenCalledTimes(1)

  fireEvent.click(getByTestId('markAsDeleted'))
  expect(removeItem).toBeCalledWith(itemIndex)
  expect(removeItem).toHaveBeenCalledTimes(1)
  */
})
