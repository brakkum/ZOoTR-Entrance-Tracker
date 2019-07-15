import Houses from "./Houses";
import Grottos from "./Grottos";

const InteriorConnection = {
    // one way connection to windmill from dampe's grave
    [Grottos.DampesGrave]: {leadsTo: Houses.Windmill}
};

export default InteriorConnection;
