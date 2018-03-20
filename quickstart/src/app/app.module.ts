/*
  Copyright © 2016-2018 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { IntegralUIModule } from './integralui/integralui.module';

import { AppComponent } from './app.component';
import { StartComponent } from './start.component';

import { AccordionSample } from './samples/accordion/accordion-main';
import { AccordionAddRemoveSample } from './samples/accordion/accordion-add-remove';
import { AccordionAddGroupContextMenuSample } from './samples/accordion/accordion-add-group-with-context-menu';
import { AccordionCustomHeaderSample } from './samples/accordion/accordion-custom-header';
import { AccordionHeaderCheckBoxSample } from './samples/accordion/accordion-header-checkbox';
import { AccordionEventsSample } from './samples/accordion/accordion-events';
import { AccordionOverviewSample } from './samples/accordion/accordion-overview';
import { AccordionTooltipSample } from './samples/accordion/accordion-tooltip';

import { ButtonSample } from './samples/button/button-main';
import { ButtonOverviewSample } from './samples/button/button-overview';

import { CheckBoxSample } from './samples/checkbox/checkbox-main';
import { CheckBoxOverviewSample } from './samples/checkbox/checkbox-overview';

import { ComboBoxSample } from './samples/combobox/combobox-main';
import { ComboBoxOverviewSample } from './samples/combobox/combobox-overview';

import { ContextMenuSample } from './samples/contextmenu/contextmenu-main';
import { ContextMenuMultiLevelSample } from './samples/contextmenu/contextmenu-multi-level';
import { ContextMenuOverviewSample } from './samples/contextmenu/contextmenu-overview';
import { ContextMenuTemplateSample } from './samples/contextmenu/contextmenu-templates';

import { DialogSample } from './samples/dialog/dialog-main';
import { DialogOverviewSample } from './samples/dialog/dialog-overview';

import { DropDownButtonSample } from './samples/dropdownbutton/dropdownbutton-main';
import { DropDownButtonOverviewSample } from './samples/dropdownbutton/dropdownbutton-overview';

import { FrameSample } from './samples/frame/frame-main';
import { FrameOverviewSample } from './samples/frame/frame-overview';

import { GridSample } from './samples/grid/grid-main';
import { GridAddRemoveSample } from './samples/grid/grid-add-remove';
import { GridAddRowDynamicallySample } from './samples/grid/grid-add-row-dynamically';
import { GridCellDropDownSample } from './samples/grid/grid-cell-dropdown';
import { GridCellDropDownCheckedListSample } from './samples/grid/grid-cell-dropdown-checked-list';
import { GridCellTemplatesSample } from './samples/grid/grid-cell-templates';
import { GridContextMenuSample } from './samples/grid/grid-context-menu';
import { GridDragDropTreeGridSample } from './samples/grid/grid-drag-drop-treegrid';
import { GridEventsSample } from './samples/grid/grid-events';
import { GridExcelEditorSample } from './samples/grid/grid-excel-editor';
import { GridExportSample } from './samples/grid/grid-export';
import { GridFastLoadSample } from './samples/grid/grid-fast-load';
import { GridFilterSample } from './samples/grid/grid-filter';
import { GridGroupingSample } from './samples/grid/grid-grouping';
import { GridMultiSelectSample } from './samples/grid/grid-multi-select';
import { GridOverviewSample } from './samples/grid/grid-overview';
import { GridPaginationSample } from './samples/grid/grid-pagination';
import { GridShowHideHeaderFooterSample } from './samples/grid/grid-show-hide-header-footer';
import { GridSortingSample } from './samples/grid/grid-sorting';
import { GridTooltipSample } from './samples/grid/grid-tooltip';

import { GroupBoxSample } from './samples/groupbox/groupbox-main';
import { GroupBoxContextMenuSample } from './samples/groupbox/groupbox-context-menu';
import { GroupBoxCustomHeaderSample } from './samples/groupbox/groupbox-custom-header';
import { GroupBoxEventsSample } from './samples/groupbox/groupbox-events';
import { GroupBoxOverviewSample } from './samples/groupbox/groupbox-overview';
import { GroupBoxTooltipSample } from './samples/groupbox/groupbox-tooltip';

import { ListBarSample } from './samples/listbar/listbar-main';
import { ListBarOverviewSample } from './samples/listbar/listbar-overview';

import { ListBoxSample } from './samples/listbox/listbox-main';
import { ListBoxFastLoadSample } from './samples/listbox/listbox-fast-load';
import { ListBoxKeyboardSample } from './samples/listbox/listbox-keyboard';
import { ListBoxOverviewSample } from './samples/listbox/listbox-overview';

import { ListScrollerSample } from './samples/listscroller/listscroller-main';
import { ListScrollerOverviewSample } from './samples/listscroller/listscroller-overview';

import { ListViewSample } from './samples/listview/listview-main';
import { ListViewFastLoadSample } from './samples/listview/listview-fast-load';
import { ListViewKeyboardSample } from './samples/listview/listview-keyboard';
import { ListViewOverviewSample } from './samples/listview/listview-overview';

import { MenuSample } from './samples/menu/menu-main';
import { MenuOverviewSample } from './samples/menu/menu-overview';
import { MenuTemplateSample } from './samples/menu/menu-templates';

import { NumericUpDownSample } from './samples/numeric-updown/numeric-updown-main';
import { NumericUpDownOverviewSample } from './samples/numeric-updown/numeric-updown-overview';

import { SplitContainerSample } from './samples/splitcontainer/splitcontainer-main';
import { SplitContainerOverviewSample } from './samples/splitcontainer/splitcontainer-overview';

import { SplitterSample } from './samples/splitter/splitter-main';
import { SplitterOverviewSample } from './samples/splitter/splitter-overview';

import { PaginatorSample } from './samples/paginator/paginator-main';
import { PaginatorOverviewSample } from './samples/paginator/paginator-overview';

import { ProgressBarSample } from './samples/progressbar/progressbar-main';
import { ProgressBarOverviewSample } from './samples/progressbar/progressbar-overview';

import { RadioButtonSample } from './samples/radiobutton/radiobutton-main';
import { RadioButtonOverviewSample } from './samples/radiobutton/radiobutton-overview';

import { RangeSample } from './samples/range/range-main';
import { RangeOverviewSample } from './samples/range/range-overview';

import { RatingSample } from './samples/rating/rating-main';
import { RatingOverviewSample } from './samples/rating/rating-overview';

import { SlideBarSample } from './samples/slidebar/slidebar-main';
import { SlideBarOverviewSample } from './samples/slidebar/slidebar-overview';

import { SliderSample } from './samples/slider/slider-main';
import { SliderOverviewSample } from './samples/slider/slider-overview';

import { TabStripSample } from './samples/tabstrip/tabstrip-main';
import { TabStripOverviewSample } from './samples/tabstrip/tabstrip-overview';

import { TooltipSample } from './samples/tooltip/tooltip-main';
import { TooltipOverviewSample } from './samples/tooltip/tooltip-overview';

import { TreeGridSample } from './samples/treegrid/treegrid-main';
import { TreeGridAddRemoveSample } from './samples/treegrid/treegrid-add-remove';
import { TreeGridAddRowDynamicallySample } from './samples/treegrid/treegrid-add-row-dynamically';
import { TreeGridCellDropDownSample } from './samples/treegrid/treegrid-cell-dropdown';
import { TreeGridCellDropDownCheckedListSample } from './samples/treegrid/treegrid-cell-dropdown-checked-list';
import { TreeGridCellTemplatesSample } from './samples/treegrid/treegrid-cell-templates';
import { TreeGridContextMenuSample } from './samples/treegrid/treegrid-context-menu';
import { TreeGridDragDropSample } from './samples/treegrid/treegrid-drag-drop';
import { TreeGridEventsSample } from './samples/treegrid/treegrid-events';
import { TreeGridExcelEditorSample } from './samples/treegrid/treegrid-excel-editor';
import { TreeGridExportSample } from './samples/treegrid/treegrid-export';
import { TreeGridFastLoadSample } from './samples/treegrid/treegrid-fast-load';
import { TreeGridFilterSample } from './samples/treegrid/treegrid-filter';
import { TreeGridMultiSelectSample } from './samples/treegrid/treegrid-multi-select';
import { TreeGridOverviewSample } from './samples/treegrid/treegrid-overview';
import { TreeGridPaginationSample } from './samples/treegrid/treegrid-pagination';
import { TreeGridShowHideHeaderFooterSample } from './samples/treegrid/treegrid-show-hide-header-footer';
import { TreeGridSortingSample } from './samples/treegrid/treegrid-sorting';
import { TreeGridTooltipSample } from './samples/treegrid/treegrid-tooltip';

import { TreeListSample } from './samples/treelist/treelist-main';
import { TreeListOverviewSample } from './samples/treelist/treelist-overview';

import { TreeViewSample } from './samples/treeview/treeview-main';
import { TreeViewAddRemoveSample } from './samples/treeview/treeview-add-remove';
import { TreeViewAddItemsDynamicallySample } from './samples/treeview/treeview-add-items-dynamically';
import { TreeViewCheckBoxSample } from './samples/treeview/treeview-checkbox';
import { TreeViewContextMenuSample } from './samples/treeview/treeview-context-menu';
import { TreeViewDragDropSample } from './samples/treeview/treeview-drag-drop';
import { TreeViewEditingSample } from './samples/treeview/treeview-editing';
import { TreeViewEventsSample } from './samples/treeview/treeview-events';
import { TreeViewFastLoadSample } from './samples/treeview/treeview-fast-load';
import { TreeViewFilterSample } from './samples/treeview/treeview-filter';
import { TreeViewKeyboardSample } from './samples/treeview/treeview-keyboard';
import { TreeViewLoadOnDemandSample } from './samples/treeview/treeview-load-on-demand';
import { TreeViewMultiSelectSample } from './samples/treeview/treeview-multi-select';
import { TreeViewOverviewSample } from './samples/treeview/treeview-overview';
import { TreeViewSortingSample } from './samples/treeview/treeview-sorting';
import { TreeViewTooltipSample } from './samples/treeview/treeview-tooltip';

@NgModule({
  	imports:      [ 
  		BrowserModule, 
  		FormsModule, 
  		IntegralUIModule,
  		RouterModule.forRoot([
        	{ path: '', component: StartComponent },
  			  { 
            path: 'accordion', component: AccordionSample,
            children: [
              { path: '', redirectTo: 'overview', pathMatch: 'full' },
              { path: 'add-remove', component: AccordionAddRemoveSample },
              { path: 'context-menu', component: AccordionAddGroupContextMenuSample },
              { path: 'custom-header', component: AccordionCustomHeaderSample },
              { path: 'header-checkbox', component: AccordionHeaderCheckBoxSample },
              { path: 'events', component: AccordionEventsSample },
              { path: 'overview', component: AccordionOverviewSample },
              { path: 'tooltip', component: AccordionTooltipSample }
            ]
          },
          { 
            path: 'button', component: ButtonSample,
            children: [
              { path: '', redirectTo: 'overview', pathMatch: 'full' },
              { path: 'overview', component: ButtonOverviewSample }
            ]
          },
          { 
            path: 'checkbox', component: CheckBoxSample,
            children: [
              { path: '', redirectTo: 'overview', pathMatch: 'full' },
              { path: 'overview', component: CheckBoxOverviewSample }
            ]
          },
	        { 
            path: 'combobox', component: ComboBoxSample,
            children: [
              { path: '', redirectTo: 'overview', pathMatch: 'full' },
              { path: 'overview', component: ComboBoxOverviewSample }
            ]
          },
	        { 
            path: 'contextmenu', component: ContextMenuSample,
            children: [
              { path: '', redirectTo: 'overview', pathMatch: 'full' },
              { path: 'multi-level', component: ContextMenuMultiLevelSample },
              { path: 'overview', component: ContextMenuOverviewSample },
              { path: 'templates', component: ContextMenuTemplateSample }
            ]
          },
          { 
            path: 'dialog', component: DialogSample,
            children: [
              { path: '', redirectTo: 'overview', pathMatch: 'full' },
              { path: 'overview', component: DialogOverviewSample }
            ]
          },
          { 
            path: 'dropdownbutton', component: DropDownButtonSample,
            children: [
              { path: '', redirectTo: 'overview', pathMatch: 'full' },
              { path: 'overview', component: DropDownButtonOverviewSample }
            ]
          },
	        { 
            path: 'frame', component: FrameSample,
            children: [
              { path: '', redirectTo: 'overview', pathMatch: 'full' },
              { path: 'overview', component: FrameOverviewSample }
            ]
          },
          { 
            path: 'grid', component: GridSample,
            children: [
              { path: '', redirectTo: 'overview', pathMatch: 'full' },
              { path: 'add-remove', component: GridAddRemoveSample },
              { path: 'add-row-dynamically', component: GridAddRowDynamicallySample },
              { path: 'cell-dropdown', component: GridCellDropDownSample },
              { path: 'cell-dropdown-checked-list', component: GridCellDropDownCheckedListSample },
              { path: 'cell-templates', component: GridCellTemplatesSample },
              { path: 'context-menu', component: GridContextMenuSample },
              { path: 'drag-drop-treegrid', component: GridDragDropTreeGridSample },
              { path: 'events', component: GridEventsSample },
              { path: 'excel-editor', component: GridExcelEditorSample },
              { path: 'export', component: GridExportSample },
              { path: 'fast-load', component: GridFastLoadSample },
              { path: 'filter', component: GridFilterSample },
              { path: 'grouping', component: GridGroupingSample },
              { path: 'multi-select', component: GridMultiSelectSample },
              { path: 'overview', component: GridOverviewSample },
              { path: 'pagination', component: GridPaginationSample },
              { path: 'show-hide-header-footer', component: GridShowHideHeaderFooterSample },
              { path: 'sorting', component: GridSortingSample },
              { path: 'tooltip', component: GridTooltipSample }
            ]
          },
	        { 
            path: 'groupbox', 
            component: GroupBoxSample,
            children: [
              { path: '', redirectTo: 'overview', pathMatch: 'full' },
              { path: 'context-menu', component: GroupBoxContextMenuSample },
              { path: 'custom-header', component: GroupBoxCustomHeaderSample },
              { path: 'events', component: GroupBoxEventsSample },
              { path: 'overview', component: GroupBoxOverviewSample },
              { path: 'tooltip', component: GroupBoxTooltipSample }
            ]
          },
	        { 
            path: 'listbar', component: ListBarSample,
            children: [
              { path: '', redirectTo: 'overview', pathMatch: 'full' },
              { path: 'overview', component: ListBarOverviewSample }
            ]
          },
	        { 
            path: 'listbox', component: ListBoxSample,
            children: [
              { path: '', redirectTo: 'overview', pathMatch: 'full' },
              { path: 'fast-load', component: ListBoxFastLoadSample },
              { path: 'keyboard', component: ListBoxKeyboardSample },
              { path: 'overview', component: ListBoxOverviewSample }
            ]
          },
          { 
            path: 'listscroller', component: ListScrollerSample,
            children: [
              { path: '', redirectTo: 'overview', pathMatch: 'full' },
              { path: 'overview', component: ListScrollerOverviewSample }
            ]
          },
	        { 
            path: 'listview', component: ListViewSample,
            children: [
              { path: '', redirectTo: 'overview', pathMatch: 'full' },
              { path: 'fast-load', component: ListViewFastLoadSample },
              { path: 'keyboard', component: ListViewKeyboardSample },
              { path: 'overview', component: ListViewOverviewSample }
            ]
          },
	        { 
            path: 'menu', component: MenuSample,
            children: [
              { path: '', redirectTo: 'overview', pathMatch: 'full' },
              { path: 'overview', component: MenuOverviewSample },
              { path: 'templates', component: MenuTemplateSample }
            ]
          },
          { 
            path: 'numeric-updown', component: NumericUpDownSample,
            children: [
              { path: '', redirectTo: 'overview', pathMatch: 'full' },
              { path: 'overview', component: NumericUpDownOverviewSample }
            ]
          },
	        { 
            path: 'splitcontainer', component: SplitContainerSample,
            children: [
              { path: '', redirectTo: 'overview', pathMatch: 'full' },
              { path: 'overview', component: SplitContainerOverviewSample }
            ]
          },
	        { 
            path: 'splitter', component: SplitterSample,
            children: [
              { path: '', redirectTo: 'overview', pathMatch: 'full' },
              { path: 'overview', component: SplitterOverviewSample }
            ]
          },
	        { 
            path: 'paginator', component: PaginatorSample,
            children: [
              { path: '', redirectTo: 'overview', pathMatch: 'full' },
              { path: 'overview', component: PaginatorOverviewSample }
            ]
          },
          { 
            path: 'progressbar', component: ProgressBarSample,
            children: [
              { path: '', redirectTo: 'overview', pathMatch: 'full' },
              { path: 'overview', component: ProgressBarOverviewSample }
            ]
          },
          { 
            path: 'radiobutton', component: RadioButtonSample,
            children: [
              { path: '', redirectTo: 'overview', pathMatch: 'full' },
              { path: 'overview', component: RadioButtonOverviewSample }
            ]
          },
	        { 
            path: 'range', component: RangeSample,
            children: [
              { path: '', redirectTo: 'overview', pathMatch: 'full' },
              { path: 'overview', component: RangeOverviewSample }
            ]
          },
          { 
            path: 'rating', component: RatingSample,
            children: [
              { path: '', redirectTo: 'overview', pathMatch: 'full' },
              { path: 'overview', component: RatingOverviewSample }
            ]
          },
	        { 
            path: 'slidebar', component: SlideBarSample,
            children: [
              { path: '', redirectTo: 'overview', pathMatch: 'full' },
              { path: 'overview', component: SlideBarOverviewSample }
            ]
          },
          { 
            path: 'slider', component: SliderSample,
            children: [
              { path: '', redirectTo: 'overview', pathMatch: 'full' },
              { path: 'overview', component: SliderOverviewSample }
            ]
          },
	        { 
            path: 'tabstrip', component: TabStripSample,
            children: [
              { path: '', redirectTo: 'overview', pathMatch: 'full' },
              { path: 'overview', component: TabStripOverviewSample }
            ]
          },
	        { 
            path: 'tooltip', component: TooltipSample,
            children: [
              { path: '', redirectTo: 'overview', pathMatch: 'full' },
              { path: 'overview', component: TooltipOverviewSample }
            ]
          },
	        { 
            path: 'treegrid', component: TreeGridSample,
            children: [
              { path: '', redirectTo: 'overview', pathMatch: 'full' },
              { path: 'add-remove', component: TreeGridAddRemoveSample },
              { path: 'add-row-dynamically', component: TreeGridAddRowDynamicallySample },
              { path: 'cell-dropdown', component: TreeGridCellDropDownSample },
              { path: 'cell-dropdown-checked-list', component: TreeGridCellDropDownCheckedListSample },
              { path: 'cell-templates', component: TreeGridCellTemplatesSample },
              { path: 'context-menu', component: TreeGridContextMenuSample },
              { path: 'drag-drop', component: TreeGridDragDropSample },
              { path: 'events', component: TreeGridEventsSample },
              { path: 'excel-editor', component: TreeGridExcelEditorSample },
              { path: 'export', component: TreeGridExportSample },
              { path: 'fast-load', component: TreeGridFastLoadSample },
              { path: 'filter', component: TreeGridFilterSample },
              { path: 'multi-select', component: TreeGridMultiSelectSample },
              { path: 'overview', component: TreeGridOverviewSample },
              { path: 'pagination', component: TreeGridPaginationSample },
              { path: 'show-hide-header-footer', component: TreeGridShowHideHeaderFooterSample },
              { path: 'sorting', component: TreeGridSortingSample },
              { path: 'tooltip', component: TreeGridTooltipSample }
            ]
          },
	        { 
            path: 'treelist', component: TreeListSample,
            children: [
              { path: '', redirectTo: 'overview', pathMatch: 'full' },
              { path: 'overview', component: TreeListOverviewSample }
            ]
          },
	        { 
            path: 'treeview', component: TreeViewSample,
            children: [
              { path: '', redirectTo: 'overview', pathMatch: 'full' },
              { path: 'add-remove', component: TreeViewAddRemoveSample },
              { path: 'add-items-dynamically', component: TreeViewAddItemsDynamicallySample },
              { path: 'checkbox', component: TreeViewCheckBoxSample },
              { path: 'context-menu', component: TreeViewContextMenuSample },
              { path: 'drag-drop', component: TreeViewDragDropSample },
              { path: 'editing', component: TreeViewEditingSample },
              { path: 'events', component: TreeViewEventsSample },
              { path: 'fast-load', component: TreeViewFastLoadSample },
              { path: 'filter', component: TreeViewFilterSample },
              { path: 'keyboard', component: TreeViewKeyboardSample },
              { path: 'load-on-demand', component: TreeViewLoadOnDemandSample },
              { path: 'multi-select', component: TreeViewMultiSelectSample },
              { path: 'overview', component: TreeViewOverviewSample },
              { path: 'sorting', component: TreeViewSortingSample },
              { path: 'tooltip', component: TreeViewTooltipSample }
            ]
          },
  			  //{ path: '**', component: NotFoundSample }
  		])
  	],
  	declarations: [ 
  		AppComponent, 
  		StartComponent,
        AccordionSample,
        AccordionAddRemoveSample,
        AccordionAddGroupContextMenuSample,
        AccordionCustomHeaderSample,
        AccordionHeaderCheckBoxSample,
        AccordionEventsSample,
        AccordionOverviewSample,
        AccordionTooltipSample,
        ButtonSample,
        ButtonOverviewSample,
        CheckBoxSample,
        CheckBoxOverviewSample,
        ComboBoxSample,
        ComboBoxOverviewSample,
        ContextMenuSample,
        ContextMenuMultiLevelSample,
        ContextMenuOverviewSample,
        ContextMenuTemplateSample,
        DialogSample,
        DialogOverviewSample,
        DropDownButtonSample,
        DropDownButtonOverviewSample,
        FrameSample,
        FrameOverviewSample,
        GridSample,
        GridAddRemoveSample,
        GridAddRowDynamicallySample,
        GridCellDropDownSample,
        GridCellDropDownCheckedListSample,
        GridCellTemplatesSample,
        GridContextMenuSample,
        GridDragDropTreeGridSample,
        GridEventsSample,
        GridExcelEditorSample,
        GridExportSample,
        GridFastLoadSample,
        GridFilterSample,
        GridGroupingSample,
        GridMultiSelectSample,
        GridOverviewSample,
        GridPaginationSample,
        GridShowHideHeaderFooterSample,
        GridSortingSample,
        GridTooltipSample,
        GroupBoxSample,
        GroupBoxContextMenuSample,
        GroupBoxCustomHeaderSample,
        GroupBoxEventsSample,
        GroupBoxOverviewSample,
        GroupBoxTooltipSample,
        ListBarSample,
        ListBarOverviewSample,
        ListBoxSample,
        ListBoxFastLoadSample,
        ListBoxKeyboardSample,
        ListBoxOverviewSample,
        ListScrollerSample,
        ListScrollerOverviewSample,
        ListViewSample,
        ListViewFastLoadSample,
        ListViewKeyboardSample,
        ListViewOverviewSample,
        MenuSample,
        MenuOverviewSample,
        MenuTemplateSample,
        NumericUpDownSample,
        NumericUpDownOverviewSample,
        PaginatorSample,
        PaginatorOverviewSample,
        ProgressBarSample,
        ProgressBarOverviewSample,
        RadioButtonSample,
        RadioButtonOverviewSample,
        RangeSample,
        RangeOverviewSample,
        RatingSample,
        RatingOverviewSample,
        SlideBarSample,
        SlideBarOverviewSample,
        SliderSample,
        SliderOverviewSample,
        SplitContainerSample,
        SplitContainerOverviewSample,
        SplitterSample,
        SplitterOverviewSample,
        TabStripSample,
        TabStripOverviewSample,
        TooltipSample,
        TooltipOverviewSample,
        TreeGridSample,
        TreeGridAddRemoveSample,
        TreeGridAddRowDynamicallySample,
        TreeGridCellDropDownSample,
        TreeGridCellDropDownCheckedListSample,
        TreeGridCellTemplatesSample,
        TreeGridContextMenuSample,
        TreeGridDragDropSample,
        TreeGridEventsSample,
        TreeGridExcelEditorSample,
        TreeGridExportSample,
        TreeGridFastLoadSample,
        TreeGridFilterSample,
        TreeGridMultiSelectSample,
        TreeGridOverviewSample,
        TreeGridPaginationSample,
        TreeGridShowHideHeaderFooterSample,
        TreeGridSortingSample,
        TreeGridTooltipSample,
        TreeListSample,
        TreeListOverviewSample,
        TreeViewSample,
        TreeViewAddRemoveSample,
        TreeViewAddItemsDynamicallySample,
        TreeViewCheckBoxSample,
        TreeViewContextMenuSample,
        TreeViewDragDropSample,
        TreeViewEditingSample,
        TreeViewEventsSample,
        TreeViewFastLoadSample,
        TreeViewFilterSample,
        TreeViewKeyboardSample,
        TreeViewLoadOnDemandSample,
        TreeViewMultiSelectSample,
        TreeViewOverviewSample,
        TreeViewSortingSample,
        TreeViewTooltipSample
  	],
  	bootstrap: [ AppComponent ]
})
export class AppModule { }