// Obtained from https://sqbu-github.cisco.com/WebExSquared/web-client/blob/master/src/app/scripts/constants/AdaptiveCardsHostConfig.js

const WebexTeamsHostConfig = {
  hostCapabilities: {
    capabilities: null,
  },
  choiceSetInputValueSeparator: ',',
  supportsInteractivity: true,
  fontFamily: 'CiscoSansTT Regular',
  spacing: {
    small: 4,
    default: 12,
    medium: 12,
    large: 12,
    extraLarge: 16,
    padding: 12,
  },
  fontSizes: {
    small: 12,
    default: 16,
    medium: 16,
    large: 20,
    extraLarge: 24,
  },
  fontWeights: {
    lighter: 200,
    default: 400,
    bolder: 600,
  },
  imageSizes: {
    small: 60,
    medium: 80,
    large: 160,
  },
  containerStyles: {
    default: {
      foregroundColors: {
        default: {
          default: '#000000',
          subtle: '#66000000',
        },
        dark: {
          default: '#000000',
          subtle: '#66000000',
        },
        light: {
          default: '#666666',
          subtle: '#666666',
        },
        accent: {
          default: '#05A1BF',
          subtle: '#0493AF',
        },
        good: {
          default: '#26B249',
          subtle: '#22A342',
        },
        warning: {
          default: '#D64332',
          subtle: '#C43D2D',
        },
        attention: {
          default: '#D65D2A',
          subtle: '#C45526',
        },
      },
      backgroundColor: '#F0F0F0',
    },
    emphasis: {
      foregroundColors: {
        default: {
          default: '#000000',
          subtle: '#000000',
        },
        dark: {
          default: '#FFFFFF',
          subtle: '#FFFFFF',
        },
        light: {
          default: '#000000',
          subtle: '#000000',
        },
        accent: {
          default: '#05A1BF',
          subtle: '#0493AF',
        },
        good: {
          default: '#26B249',
          subtle: '#22A342',
        },
        warning: {
          default: '#D64332',
          subtle: '#C43D2D',
        },
        attention: {
          default: '#D65D2A',
          subtle: '#C45526',
        },
      },
      backgroundColor: '#EBEBEB',
    },
  },
  actions: {
    maxActions: 5,
    buttonSpacing: 8,
    showCard: {
      actionMode: 'Inline',
      inlineTopMargin: 16,
      style: 'emphasis',
    },
    preExpandSingleShowCardAction: false,
    actionsOrientation: 'Horizontal',
    actionAlignment: 'Left',
  },
  adaptiveCard: {
    allowCustomStyle: false,
  },
  imageSet: {
    imageSize: 'Medium',
    maxImageHeight: 100,
  },
  media: {
    allowInlinePlayback: true,
  },
  factSet: {
    title: {
      size: 'Default',
      color: 'Default',
      isSubtle: false,
      weight: 'Bolder',
      wrap: true,
    },
    value: {
      size: 'Default',
      color: 'Default',
      isSubtle: false,
      weight: 'Default',
      wrap: true,
    },
    spacing: 10,
  },
  cssClassNamePrefix: null,
};

export default WebexTeamsHostConfig;