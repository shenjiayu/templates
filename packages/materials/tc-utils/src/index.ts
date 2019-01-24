import {
  Component,
  CreateElement,
  VNode,
  VNodeChildrenArrayContents,
} from 'vue';

const { hasOwnProperty, toString } = Object.prototype;

/**
 * Emulate global in browser.
 */
export const Global: any = typeof global !== 'undefined' ? global : {};

/**
 * Emulate window in node.
 */
export const Window: any = typeof window !== 'undefined' ? window : {};

/**
 * Get the native type of a value.
 * @param {*} value - The value to check.
 * @returns {string} The type of the value.
 */
export function typeOf(value: any): string {
  return toString.call(value).slice(8, -1).toLowerCase();
}

/**
 * Check if the given value is undefined.
 * @param {*} value - The value to check.
 * @returns {boolean} Returns `true` if the given value is undefined, else `false`.
 */
export function isUndefined(value: any): value is undefined {
  return typeof value === 'undefined';
}

/**
 * Check if the given value is a string.
 * @param {*} value - The value to check.
 * @returns {boolean} Returns `true` if the given value is a string, else `false`.
 */
export function isString(value: any): value is string {
  return typeof value === 'string';
}

/**
 * Check if the given value is an empty string.
 * @param {*} value - The value to check.
 * @returns {boolean} Returns `true` if the given value is an empty string, else `false`.
 */
export function isEmptyString(value: any): boolean {
  return value === '';
}

/**
 * Check if the given value is not a number.
 */
export const isNaN = Number.isNaN || Window.isNaN || Global.isNaN;

/**
 * Check if the given value is a number.
 * @param {*} value - The value to check.
 * @returns {boolean} Returns `true` if the given value is a number, else `false`.
 */
export function isNumber(value: any): value is number {
  return typeof value === 'number' && !isNaN(value);
}

/**
 * Check if the given value is a boolean.
 * @param {*} value - The value to check.
 * @returns {boolean} Returns `true` if the given value is a boolean, else `false`.
 */
export function isBoolean(value: any): value is boolean {
  return typeof value === 'boolean';
}

/**
 * Check if the given value is an object.
 * @param {*} value - The value to check.
 * @returns {boolean} Returns `true` if the given value is an object, else `false`.
 */
export function isObject(value: any): value is Object {
  return typeof value === 'object' && value !== null;
}

/**
 * Check if the given value is a plain object.
 * @param {*} value - The value to check.
 * @returns {boolean} Returns `true` if the given value is a plain object, else `false`.
 */
export function isPlainObject(value: any): value is Object {
  if (!isObject(value)) {
    return false;
  }

  try {
    const { constructor: { prototype } } = value;

    return hasOwnProperty.call(prototype, 'isPrototypeOf');
  } catch (error) {
    return false;
  }
}

/**
 * Check if the given value is an empty object.
 * @param {*} value - The value to check.
 * @returns {boolean} Returns `true` if the given value is an empty object, else `false`.
 */
export function isEmptyObject(value: any): boolean {
  return !(isPlainObject(value) && Object.keys(value).length > 0);
}

/**
 * Check if the given value is an array.
 * @param {*} value - The value to check.
 * @returns {boolean} Returns `true` if the given value is an array, else `false`.
 */
export const isArray = Array.isArray || function isArray(value: any): boolean {
  return typeOf(value) === 'array';
};

/**
 * Check if the given value is an array-like.
 * @param {*} value - The value to check.
 * @returns {boolean} Returns `true` if the given value is an array-like, else `false`.
 */
export const isArrayLike = function isArrayLike(value: any): boolean {
  return value && isNumber(value.length) && value.length >= 0;
};

/**
 * Check if the given value is an empty array.
 * @param {*} value - The value to check.
 * @returns {boolean} Returns `true` if the given value is an empty array, else `false`.
 */
export function isEmptyArray(value: any): boolean {
  return !(isArray(value) && value.length > 0);
}

/**
 * Check if the given value is a function.
 * @param {*} value - The value to check.
 * @returns {boolean} Returns `true` if the given value is a function, else `false`.
 */
export function isFunction(value: any): value is Function {
  return typeof value === 'function';
}

/**
 * Check if the given value is an empty string or array or object.
 * @param {*} value - The value to check.
 * @returns {boolean} Returns `true` if the given value is empty, else `false`.
 */
export function isEmpty(value: any): boolean {
  if (isString(value)) {
    return isEmptyString(value);
  }

  if (isArray(value)) {
    return isEmptyArray(value);
  }

  if (isArrayLike(value)) {
    return value.length === 0;
  }

  if (isObject(value)) {
    return isEmptyObject(value);
  }

  return false;
}

const { slice } = Array.prototype;

/**
 * Creates a new Array instance from an array-like or iterable object.
 * @param {*} value - An array-like or iterable object to convert to an array.
 * @param {Function} mapFn - Map function to call on every element of the array.
 * @param {*} thisArg - Value to use as `this` when executing `mapFn`.
 * @returns {Array} Returns A new Array instance.
 */
export const from = Array.from || function from(
  value: any,
  mapFn?: Function,
  thisArg?: any,
): any[] {
  const result = isArrayLike(value) ? slice.call(value) : [];

  return isFunction(mapFn) ? result.map(mapFn, thisArg) : result;
};

/**
 * Check if the given value is a function.
 * @param {*} value - The value to check.
 * @param {Array|TypedArray|string} target - The target to check.
 * @returns {boolean} Returns `true` if the given value is a function, else `false`.
 */
export const includes = function includes(value: any, target: any): boolean {
  return target.includes ? target.includes(value) : target.indexOf(value) !== -1;
};

/**
 * Iterate an array or object, executing a function once for each element.
 * @param {Array|ArrayLike|Object} value - The target array or object.
 * @param {Function} callback - The function to execute.
 */
export function forEach(value: any, callback: (element: any, index: any, self: any) => void): void {
  if (Array.isArray(value)) {
    value.forEach(callback);
  } else if (isObject(value)) {
    Object.keys(value).forEach((key: any): void => {
      callback(value[key], key, value);
    });
  } else if (isArrayLike(value)) {
    from(value).forEach(callback);
  }
}

/**
 * Iterate an array or object, executing a function once for each element.
 * @param {Object} obj - The target object.
 * @param {Array} args - The rest arguments.
 * @returns {Object} - The merged object.
 */
export const assign = Object.assign || function assign(obj: any, ...args: any[]): object {
  if (isObject(obj) && args.length > 0) {
    args.forEach((arg) => {
      Object.keys(arg).forEach((key: any) => {
        obj[key] = arg[key];
      });
    });
  }

  return obj;
};

/**
 * Generates unique ID.
 */
export const uid = ((id: number = 0) => (() => {
  id += 1;

  return id;
}))();

/**
 * Recur a deep object with the specific key.
 * @param {Object} obj - The object to recur.
 * @param {Function} callback - The object to recur.
 * @param {Object} [options={}] - The object to recur.
 * @returns {Object} The text content.
 */
export function recur(obj: any, callback: Function, options: any = {}) {
  options = assign({
    index: 0,
    depth: 0,
    key: 'children',
    parent: null,
  }, options);

  return callback(obj, (parent: any) => {
    const { key } = options;
    const children = parent[key];

    return isArray(children) && children.map((child: any, index: number) => {
      return recur(child, callback, {
        index,
        key,
        parent,
        depth: options.depth + 1,
      });
    });
  }, options);
}

/**
 * Get text content from VNode children.
 * @param {Array<VNode>} children - The VNode children.
 * @returns {string} The text content.
 */
export function getChildrenTextContent(children: VNodeChildrenArrayContents): string {
  return isArray(children) ? children.map((node) => {
    if (isArray(node)) {
      return getChildrenTextContent(node);
    }

    if (isString(node)) {
      return node;
    }

    return node.children ? getChildrenTextContent(node.children) : node.text;
  }).join('') : '';
}

const REGEXP_SPACES = /\s+/;

/**
 * Remove event listener from the target.
 * @param {EventTarget} target - The event target.
 * @param {string} type - The event type(s),
 * @param {Function} listener - The event listener.
 * @param {Object} options - The event options.
 */
export function removeEventListener(
  target: EventTarget,
  type: string,
  listener: Function|any,
  options: any = {},
) {
  const types = type.trim().split(REGEXP_SPACES);

  if (types.length > 1) {
    types.forEach((t: string) => {
      removeEventListener(target, t, listener, options);
    });
    return;
  }

  target.removeEventListener(type, listener, options);
}

/**
 * Add event listener to the target.
 * @param {EventTarget} target - The event target.
 * @param {string} type - The event type(s).
 * @param {Function} listener - The event listener.
 * @param {Object} options - The event options.
 */
export function addEventListener(
  target: EventTarget,
  type: string,
  listener: Function|any,
  options: any = {},
) {
  const types = type.trim().split(REGEXP_SPACES);

  if (types.length > 1) {
    types.forEach((t) => {
      addEventListener(target, t, listener, options);
    });
    return;
  }

  if (options.once) {
    const originalListener = listener;

    listener = (...args: any[]) => {
      removeEventListener(target, type, listener, options);

      return originalListener.apply(target, args);
    };
  }

  target.addEventListener(type, listener, options);
}

/**
 * Check if the given value is a vue component.
 * @param {*} value - The value to check.
 * @returns {boolean} Returns `true` if the given value is a vue component, else `false`.
 */
export function isComponent(value: any): value is Component {
  return isPlainObject(value) && (isString(value.template) || isFunction(value.render));
}

/**
 * Create component dynamically and smartly.
 * @param {String|Function|Object} content - The content.
 * @param {Object} [options={}] - The options.
 * @returns {Object} A vue component.
 */
export function createComponent(content: any, options: any = {}): Component {
  const component: Component = {};

  if (isComponent(content)) {
    assign(component, content);
  } else if (isFunction(content)) {
    component.render = function render(createElement: CreateElement): VNode {
      return content.call(this, createElement, ...options.data);
    };
  } else {
    const tag = options.tag || 'span';

    component.template = `<${tag}>${content}</${tag}>`;
  }

  return component;
}
