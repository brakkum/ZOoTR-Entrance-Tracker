import Houses from './DataObjects/Houses'
import useHover from './Hooks/useHover'
import React from 'react'

export default function Entrance ({ options, entrance, areaName, entranceName, ...props }) {
  const [hoverRef, isHovered] = useHover()

  return (
    <div className='entrance'>
      <span className={
        'entrance-name is-size-6 has-text-weight-bold ' +
                // entrance has no assignment, make it clear
                (entrance.interior === null || entrance.leadsTo === null ? 'has-text-danger' : '')
      }
      >{entranceName}
      </span>
      <div className='entrance-spacer' />
      {entrance.interior !== undefined && entrance.interior !== null
      // has an interior defined, so just display it
        ? <div
          className={
            'interior-display is-flex ' +
                        (
                          entrance.clear !== undefined &&
                                entrance.clear ? 'check-cleared '
                            : !entrance.clear ? 'check-not-cleared '
                              : ''
                        ) +
                        (
                          entrance.clear !== undefined &&
                                isHovered ? 'hovered '
                            : ''
          )
          }
          ref={hoverRef}
          onClick={() => props.toggleEntranceClear(areaName, entranceName)}
          >
          <span className='interior has-text-right'>
            {entrance.interior}
          </span>
          {/* x icon for resetting an entrance to unchecked */}
          {/* unless it's the starting point based on age */}
          {((props.startAsChild && entrance.interior === Houses["Link's House"]) ||
                        (!props.startAsChild && entrance.interior === Houses['Temple of Time']))
            ? null
            : <div
              className='delete remove-choice is-pulled-right' onClick={
                () => props.resetEntrance({ ...entrance, area: areaName, entrance: entranceName })
              }
              />}
        </div>
        : entrance.leadsTo !== undefined && entrance.leadsTo !== null
          ?
        // points to an area, and maybe an entrance
          <div className='area-display has-text-weight-semibold is-flex'>
              <div className='area-display-entrance'>
              {/* show area */}
              <div className=''>
                  {entrance.leadsTo.area}
                </div>
              {/* show entrance */}
              <div className=' is-size-7 has-text-weight-normal'>
                  {entrance.leadsTo.entrance} Entrance
                </div>
            </div>
              <span
              className='delete remove-choice is-pulled-right' onClick={() =>
                props.resetEntrance(
                  {
                    ...entrance,
                    area: areaName,
                    entrance: entranceName
                  }
                )}
            />
            </div>
          :
        // no interior or area is set, so display available options to select
            <div className='select is-small entrance-select'>
            <select
                value='Not Checked' onChange={event =>
                props.setEntrance(
                // the area and entrance and type that is being assigned
                // used to determine steps to take in this.setEntrance
                  {
                    area: areaName,
                    entrance: entranceName,
                    type: entrance.type
                  },
                  // object that has interior key for houses, grottos, dungeons
                  // or area and entrance keys for overworld and kaepora gaebora
                  JSON.parse(event.target.value)
              )}
              >
                <option value='Not Checked'>Not Checked</option>
                {options instanceof Array
              // if its an array, it's areas, houses, or grottos
              // map over them and make them options
                ? options.sort().map((interiorName, i) => {
                  return <option key={i} value={JSON.stringify({ interior: interiorName })}>
                    {interiorName}
                  </option>
                })
                :
              // it's an overworld selection
              // iterate through the area keys and make them optGroups
              // make the entrance of that area selection options
                Object.keys(options).sort().map((optgroupArea, i) => {
                  // don't make optGroups for empty areas
                  // also don't show empty optGroup if it's
                  // only entrance is the current entrance
                  if (options[optgroupArea].length === 0 ||
                                        (options[optgroupArea].length === 1 &&
                                            areaName === optgroupArea &&
                                            options[optgroupArea][0] === entranceName)) {
                    return null
                  }
                  return <optgroup
                    key={i}
                    label={optgroupArea}
                  >
                    {options[optgroupArea].sort().map((optgroupEntrance, j) => {
                      // don't show current entrance as selectable option
                      if (areaName === optgroupArea && entranceName === optgroupEntrance) {
                        return null
                      }
                      return <option
                        key={j}
                        value={JSON.stringify({
                          area: optgroupArea,
                          entrance: optgroupEntrance
                        })}
                      >
                        {optgroupEntrance}
                      </option>
                    })}
                  </optgroup>
                })}
              </select>
          </div>}
    </div>
  )
}
