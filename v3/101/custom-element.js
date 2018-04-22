// Import the Polymer library and the html helper function.
import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

// Define the class for a new element called custom-element.
class CustomElement extends PolymerElement {
  static get properties() {
    return {
      // Declare a Boolean property with a default value.
      myBoolean: {
        type: Boolean,
        value: false
      },

      // Declare a String property with a default value.
      myString: {
        type: String,
        value: 'I am a string.'
      },

      // Declare a Number property with a default value.
      myNumber: {
        type: Number,
        value: 1.123
      },

      // Declare a Date property with a default value.
      myDate: {
        type: Date,
        value: new Date('2000-02-01'),
      }
    };
  }

  static get template() {
    return html`
      <p>myBoolean is: [[myBoolean]]</p>
      <p>myString is: [[myString]]</p>
      <p>myNumber is: [[myNumber]]</p>
      <p>myDate is: [[myDate]]</p>
    `;
  }
}

// Register the new element with the browser.
window.customElements.define('custom-element', CustomElement);
