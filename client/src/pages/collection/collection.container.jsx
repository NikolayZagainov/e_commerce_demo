import {connect} from 'react-redux';
import {compose} from 'redux';
import {createStructuredSelector} from 'reselect';

import {selectItCollectionLoaded} from '../../redux/shop/shop.selectors';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import CollectionPage from './collection.component';

const mapSateToProps = createStructuredSelector({
    isLoading: (state) => !selectItCollectionLoaded(state)
});

const CollectionPageContainer = compose(
    connect(mapSateToProps),
    WithSpinner
)(CollectionPage);

export default CollectionPageContainer;