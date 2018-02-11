export const EXPLORER_ADD_INTERACTION = `EXPLORER_ADD_INTERACTION`
export const EXPLORER_DELETE_INTERACTION = `EXPLORER_DELETE_INTERACTION`

export const addInteraction = (payload) => ({
  type: EXPLORER_ADD_INTERACTION,
  payload
})

export const deleteInteraction = (index) => ({
  type: EXPLORER_DELETE_INTERACTION,
  payload: index
})

export default function (state, {type, payload}) {
  const INITIAL_STATE = {explorer: []}

  switch (type) {
    case EXPLORER_ADD_INTERACTION:
      return {...state, explorer: state.explorer.concat(payload)}

    case EXPLORER_DELETE_INTERACTION:
      return {
        ...state,
        explorer: state.explorer
          .slice(0, payload)
          .concat(state.explorer.slice(payload +1))
      }

    default:
      return (!state)
        ? INITIAL_STATE
        : (!state.explorer)
        ? {...state, INITIAL_STATE}
        : state
  }
}

