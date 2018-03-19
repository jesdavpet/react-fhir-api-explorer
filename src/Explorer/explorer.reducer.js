import {adjust, assoc, dissoc, remove, update} from 'ramda'

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

  switch (type) {
    case EXPLORER_ADD_INTERACTION:
      return state.concat(payload)

    case EXPLORER_DELETE_INTERACTION:
      return remove(payload, 1, state)

    case EXPLORER_UPDATE_INTERACTION:
      return update(payload.index, payload.interaction, state)

    case EXPLORER_UPDATE_INTERACTION_ERROR:
      return adjust(assoc(`error`, payload.error), payload.index, state)

    case EXPLORER_UPDATE_INTERACTION_RESPONSE:
      return adjust(assoc(`response`, payload.response), payload.index, state)

    case EXPLORER_DELETE_INTERACTION_ERROR:
      return adjust(dissoc(`error`), payload.index, state)

    case EXPLORER_DELETE_INTERACTION_RESPONSE:
      return adjust(dissoc(`response`), payload.index, state)

    case EXPLORER_SET_INTERACTION_IS_LOADING:
      return adjust(assoc(`isLoading`, payload.isLoading), payload.index, state)

    default:
      return !state ? INITIAL_STATE : state
  }
}
