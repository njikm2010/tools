import {
  Directive,
  resolveComponent as vueResolveComponent,
  resolveDirective as vueResolveDirective,
  withDirectives as vueWithDirectives,
  isVNode as vueIsVNode,
  VNode,
  DirectiveArguments,
  isVue2,
} from 'vue-demi';
import { isWrapped } from './process';

export const resolveComponent: typeof vueResolveComponent = function (name) {
  if (isVue2) {
    return name;
  }

  return vueResolveComponent.apply(null, arguments as any);
};

export const resolveDirective: typeof vueResolveDirective = function (name) {
  if (isVue2) {
    return name as Directive;
  }

  return vueResolveDirective.apply(null, arguments as any);
};

export interface DirectiveProperty {
  name: string | Directive;
  value: any;
  expression?: any;
  arg: any;
  modifiers: any;
}

export interface DirectiveBinding {
  directives: DirectiveProperty[];
}

export function isVNode(node: any): node is VNode {
  if (vueIsVNode) {
    return vueIsVNode(node);
  } else if (isVue2) {
    return isWrapped(node);
  }

  return false;
}

export function directiveArgumentsToBinding(directives: DirectiveArguments): DirectiveBinding {
  return {
    directives: directives.map(([name, value, arg, modifiers]) => ({
      // 兼容 vue3
      dir: name,
      name,
      value,
      arg,
      modifiers,
    })),
  };
}

export function withDirectives<T extends VNode>(vnode: T, directives: DirectiveArguments): T;
export function withDirectives(directives: DirectiveArguments): DirectiveBinding;
export function withDirectives<T extends VNode>(
  arg1: T | DirectiveArguments,
  arg2?: DirectiveArguments
): T | DirectiveBinding {
  if (isVNode(arg1)) {
    // 注入模式
    if (!isVue2) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      return vueWithDirectives(arg1, arg2!);
    } else {
      // @ts-expect-error
      if (arg1.data) {
        // @ts-expect-error
        arg1.data.directives = { ...arg1.data?.directives, ...directiveArgumentsToBinding(arg2).directives };
      }

      return arg1;
    }
  } else {
    return directiveArgumentsToBinding(arg1);
  }
}
