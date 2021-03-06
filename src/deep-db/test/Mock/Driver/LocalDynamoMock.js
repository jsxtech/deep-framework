'use strict';

import {LocalDynamo} from '../../../lib/Local/Driver/LocalDynamo';

export class LocalDynamoMock extends LocalDynamo {
  constructor(...args) {
    super(args);
  }

  /**
   * @param {Function} cb
   * @private
   */
  _start(cb) {
    this._running = true;

    cb(null, 'IsRunning');

    return this;
  }
}
