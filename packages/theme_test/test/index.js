import Vue from 'vue';
import Eks from '../src';

Vue.use(Eks);

describe('eks', () => {
  it('<tc-alert>', () => {
    const vm = new Vue({
      template: '<tc-alert>Alert</tc-alert>',
    }).$mount();

    expect(vm.$el.classList.contains('tc-alert')).to.be.true;
  });

  it('<tc-badge>', () => {
    const vm = new Vue({
      template: '<tc-badge>Badge</tc-badge>',
    }).$mount();

    expect(vm.$el.classList.contains('tc-badge')).to.be.true;
  });

  it('<tc-breadcrumb>', () => {
    const vm = new Vue({
      template: (
        '<tc-breadcrumb>' +
          '<tc-breadcrumb-item>Breadcrumb</tc-breadcrumb-item>' +
        '</tc-breadcrumb>'
      ),
    }).$mount();

    expect(vm.$el.classList.contains('tc-breadcrumb')).to.be.true;
    expect(vm.$el.firstElementChild.classList.contains('tc-breadcrumb__item')).to.be.true;
  });

  it('<tc-button>', () => {
    const vm = new Vue({
      template: '<tc-button type="primary">Button</tc-button>',
    }).$mount();

    expect(vm.$el.classList.contains('tc-button')).to.be.true;
  });

  it('<tc-button-group>', () => {
    const vm = new Vue({
      template: (
        '<tc-button-group>' +
          '<tc-button type="primary">Button</tc-button>' +
        '</tc-button-group>'
      ),
    }).$mount();

    expect(vm.$el.classList.contains('tc-button-group')).to.be.true;
    expect(vm.$el.firstElementChild.classList.contains('tc-button')).to.be.true;
  });

  it('<tc-card>', () => {
    const vm = new Vue({
      template: '<tc-card>Card</tc-card>',
    }).$mount();

    expect(vm.$el.classList.contains('tc-card')).to.be.true;
  });

  it('<tc-carousel>', () => {
    const vm = new Vue({
      template: '<tc-carousel :data="[1, 2, 3]"></tc-carousel>',
    }).$mount();

    expect(vm.$el.classList.contains('tc-carousel')).to.be.true;
  });

  it('<tc-cascader>', () => {
    const vm = new Vue({
      template: '<tc-cascader :data="[{ value: 1 }]"></tc-cascader>',
    }).$mount();

    expect(vm.$el.classList.contains('tc-cascader')).to.be.true;
  });

  it('<tc-checkbox>', () => {
    const vm = new Vue({
      template: '<tc-checkbox>Checkbox</tc-checkbox>',
    }).$mount();

    expect(vm.$el.classList.contains('tc-checkbox')).to.be.true;
  });

  it('<tc-col>', () => {
    const vm = new Vue({
      template: '<tc-col>Col</tc-col>',
    }).$mount();

    expect(vm.$el.classList.contains('tc-col')).to.be.true;
  });

  it('<tc-collapse>', () => {
    const vm = new Vue({
      template: '<tc-collapse>Collapse</tc-collapse>',
    }).$mount();

    expect(vm.$el.classList.contains('tc-collapse')).to.be.true;
  });

  it('<tc-container>', () => {
    const vm = new Vue({
      template: '<tc-container>Container</tc-container>',
    }).$mount();

    expect(vm.$el.classList.contains('tc-container')).to.be.true;
  });

  it('<tc-dropdown>', () => {
    const vm = new Vue({
      template: (
        '<tc-dropdown>' +
          '<tc-dropdown-item>Dropdown</tc-dropdown-item>' +
        '</tc-dropdown>'
      ),
    }).$mount();

    expect(vm.$el.classList.contains('tc-dropdown')).to.be.true;
    expect(vm.$el.firstElementChild.classList.contains('tc-dropdown__item')).to.be.true;
  });

  it('<tc-icon>', () => {
    const vm = new Vue({
      template: '<tc-icon type="feather"></tc-icon>',
    }).$mount();

    expect(vm.$el.classList.contains('tc-icon')).to.be.true;
  });

  it('<tc-input>', () => {
    const vm = new Vue({
      template: '<tc-input placeholder="Input"></tc-input>',
    }).$mount();

    expect(vm.$el.classList.contains('tc-input')).to.be.true;
  });

  it('<tc-input-group>', () => {
    const vm = new Vue({
      template: (
        '<tc-input-group>' +
          '<tc-input></tc-input>' +
        '</tc-input-group>'
      ),
    }).$mount();

    expect(vm.$el.classList.contains('tc-input-group')).to.be.true;
    expect(vm.$el.firstElementChild.classList.contains('tc-input')).to.be.true;
  });

  it('<tc-loading>', () => {
    const vm = new Vue({
      template: '<tc-loading></tc-loading>',
    }).$mount();

    expect(vm.$el.classList.contains('tc-loading')).to.be.true;
  });

  it('<tc-number-input>', () => {
    const vm = new Vue({
      template: '<tc-number-input placeholder="Number input"></tc-number-input>',
    }).$mount();

    expect(vm.$el.classList.contains('tc-number-input')).to.be.true;
  });

  it('<tc-popover>', () => {
    const vm = new Vue({
      template: '<tc-popover target="body" content="Popover"></tc-popover>',
    }).$mount();

    expect(vm.$el.classList.contains('tc-popover')).to.be.true;
  });

  it('<tc-progress>', () => {
    const vm = new Vue({
      template: '<tc-progress :value=".5"></tc-progress>',
    }).$mount();

    expect(vm.$el.classList.contains('tc-progress')).to.be.true;
  });

  it('<tc-radio>', () => {
    const vm = new Vue({
      template: '<tc-radio>Radio</tc-radio>',
    }).$mount();

    expect(vm.$el.classList.contains('tc-radio')).to.be.true;
  });

  it('<tc-rate>', () => {
    const vm = new Vue({
      template: '<tc-rate></tc-rate>',
    }).$mount();

    expect(vm.$el.classList.contains('tc-rate')).to.be.true;
  });

  it('<tc-row>', () => {
    const vm = new Vue({
      template: '<tc-row>Row</tc-row>',
    }).$mount();

    expect(vm.$el.classList.contains('tc-row')).to.be.true;
  });

  it('<tc-select>', () => {
    const vm = new Vue({
      template: '<tc-select :options="[1, 2, 3]"></tc-select>',
    }).$mount();

    expect(vm.$el.classList.contains('tc-select')).to.be.true;
  });

  it('<tc-slider>', () => {
    const vm = new Vue({
      template: '<tc-slider :value="50"></tc-slider>',
    }).$mount();

    expect(vm.$el.classList.contains('tc-slider')).to.be.true;
  });

  it('<tc-step>', () => {
    const vm = new Vue({
      template: (
        '<tc-step>' +
          '<tc-step-item>Step</tc-step-item>' +
        '</tc-step>'
      ),
    }).$mount();

    expect(vm.$el.classList.contains('tc-step')).to.be.true;
    expect(vm.$el.firstElementChild.classList.contains('tc-step__item')).to.be.true;
  });

  it('<tc-switch>', () => {
    const vm = new Vue({
      template: '<tc-switch label="Switch"></tc-switch>',
    }).$mount();

    expect(vm.$el.classList.contains('tc-switch')).to.be.true;
  });

  it('<tc-table>', () => {
    const vm = new Vue({
      template: '<tc-table :data="[[1, 2, 3]]"></tc-table>',
    }).$mount();

    expect(vm.$el.classList.contains('tc-table')).to.be.true;
  });

  it('<tc-tag>', () => {
    const vm = new Vue({
      template: '<tc-tag type="primary">Tag</tc-tag>',
    }).$mount();

    expect(vm.$el.classList.contains('tc-tag')).to.be.true;
  });

  it('<tc-textarea>', () => {
    const vm = new Vue({
      template: '<tc-textarea placeholder="Textarea"></tc-textarea>',
    }).$mount();

    expect(vm.$el.classList.contains('tc-textarea')).to.be.true;
  });

  it('<tc-tooltip>', () => {
    const vm = new Vue({
      template: '<tc-tooltip target="body" content="Tooltip"></tc-tooltip>',
    }).$mount();

    expect(vm.$el.classList.contains('tc-tooltip')).to.be.true;
  });

  it('<tc-tree>', () => {
    const vm = new Vue({
      template: '<tc-tree :data="[{ content: 1 }]"></tc-tree>',
    }).$mount();

    expect(vm.$el.classList.contains('tc-tree')).to.be.true;
  });

  it('<tc-upload>', () => {
    const vm = new Vue({
      template: '<tc-upload url="."></tc-upload>',
    }).$mount();

    expect(vm.$el.classList.contains('tc-upload')).to.be.true;
  });
});
