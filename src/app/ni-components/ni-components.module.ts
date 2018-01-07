import { NgModule }              from '@angular/core';
import { CommonModule }          from '@angular/common';
import { FormsModule }           from '@angular/forms';
import { RouterModule } from '@angular/router';

import { TranslateModule } from 'ng2-translate';

import { NiAlertComponent }      from './ni-alert/ni-alert.component';
import { NiBadgeComponent }      from './ni-badge/ni-badge.component';
import { NiBreadcrumbComponent } from './ni-breadcrumb/ni-breadcrumb.component';
import { NiButtonComponent }     from './ni-button/ni-button.component';
import { NiCardComponent }       from './ni-card/ni-card.component';
import { NiChatComponent }       from './ni-chat/ni-chat.component';
import { NiTableComponent, DialogRemoveComponent }       from './ni-table/ni-table.component';
import { NiFileComponent }       from './ni-file/ni-file.component';
import { NiHTimelineComponent }  from './ni-h-timeline/ni-h-timeline.component';

import { ColorDirective }        from './directives/color/color.directive';
import { BgDirective }           from './directives/bg/bg.directive';
import { GradientDirective }     from './directives/gradient/gradient.directive';
import { AutoGrowDirective }     from './directives/auto-grow/auto-grow.directive';

import { MdIconModule, MdProgressBarModule, MdProgressSpinnerModule, MdOptionModule, MdButtonModule, MdSelectModule, MdTooltipModule } from '@angular/material';
import { NiLoadingComponent } from './ni-loading/ni-loading.component';
import { NiPaginationComponent } from './ni-pagination/ni-pagination.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    TranslateModule,
    MdIconModule,
    MdProgressSpinnerModule,
    MdOptionModule,
    MdButtonModule,
    MdSelectModule,
    MdTooltipModule
  ],
  declarations: [
    NiAlertComponent,
    NiBadgeComponent,
    NiBreadcrumbComponent,
    NiButtonComponent,
    NiCardComponent,
    NiChatComponent,
    NiFileComponent,
    NiHTimelineComponent,
    NiTableComponent,
    ColorDirective,
    BgDirective,
    GradientDirective,
    AutoGrowDirective,
    NiLoadingComponent,
    NiPaginationComponent,
    DialogRemoveComponent
  ],
  exports: [
    NiAlertComponent,
    NiBadgeComponent,
    NiBreadcrumbComponent,
    NiButtonComponent,
    NiCardComponent,
    NiChatComponent,
    NiFileComponent,
    NiHTimelineComponent,
    NiTableComponent,
    NiLoadingComponent,
    ColorDirective,
    BgDirective,
    GradientDirective,
    NiPaginationComponent,
    DialogRemoveComponent
  ],
  entryComponents: [
    DialogRemoveComponent
  ]
})
export class NiComponentsModule { }
