import type { Schema, Attribute } from '@strapi/strapi';

export interface CartItemsArticlesDAchat extends Schema.Component {
  collectionName: 'components_cart_items_articles_d_achats';
  info: {
    displayName: "Articles d'achat";
    icon: 'shoppingCart';
    description: '';
  };
  attributes: {
    produit: Attribute.Relation<
      'cart-items.articles-d-achat',
      'oneToOne',
      'api::product.product'
    >;
    nombre_articles: Attribute.Integer;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'cart-items.articles-d-achat': CartItemsArticlesDAchat;
    }
  }
}
