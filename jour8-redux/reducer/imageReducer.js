export function reducer(state , action){
    switch(action){
        case "ZOOM":
            return {width: 120, height : 120}
        case "DEZOOM":
            return {width: 80, height : 80}
        case "HIDE":
            return {width: 0, height : 0}
        case "RESET":
            return {width: 100, height : 100}
        default :
            return state
    }
}