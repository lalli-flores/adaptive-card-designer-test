import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';
import * as markdownit from 'markdown-it';
import * as Designer from 'adaptivecards-designer';

import {WebexTeamsContainer} from './WebexTeamsContainer';

import 'adaptivecards-controls/dist/adaptivecards-controls.css';
import 'adaptivecards-designer/dist/adaptivecards-designer.css';
import './momentum-ui.scss';

function loadDesigner() {
  let hostContainers = [];
  hostContainers.push(new Designer.WebChatContainer('Bot Framework WebChat', 'containers/webchat-container.css'));
  hostContainers.push(new WebexTeamsContainer('Webex Teams', './node_modules/@momentum-ui/core/css/momentum-ui.css'));

  let designer = new Designer.CardDesigner(hostContainers);
  designer.attachTo(document.getElementById('designerRootHost'));
  designer.monacoModuleLoaded(monaco);
}

window.onload = loadDesigner();