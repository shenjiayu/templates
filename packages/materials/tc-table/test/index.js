import Vue from 'vue';
import TCTable from '../src';

Vue.use(TCTable);

describe('<tc-table>', () => {
  describe('props', () => {
    it('striped', () => {
      const vm = new Vue({
        template: '<tc-table striped></tc-table>',
      }).$mount();

      expect(vm.$el.classList.contains('tc-table--striped')).to.be.true;
    });

    it('bordered', () => {
      const vm = new Vue({
        template: '<tc-table bordered></tc-table>',
      }).$mount();

      expect(vm.$el.classList.contains('tc-table--bordered')).to.be.true;
    });

    it('hoverable', () => {
      const vm = new Vue({
        template: '<tc-table hoverable></tc-table>',
      }).$mount();

      expect(vm.$el.classList.contains('tc-table--hoverable')).to.be.true;
    });

    it('responsive', () => {
      const vm = new Vue({
        template: '<tc-table responsive></tc-table>',
      }).$mount();

      expect(vm.$el.classList.contains('tc-table--responsive')).to.be.true;
    });

    it('size', () => {
      const vm = new Vue({
        template: '<tc-table size="small"></tc-table>',
      }).$mount();

      expect(vm.$el.classList.contains('tc-table--small')).to.be.true;
    });

    it('selectable', (done) => {
      const vm = new Vue({
        data() {
          return {
            data: [
              ['cell content'],
            ],
          };
        },

        template: '<tc-table :data="data" selectable></tc-table>',
      }).$mount();

      setTimeout(() => {
        const $row = vm.$el.querySelector('tr');

        $row.click();
        setTimeout(() => {
          expect($row.classList.contains('tc-table__row--selected')).to.be.true;
          done();
        }, 100);
      }, 100);
    });

    it('multiple', (done) => {
      const vm = new Vue({
        data() {
          return {
            data: [
              ['cell content'],
              ['cell content'],
            ],
          };
        },

        template: '<tc-table :data="data" selectable multiple></tc-table>',
      }).$mount();

      setTimeout(() => {
        const $firstRow = vm.$el.querySelector('tr:first-child');
        const $lastRow = vm.$el.querySelector('tr:last-child');

        $firstRow.click();
        $lastRow.click();
        setTimeout(() => {
          expect($firstRow.classList.contains('tc-table__row--selected')).to.be.true;
          expect($lastRow.classList.contains('tc-table__row--selected')).to.be.true;
          done();
        }, 100);
      }, 100);
    });

    it('controls', (done) => {
      const vm = new Vue({
        data() {
          return {
            data: [
              ['cell content'],
            ],
          };
        },

        template: (
          '<div>' +
            '<tc-table :data="data" selectable controls></tc-table>' +
            '<tc-table :data="data" selectable controls multiple></tc-table>' +
          '</div>'
        ),
      }).$mount();

      setTimeout(() => {
        expect(vm.$el.querySelectorAll('table:first-child .tc-radio').length).to.equal(1);
        expect(vm.$el.querySelectorAll('table:last-child .tc-checkbox').length).to.equal(1);
        done();
      }, 100);
    });

    it('selectedRows', (done) => {
      const vm = new Vue({
        data() {
          return {
            data: [
              ['cell content'],
              ['cell content'],
            ],
          };
        },

        template: '<tc-table :data="data" :selected-rows="data.slice(0, 1)" selectable></tc-table>',
      }).$mount();

      setTimeout(() => {
        expect(vm.$el.querySelector('tr:first-child').classList.contains('tc-table__row--selected')).to.be.true;
        done();
      }, 100);
    });

    it('disabledRows', (done) => {
      const vm = new Vue({
        data() {
          return {
            data: [
              ['cell content'],
              ['cell content'],
            ],
          };
        },

        template: '<tc-table :data="data" :disabled-rows="data.slice(0, 1)" selectable></tc-table>',
      }).$mount();

      setTimeout(() => {
        expect(vm.$el.querySelector('tr:first-child').classList.contains('tc-table__row--disabled')).to.be.true;
        done();
      }, 100);
    });

    it('caption', (done) => {
      const vm = new Vue({
        template: '<tc-table caption="Caption"></tc-table>',
      }).$mount();

      setTimeout(() => {
        expect(vm.$el.querySelector('caption').textContent).to.equal('Caption');
        done();
      }, 100);
    });

    it('colgroup', (done) => {
      const vm = new Vue({
        template: '<tc-table :colgroup="[{ span: 2 }]"></tc-table>',
      }).$mount();

      setTimeout(() => {
        expect(vm.$el.querySelector('col').span).to.equal(2);
        done();
      }, 100);
    });
  });

  describe('methods', () => {
    it('select', (done) => {
      const vm = new Vue({
        data() {
          return {
            data: [
              ['cell content'],
              ['cell content'],
            ],
          };
        },

        template: '<tc-table ref="table" :data="data" selectable multiple></tc-table>',
      }).$mount();

      setTimeout(() => {
        const $table = vm.$refs.table;

        $table.select(vm.data[0]);
        setTimeout(() => {
          const $firstRow = vm.$el.querySelector('tr:first-child');

          expect($firstRow.classList.contains('tc-table__row--selected')).to.be.true;
          $table.select(vm.data[0], true);
          setTimeout(() => {
            expect($firstRow.classList.contains('tc-table__row--selected')).to.be.false;
            $table.select(true);
            setTimeout(() => {
              expect(vm.$el.querySelectorAll('.tc-table__row--selected').length).to.equal(2);
              $table.select(true, true);
              setTimeout(() => {
                expect(vm.$el.querySelectorAll('.tc-table__row--selected').length).to.equal(0);
                done();
              }, 100);
            }, 100);
          }, 100);
        }, 100);
      }, 100);
    });
  });

  describe('events', () => {
    it('change', (done) => {
      const vm = new Vue({
        data() {
          return {
            data: [
              ['cell content'],
              ['cell content'],
            ],
          };
        },

        template: '<tc-table ref="table" :data="data" @change="change" selectable></tc-table>',

        methods: {
          change(selectedRows) {
            expect(selectedRows[0]).to.equal(this.data[0]);
            done();
          },
        },
      }).$mount();

      setTimeout(() => {
        vm.$refs.table.select(vm.data[0]);
      }, 100);
    });
  });

  describe('data', () => {
    it('section', (done) => {
      const vm = new Vue({
        data() {
          return {
            data: [
              {
                tag: 'thead',
                rows: [
                  ['cell content'],
                ],
              },
              {
                tag: 'tbody',
                rows: [
                  ['cell content'],
                ],
              },
              {
                tag: 'tfoot',
                rows: [
                  ['cell content'],
                ],
              },
            ],
          };
        },

        template: '<tc-table :data="data"></tc-table>',
      }).$mount();

      setTimeout(() => {
        expect(vm.$el.firstElementChild.tagName.toLowerCase()).to.equal('thead');
        expect(vm.$el.firstElementChild.nextElementSibling.tagName.toLowerCase()).to.equal('tbody');
        expect(vm.$el.lastElementChild.tagName.toLowerCase()).to.equal('tfoot');
        done();
      }, 100);
    });

    it('row', (done) => {
      const vm = new Vue({
        data() {
          return {
            data: [
              {
                cells: ['cell content'],
                selected: true,
              },
              {
                cells: ['cell content'],
                disabled: true,
              },
            ],
          };
        },

        template: '<tc-table :data="data" selectable></tc-table>',
      }).$mount();

      setTimeout(() => {
        expect(vm.$el.querySelector('tr:first-child').classList.contains('tc-table__row--selected')).to.be.true;
        expect(vm.$el.querySelector('tr:last-child').classList.contains('tc-table__row--disabled')).to.be.true;
        done();
      }, 100);
    });

    it('cell', (done) => {
      const vm = new Vue({
        data() {
          return {
            data: [
              [
                {
                  content: 'cell content',
                  tag: 'th',
                },
                {
                  content: 'cell content',
                  colSpan: 2,
                },
              ],
              [
                '<p>HTML as cell content</p>',
                {
                  template: '<p>Vue component as cell content</p>',
                },
                createElement => createElement('p', ['Vue render function as cell content']),
              ],
            ],
          };
        },

        template: '<tc-table :data="data" selectable></tc-table>',
      }).$mount();

      setTimeout(() => {
        expect(vm.$el.querySelector('tr:first-child > :first-child').tagName.toLowerCase()).to.equal('th');
        expect(vm.$el.querySelector('tr:first-child > :last-child').colSpan).to.equal(2);
        expect(vm.$el.querySelectorAll('tr:last-child p').length).to.equal(3);
        done();
      }, 100);
    });
  });

  describe('misc', () => {
    it('sorting', (done) => {
      const vm = new Vue({
        data() {
          return {
            data: [
              {
                tag: 'thead',
                rows: [
                  [
                    {
                      content: 'cell content',
                      sortable: true,
                    },
                  ],
                ],
              },
              {
                tag: 'tbody',
                rows: [
                  ['cell content 2'],
                  ['cell content 3'],
                  ['cell content 1'],
                ],
              },
            ],
          };
        },

        template: '<tc-table :data="data"></tc-table>',
      }).$mount();

      setTimeout(() => {
        const $headerCell = vm.$el.querySelector('thead th');

        $headerCell.click();
        setTimeout(() => {
          expect(vm.$el.querySelector('tbody > tr:first-child > td').textContent).to.contains('1');
          $headerCell.click();
          setTimeout(() => {
            expect(vm.$el.querySelector('tbody > tr:first-child > td').textContent).to.contains('3');
            $headerCell.click();
            setTimeout(() => {
              expect(vm.$el.querySelector('tbody > tr:first-child > td').textContent).to.contains('2');
              done();
            }, 100);
          }, 100);
        }, 100);
      }, 100);
    });
  });
});
