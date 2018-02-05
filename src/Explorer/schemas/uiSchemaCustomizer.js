import {always, assoc, evolve, map, zipObj} from 'ramda'

/** @private Associates an action to evolve whitelisted properties. */
const evolveListedProperties = action => (list, properties) => evolve(
  zipObj(list, map(always(action), list)),
  properties
)

/** Disables a uiSchema property by flagging it's ui:disabled setting.
    @param {Array<String>} list - property names to disable
    @param {Object} properties - uiSchema properties
    @returns {Object} */
const disableListedProperties = evolveListedProperties(
  assoc('ui:disabled', true)
)

/** Hides a uiSchema property by flagging it's ui:hidden setting.
    @param {Array<String>} list - property names to disable
    @param {Object} properties - uiSchema properties
    @returns {Object} */
const hideListedProperties = evolveListedProperties(
  assoc('ui:hidden', true)
)

/** Marks a uiSchema property as read-only by flagging it's ui:readonly setting.
    @param {Array<String>} list - property names to disable
    @param {Object} properties - uiSchema properties
    @returns {Object} */
const readonlyListedProperties = evolveListedProperties(
  assoc('ui:readonly', true)
)

/** @private */
const DEFAULT_UI_SCHEMA = {}

/** Initializes empty uiSchema object using a schema object.
    @param {Object} @returns {Object} */
const initializeUsingSchema = map(always(DEFAULT_UI_SCHEMA))

/** @private Widgetizes an uiSchema property. @param {Object} @returns {Object} */
const widgetizeProperty = Widget => assoc('ui:widget', Widget)

/** Widgetizes all the properties of a uiSchema object.
    @param {Function} Widget - stateless functional React component
    @returns {Function} - applies the widget to all properties of argument */
const widgetizeAllProperties = Widget => map(widgetizeProperty(Widget))

export {
  disableListedProperties,
  hideListedProperties,
  initializeUsingSchema,
  readonlyListedProperties,
  widgetizeAllProperties
}

