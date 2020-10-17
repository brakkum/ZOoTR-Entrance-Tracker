import NavigableInteriors from './DataObjects/NavigableInteriors'
import NavigableAreas from './DataObjects/NavigableAreas'
import EntranceTypes from './DataObjects/EntranceTypes'
import Entrance from './Entrance'
import React from 'react'

const returnUniqueItems = array => {
  return array.filter((item, i) => {
    return array.indexOf(item) === i
  })
}

export default function Area ({
  overworldOnly,
  areaName,
  area,
  state,
  availableHouses,
  availableGrottos,
  availableDungeons,
  availableOverworldEntrances,
  allOverworldEntrances,
  ...props
}) {
  const entrances = []

  return (
    <div className='card area-card'>
      <div
        className='card-header area-card-header has-background-dark'
        onClick={() => props.toggleAreaExpanded(areaName)}
      >
        <h5 className='is-size-5 has-text-weight-semibold area-card-name'>{areaName}</h5>
        <span
          className='icon has-text-white'
        >
          {area.isExpanded
            ? <i className='fa fa-minus area-expand-icon' />
            : <i className='fa fa-plus area-expand-icon' />}
        </span>
      </div>
      <div
        style={{
          background: area.colors.length > 1
            ? `linear-gradient(to right, ${area.colors.join(', ')}`
            : area.colors.length === 1
              ? area.colors[0]
              : 'grey',
          height: '5px'
        }}
      />
      {area.isExpanded && <div className='card-content area-card-content'>
        {/* iterate through the entrances of the area */}
        {Object.keys(area.entrances).sort().map((entranceName, i) => {
          // column layout
          // entrance object derived from the area object
          const entrance = area.entrances[entranceName]

          if (overworldOnly && !(NavigableAreas.includes(entranceName) ||
                        NavigableInteriors.includes(entrance.interior))) {
            return null
          }
          // the type of entrance determines what
          // options are displayed to pick from
          const options = entrance.type === EntranceTypes.House
            ? returnUniqueItems(availableHouses)
            : entrance.type === EntranceTypes.Dungeon
              ? availableDungeons
              : entrance.type === EntranceTypes.Overworld
                ? availableOverworldEntrances
                : entrance.type === EntranceTypes.Grotto
                  ? returnUniqueItems(availableGrottos)
                  : entrance.type === EntranceTypes['Kaepora Gaebora']
                    ? allOverworldEntrances
                    : [] // How did you get here??

          // add to the correct column in area container
          entrances.push(
            <Entrance
              key={i}
              options={options}
              entrance={entrance}
              areaName={areaName}
              entranceName={entranceName}
              setEntrance={props.setEntrance}
              resetEntrance={props.resetEntrance}
              toggleEntranceClear={props.toggleEntranceClear}
              startAsChild={props.startAsChild}
            />
          )
          if (i !== Object.keys(area.entrances).length - 1) {
            entrances.push(
              <div key={`entrance-${i}`} className='entrance-separator' />
            )
          }
          return null
        })}
        <div className='columns card-columns'>
          <div className='column card-column'>
            {entrances}
          </div>
        </div>
    </div>}
    </div>
  )
}
