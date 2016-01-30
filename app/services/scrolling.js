import Ember from 'ember';
import C from 'ui/utils/constants';

const KEYS = [
  C.KEY.UP,
  C.KEY.DOWN,
  C.KEY.LEFT,
  C.KEY.RIGHT,
  C.KEY.PAGE_UP,
  C.KEY.PAGE_DOWN,
  C.KEY.HOME,
  C.KEY.END,
  C.KEY.SPACE,
];

function cancel(e) {
  e.preventDefault();
}

function cancelKey(e) {
  if ( KEYS.indexOf(e.keyCode) >= 0 )
  {
    cancel(e);
  }
}

export default Ember.Service.extend({
  depth: 0,

  disable() {
    this.set('depth', this.get('depth') + 1);
    console.log('disable', this.get('depth'));
    this._disable();
  },

  enable() {
    var depth = Math.max(0, this.get('depth')-1);
    this.set('depth', depth);
    console.log('enable', this.get('depth'));
    if ( depth === 0 )
    {
      this._enable();
    }
  },

  _disable() {
    window.onwheel = cancel;
    window.ontouchmove = cancel;
    document.onkeydown = cancelKey;
  },

  _enable() {
    window.onwheel = null;
    window.ontouchmove = null;
    document.onkeydown = null;
  }
});