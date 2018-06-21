import React from 'react'
import { TextField, TextFieldIcon, TextFieldHelperText } from 'rmwc/TextField'
import { Button } from 'rmwc/Button'
import { Grid, GridCell } from 'rmwc/Grid'
import EmailOutlineIcon from 'mdi-react/EmailOutlineIcon'

import '../scss/components/_newsletter.scss'

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
        <GridCell span="7">
          <h3 className="newsletter__title">Das Neueste vom Datenguide</h3>

          <TextField
            className="newsletter__input"
            id="email"
            name="EMAIL"
            label="Deine E-Mail-Adresse"
            size="28"
            withLeadingIcon={<EmailOutlineIcon className="newsletter__icon" />}
          />
          <Button className="newsletter__button" outlined type="submit">
            Newsletter abonnieren
          </Button>

          <p className="newsletter__terms">
            Deine Email-Adressen wird von uns ausschliesslich zur Information
            über den Datenguide genutzt und nicht an Dritte weitergegeben. Für
            diesen Verteiler verwenden wir{' '}
            <a href="http://mailchimp.com/">Mailchimp</a>.{' '}
            <a href="/privacy">Mehr zum Datenschutz bei Datenguide</a>
          </p>
        </GridCell>
      </Grid>
    </form>
  )
}
