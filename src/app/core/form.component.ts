import { Component, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from '../model/product.model';
import { Model } from '../model/repository.model';
import { MODES, SharedState, SHARED_STATE } from './sharedState.model';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'paForm',
    templateUrl: "form.component.html",
    styleUrls: ["form.component.css"],
})

export class FormComponent{
    product: Product = new Product();
    lastId: number;
    
    // constructor(private model: Model, @Inject(SHARED_STATE) private stateEvents:Observable<SharedState>){
    //     stateEvents.subscribe((update)=> {
    //         this.product = new Product();
    //         if(update.id != undefined){
    //             Object.assign(this.product, this.model.getProduct(update.id));
    //         }
    //         this.editing = update.mode == MODES.EDIT;
    //     })
    // }

    constructor(private model: Model, activeRoute: ActivatedRoute){
        this.editing = activeRoute.snapshot.params["mode"] == "edit"
        let id = activeRoute.snapshot.params["id"];
        if(id != null ){
            Object.assign(this.product, model.getProduct(id) || new Product())
        }
    }
        editing : boolean = false;
        submitForm(form:NgForm){
            if(form.valid){
            this.model.saveProduct(this.product);
            this.product = new Product();
            //Le formulaire se reset automatiquement à la fin du formulaire
            form.reset();
            }
        }   
    resetForm(){
        this.product = new Product();
    }

    // ngDoCheck() {
    //     if (this.lastId != this.state.id){
    //         this.product = new Product();if(this.state.mode == MODES.EDIT){
    //             Object.assign(this.product, this.model.getProduct(this.state.id));
    //         }
    //         this.lastId = this.state.id;
    //     }
    // }
}