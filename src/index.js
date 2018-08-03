import _join from 'lodash/join'
import './styles.css'

function component() {
   var element = document.createElement('div')
   element.className = 'styled'

   // Lodash, now imported by this script
   element.innerHTML = _join(['Hello', 'webpack'], ' ')

   return element
}

document.querySelector('.app').appendChild(component())