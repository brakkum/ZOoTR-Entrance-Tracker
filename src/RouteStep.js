import React from "react";
import Songs from "./DataObjects/Songs";
import useHover from "./Hooks/useHover";

export default function RouteStep({ step, isEndStep, routeIsClear, routeHasClearAttribute, routeEndArea, routeEndEntrance, ...props }) {

    const [hoverRef, isHovered] = useHover();

    return <div
        ref={hoverRef}
        className={
            "route-step column has-text-centered" +
            (isEndStep && routeHasClearAttribute && routeIsClear ? " has-border-green "
                : isEndStep && routeHasClearAttribute && !routeIsClear ? " has-border-red " : "") +
            ((isEndStep && isHovered && routeHasClearAttribute && routeIsClear) ? " has-background-green "
                : (isEndStep && isHovered && routeHasClearAttribute && !routeIsClear) ? " has-background-red " : "")
        }
        onClick={isEndStep && routeHasClearAttribute ? () => props.toggleEntranceClear(routeEndArea, routeEndEntrance) : null}
    >
        {step.start !== undefined &&
            <span>
                {step.start}
            </span>
        }
        {step.song !== undefined &&
            <span
                className=""
                style={{
                    textShadow:
                        `0px 0px 10px ${Songs[step.song].color},
                        0px 0px 5px ${Songs[step.song].color},
                        1px 2px 9px ${Songs[step.song].color}`
                }}
            >
                {step.song}
            </span>
        }
        {step.area !== undefined &&
            <div className="has-text-weight-semibold">
                {step.area}
            </div>
        }
        {step.entrance !== undefined &&
            <div>
                {step.entrance} {![null, undefined].includes(step.area) && "Entrance"}
            </div>
        }
        {step.end !== undefined &&
            <span>
                {step.end}
            </span>
        }
    </div>
}
