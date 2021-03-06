# IntegralUI Web for Angular 5

IntegralUI Web is a library built on top of Angular 5 framework. It consists of user interface components, directives and services that can help you create modern web applications. 

![IntegralUI Web 18.1 - 30+ UI Components for Angular](http://www.lidorsystems.com/about/newsletter/images/integralui-web-18100.png)

Here is a brief overview of what is included:

## Components

[Accordion](http://www.lidorsystems.com/support/articles/angular/accordion/accordion-component.aspx) - Displays a list of expandable groups in vertical layout

[Button](http://www.lidorsystems.com/products/web/studio/samples/angular/#/button/overview/) - Represents a button

[CheckBox](http://www.lidorsystems.com/products/web/studio/samples/angular/#/checkbox/overview/) - Represents a check box

[ComboBox](http://www.lidorsystems.com/support/articles/angular/combobox/combobox-component.aspx) - Advanced version of standard ComboBox element

[Dialog](http://www.lidorsystems.com/products/web/studio/samples/angular/#/dialog/overview/) - Displays a modal window

[DropDownButton](http://www.lidorsystems.com/products/web/studio/samples/angular/#/dropdownbutton/overview/) - Represents a button with option to show a dropdown list

[Grid](http://www.lidorsystems.com/support/articles/angular/grid/grid-component.aspx) - Displays tabular data sets

[GroupBox](http://www.lidorsystems.com/support/articles/angular/groupbox/groupbox-component.aspx) - An expandable container with header and content

[ListBar](http://www.lidorsystems.com/support/articles/angular/listbar/listbar-component.aspx) - Displays a list of expandable groups with items

[ListBox](http://www.lidorsystems.com/support/articles/angular/listbox/listbox-component.aspx) - Displays a collection of items with content in custom layouts

[ListScroller](http://www.lidorsystems.com/products/web/studio/samples/angular/#/listscroller/overview/) - Displays a scrollable item list in horizontal or vertical layout

[ListView](http://www.lidorsystems.com/support/articles/angular/listview/listview-component.aspx) - Displays a collection of items using several different views

[Menu](http://www.lidorsystems.com/support/articles/angular/menu/menu-component.aspx) - Allows you to create static or dynamic menus

[NumericUpDown](http://www.lidorsystems.com/products/web/studio/samples/angular/#/numeric-updown/overview/) - Displays a numeric value and allows changes within a range of defined minimum and maximum values

[Paginator](http://www.lidorsystems.com/support/articles/angular/paginator/paginator-component.aspx) - Allows you to divide the content in multiple views in single page

[ProgressBar](http://www.lidorsystems.com/products/web/studio/samples/angular/#/progressbar/overview/) - Visualize the progression of an operation

[RadioButton](http://www.lidorsystems.com/products/web/studio/samples/angular/#/radiobutton/overview/) - Represents a radio button

[Rating](http://www.lidorsystems.com/products/web/studio/samples/angular/#/rating/overview/) - Visualizes ratings

[SlideBar](http://www.lidorsystems.com/support/articles/angular/slidebar/slidebar-component.aspx) - Animates slides composed of custom content

[Slider](http://www.lidorsystems.com/products/web/studio/samples/angular/#/slider/overview/) - Allows changes to a numeric value within a range of defined minimum and maximum values

[SplitContainer](http://www.lidorsystems.com/support/articles/angular/splitcontainer/splitcontainer-component.aspx) - Consists of two resizable panels separated by a splitter with tabs and command buttons

[Splitter](http://www.lidorsystems.com/support/articles/angular/splitter/splitter-component.aspx) - Allows you to resize two block elements during run-time

[TabStrip](http://www.lidorsystems.com/support/articles/angular/tabstrip/tabstrip-component.aspx) - Consists of multiple scrollable panels that share the same space 

[TreeGrid](http://www.lidorsystems.com/support/articles/angular/treegrid/treegrid-component.aspx) - Displays hierarchical data structures in multiple columns

[TreeList](http://www.lidorsystems.com/support/articles/angular/treelist/treelist-component.aspx) - Allows you to navigate through tree hierarchy showing only one list at a time

[TreeView](http://www.lidorsystems.com/support/articles/angular/treeview/treeview-component.aspx) - Displays hierarchical data structures


## Directives

[ContextMenu](http://www.lidorsystems.com/support/articles/angular/contextmenu/contextmenu-component.aspx) - Represents a shortcut menu

<b>DropDown</b> - Represents a dropdown window

[Frame](http://www.lidorsystems.com/support/articles/angular/frame/frame-component.aspx) - Places a grip handle that allows you to resize a container during run-time

[Range](http://www.lidorsystems.com/support/articles/angular/range/range-component.aspx) - Allows you to set limits in which an element can resize during run-time

<b>Resize</b> - Detects changes to the element size and fires notifications when it happens

[Tooltip](http://www.lidorsystems.com/support/articles/angular/tooltip/tooltip-component.aspx) - Adds a tooltip to an element

## Services

<b>Common</b> - Includes a set of common functions usable in most applications

<b>Data</b> - Includes a set of data related functions for different operations like: add/remove, search, etc.

<b>DragDrop</b> - Provides a way to use drag drop operations between custom components or elements.

<b>Filter</b> - Includes a set of related functions for filter operations


All components are inheritable, you can further extend functionalities of specific component by simple create a subclass of component main class. To get access to a specific component, the best way is to import the IntegralUIModule in your application.

## Dependencies

IntegralUI Web requires only the following library:

Angular - v5.0 and above


## DEMO

[Online QuickStart App](http://www.lidorsystems.com/products/web/studio/samples/angular/) - An online demo of each component included


## Installation

Install the repository by running

```bash
npm install https://github.com/lidorsystems/integralui-web.git
```

Open your application module and add a reference to IntegralUI module

```bash
import { IntegralUIModule } from 'integralui-web/bin/integralui.module';

@NgModule({
  imports:      [ IntegralUIModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
```

<b>Note</b>   In order to use a specific component or directive in your application, follow the guidelines from corresponding article. From above links, you can find a separate article available for each component or directive.

### Angular CLI

After installation, in angular-cli.json under styles section add this code line:

```bash
"../node_modules/integralui-web/bin/css/integralui.module.css"
```

To include resources that are used by IntegralUI components in your project during build, add the following code under <b>assets</b> section:

```bash
"~ ... /integralui/resources"
```

### Angular QuickStart App

Add following lines to the app.components.ts file:

```bash
    styleUrls: ['../node_modules/integralui-web/bin/css/integralui.module.css'],
    encapsulation: ViewEncapsulation.None
```

Also copy/paste the content of node_modules/integralui-web/bin/resources/ folder to your project src/resources folder.

If you are using SystemJS, make sure you have the following settings in systemjs.config.js file

```bash
    map: {
      'integralui-web': 'npm:integralui-web'
    },
    packages: {
      'integralui-web': {
        defaultExtension: 'js'
      }
    }
```

## QuickStart App

There is a demo application with source code that contains samples for each component included in the [IntegralUI Web](http://www.lidorsystems.com/products/web/studio/) product package. It can help you to get started quickly with learning about the components and write tests immediatelly.

In order to start this application, you only need to install the Angular 5 libraries. Open the nodejs command prompt, go to application directory and type:

```bash
    npm install
```
After installation completes, start the application by typing:

```bash
    ng serve --open
```

The application will start displaying the main window with links to all components included. Each component window contains a demo and description about the component functionality. You can checkout the sample source code (located under integralui-web/quickstart/src/app/samples subfolder) for more information on the sample and component used.


## Release Notes

This is Trial version of the product. All features are fully functional, except that each component displays a pop-up trial window.

## License Information

You may use this version for the limited purposes of demonstrations, trials or design-time evaluations.

This project has been released under the IntegralUI Web License, and may not be used except in compliance with the License.
A copy of the License should have been installed in the product's root installation directory or it can be found here: [License Agreement](http://www.lidorsystems.com/products/web/iui-web-license-agreement.pdf).

This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language governing rights and limitations under the License.