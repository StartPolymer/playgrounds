// Import the Polymer library and the html helper function.
import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

// Define the class for a new element called custom-element.
class CustomElement extends PolymerElement {
  static get properties() {
    return {
      /* Declare an Array property with a default value.
       *
       * When initializing a property to an object or array value,
       * use a function to ensure that each element gets its own copy
       * of the value, rather than having an object or array shared
       * across all instances of the element.
       */
      myArray: {
        type: Array,
        value: function() { return ['This', 'Is', 'An', 'Array', 'Of', 'Strings']; }
      },

      /* Declare an Object property with a default value.
       *
       * When initializing a property to an object or array value,
       * use a function to ensure that each element gets its own copy
       * of the value, rather than having an object or array shared
       * across all instances of the element.
       */
       myObject: {
        type: Object,
        value: () => { return {
          'firstName': 'Josef',
          'lastName': 'Poly',
          'employeeNumber': 1234,
          'birthdate': new Date('1900-04-16')
        }; }
      }
    }
  }

  displayObjectProperty(change, property) {
    if (property === 'birthdate') {
      return String(new Date(change.base[property]));
    } else {
      return change.base[property];
    }
  }

  displayArray(change) {
    return change.base;
  }

  static get template() {
    return html`
      <p>myArray is: [[displayArray(myArray.*)]]</p>
      <p>myObject is:</p>
      <ul>
        <li>firstName: [[displayObjectProperty(myObject.*, 'firstName')]]</li>
        <li>lastName: [[displayObjectProperty(myObject.*, 'lastName')]]</li>
        <li>employeeNumber: [[displayObjectProperty(myObject.*, 'employeeNumber')]]</li>
        <li>birthdate: [[displayObjectProperty(myObject.*, 'birthdate')]]</li>
      </ul>
    `;
  }
}

// Register the new element with the browser.
customElements.define('custom-element', CustomElement);
