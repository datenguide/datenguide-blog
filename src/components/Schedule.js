import React from 'react'

import '../scss/components/schedule.scss'

export default function Schedule({ dates }) {
  return dates.map(({ date, items }) => (
    <div className="schedule__day" key={date}>
      <h3 className="schedule__date">{date}</h3>

      <div className="section__main--column">
        <dl className="schedule__list">
          {items.map(({ time, name, content }) => (
            <React.Fragment key={name}>
              <dt>{time}</dt>
              <dd>
                <h4 className="schedule__title">{name}</h4>
                {content}
              </dd>
            </React.Fragment>
          ))}
        </dl>
      </div>
    </div>
  ))
}
