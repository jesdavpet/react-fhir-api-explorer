import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import Explorer from './Explorer'
import {
  addInteraction,
  deleteInteraction,
  fetchFhirInto,
  updateInteraction
} from './explorer.reducer'

/* Connects to redux store and reducers, without Component knowing how. */
export default connect(
  state => ({explorer: state.explorer}),
  dispatch => bindActionCreators(
    {
      addInteraction,
      deleteInteraction,
      fetchFhirInto,
      updateInteraction
    },
    dispatch
  )
)(Explorer)

