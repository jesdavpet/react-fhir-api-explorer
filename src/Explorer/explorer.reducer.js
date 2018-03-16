import {fetchFhir} from './explorer.services'

/* Actions and dispatchers */
export const EXPLORER_ADD_INTERACTION = `EXPLORER_ADD_INTERACTION`
export const addInteraction = (interaction) => ({
  type: EXPLORER_ADD_INTERACTION,
  payload: interaction
})

export const EXPLORER_DELETE_INTERACTION = `EXPLORER_DELETE_INTERACTION`
export const deleteInteraction = (index) => ({
  type: EXPLORER_DELETE_INTERACTION,
  payload: index
})

export const EXPLORER_UPDATE_INTERACTION = `EXPLORER_UPDATE_INTERACTION`
export const updateInteraction = (interaction, index) => ({
  type: EXPLORER_UPDATE_INTERACTION,
  payload: {interaction, index}
})

export const EXPLORER_UPDATE_INTERACTION_RESPONSE = `EXPLORER_UPDATE_INTERACTION_RESPONSE`
export const updateInteractionResponse = (response, index) => ({
  type: EXPLORER_UPDATE_INTERACTION_RESPONSE,
  payload: {response, index}
})

export const EXPLORER_UPDATE_INTERACTION_ERROR = `EXPLORER_UPDATE_INTERACTION_ERROR`
export const updateInteractionError = (error, index) => ({
  type: EXPLORER_UPDATE_INTERACTION_ERROR,
  payload: {error, index}
})

/* Thunk dispatches action asynchrnonously. */
export const fetchFhirInto = (index) => (dispatch) => async (request) => {
  try {
    const response = await fetchFhir(request)
    dispatch(updateInteractionResponse(response, index))
  } catch (error) {
    const message = `ERROR: Please check your network connection.`
    dispatch(updateInteractionError(message, index))
  }
}

/* Reducer for explorer state management. */
export default function (state, {type, payload}) {
  const INITIAL_STATE = []

  switch (type) {
    case EXPLORER_ADD_INTERACTION:
      return state.concat(payload)

    case EXPLORER_DELETE_INTERACTION:
      return [
        ...state.slice(0, payload),
        ...state.slice(payload + 1)
      ]

    case EXPLORER_UPDATE_INTERACTION:
      return (payload.index >= 0 && payload.index < state.length)
      ? [
          ...state.slice(0, payload.index),
          payload.interaction,
          ...state.slice(payload.index + 1)
        ]
      : state

    case EXPLORER_UPDATE_INTERACTION_ERROR:
      return (payload.index >= 0 && payload.index < state.length)
      ? [
          ...state.slice(0, payload.index),
          {...state[payload.index], error: payload.error},
          ...state.slice(payload.index + 1)
        ]
      : state

    case EXPLORER_UPDATE_INTERACTION_RESPONSE:
      return (payload.index >= 0 && payload.index < state.length)
      ? [
          ...state.slice(0, payload.index),
          {...state[payload.index], response: payload.response},
          ...state.slice(payload.index + 1)
        ]
      : state

    default:
      return (!state) ? INITIAL_STATE : state
  }
}
