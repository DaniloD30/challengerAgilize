import createReducer from "../../util/createReducer";



const SeasonTypes = {
    handleGetSeasonStart: '@season/handleGetSeasonStart',
    handleGetSeasonStart: '@season/handleGetSeasonSuccess',
    handleGetSeasonStart: '@season/handleGetSeasonFaillure',
}

const INITIAL_STATE = {

}

export const seasonReducer = createReducer(INITIAL_STATE, {
    [SeasonTypes.handleGetSeasonStart](state) {

    }
}
)

export function handleGetSeason() {


}