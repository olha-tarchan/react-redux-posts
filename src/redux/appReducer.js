import {
    HIDE_ERROR, SHOW_ERROR,
    HIDE_LOADER, SHOW_LOADER,
    HIDE_COLLAPSE, SHOW_COLLAPSE,

} from "./types";


const initialState = {
    loading: false,
    error: null,
    collapsePanel: false

}
export const appReducer = (stateLoad = initialState, action) => {
    switch (action.type) {
        case SHOW_LOADER:
            return {...stateLoad, loading: true};
        case HIDE_LOADER:
            return {...stateLoad, loading: false}
        case SHOW_ERROR:
            return {...stateLoad, error: action.payload};
        case HIDE_ERROR:
            return {...stateLoad, error: null}
        case SHOW_COLLAPSE:
            return {...stateLoad, collapsePanel: true};
        case HIDE_COLLAPSE:
            return {...stateLoad, collapsePanel: false}

        default:
            return stateLoad;
    }
}