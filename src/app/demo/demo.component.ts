import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html'
})
export class DemoComponent implements OnInit {

  orderForm: FormGroup;
  items: FormArray = null;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.orderForm = this.fb.group({
      name: '',
      email: '',
      items: this.fb.array([this.createItem()])
    })
    this.items = this.orderForm.get('items') as FormArray;
  }

  createItem(): FormGroup {
    return this.fb.group({
      name: '',
      price: ''
    });
  }

  addItem(): void {
    this.items = this.orderForm.get('items') as FormArray;
    this.items.push(this.createItem());
  }

  removeItem(index): void {
    this.items.removeAt(index);
  }
}
