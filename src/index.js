import _ from 'lodash'
import './styles.css'

function component() {
   var element = document.createElement('div')
   element.className = 'styled'

   // Lodash, now imported by this script
   element.innerHTML = _.join(['Hello', 'webpack'], ' ')

   return element
}

document.body.appendChild(component())