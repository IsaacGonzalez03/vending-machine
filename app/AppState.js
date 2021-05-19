import { Snack } from "./Models/Snack.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"


class AppState extends EventEmitter {
  /** @type {Value[]} */
  money = 0
  snacks = [new Snack("Mountain Dew", 2, 'https://www.vhv.rs/dpng/d/470-4705271_mt-dew-mountain-dew-can-hd-png-download.png'), new Snack("Doritos", 1, 'https://pngimg.com/uploads/doritos/doritos_PNG5.png')]


}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
