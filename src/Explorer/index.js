import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import Explorer from './Explorer'
import {addInteraction, deleteInteraction} from './explorer.reducer'

export default connect(
  state => ({explorer: state.explorer}),
  dispatch => bindActionCreators(
    {addInteraction, deleteInteraction},
    dispatch
  )
)(Explorer)

