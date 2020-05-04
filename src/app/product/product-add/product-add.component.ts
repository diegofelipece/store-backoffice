import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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
  reviews: string[] = [];
  productForm: FormGroup;
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
    });

    this.employeeService.getEmployee().subscribe(employee => this.employee = employee);
    this.categoriesService.getCategories().subscribe(categories => this.categories = categories);
  }

  onFormSubmit() {
    if (this.productForm.valid) {
      const {
        title, category, price, description,
      } = this.productForm.value;

      const ProductToSend: Product = {
        title,
        category,
        price: Number(price),
        employee: this.employee.name
      };

      if (this.reviews.length) {
        ProductToSend.reviews = this.reviews;
      }

      if (description) {
        ProductToSend.description = description;
      }

      console.log('submit', JSON.stringify(ProductToSend));
    }
  }

  addReview() {
    this.reviews.push('');
  }

  removeReview(index: number) {
    this.reviews.splice(index, index);
  }

  updateReview(newValue, index: number) {
    console.log('newValue, index: number', { newValue, index });

    this.reviews[index] = newValue;
  }
}
