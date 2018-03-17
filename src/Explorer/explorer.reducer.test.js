import reduce, {
  addInteraction,
  deleteInteraction,
  updateInteraction,
  updateInteractionError,
  updateInteractionResponse,
  deleteInteractionError,
  deleteInteractionResponse
} from './explorer.reducer'

describe(`Explorer action creators`, () => {
  describe(`addInteraction(...) action creator`, () => {
    test(`should create a redux action with type and payload`, () => {
      const interaction = {hi: `mom`}
      const result = addInteraction(interaction)

      expect(result.type).toBeDefined()
      expect(result.payload).toEqual(interaction)
    })
  })

  describe(`deleteInteraction(...) action creator`, () => {
    test(`should create a redux action with type and payload`, () => {
      const index = 1
      const result = deleteInteraction(index)

      expect(result.type).toBeDefined()
      expect(result.payload).toEqual(index)
    })
  })

  describe(`updateInteraction(...) action creator`, () => {
    test(`should create a redux action with type and payload`, () => {
      const interaction = {cool: `beans`}
      const index = 1
      const result = updateInteraction(interaction, index)

      expect(result.payload.interaction).toEqual(interaction)
      expect(result.payload.index).toEqual(index)
    })
  })
})

describe(`Explorer reducer`, () => {
  describe(`DEFAULT`, () => {
    test(`returns a state object with undefined state`, () => {
      const unhandledActionType = {type: `NOPE`}
      const result = reduce(undefined, unhandledActionType)

      expect(result).toBeDefined()
      expect(result).toEqual([])
    })
  })

  describe(`EXPLORER_ADD_INTERACTION`, () => {
    test(`should add a FHIR interaction to explorer`, () => {
      const initial = []
      const interactionToAdd = {hi: `mom`}

      const expected = [interactionToAdd]
      const result = reduce(initial, addInteraction(interactionToAdd))

      expect(result).toEqual(expected)
    })
  })

  describe(`EXPLORER_DELETE_INTERACTION`, () => {
    test(`should delete indexed FHIR interaction from explorer`, () => {
      const initial = [{zero: 0}, {one: 1}, {two: 2}]

      const expected = [{zero: 0}, {two: 2}]
      const result = reduce(initial, deleteInteraction(1))

      expect(result).toEqual(expected)
    })
  })

  describe(`EXPLORER_UPDATE_INTERACTION`, () => {
    test(`should update FHIR interaction from explorer by index`, () => {
      const initial = [{zero: 0}, {one: 1}, {two: 2}]

      const interaction = {uno: 1}
      const index = 1

      const result = reduce(initial, updateInteraction(interaction, index))
      const expected = [{zero: 0}, {uno: 1}, {two: 2}]

      expect(result).toEqual(expected)
    })

    test(`should NOT update FHIR interaction when index invalid`, () => {
      const initial = [{zero: 0}, {one: 1}, {two: 2}]

      const interaction = {fifty: 50}
      const index = 50

      const result = reduce(initial, updateInteraction(interaction, index))
      const expected = initial

      expect(result).toEqual(expected)
    })
  })

  describe(`EXPLORER_UPDATE_INTERACTION_ERROR`, () => {
    test(`should update the error of an indexed interaction`, () => {
      const initial = [{hi: `mom`}]
      const error = `Error: "yo mama" does not compute!`

      const expected = [{hi: `mom`, error}]
      const result = reduce(initial, updateInteractionError(error, 0))

      expect(result).toEqual(expected)
    })

    test(`should NOT alter state when indexed interaction is out of range`, () => {
      const initial = [{hi: `mom`}]
      const error = `Error: "yo mama" does not compute!`

      const expected = [{hi: `mom`, error}]
      const result = reduce(initial, updateInteractionError(error, 1000000))

      expect(result).toEqual(initial)
    })
  })

  describe(`EXPLORER_UPDATE_INTERACTION_RESPONSE`, () => {
    test(`should update the response of an indexed interaction`, () => {
      const initial = [{hi: `mom`}]
      const response = {statusCode: 200, body: `Wow`}

      const expected = [{hi: `mom`, response}]
      const result = reduce(initial, updateInteractionResponse(response, 0))

      expect(result).toEqual(expected)
    })

    test(`should NOT alter state when indexed interaction is out of range`, () => {
      const initial = [{hi: `mom`}]
      const response = {statusCode: 200, body: `Wow`}

      const expected = [{hi: `mom`, response}]
      const result = reduce(initial, updateInteractionResponse(response, 1000000))

      expect(result).toEqual(initial)
    })
  })

  describe(`EXPLORER_DELETE_INTERACTION_ERROR`, () => {
    test(`should delete the error of an indexed interaction`, () => {
      const initial = [{hi: `mom`, error: `Error: "yo mama" does not compute!`}]

      const expected = [{hi: `mom`}]
      const result = reduce(initial, deleteInteractionError(0))

      expect(result).toEqual(expected)
    })

    test(`should NOT alter state when indexed interaction is out of range`, () => {
      const initial = [{hi: `mom`, error: `Error: "yo mama" does not compute!`}]

      const result = reduce(initial, deleteInteractionError(1000000))

      expect(result).toEqual(initial)
    })

    test(`should NOT throw when error property doesn't exist`, () => {
      const initial = [{hi: `mom`}]

      const deleteNonExistantError = () => reduce(initial, deleteInteractionError(0))
      expect(deleteNonExistantError).not.toThrow()
    })

    test(`should NOT throw when error property doesn't exist`, () => {
      const initial = [{hi: `mom`}]
      const result = reduce(initial, deleteInteractionError(0))
      expect(result).toEqual(initial)
    })
  })

  describe(`EXPLORER_DELETE_INTERACTION_RESPONSE`, () => {
    test(`should delete the response of an indexed interaction`, () => {
      const initial = [{hi: `mom`, response: {statusCode: 200, body: `Wow`}}]

      const expected = [{hi: `mom`}]
      const result = reduce(initial, deleteInteractionResponse(0))

      expect(result).toEqual(expected)
    })

    test(`should NOT alter state when indexed interaction is out of range`, () => {
      const initial = [{hi: `mom`, response: {statusCode: 200, body: `Wow`}}]

      const result = reduce(initial, deleteInteractionResponse(1000000))

      expect(result).toEqual(initial)
    })

    test(`should NOT throw when response property doesn't exist`, () => {
      const initial = [{hi: `mom`}]
      const deleteNonExistantResponse = () => reduce(initial, deleteInteractionResponse(0))
      expect(deleteNonExistantResponse).not.toThrow()
    })

    test(`should NOT alter state when response property doesn't exist`, () => {
      const initial = [{hi: `mom`}]

      const result = reduce(initial, deleteInteractionResponse(0))
      expect(result).toEqual(initial)
    })
  })
})
