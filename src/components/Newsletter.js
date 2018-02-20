import React from 'react'
import { TextField, TextFieldIcon, TextFieldHelperText } from 'rmwc/TextField'
import { Button } from 'rmwc/Button'
import { Grid, GridCell } from 'rmwc/Grid'
import EmailOutlineIcon from 'mdi-react/EmailOutlineIcon'

export default function Newsletter(props) {
  return (
    <form
      className="newsletter"
      action="https://datengui.us17.list-manage.com/subscribe/post?u=4b79a045e2fce403d887f9147&amp;id=19233695e7"
      method="post"
      id="mc-embedded-subscribe-form"
      name="mc-embedded-subscribe-form"
      noValidate
    >
      <Grid>
        <GridCell span="6">
          <h3 className="newsletter__title">Newsletter abonnieren</h3>

          <TextField
            className="newsletter__input"
            id="email"
            name="EMAIL"
            label="Deine E-Mail-Adresse"
            size="28"
            withLeadingIcon={<EmailOutlineIcon className="newsletter__icon" />}
          />
          <Button className="newsletter__button" stroked type="submit">
            Abonnieren
          </Button>

          <p className="newsletter__terms">
            Deine Email-Adressen wird von uns ausschliesslich zur Information
            über den CycleHack Berlin genutzt und nicht an Dritte weitergegeben.
            Für diesen Verteiler verwenden wir Mailchimp.{' '}
            <a href="https://mailchimp.com/legal/privacy/">
              Mailchimp Privacy Policy
            </a>
          </p>
        </GridCell>
      </Grid>
    </form>
  )
}
