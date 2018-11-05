export interface RoutesTranslations {
  homepage?: string[];
  cart?: string[];
  search?: string[];
  login?: string[];
  register?: string[];
  resetNewPassword?: string[];
  resetPassword?: string[];
  checkout?: string[];
  orderConfirmation?: string[];
  product?: string[];
  category?: string[];
  storeFinder?: string[];

  // myAccount pages
  // TODO: consider if should be prefixed with myAccount_ or not
  myAccount_orders?: string[];
  myAccount_orderDetails?: string[];

  contact?: string[];
  help?: string[];
  sale?: string[];

  pageNotFound?: string[];
}

export interface ParameterNamesMapping {
  product?: {
    [_: string]: string;
  };
  category?: {
    [_: string]: string;
  };
  myAccount_orderDetails?: {
    [_: string]: string;
  };
}

export interface RoutesConfig {
  translations?: {
    default?: RoutesTranslations;
    [languageCode: string]: RoutesTranslations;
  };
  parameterNamesMapping?: ParameterNamesMapping;
}

export const defaultRoutesConfig: RoutesConfig = {
  translations: {
    default: {
      homepage: [''],
      cart: ['cart'],
      search: ['search/:query'],
      login: ['login'],
      register: ['register'],
      resetNewPassword: ['reset-new-password/:token'],
      resetPassword: ['reset-password'],
      checkout: ['checkout'],
      orderConfirmation: ['order-confirmation'],
      product: ['product/:productCode'],
      category: [
        'category/:categoryCode',
        'category/:categoryCode/:title',
        'Brands/:brandName/c/:brandCode'
      ],
      storeFinder: ['store-finder'],

      myAccount_orders: ['my-account/orders'],
      myAccount_orderDetails: ['my-account/orders/:orderCode'],

      contact: ['contact'],
      help: ['faq'],
      sale: ['sale'],
      pageNotFound: ['**']
    }
  },
  parameterNamesMapping: {
    product: {
      productCode: 'code'
    },
    category: {
      categoryCode: 'code'
    },
    myAccount_orderDetails: {
      orderCode: 'code'
    }
  }
};
