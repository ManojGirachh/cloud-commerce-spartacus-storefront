import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Http } from '@angular/http';
import { ConfigService } from '../config.service';
import { ProductImageConverterService } from './converters/product-image-converter.service';
import { ProductReferenceConverterService } from './converters/product-reference-converter.service';

const PRODUCT_ENDPOINT = 'products/';

@Injectable()
export class OccProductService extends BaseService {

    constructor(
        protected http: Http,
        protected configService: ConfigService,
        protected productImageConverter: ProductImageConverterService,
        protected productReferenceConverter: ProductReferenceConverterService
    ) {
        super(http, configService);
    }
    loadProduct(productCode: string) {
        let url = this.getProductEndpoint();
        url += '/' + productCode;
        url += '?fields=DEFAULT,averageRating,images(FULL),classifications'; // BASIC, DEFAULT, FULL
        return this.promise(url);
    }

    loadProductReviews(productCode: string) {
        let url = this.getProductEndpoint();
        url += '/' + productCode;
        url += '/reviews';
        return this.promise(url);
    }

    loadProductReferences(productCode: string) {
        let url = this.getProductEndpoint();
        url += '/' + productCode;
        url += '?fields=productReferences';
        return this.promise(url);
    }

    promise(url: string): Promise<any> {
        return new Promise((resolve) => {
            this.http.get(url).subscribe((data) => {
                const productData = data.json();
                this.productImageConverter.convertProduct(productData);
                this.productReferenceConverter.convertProduct(productData);
                resolve(productData);
            },
            err => this.logError(err));
        });
    }

//   public createReview = (productCode: string, review: Review): Observable<any> => {

//         let toAdd = JSON.stringify(review);
      
//         let url = this.createEndPoint(PRODUCT_ENDPOINT);
//         url += productCode;
//         url += '/reviews';
//         url += '?alias=' + review.alias;
//         url += '&comment=' + review.comment;
//         url += '&headline=' + review.headline;
//         url += '&rating=' + review.rating;

//     //   url += '?comment=test&headline=hhh&rating=3';

//         let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });

//         return this.http.post(url, toAdd, { headers: headers })
//           .map((response: Response) => response.json())
//           .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
//   }

    logError(err) {
        console.error('There was an error: ' + err);
    }

}