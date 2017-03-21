import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
    templateUrl: 'app/products/product-detail.component.html'
})

export class ProductDetailComponent implements OnInit {
    pageTitle: string = 'Product Detail';
    errorMessege: string;
    product: IProduct;

    constructor(private _route: ActivatedRoute,
        private _router: Router,
        private _productService: ProductService) {
    }

    ngOnInit(): void {
        let id = +this._route.snapshot.params['id'];
        this._productService.getProduct(id)
            .subscribe(
            product => this.product = product, error => this.errorMessege = <any>error);
    }

    onBack(): void {
        this._router.navigate(['/productlist']);
    }

    onRatingClicked(message: string): void {
        this.pageTitle = this.pageTitle + ': ' + message;
    }
}