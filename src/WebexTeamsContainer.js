import * as Adaptive from 'adaptivecards';
import {HostContainer} from 'adaptivecards-designer';
import WebexTeamsHostConfig from './WebexTeamsHostConfig';

export class WebexTeamsContainer extends HostContainer {

  renderTo(hostElement) {
    this.cardHost.classList.add('WebexTeamsInnerContainer');

    let frame = document.createElement('div');
    frame.className = 'WebexTeamsInnerContainer';
    frame.appendChild(this.cardHost);

    hostElement.appendChild(frame);
  }

  getHostConfig() {
    return new Adaptive.HostConfig(WebexTeamsHostConfig);
  }
}
