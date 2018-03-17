import {assoc, dissoc} from 'ramda'

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

export const EXPLORER_UPDATE_INTERACTION_ERROR = `EXPLORER_UPDATE_INTERACTION_ERROR`
export const updateInteractionError = (error, index) => ({
  type: EXPLORER_UPDATE_INTERACTION_ERROR,
  payload: {error, index}
})

export const EXPLORER_UPDATE_INTERACTION_RESPONSE = `EXPLORER_UPDATE_INTERACTION_RESPONSE`
export const updateInteractionResponse = (response, index) => ({
  type: EXPLORER_UPDATE_INTERACTION_RESPONSE,
  payload: {response, index}
})

export const EXPLORER_DELETE_INTERACTION_ERROR = `EXPLORER_DELETE_INTERACTION_ERROR`
export const deleteInteractionError = (index) => ({
  type: EXPLORER_DELETE_INTERACTION_ERROR,
  payload: {index}
})

export const EXPLORER_DELETE_INTERACTION_RESPONSE = `EXPLORER_DELETE_INTERACTION_RESPONSE`
export const deleteInteractionResponse = (index) => ({
  type: EXPLORER_DELETE_INTERACTION_RESPONSE,
  payload: {index}
})

export const EXPLORER_SET_INTERACTION_IS_LOADING = `EXPLORER_SET_INTERACTION_IS_LOADING`
export const setInteractionIsLoading = (index, isLoading = false) => ({
  type: EXPLORER_SET_INTERACTION_IS_LOADING,
  payload: {index, isLoading}
})

/* Thunk dispatches action asynchrnonously. */
export const fetchFhirInto = (index) => (dispatch) => async (request) => {
  dispatch(deleteInteractionResponse(index))
  dispatch(deleteInteractionError(index))
  dispatch(setInteractionIsLoading(index, true))

  try {
    const response = await fetchFhir(request)
    dispatch(setInteractionIsLoading(index, false))
    dispatch(updateInteractionResponse(response, index))
  } catch (error) {
    const message = `ERROR: Please check your network connection.`
    dispatch(setInteractionIsLoading(index, false))
    dispatch(updateInteractionError(message, index))
  }
}


/* Reducer for explorer state management. */
export default function (state, {type, payload}) {
  const INITIAL_STATE = []

  const isIndexInRange = (index = -1) => (index >= 0 && index < state.length)

  switch (type) {
    case EXPLORER_ADD_INTERACTION:
      return state.concat(payload)

    case EXPLORER_DELETE_INTERACTION:
      return [
        ...state.slice(0, payload),
        ...state.slice(payload + 1)
      ]

    case EXPLORER_UPDATE_INTERACTION:
      return isIndexInRange(payload.index)
      ? [
          ...state.slice(0, payload.index),
          payload.interaction,
          ...state.slice(payload.index + 1)
        ]
      : state

    case EXPLORER_UPDATE_INTERACTION_ERROR:
      return isIndexInRange(payload.index)
      ? [
          ...state.slice(0, payload.index),
          {...state[payload.index], error: payload.error},
          ...state.slice(payload.index + 1)
        ]
      : state

    case EXPLORER_UPDATE_INTERACTION_RESPONSE:
      return isIndexInRange(payload.index)
      ? [
          ...state.slice(0, payload.index),
          {...state[payload.index], response: payload.response},
          ...state.slice(payload.index + 1)
        ]
      : state

    case EXPLORER_DELETE_INTERACTION_ERROR:
      return isIndexInRange(payload.index)
      ? [
          ...state.slice(0, payload.index),
          dissoc(`error`, state[payload.index]),
          ...state.slice(payload.index + 1)
        ]
      : state

    case EXPLORER_DELETE_INTERACTION_RESPONSE:
      return isIndexInRange(payload.index)
      ? [
          ...state.slice(0, payload.index),
          dissoc(`response`, state[payload.index]),
          ...state.slice(payload.index + 1)
        ]
      : state

    case EXPLORER_SET_INTERACTION_IS_LOADING:
      return isIndexInRange(payload.index)
      ? [
        ...state.slice(0, payload.index),
        assoc(`isLoading`, payload.isLoading, state[payload.index]),
        ...state.slice(payload.index + 1)
      ]
      : state

    default:
      return (!state) ? INITIAL_STATE : state
  }
}
