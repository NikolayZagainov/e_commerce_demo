import React from 'react';

import {connect} from 'react-redux';

import {createStructuredSelector} from 'reselect';

import './collections-overview.styles.scss';

import CollectionPreview from '../collection-preview/collection.preview.component';

import {selectcollectionForPreview} from '../../redux/shop/shop.selectors';

const CollectionOverview = ({collections}) => (
    <div className='collections-overview'>
        {collections.map(({id, ...otheCollectionProps}) => (
            <CollectionPreview key={id} {...otheCollectionProps}/>
        ))}
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectcollectionForPreview
});

export default connect(mapStateToProps)(CollectionOverview);

