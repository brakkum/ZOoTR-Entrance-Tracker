import React from "react";
import { WarpSongs } from "../Data/Items/WarpSongs";
import useHover from "../Hooks/useHover";
import DungeonNames from "../Data/Names/DungeonNames";
import styled from "styled-components";

const RouteStepDiv = styled.div`
    width: auto;
    height: 100%;
    border-radius: 4px;
    border: ${props => props.isEndStep && props.hasClearAttribute ? (props.isEndStepAndClear ? "2px solid #69b76c" : "2px solid #b63e3e" ) : "transparent"};
    background-color: ${props => props.isHovered ? (props.isEndStepAndClear ? "#cbf7cd" : props.isEndStepAndNotClear ? "#edbebf" : "transparent") : "transparent"};
    .song {
        text-shadow: 
            0px 0px 10px ${props => props.songColor},
            0px 0px 5px ${props => props.songColor},
            1px 2px 9px ${props => props.songColor}
    }
`;

export default function RouteStep({ step, isEndStep, routeIsClear, routeHasClearAttribute, routeEndArea, routeEndEntrance, ...props }) {

    const [hoverRef, isHovered] = useHover();

    return <RouteStepDiv
        ref={hoverRef}
        isEndStep={isEndStep}
        isHovered={isHovered}
        hasClearAttribute={routeHasClearAttribute}
        isEndStepAndClear={isEndStep && routeHasClearAttribute && routeIsClear}
        isEndStepAndNotClear={isEndStep && routeHasClearAttribute && !routeIsClear}
        songColor={step.song ? WarpSongs[step.song].color : "white"}
        className="column has-text-centered"
        onClick={isEndStep && routeHasClearAttribute ? () => props.toggleEntranceClear(routeEndArea, routeEndEntrance) : null}
    >
        {step.start !== undefined &&
            <span>
                {step.start}
            </span>
        }
        {step.song !== undefined &&
            <span
                className="song"
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
                {step.entrance}
                {![null, undefined].includes(step.area) && " Entrance"}
                {step.area === null && step.entrance === DungeonNames["Spirit Temple"] && " Hands"}
            </div>
        }
        {step.end !== undefined &&
            <span>
                {step.end}
            </span>
        }
    </RouteStepDiv>
}
