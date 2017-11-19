import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Box from 'grommet/components/Box'

export default class Index extends React.Component {
  render() {
    return (
      <div>

        <Header />

        <Box direction="row" flex="grow" justify="center" colorIndex="light-2">
          <Box
            direction="row" flex="grow"
            size={{width: {max: 'xxlarge'}}}
            pad='medium'>
            First Box
          </Box>
        </Box>

        <Box direction="row" flex="grow" justify="center">
          <Box
            direction="row" flex="grow"
            size={{width: {max: 'xxlarge'}}}
            pad='medium'>
            Second section
          </Box>
        </Box>

        <Footer />

      </div>
    )
  }
}
