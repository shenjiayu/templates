import Vue from 'vue';
import TCSelect from '../src';

Vue.use(TCSelect);

describe('<tc-select>', () => {
  it('value', (done) => {
    const vm = new Vue({
      data() {
        return {
          options: [
            {
              label: 'Option 1',
              value: 'Option 1',
            },
            {
              label: 'Option 2',
              value: 'Option 2',
            },
          ],
        };
      },

      template: '<tc-select :options="options" value="Option 2"></tc-select>',
    }).$mount();

    setTimeout(() => {
      expect(vm.$el.value).to.equal('Option 2');
      done();
    }, 100);
  });

  it('size#number', () => {
    const vm = new Vue({
      template: '<tc-select size="3"></tc-select>',
    }).$mount();

    expect(vm.$el.size).to.equal(3);
  });

  it('size#string', () => {
    const vm = new Vue({
      template: '<tc-select size="small"></tc-select>',
    }).$mount();

    expect(vm.$el.classList.contains('tc-select--small')).to.be.true;
  });

  it('inline', () => {
    const vm = new Vue({
      template: '<tc-select inline></tc-select>',
    }).$mount();

    expect(vm.$el.classList.contains('tc-select--inline')).to.be.true;
  });

  it('options', (done) => {
    const vm = new Vue({
      data() {
        return {
          selectedValue: 'Option 3.1',
          options: [
            'Option 1',
            {
              label: 'Option 2',
              value: 'Option 2',
              disabled: true,
            },
            {
              label: 'Option 3 (Group)',
              options: [
                'Option 3.1',
                {
                  label: 'Option 3.2',
                  value: 'Option 3.2',
                },
              ],
            },
          ],
        };
      },

      template: '<tc-select :options="options" v-model="selectedValue"></tc-select>',
    }).$mount();

    setTimeout(() => {
      expect(vm.$el.firstElementChild.value).to.equal('Option 1');
      expect(vm.$el.firstElementChild.nextElementSibling.value).to.equal('Option 2');
      expect(vm.$el.firstElementChild.nextElementSibling.disabled).to.be.true;
      expect(vm.$el.lastElementChild.firstElementChild.selected).to.be.true;
      done();
    }, 100);
  });

  it('placeholder', () => {
    const vm = new Vue({
      template: '<tc-select placeholder="placeholder"></tc-select>',
    }).$mount();

    expect(vm.$el.firstElementChild.textContent).to.equal('placeholder');
  });
});
