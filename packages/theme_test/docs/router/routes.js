import Home from '../views/index.vue';

// Components
import Alert from '../../../materials/tc-alert/docs/index.md';
import Badge from '../../../materials/tc-badge/docs/index.md';
import Nav from '../../../materials/tc-nav/docs/index.md';
import Breadcrumb from '../../../materials/tc-breadcrumb/docs/index.md';
import Button from '../../../materials/tc-button/docs/index.md';
import Card from '../../../materials/tc-card/docs/index.md';
import Carousel from '../../../materials/tc-carousel/docs/index.md';
import Cascader from '../../../materials/tc-cascader/docs/index.md';
import Checkbox from '../../../materials/tc-checkbox/docs/index.md';
import Col from '../../../materials/tc-col/docs/index.md';
import Collapse from '../../../materials/tc-collapse/docs/index.md';
import Container from '../../../materials/tc-container/docs/index.md';
import Dropdown from '../../../materials/tc-dropdown/docs/index.md';
import Icon from '../../../materials/tc-icon/docs/index.md';
import Input from '../../../materials/tc-input/docs/index.md';
import Loading from '../../../materials/tc-loading/docs/index.md';
import NumberInput from '../../../materials/tc-number-input/docs/index.md';
import Popover from '../../../materials/tc-popover/docs/index.md';
import Progress from '../../../materials/tc-progress/docs/index.md';
import Radio from '../../../materials/tc-radio/docs/index.md';
import Rate from '../../../materials/tc-rate/docs/index.md';
import Row from '../../../materials/tc-row/docs/index.md';
import Select from '../../../materials/tc-select/docs/index.md';
import Slider from '../../../materials/tc-slider/docs/index.md';
import Step from '../../../materials/tc-step/docs/index.md';
import Switch from '../../../materials/tc-switch/docs/index.md';
import Table from '../../../materials/tc-table/docs/index.md';
import Tag from '../../../materials/tc-tag/docs/index.md';
import Textarea from '../../../materials/tc-textarea/docs/index.md';
import Tooltip from '../../../materials/tc-tooltip/docs/index.md';
import Tree from '../../../materials/tc-tree/docs/index.md';
import Upload from '../../../materials/tc-upload/docs/index.md';

export default [
  {
    path: '/',
    alias: '/components',
    component: Home,
    children: [
      {
        name: 'alert',
        path: 'alert',
        meta: {
          group: 'Notice',
          title: 'Alert',
        },
        component: Alert,
      },
      {
        name: 'badge',
        path: 'badge',
        meta: {
          group: 'Data',
          title: 'Badge',
        },
        component: Badge,
      },
      {
        name: 'nav',
        path: 'nav',
        meta: {
          group: 'Navigation',
          title: 'Nav',
        },
        component: Nav,
      },
      {
        name: 'breadcrumb',
        path: 'breadcrumb',
        meta: {
          group: 'Navigation',
          title: 'Breadcrumb',
        },
        component: Breadcrumb,
      },
      {
        name: 'button',
        path: '',
        meta: {
          group: 'Basic',
          title: 'Button',
        },
        component: Button,
      },
      {
        name: 'card',
        path: 'card',
        meta: {
          group: 'Others',
          title: 'Card',
        },
        component: Card,
      },
      {
        name: 'carousel',
        path: 'carousel',
        meta: {
          group: 'Others',
          title: 'Carousel',
        },
        component: Carousel,
      },
      {
        name: 'cascader',
        path: 'cascader',
        meta: {
          group: 'Form',
          title: 'Cascader',
        },
        component: Cascader,
      },
      {
        name: 'checkbox',
        path: 'checkbox',
        meta: {
          group: 'Form',
          title: 'Checkbox',
        },
        component: Checkbox,
      },
      {
        name: 'col',
        path: 'col',
        meta: {
          group: 'Layout',
          title: 'Col',
        },
        component: Col,
      },
      {
        name: 'collapse',
        path: 'collapse',
        meta: {
          group: 'Others',
          title: 'Collapse',
        },
        component: Collapse,
      },
      {
        name: 'container',
        path: 'container',
        meta: {
          group: 'Layout',
          title: 'Container',
        },
        component: Container,
      },
      {
        name: 'dropdown',
        path: 'dropdown',
        meta: {
          group: 'Navigation',
          title: 'Dropdown',
        },
        component: Dropdown,
      },
      {
        name: 'icon',
        path: 'icon',
        meta: {
          group: 'Basic',
          title: 'Icon',
        },
        component: Icon,
      },
      {
        name: 'input',
        path: 'input',
        meta: {
          group: 'Form',
          title: 'Input',
        },
        component: Input,
      },
      {
        name: 'loading',
        path: 'loading',
        meta: {
          group: 'Notice',
          title: 'Loading',
        },
        component: Loading,
      },
      {
        name: 'number-input',
        path: 'number-input',
        meta: {
          group: 'Form',
          title: 'Number input',
        },
        component: NumberInput,
      },
      {
        name: 'popover',
        path: 'popover',
        meta: {
          group: 'Others',
          title: 'Popover',
        },
        component: Popover,
      },
      {
        name: 'progress',
        path: 'progress',
        meta: {
          group: 'Data',
          title: 'Progress',
        },
        component: Progress,
      },
      {
        name: 'radio',
        path: 'radio',
        meta: {
          group: 'Form',
          title: 'Radio',
        },
        component: Radio,
      },
      {
        name: 'rate',
        path: 'rate',
        meta: {
          group: 'Form',
          title: 'Rate',
        },
        component: Rate,
      },
      {
        name: 'row',
        path: 'row',
        meta: {
          group: 'Layout',
          title: 'Row',
        },
        component: Row,
      },
      {
        name: 'select',
        path: 'select',
        meta: {
          group: 'Form',
          title: 'Select',
        },
        component: Select,
      },
      {
        name: 'slider',
        path: 'slider',
        meta: {
          group: 'Form',
          title: 'Slider',
        },
        component: Slider,
      },
      {
        name: 'step',
        path: 'step',
        meta: {
          group: 'Navigation',
          title: 'Step',
        },
        component: Step,
      },
      {
        name: 'switch',
        path: 'switch',
        meta: {
          group: 'Form',
          title: 'Switch',
        },
        component: Switch,
      },
      {
        name: 'table',
        path: 'table',
        meta: {
          group: 'Data',
          title: 'Table',
        },
        component: Table,
      },
      {
        name: 'tag',
        path: 'tag',
        meta: {
          group: 'Data',
          title: 'Tag',
        },
        component: Tag,
      },
      {
        name: 'textarea',
        path: 'textarea',
        meta: {
          group: 'Form',
          title: 'Textarea',
        },
        component: Textarea,
      },
      {
        name: 'tooltip',
        path: 'tooltip',
        meta: {
          group: 'Others',
          title: 'Tooltip',
        },
        component: Tooltip,
      },
      {
        name: 'tree',
        path: 'tree',
        meta: {
          group: 'Data',
          title: 'Tree',
        },
        component: Tree,
      },
      {
        name: 'upload',
        path: 'upload',
        meta: {
          group: 'Form',
          title: 'Upload',
        },
        component: Upload,
      },
    ],
  },
  {
    path: '/*',
    redirect: '/',
  },
];
