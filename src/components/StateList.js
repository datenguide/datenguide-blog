import React from 'react'
import DistrictList from './DistrictList'

import '../scss/components/state-list.scss'

export default function StateList({ state }) {
  return (
    <section className="state-list" key={state.id}>
      <header className="state-list__header">
        <h2 className="state-list__title">{state.name}</h2>
      </header>
      {state.districts.length > 0 && (
        <DistrictList districts={state.districts} />
      )}
    </section>
  )
}
