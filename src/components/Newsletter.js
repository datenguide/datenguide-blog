import React from 'react'
import { TextField, TextFieldIcon, TextFieldHelperText } from 'rmwc/TextField'
import { Button } from 'rmwc/Button'

export default function Newsletter(props) {
  return (
    <form
      action="https://datengui.us17.list-manage.com/subscribe/post?u=4b79a045e2fce403d887f9147&amp;id=19233695e7"
      method="post"
      id="mc-embedded-subscribe-form"
      name="mc-embedded-subscribe-form"
      noValidate
    >
      <TextField id="email" name="EMAIL" label="E-Mail" />

      <Button type="submit">Absenden</Button>
    </form>
  )
}
