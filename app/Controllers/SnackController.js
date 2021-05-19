import { ProxyState } from "../AppState.js";

function _drawSnack() {
  let snackTemplate = ""

  ProxyState.snacks.forEach(sn => {
    snackTemplate += /*html*/ `<div class="card">
      <div class="card-body text-center">
        <img src="${sn.img}" height="100">
          <p>${sn.name} - ${sn.price}</p>
    </div>
      </div>`})
  document.getElementById('snack').innerHTML = snackTemplate
}

export class SnackController {
  constructor() {
    ProxyState.on('snacks', _drawSnack)
    _drawSnack()
  }
}