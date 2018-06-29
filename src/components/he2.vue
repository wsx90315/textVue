<template>
  <div >
    <div v-for="it in Tcomponents" :key="it">Vue.component('{{it}}', {{it}})</div>
  </div>
</template>

<script>
export default {
  name: 'App2',
  data () {
    return {
      msg: 'App2',
      Tcomponents : [
            "Affix",
            "Alert",
            "AutoComplete",
            "Avatar",
            "BackTop",
            "Badge",
            "Breadcrumb",
            "BreadcrumbItem",
            "Button",
            "ButtonGroup",
            "Card",
            "Carousel",
            "CarouselItem",
            "Cascader",
            "Checkbox",
            "CheckboxGroup",
            "Col",
            "Collapse",
            "ColorPicker",
            "Content",
            "DatePicker",
            "Dropdown",
            "DropdownItem",
            "DropdownMenu",
            "Footer",
            "Form",
            "FormItem",
            "Header",
            "Icon",
            "Input",
            "InputNumber",
            "Scroll",
            "Sider",
            "Submenu",
            "Layout",
            "LoadingBar",
            "Menu",
            "MenuGroup",
            "MenuItem",
            "Message",
            "Modal",
            "Notice",
            "Option",
            "OptionGroup",
            "Page",
            "Panel",
            "Poptip",
            "Progress",
            "Radio",
            "RadioGroup",
            "Rate",
            "Row",
            "Select",
            "Slider",
            "Spin",
            "Step",
            "Steps",
            "Table",
            "Tabs",
            "TabPane",
            "Tag",
            "Timeline",
            "TimelineItem",
            "TimePicker",
            "Tooltip",
            "Transfer",
            "Tree",
            "Upload"
          ]
    }
  },
  created(){
   
  },
  methods:{
  
  }
}
</script>
