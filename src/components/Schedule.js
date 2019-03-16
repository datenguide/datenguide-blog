import React from 'react'
import { graphql } from 'gatsby'

import '../scss/components/schedule.scss'

export default function Schedule({ dates }) {
  return dates.map(({ date, items }) => (
    <div className="schedule__day">
      <div class="section__sidebar">
        <h3 class="schedule__date">{date}</h3>
      </div>

      <div class="section__main--column">
        <dl class="schedule__list">
          {items.map(({ time, name, content }) => (
            <React.Fragment>
              <dt>{time}</dt>
              <dd>
                <h4 class="schedule__title">{name}</h4>
                {content}
              </dd>
            </React.Fragment>
          ))}
        </dl>
      </div>
    </div>
  ))
}
