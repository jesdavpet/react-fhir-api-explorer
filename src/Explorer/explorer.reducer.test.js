import reduce, {
  addInteraction,
  deleteInteraction
} from './explorer.reducer'

describe(`addInteraction(...) action creator`, () => {
  test(`should create a redux action with type and payload`, () => {
    const interaction = {hi: `mom`}
    const result = addInteraction(interaction)
    expect(result).toBeDefined()
    expect(result.type).toBeDefined()
    expect(result.payload).toBeDefined()
  })
})

describe(`deleteInteraction(...) action creator`, () => {
  test(`should create a redux action with type and payload`, () => {
    const index = 1
    const result = deleteInteraction(index)
    expect(result).toBeDefined()
    expect(result.type).toBeDefined()
    expect(result.payload).toBeDefined()
  })
})

describe(`Explorer reducer`, () => {
  test(`returns a state object with undefined state`, () => {
    const unhandledActionType = {type: `NOPE`}
    const result = reduce(undefined, unhandledActionType)
    expect(result).toBeDefined()
    expect(result).toEqual({explorer: []})
  })

  test(`should add a FHIR interaction to explorer`, () => {
    const initial = {explorer: []}
    const interactionToAdd = {hi: `mom`}

    const expected = {explorer: [interactionToAdd]}
    const result = reduce(initial, addInteraction(interactionToAdd))
    expect(result).toEqual(expected)
  })

  test(`should delete indexed FHIR interaction from explorer`, () => {
    const initial = {explorer: [{zero: 0}, {one: 1}, {two: 2}]}

    const expected = {explorer: [{zero: 0}, {two: 2}]}
    const result = reduce(initial, deleteInteraction(1))
    expect(result).toEqual(expected)
  })
})

