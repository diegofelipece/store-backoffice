import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';

import { Employee } from 'src/app/employee/employee';
import { EmployeeService } from 'src/app/employee/employee.service';
import { Product } from '../product';
import { CategoriesService } from 'src/app/categories/categories.service';
import { Category } from 'src/app/categories/category';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {

  employee: Employee;
  categories: Category[];
  productForm: FormGroup;
  reviews: FormArray;
  constructor(
    private formBuilder: FormBuilder,
    private employeeService: EmployeeService,
    private categoriesService: CategoriesService,
  ) { }

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      title: ['', [Validators.required]],
      category: ['', [Validators.required]],
      price: ['', [Validators.required, Validators.pattern(/[0-9]/)]],
      description: [],
      reviews: this.formBuilder.array([])
    });

    this.reviews = this.productForm.get('reviews') as FormArray;

    this.employeeService.getEmployee().subscribe(employee => this.employee = employee);
    this.categoriesService.getCategories().subscribe(categories => this.categories = categories);
  }

  createReview(): FormGroup {
    return this.formBuilder.group({
      review: '',
    });
  }

  addReview() {
    this.reviews = this.productForm.get('reviews') as FormArray;
    this.reviews.push(this.createReview());
  }

  removeReview(index: number) {
    this.reviews = this.productForm.get('reviews') as FormArray;
    this.reviews.removeAt(index);
  }

  onFormSubmit() {
    if (this.productForm.valid) {
      const {
        title, category, price, description, reviews
      } = this.productForm.value;

      const ProductToSend: Product = {
        title,
        category,
        price: Number(price),
        employee: this.employee.name
      };

      const sanitizedReviews = reviews?.map(({ review }) => review).filter(review => !!review);
      if (reviews && sanitizedReviews.length) {
        ProductToSend.reviews = sanitizedReviews;
      }

      if (description && description.trim()) {
        ProductToSend.description = description;
      }

      console.log('submit', JSON.stringify(ProductToSend));
    }
  }
}
