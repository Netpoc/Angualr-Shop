import { ProductsService } from "./services/products.service";
export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
  }
  
  export const products = [];

  /*
  Copyright Google LLC. All Rights Reserved.
  Use of this source code is governed by an MIT-style license that
  can be found in the LICENSE file at https://angular.io/license
  */