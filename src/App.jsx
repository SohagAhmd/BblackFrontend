import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { ConfigProvider } from 'antd'
import { QueryClientProvider } from '@tanstack/react-query'

import routes from './router/routes.jsx'
import { antdTheme } from './theme/antdTheme.js'
import { queryClient } from './hooks/queryClient.js'

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ConfigProvider theme={antdTheme}>
        <RouterProvider router={routes} />
      </ConfigProvider>
    </QueryClientProvider>
  )
}

export default App
