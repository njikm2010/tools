// 此文件自动生成，请勿编辑
/* eslint-disable @typescript-eslint/prefer-ts-expect-error */
import { SVGAttributes, isVue2, getCurrentInstance } from '@wakeadmin/demi';
import { declareComponent } from '@wakeadmin/h';

// eslint-disable-next-line spaced-comment
export const Service = /*#__PURE__*/ declareComponent<SVGAttributes>({
  name: 'WKSvgService',
  inheritAttrs: true,
  setup() {
    const vm = getCurrentInstance()?.proxy;
    return () => {
      let fallthroughProps: any;

      if (isVue2) {
        fallthroughProps = {
          // @ts-ignore
          on: vm?.$listeners,
        };
      }
      return (
        <svg {...fallthroughProps} viewBox="0 0 1024 1024" class="wk-svg">
          <path d="M807.36 64c48.96 0 88.64 40.864 88.64 91.296v713.376c0 50.432-39.68 91.296-88.64 91.296a85.065 85.065 0 0 1-21.44-2.72l-266.752-68.704a28.704 28.704 0 0 0-14.336 0l-266.72 68.704c-47.488 12.224-95.584-17.504-107.456-66.432A93.952 93.952 0 0 1 128 868.672V155.296C128 104.864 167.68 64 216.64 64zm0 60.864H216.64c-16.32 0-29.568 13.632-29.568 30.432v713.376c0 2.496.32 4.96.896 7.36 3.936 16.32 20 26.24 35.84 22.176l266.688-68.704a86.08 86.08 0 0 1 43.008 0l266.72 68.704a28.736 28.736 0 0 0 7.168.896c16.32 0 29.536-13.632 29.536-30.432V155.296c0-16.8-13.216-30.4-29.536-30.4zm-281.184 206.72a32 32 0 0 1 14.528 14.56l29.696 60.16a32 32 0 0 0 24.096 17.504l66.368 9.664a32 32 0 0 1 17.728 54.56l-48 46.848a32 32 0 0 0-9.216 28.32l11.328 66.112a32 32 0 0 1-46.432 33.728l-59.392-31.2a32 32 0 0 0-29.76 0l-59.392 31.2a32 32 0 0 1-46.432-33.728l11.328-66.112a32 32 0 0 0-9.184-28.32l-48.032-46.848a32 32 0 0 1 17.728-54.56l66.368-9.664a32 32 0 0 0 24.096-17.504l29.696-60.16a32 32 0 0 1 42.88-14.528z" />
        </svg>
      );
    };
  },
});
