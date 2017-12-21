import React from 'react'
import Form from 'grommet/components/Form'
import Label from 'grommet/components/Label'
import TextInput from 'grommet/components/TextInput'
import Button from 'grommet/components/Button'
import Box from 'grommet/components/Box'

const Newsletter = () => (
    <form action="https://datengui.us17.list-manage.com/subscribe/post?u=4b79a045e2fce403d887f9147&amp;id=19233695e7" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" noValidate>

      <Box direction="row"
        justify="start"
        align="center"
        wrap={true}>

        <Box direction="row"
          justify="start"
          align="center"
          wrap={true}
          margin="small">
          <Label htmlFor="email">Newsletter abonnieren</Label>
        </Box>

        <Box direction="row"
          justify="start"
          align="center"
          wrap={true}
          margin="small">
          <TextInput id="email" name="EMAIL" size="large" placeHolder="E-Mail" />
        </Box>

        <Box direction="row"
          justify="start"
          align="center"
          wrap={true}
          margin="small">
          <Button label="Absenden" type="submit" primary={true} />
        </Box>

      </Box>

    </form>
)

export default Newsletter
