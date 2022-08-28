import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkeletonComponent } from '@layout/skeleton/skeleton.component';

const routes: Routes = [
  {
    path: '',
    component: SkeletonComponent,
    children: [
      {
        path: 'products',
        loadChildren: () =>
          import('@shared/components/product/product.module').then(
            (m) => m.ProductModule
          ),
      },
      {
        path: 'tasks',
        loadChildren: () =>
          import('@shared/components/task/task.module').then(
            (m) => m.TaskModule
          ),
      },
      {
        path: '**',
        redirectTo: "products",
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
