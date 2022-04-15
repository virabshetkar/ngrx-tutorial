import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "", redirectTo: "todo", pathMatch: "full" },
  { path: "todo", loadChildren: () => import("src/app/todo/todo.module").then(m => m.TodoModule) },
  { path: "counter", loadChildren: () => import("src/app/counter/counter.module").then(m => m.CounterModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
