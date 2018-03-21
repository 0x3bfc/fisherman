'use strict'
/* eslint-env browser, webextensions */

const html = require('choo/html')
const logo = require('../logo')

module.exports = function header ({ isIpfsContext, pageActionTitle }) {
  if (!isIpfsContext) return null
  return html`
    <div class="ph2 br2 br--top bg-light-gray bb b--black-20">
      <h2 class="fade-in ma0 pt1 pb2 pl2 tl">
        ${logo({
          size: 20,
          path: '../../../icons',
          ipfsNodeType: 'external',
          isIpfsOnline: true,
          heartbeat: false
        })} <span class="pl1 f6 fw4 v-mid">${pageActionTitle || browser.i18n.getMessage('pageAction_statusPlaceholder')}</span>
      </h2>
    </div>
  `
}
