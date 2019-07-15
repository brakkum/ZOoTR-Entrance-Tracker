import Houses from "./Houses";
import Grottos from "./Grottos";

const InteriorConnection = {
    // one way connection to windmill from dampe's grave
    [Houses.Windmill]: {interior: Grottos.DampesGrave},
    // can't backtrack from windmill to grave
    [Grottos.DampesGrave]: null
};

export default InteriorConnection;
