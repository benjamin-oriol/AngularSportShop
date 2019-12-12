import { Routes, RouterModule } from '@angular/router';
import { TableComponent } from './core/table.component';
import { FormComponent } from './core/form.component';

//Ma variable sous forme de tableau
const routes: Routes = [
    //Je fais des objets qui sont des pass
    //localhost:4200/form/edit
    { path: 'form/:mode/:id', component: FormComponent},
    { path: 'form/:mode', component: FormComponent},
    { path: '', component: TableComponent}
]

export const routing = RouterModule.forRoot(routes);
