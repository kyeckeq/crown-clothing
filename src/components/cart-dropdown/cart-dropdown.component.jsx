import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import { withRouter } from 'react-router-dom';
import { CartDropdownContainer, CartItemsContainer, EmptyMessage } from './cart-dropdown.styled';

const CartDropdown = ({ cartItems, history, dispatch }) => (
   <CartDropdownContainer>
      <CartItemsContainer>
         {cartItems.length ? (
            cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
         ) : (
            <EmptyMessage>Your cart is empty</EmptyMessage>
         )}
      </CartItemsContainer>
      <CustomButton
         onClick={() => {
            dispatch(toggleCartHidden());
            history.push('/checkout');
         }}>
         GO TO CHECKOUT
      </CustomButton>
   </CartDropdownContainer>
);

const mapStateToProps = state =>
   createStructuredSelector({
      cartItems: selectCartItems
   });

export default withRouter(connect(mapStateToProps)(CartDropdown));
