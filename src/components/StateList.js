import React from 'react'
import { Grid, GridCell } from 'rmwc/Grid'

import DistrictList from './DistrictList'
import '../scss/components/state-list.scss'

export default function StateList({ state }) {
  return (
    <section className="state-list" key={state.districts[0].state.id}>
      <Grid>
        <GridCell span="12">
          <header className="state-list__header">
            <h2 className="state-list__title">
              {state.districts[0].state.name}
            </h2>
          </header>
          {state.districts.length > 0 && (
            <DistrictList districts={state.districts} />
          )}
        </GridCell>
      </Grid>
    </section>
  )
}
