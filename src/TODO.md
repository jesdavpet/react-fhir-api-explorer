const store = {
  explorer: {
    interactions: [
      {
        id: 123,
        requestSchema: {},
        responseFhir: {}
      }
    ],
    activeInteractionId: 123
  },
  guided: {
    interactions: [
      {
        id: 4,
        shema: {},
        fhir: {},
        prompts: [
          {id: 73, prompt: () => {}}
        ]
      }
    ],
    activeInteractionId: 4,
    activePromptId: 73
  }
}

