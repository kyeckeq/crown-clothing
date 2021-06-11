import { createSelector } from 'reselect';
import memoize from 'lodash.memoize';

const selectShop = state => {
   console.log('selectShop:', state);
   return state.shop;
};

export const selectCollections = createSelector([selectShop], shop => shop.collections);

export const selectCollectionsForPreview = createSelector([selectCollections], collections =>
   collections ? Object.keys(collections).map(key => collections[key]) : []
);

export const selectCollection = memoize(collectionUrlParam =>
   createSelector([selectCollections], collections => (collections ? collections[collectionUrlParam] : null))
);

export const selectIsCollectionFetching = createSelector([selectShop], shop => shop.isFetching);
export const selectIsCollectionsLoaded = createSelector([selectShop], shop => !!shop.collections);

// Alternative to selectCollection above:
// const selectCollectionId = (state, props) => props.match.params.collectionId;

// export const selectShopCollection2 = createSelector(
//   [selectCollections, selectCollectionId],
//   (collections, selectCollectionId) => collections[selectCollectionId]
// );
