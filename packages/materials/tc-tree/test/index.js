import Vue from 'vue';
import TCTree from '../src';

Vue.use(TCTree);

describe('<tc-tree>', () => {
  it('collapsible', () => {
    const vm = new Vue({
      data() {
        return {
          data: [
            {
              content: 'Node 1',
              children: [
                {
                  content: 'Node 1.1',
                },
              ],
            },
          ],
        };
      },

      template: '<tc-tree :data="data" :collapsible="false"></tc-tree>',
    }).$mount();

    expect(vm.$el.classList.contains('tc-tree--collapsible')).to.be.false;
    expect(vm.$el.querySelectorAll('.tc-collapse').length).to.equal(0);
  });

  it('guides', () => {
    const vm = new Vue({
      template: '<tc-tree guides></tc-tree>',
    }).$mount();

    expect(vm.$el.classList.contains('tc-tree--guides')).to.be.true;
  });

  it('hoverable', () => {
    const vm = new Vue({
      template: '<tc-tree hoverable></tc-tree>',
    }).$mount();

    expect(vm.$el.classList.contains('tc-tree--hoverable')).to.be.true;
  });

  it('selectable', (done) => {
    const vm = new Vue({
      data() {
        return {
          data: [
            {
              content: 'Node 1',
              children: [
                {
                  content: 'Node 1.1',
                },
              ],
            },
          ],
        };
      },

      template: '<tc-tree :data="data" selectable></tc-tree>',
    }).$mount();

    setTimeout(() => {
      expect(vm.$el.querySelectorAll('.tc-tree__checkbox').length).to.equal(2);
      done();
    }, 100);
  });

  it('expanded', (done) => {
    const vm = new Vue({
      data() {
        return {
          data: [
            {
              content: 'Node 1',
              children: [
                {
                  content: 'Node 1.1',
                },
              ],
            },
          ],
        };
      },

      template: '<tc-tree :data="data" expanded></tc-tree>',
    }).$mount();

    setTimeout(() => {
      expect(vm.$el.querySelectorAll('.tc-tree__item--expanded').length).to.equal(1);
      done();
    }, 100);
  });

  it('selected', (done) => {
    const vm = new Vue({
      data() {
        return {
          data: [
            {
              content: 'Node 1',
              children: [
                {
                  content: 'Node 1.1',
                },
              ],
            },
          ],
        };
      },

      template: '<tc-tree :data="data" selectable selected></tc-tree>',
    }).$mount();

    setTimeout(() => {
      expect(vm.$el.querySelectorAll('.tc-tree__item--selected').length).to.equal(2);
      done();
    }, 100);
  });

  it('disabled', (done) => {
    const vm = new Vue({
      data() {
        return {
          data: [
            {
              content: 'Node 1',
              children: [
                {
                  content: 'Node 1.1',
                },
              ],
            },
          ],
        };
      },

      template: '<tc-tree :data="data" selectable disabled></tc-tree>',
    }).$mount();

    setTimeout(() => {
      expect(vm.$el.querySelectorAll('.tc-tree__item--disabled').length).to.equal(2);
      done();
    }, 100);
  });

  it('tag', () => {
    const vm = new Vue({
      template: '<tc-tree tag="nav"></tc-tree>',
    }).$mount();

    expect(vm.$el.tagName.toLowerCase()).to.equal('nav');
  });

  describe('methods', () => {
    it('getData', () => {
      const vm = new Vue({
        data() {
          return {
            data: [
              {
                content: 'Node 1',
                children: [
                  {
                    content: 'Node 1.1',
                    children: [
                      {
                        content: 'Node 1.1.1',
                      },
                    ],
                  },
                ],
              },
            ],
          };
        },

        template: '<tc-tree ref="tree" :data="data" expanded selectable selected></tc-tree>',
      }).$mount();
      const data = vm.$refs.tree.getData();

      expect(data[0].expanded).to.be.true;
      expect(data[0].selected).to.be.true;
    });

    it('getExpandedNodes', () => {
      const vm = new Vue({
        data() {
          return {
            data: [
              {
                content: 'Node 1',
                children: [
                  {
                    content: 'Node 1.1',
                    expanded: true,
                    children: [
                      {
                        content: 'Node 1.1.1',
                      },
                    ],
                  },
                ],
              },
            ],
          };
        },

        template: '<tc-tree ref="tree" :data="data"></tc-tree>',
      }).$mount();

      expect(vm.$refs.tree.getExpandedNodes()[0].content).to.equal('Node 1.1');
    });

    it('getSelectedNodes', () => {
      const vm = new Vue({
        data() {
          return {
            data: [
              {
                content: 'Node 1',
                children: [
                  {
                    content: 'Node 1.1',
                    selected: true,
                    children: [
                      {
                        content: 'Node 1.1.1',
                      },
                    ],
                  },
                ],
              },
            ],
          };
        },

        template: '<tc-tree ref="tree" :data="data" selectable></tc-tree>',
      }).$mount();

      expect(vm.$refs.tree.getSelectedNodes()[0].content).to.equal('Node 1.1');
    });
  });

  describe('events', () => {
    it('expand', (done) => {
      const vm = new Vue({
        data() {
          return {
            data: [
              {
                content: 'Node 1',
                children: [
                  {
                    content: 'Node 1.1',
                  },
                ],
              },
            ],
          };
        },

        template: '<tc-tree :data="data" @expand="expand"></tc-tree>',

        methods: {
          expand(target, expanded) {
            expect(expanded).to.be.true;
            done();
          },
        },
      }).$mount();

      setTimeout(() => {
        vm.$el.querySelector('.tc-tree > ul > li > .tc-tree__content > .tc-tree__button').click();
      }, 100);
    });

    it('change', (done) => {
      const vm = new Vue({
        data() {
          return {
            data: [
              {
                content: 'Node 1',
                children: [
                  {
                    content: 'Node 1.1',
                  },
                ],
              },
            ],
          };
        },

        template: '<tc-tree :data="data" @change="change" selectable></tc-tree>',

        methods: {
          change(target, { expanded, selected }) {
            expect(expanded).to.be.true;
            expect(selected).to.be.false;
            done();
          },
        },
      }).$mount();

      setTimeout(() => {
        vm.$el.querySelector('.tc-tree > ul > li > .tc-tree__content > .tc-tree__button').click();
      }, 100);
    });
  });
});
