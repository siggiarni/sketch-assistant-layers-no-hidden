import { AssistantPackage, RuleDefinition } from '@sketch-hq/sketch-assistant-types'

const hiddenLayer: RuleDefinition = {
  rule: async (context) => {
    const { utils } = context

    for (const layer of utils.objects.anyLayer) {
      if (layer.isVisible === false) {
        utils.report('This layer is hidden', layer)
      }
    }
  },
  name: 'hidden-layers',
  title: 'Hidden layers',
  description: 'List hidden layers in a project',
}

const assistant: AssistantPackage = async () => {
  return {
    name: 'hidden-layers',
    rules: [hiddenLayer],
    config: {
      rules: {
        'hidden-layers': { active: true },
      },
    },
  }
}

export default assistant
