import * as monaco from "monaco-editor/esm/vs/editor/editor.api";
import * as markdownit from "markdown-it";
import * as Designer from "adaptivecards-designer";

import "adaptivecards-controls/dist/adaptivecards-controls.css";
import "adaptivecards-designer/dist/adaptivecards-designer.css";

window.onload = function () {
  let hostContainers = [];
  hostContainers.push(new Designer.WebChatContainer("Bot Framework WebChat", "containers/webchat-container.css"));

  let designer = new Designer.CardDesigner(hostContainers);
  designer.attachTo(document.getElementById("designerRootHost"));
  designer.monacoModuleLoaded(monaco);
}
