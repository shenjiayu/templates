import Vue from 'vue';
import TCUpload from '../src';

Vue.use(TCUpload);

const createContainer = () => {
  const el = document.createElement('div');

  document.body.appendChild(el);
  return el;
};

describe('<tc-upload>', () => {
  describe('props', () => {
    describe('accept', () => {
      it('should be empty by default', () => {
        const vm = new Vue({
          template: '<tc-upload url="."></tc-upload>',
        }).$mount();

        expect(vm.$el.querySelector('.tc-upload__input').accept).to.be.empty;
      });

      it('should match the given accept value', () => {
        const vm = new Vue({
          template: '<tc-upload accept="image/*" url="."></tc-upload>',
        }).$mount();

        expect(vm.$el.querySelector('.tc-upload__input').accept).to.equal('image/*');
      });
    });

    describe('auto-upload', () => {
      it('should upload automatically by default', () => {
        new Vue({
          data() {
            return {
              value: [
                {
                  file: {
                    name: 'foo.jpg',
                    size: 0,
                    type: 'image/jpeg',
                  },
                  name: 'foo.jpg',
                  status: 'wait',
                },
              ],
            };
          },

          template: '<tc-upload ref="upload" :on-start="onStart" url="." :value="value"></tc-upload>',

          methods: {
            onStart() {
              expect(true).to.be.true;
            },
          },

          mounted() {
            this.$refs.upload.choose();
          },
        }).$mount();
      });

      it('should not upload automatically', () => {
        new Vue({
          data() {
            return {
              value: [
                {
                  file: {
                    name: 'foo.jpg',
                    size: 0,
                    type: 'image/jpeg',
                  },
                  name: 'foo.jpg',
                  status: 'wait',
                },
              ],
            };
          },

          template: '<tc-upload :auto-upload="false" :on-start="onStart" url="." :value="value"></tc-upload>',

          methods: {
            onStart() {
              expect(false).to.be.true;
            },
          },

          mounted() {
            this.$refs.upload.choose();
          },
        }).$mount();
      });
    });

    describe('capture', () => {
      it('should be null by default', () => {
        const vm = new Vue({
          template: '<tc-upload url="."></tc-upload>',
        }).$mount();

        expect(vm.$el.querySelector('.tc-upload__input').getAttribute('capture')).to.be.null;
      });

      it('should not be null', () => {
        const vm = new Vue({
          template: '<tc-upload capture url="."></tc-upload>',
        }).$mount();

        expect(vm.$el.querySelector('.tc-upload__input').getAttribute('capture')).to.not.be.null;
      });
    });

    describe('disabled', () => {
      it('should not be disabled by default', () => {
        const vm = new Vue({
          template: '<tc-upload url="."></tc-upload>',
        }).$mount();

        expect(vm.$el.querySelector('.tc-upload__input').disabled).to.be.false;
      });

      it('should be disabled', () => {
        const vm = new Vue({
          template: '<tc-upload url="." disabled></tc-upload>',
        }).$mount();

        expect(vm.$el.querySelector('.tc-upload__input').disabled).to.be.true;
      });
    });

    describe('list-type', () => {
      it('should be "text" be default', () => {
        const vm = new Vue({
          data() {
            return {
              value: [
                {
                  name: 'foo.jpg',
                  url: '/foo.jpg',
                },
              ],
            };
          },

          template: '<tc-upload url="." :value="value"></tc-upload>',
        }).$mount();

        expect(vm.$el.classList.contains('tc-upload--text')).to.be.true;
        expect(vm.$el.querySelector('.tc-upload__header > .tc-upload__icon')).to.not.be.null;
      });

      it('should match the given value', () => {
        const vm = new Vue({
          data() {
            return {
              value: [
                {
                  name: 'foo.jpg',
                  url: '/foo.jpg',
                },
              ],
            };
          },

          template: '<tc-upload list-type="picture" url="." :value="value"></tc-upload>',
        }).$mount();

        expect(vm.$el.classList.contains('tc-upload--picture')).to.be.true;
        expect(vm.$el.querySelector('.tc-upload__header > .tc-upload__image')).to.not.be.null;
      });

      it('should not show list', () => {
        const vm = new Vue({
          data() {
            return {
              value: [
                {
                  name: 'foo.jpg',
                  url: '/foo.jpg',
                },
              ],
            };
          },

          template: '<tc-upload list-type="none" url="." :value="value"></tc-upload>',
        }).$mount();

        expect(vm.$el.querySelector('.tc-upload__list')).to.be.null;
      });
    });

    describe('multiple', () => {
      it('should be false by default', () => {
        const vm = new Vue({
          template: '<tc-upload url="."></tc-upload>',
        }).$mount();

        expect(vm.$el.querySelector('.tc-upload__input').multiple).to.be.false;
      });

      it('should be true', () => {
        const vm = new Vue({
          template: '<tc-upload url="." multiple></tc-upload>',
        }).$mount();

        expect(vm.$el.querySelector('.tc-upload__input').multiple).to.be.true;
      });
    });

    describe('name', () => {
      it('should be "file" by default', () => {
        const vm = new Vue({
          template: '<tc-upload url="."></tc-upload>',
        }).$mount();

        expect(vm.$el.querySelector('.tc-upload__input').name).to.equal('file');
      });

      it('should match the given name', () => {
        const vm = new Vue({
          template: '<tc-upload name="image" url="."></tc-upload>',
        }).$mount();

        expect(vm.$el.querySelector('.tc-upload__input').name).to.equal('image');
      });
    });

    describe('on-preview', () => {
      it('should execute the callback function on click content', (done) => {
        const vm = new Vue({
          data() {
            return {
              value: [
                {
                  name: 'foo.jpg',
                  url: '/foo.jpg',
                },
              ],
            };
          },

          template: '<tc-upload :on-preview="onPreview" :value="value" url="."></tc-upload>',

          methods: {
            onPreview(event, item, list) {
              event.preventDefault();
              expect(event.type).to.equal('click');
              expect(item.name).to.equal('foo.jpg');
              expect(list.length).to.equal(1);
              return false;
            },
          },
        }).$mount(createContainer());

        setTimeout(() => {
          vm.$el.querySelector('.tc-upload__content').click();
          done();
        }, 50);
      });
    });

    describe('on-remove', () => {
      it('should execute the callback function on click remove button', (done) => {
        const vm = new Vue({
          data() {
            return {
              value: [
                {
                  name: 'foo.jpg',
                  url: '/foo.jpg',
                },
              ],
            };
          },

          template: '<tc-upload :on-remove="onRemove" v-model="value" url="."></tc-upload>',

          methods: {
            onRemove(event, item, list) {
              expect(event.type).to.equal('click');
              expect(item.name).to.equal('foo.jpg');
              expect(list.length).to.equal(1);
            },
          },
        }).$mount();

        setTimeout(() => {
          vm.$el.querySelector('.tc-upload__remove').click();
          expect(vm.value.length).to.equal(0);
          done();
        }, 50);
      });

      it('should keep file when default prevented', (done) => {
        const vm = new Vue({
          data() {
            return {
              value: [
                {
                  name: 'foo.jpg',
                  url: '/foo.jpg',
                },
              ],
            };
          },

          template: '<tc-upload :on-remove="onRemove" v-model="value" url="."></tc-upload>',

          methods: {
            onRemove(event) {
              event.preventDefault();
            },
          },
        }).$mount();

        setTimeout(() => {
          vm.$el.querySelector('.tc-upload__remove').click();
          expect(vm.value.length).to.equal(1);
          done();
        }, 50);
      });

      it('should keep file when return false', (done) => {
        const vm = new Vue({
          data() {
            return {
              value: [
                {
                  name: 'foo.jpg',
                  url: '/foo.jpg',
                },
              ],
            };
          },

          template: '<tc-upload :on-remove="onRemove" v-model="value" url="."></tc-upload>',

          methods: {
            onRemove() {
              return false;
            },
          },
        }).$mount();

        setTimeout(() => {
          vm.$el.querySelector('.tc-upload__remove').click();
          expect(vm.value.length).to.equal(1);
          done();
        }, 50);
      });
    });

    describe('on-start', () => {
      it('should execute the callback function on upload start', () => {
        new Vue({
          data() {
            return {
              value: [
                {
                  file: {
                    name: 'foo.jpg',
                    size: 0,
                    type: 'image/jpeg',
                  },
                  name: 'foo.jpg',
                  status: 'wait',
                },
              ],
            };
          },

          template: '<tc-upload ref="upload" :on-start="onStart" :on-upload="onUpload" :value="value" url="."></tc-upload>',

          methods: {
            onStart(list) {
              expect(list.length).to.equal(1);
              expect(list[0].name).to.equal('foo.jpg');
            },

            onUpload() {
              expect(true).to.be.true;
            },
          },

          mounted() {
            this.$refs.upload.start();
          },
        }).$mount();
      });

      it('should prevent upload when return false', () => {
        new Vue({
          data() {
            return {
              value: [
                {
                  file: {
                    name: 'foo.jpg',
                    size: 0,
                    type: 'image/jpeg',
                  },
                  name: 'foo.jpg',
                  status: 'wait',
                },
              ],
            };
          },

          template: '<tc-upload ref="upload" :on-start="onStart" :on-upload="onUpload" :value="value" url="."></tc-upload>',

          methods: {
            onStart() {
              return false;
            },

            onUpload() {
              expect(false).to.be.true;
            },
          },

          mounted() {
            this.$refs.upload.start();
          },
        }).$mount();
      });
    });

    describe('on-end', () => {
      it('should execute the callback function on upload end', (done) => {
        new Vue({
          data() {
            return {
              value: [
                {
                  file: {
                    name: 'foo.jpg',
                    size: 0,
                    type: 'image/jpeg',
                  },
                  name: 'foo.jpg',
                  status: 'wait',
                },
              ],
            };
          },

          template: '<tc-upload ref="upload" :on-end="onEnd" :value="value" url="."></tc-upload>',

          methods: {
            onEnd(list) {
              expect(list.length).to.equal(1);
              expect(list[0].name).to.equal('foo.jpg');
              done();
            },
          },

          mounted() {
            this.$refs.upload.start();
          },
        }).$mount();
      });
    });

    describe('before-upload', () => {
      it('should execute the callback function before upload', () => {
        new Vue({
          data() {
            return {
              value: [
                {
                  file: {
                    name: 'foo.jpg',
                    size: 0,
                    type: 'image/jpeg',
                  },
                  name: 'foo.jpg',
                  status: 'wait',
                },
              ],
            };
          },

          template: '<tc-upload ref="upload" :before-upload="beforeUpload" :value="value" url="."></tc-upload>',

          methods: {
            beforeUpload(item, list) {
              expect(item.status).to.equal('wait');
              expect(item.name).to.equal('foo.jpg');
              expect(list.length).to.equal(1);
            },
          },

          mounted() {
            this.$refs.upload.start();
          },
        }).$mount();
      });

      it('should prevent upload when return false', (done) => {
        new Vue({
          data() {
            return {
              value: [
                {
                  file: {
                    name: 'foo.jpg',
                    size: 0,
                    type: 'image/jpeg',
                  },
                  name: 'foo.jpg',
                  status: 'wait',
                },
              ],
            };
          },

          template: '<tc-upload ref="upload" :on-end="onEnd" :before-upload="beforeUpload" :value="value" url="."></tc-upload>',

          methods: {
            beforeUpload() {
              return false;
            },

            onEnd(list) {
              expect(list[0].status).to.equal('wait');
              done();
            },
          },

          mounted() {
            this.$refs.upload.start();
          },
        }).$mount();
      });
    });

    describe('on-upload', () => {
      it('should execute the callback function on the upload start', () => {
        new Vue({
          data() {
            return {
              value: [
                {
                  file: {
                    name: 'foo.jpg',
                    size: 0,
                    type: 'image/jpeg',
                  },
                  name: 'foo.jpg',
                  status: 'wait',
                },
              ],
            };
          },

          template: '<tc-upload ref="upload" :on-upload="onUpload" :value="value" url="."></tc-upload>',

          methods: {
            onUpload(item, list) {
              expect(item.name).to.equal('foo.jpg');
              expect(item.status).to.equal('process');
              expect(list.length).to.equal(1);
            },
          },

          mounted() {
            this.$refs.upload.start();
          },
        }).$mount();
      });
    });

    describe('on-progress', () => {
      it('should execute the callback function on the upload progress change', (done) => {
        new Vue({
          data() {
            return {
              value: [
                {
                  file: {
                    name: 'foo.jpg',
                    size: 0,
                    type: 'image/jpeg',
                  },
                  name: 'foo.jpg',
                  status: 'wait',
                },
              ],
            };
          },

          template: '<tc-upload ref="upload" :on-progress="onProgress" :value="value" url="."></tc-upload>',

          methods: {
            onProgress(event, item, list) {
              expect(event.type).to.equal('progress');
              expect(item.name).to.equal('foo.jpg');
              expect(list.length).to.equal(1);
              done();
            },
          },

          mounted() {
            this.$refs.upload.start();
          },
        }).$mount();
      });
    });

    describe('on-success', () => {
      it('should execute the callback function on the upload success', (done) => {
        new Vue({
          data() {
            return {
              value: [
                {
                  file: {
                    name: 'foo.jpg',
                    size: 0,
                    type: 'image/jpeg',
                  },
                  name: 'foo.jpg',
                  status: 'wait',
                },
              ],
            };
          },

          template: '<tc-upload ref="upload" :on-success="onSuccess" :value="value" url="."></tc-upload>',

          methods: {
            onSuccess(response, item, list) {
              expect(response).to.be.null;
              expect(item.name).to.equal('foo.jpg');
              expect(list.length).to.equal(1);
              done();
            },
          },

          mounted() {
            this.$refs.upload.start();
          },
        }).$mount();
      });
    });

    describe('on-error', () => {
      it('should execute the callback function on the upload error', (done) => {
        new Vue({
          data() {
            return {
              value: [
                {
                  file: {
                    name: 'foo.jpg',
                    size: 0,
                    type: 'image/jpeg',
                  },
                  name: 'foo.jpg',
                  status: 'wait',
                },
              ],
            };
          },

          template: '<tc-upload ref="upload" :on-error="onError" :on-upload="onUpload" :value="value" url="."></tc-upload>',

          methods: {
            onUpload(item) {
              item.xhr.abort();
            },

            onError(error, item, list) {
              expect(error).to.equal('abort');
              expect(item.name).to.equal('foo.jpg');
              expect(list.length).to.equal(1);
              done();
            },
          },

          mounted() {
            this.$refs.upload.start();
          },
        }).$mount();
      });
    });

    describe('on-complete', () => {
      it('should execute the callback function on the upload complete', (done) => {
        new Vue({
          data() {
            return {
              value: [
                {
                  file: {
                    name: 'foo.jpg',
                    size: 0,
                    type: 'image/jpeg',
                  },
                  name: 'foo.jpg',
                  status: 'wait',
                },
              ],
            };
          },

          template: '<tc-upload ref="upload" :on-complete="onComplete" :value="value" url="."></tc-upload>',

          methods: {
            onComplete(item, list) {
              expect(item.name).to.equal('foo.jpg');
              expect(list.length).to.equal(1);
              done();
            },
          },

          mounted() {
            this.$refs.upload.start();
          },
        }).$mount();
      });
    });

    describe('concurrency', () => {
      it('should upload one by one be default', (done) => {
        new Vue({
          data() {
            return {
              value: [
                {
                  file: {
                    name: 'foo.jpg',
                    size: 0,
                    type: 'image/jpeg',
                  },
                  name: 'foo.jpg',
                  status: 'wait',
                },
                {
                  file: {
                    name: 'bar.jpg',
                    size: 0,
                    type: 'image/jpeg',
                  },
                  name: 'bar.jpg',
                  status: 'wait',
                },
              ],
            };
          },

          template: '<tc-upload ref="upload" :on-start="onStart" :value="value" url="https://jsonplaceholder.typicode.com/posts"></tc-upload>',

          methods: {
            onStart(list) {
              setTimeout(() => {
                expect(list[0].status).to.equal('process');
                expect(list[1].status).to.equal('wait');
                done();
              }, 0);
            },
          },

          mounted() {
            this.$refs.upload.start();
          },
        }).$mount();
      });

      it('should upload two files at once', (done) => {
        new Vue({
          data() {
            return {
              value: [
                {
                  file: {
                    name: 'foo.jpg',
                    size: 0,
                    type: 'image/jpeg',
                  },
                  name: 'foo.jpg',
                  status: 'wait',
                },
                {
                  file: {
                    name: 'bar.jpg',
                    size: 0,
                    type: 'image/jpeg',
                  },
                  name: 'bar.jpg',
                  status: 'wait',
                },
                {
                  file: {
                    name: 'bar.jpg',
                    size: 0,
                    type: 'image/jpeg',
                  },
                  name: 'bar.jpg',
                  status: 'wait',
                },
              ],
            };
          },

          template: '<tc-upload ref="upload" :on-start="onStart" :concurrency="2" :value="value" url="https://jsonplaceholder.typicode.com/posts"></tc-upload>',

          methods: {
            onStart(list) {
              setTimeout(() => {
                expect(list[0].status).to.equal('process');
                expect(list[1].status).to.equal('process');
                expect(list[2].status).to.equal('wait');
                done();
              }, 0);
            },
          },

          mounted() {
            this.$refs.upload.start();
          },
        }).$mount();
      });
    });

    describe('removable', () => {
      it('should exist remove button be default', () => {
        const vm = new Vue({
          data() {
            return {
              value: [
                {
                  name: 'foo.jpg',
                  url: '/foo.jpg',
                },
              ],
            };
          },

          template: '<tc-upload :value="value" url="."></tc-upload>',
        }).$mount();

        expect(vm.$el.querySelector('.tc-upload__remove')).to.not.be.null;
      });

      it('should not exist remove button', () => {
        const vm = new Vue({
          data() {
            return {
              value: [
                {
                  name: 'foo.jpg',
                  url: '/foo.jpg',
                },
              ],
            };
          },

          template: '<tc-upload :value="value" url="." :removable="false"></tc-upload>',
        }).$mount();

        expect(vm.$el.querySelector('.tc-upload__remove')).to.be.null;
      });
    });

    describe('response-type', () => {
      it('should be "json" be default', (done) => {
        new Vue({
          data() {
            return {
              value: [
                {
                  file: {
                    name: 'foo.jpg',
                    size: 0,
                    type: 'image/jpeg',
                  },
                  name: 'foo.jpg',
                  status: 'wait',
                },
              ],
            };
          },

          template: '<tc-upload ref="upload" :on-upload="onUpload" :value="value" url="."></tc-upload>',

          methods: {
            onUpload(item) {
              expect(item.xhr.responseType).to.equal('json');
              done();
            },
          },

          mounted() {
            this.$refs.upload.start();
          },
        }).$mount();
      });

      it('should be "text"', (done) => {
        new Vue({
          data() {
            return {
              value: [
                {
                  file: {
                    name: 'foo.jpg',
                    size: 0,
                    type: 'image/jpeg',
                  },
                  name: 'foo.jpg',
                  status: 'wait',
                },
              ],
            };
          },

          template: '<tc-upload ref="upload" :on-upload="onUpload" response-type="text" :value="value" url="."></tc-upload>',

          methods: {
            onUpload(item) {
              expect(item.xhr.responseType).to.equal('text');
              done();
            },
          },

          mounted() {
            this.$refs.upload.start();
          },
        }).$mount();
      });
    });

    describe('timeout', () => {
      it('should be 0 be default', (done) => {
        new Vue({
          data() {
            return {
              value: [
                {
                  file: {
                    name: 'foo.jpg',
                    size: 0,
                    type: 'image/jpeg',
                  },
                  name: 'foo.jpg',
                  status: 'wait',
                },
              ],
            };
          },

          template: '<tc-upload ref="upload" :on-upload="onUpload" :value="value" url="."></tc-upload>',

          methods: {
            onUpload(item) {
              expect(item.xhr.timeout).to.equal(0);
              done();
            },
          },

          mounted() {
            this.$refs.upload.start();
          },
        }).$mount();
      });

      it('should be 10000', (done) => {
        new Vue({
          data() {
            return {
              value: [
                {
                  file: {
                    name: 'foo.jpg',
                    size: 0,
                    type: 'image/jpeg',
                  },
                  name: 'foo.jpg',
                  status: 'wait',
                },
              ],
            };
          },

          template: '<tc-upload ref="upload" :on-upload="onUpload" :timeout="10000" :value="value" url="."></tc-upload>',

          methods: {
            onUpload(item) {
              expect(item.xhr.timeout).to.equal(10000);
              done();
            },
          },

          mounted() {
            this.$refs.upload.start();
          },
        }).$mount();
      });
    });

    describe('value', () => {
      it('should be normalized', () => {
        const vm = new Vue({
          data() {
            return {
              value: [
                {
                  name: 'foo.jpg',
                  url: '/foo.jpg',
                },
              ],
            };
          },

          template: '<tc-upload ref="upload" :value="value" url="."></tc-upload>',
        }).$mount();
        const { list } = vm.$refs.upload;

        expect(list.length).to.equal(1);
        expect(list[0].raw.name).to.deep.equal('foo.jpg');
      });

      it('should support v-model', (done) => {
        const vm = new Vue({
          data() {
            return {
              value: [
                {
                  name: 'foo.jpg',
                  url: '/foo.jpg',
                },
              ],
            };
          },

          template: '<tc-upload ref="upload" v-model="value" url="."></tc-upload>',

          mounted() {
            this.$refs.upload.update();
          },
        }).$mount();

        setTimeout(() => {
          expect(vm.value.length).to.equal(1);
          expect(vm.value[0].raw.name).to.deep.equal('foo.jpg');
          done();
        }, 50);
      });
    });

    describe('with-credentials', () => {
      it('should be false be default', (done) => {
        new Vue({
          data() {
            return {
              value: [
                {
                  file: {
                    name: 'foo.jpg',
                    size: 0,
                    type: 'image/jpeg',
                  },
                  name: 'foo.jpg',
                  status: 'wait',
                },
              ],
            };
          },

          template: '<tc-upload ref="upload" :on-upload="onUpload" :value="value" url="."></tc-upload>',

          methods: {
            onUpload(item) {
              expect(item.xhr.withCredentials).to.be.false;
              done();
            },
          },

          mounted() {
            this.$refs.upload.start();
          },
        }).$mount();
      });

      it('should be true', (done) => {
        new Vue({
          data() {
            return {
              value: [
                {
                  file: {
                    name: 'foo.jpg',
                    size: 0,
                    type: 'image/jpeg',
                  },
                  name: 'foo.jpg',
                  status: 'wait',
                },
              ],
            };
          },

          template: '<tc-upload ref="upload" :on-upload="onUpload" :withCredentials="true" :value="value" url="."></tc-upload>',

          methods: {
            onUpload(item) {
              expect(item.xhr.withCredentials).to.be.true;
              done();
            },
          },

          mounted() {
            this.$refs.upload.start();
          },
        }).$mount();
      });
    });

    describe('xhr', () => {
      it('should support custom XMLHttpRequest instance', (done) => {
        new Vue({
          data() {
            return {
              value: [
                {
                  file: {
                    name: 'foo.jpg',
                    size: 0,
                    type: 'image/jpeg',
                  },
                  name: 'foo.jpg',
                  status: 'wait',
                },
              ],

              xhr() {
                const xhr = new XMLHttpRequest();

                xhr.addEventListener('loadend', (event) => {
                  expect(event.type).to.equal('loadend');
                  done();
                });

                return xhr;
              },
            };
          },

          template: '<tc-upload ref="upload" :value="value" :xhr="xhr" url="."></tc-upload>',

          mounted() {
            this.$refs.upload.start();
          },
        }).$mount();
      });
    });
  });

  describe('methods', () => {
    describe('start', () => {
      it('should start upload after call the method', (done) => {
        new Vue({
          data() {
            return {
              value: [
                {
                  file: {
                    name: 'foo.jpg',
                    size: 0,
                    type: 'image/jpeg',
                  },
                  name: 'foo.jpg',
                  status: 'wait',
                },
              ],
            };
          },

          template: '<tc-upload ref="upload" :on-start="onStart" url="." :value="value"></tc-upload>',

          methods: {
            onStart() {
              expect(true).to.be.true;
              done();
            },
          },

          mounted() {
            this.$refs.upload.start();
          },
        }).$mount();
      });
    });

    describe('abort', () => {
      it('should abort upload after call the method', (done) => {
        new Vue({
          data() {
            return {
              value: [
                {
                  file: {
                    name: 'foo.jpg',
                    size: 0,
                    type: 'image/jpeg',
                  },
                  name: 'foo.jpg',
                  status: 'wait',
                },
              ],
            };
          },

          template: '<tc-upload ref="upload" :on-upload="onUpload" :on-error="onError" url="." :value="value"></tc-upload>',

          methods: {
            onUpload(item) {
              this.$refs.upload.abort(item);
            },

            onError(error) {
              expect(error).to.equal('abort');
              done();
            },
          },

          mounted() {
            this.$refs.upload.start();
          },
        }).$mount();
      });
    });
  });
});
