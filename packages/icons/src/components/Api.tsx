// 此文件自动生成，请勿编辑
/* eslint-disable @typescript-eslint/prefer-ts-expect-error */
import { SVGAttributes, isVue2, getCurrentInstance } from '@wakeadmin/demi';
import { declareComponent } from '@wakeadmin/h';

// eslint-disable-next-line spaced-comment
export const Api = /*#__PURE__*/ declareComponent<SVGAttributes>({
  name: 'WKSvgApi',
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
          <path d="m422.336 387.744 49.152 49.152-73.696 73.696 98.24 98.24 73.728-73.664 49.12 49.12-73.696 73.696 19.648 19.648c15.264 15.264 16.224 39.424 2.88 55.808l-2.88 3.168L459.2 842.24a191.104 191.104 0 0 1-257.408 11.744l-84.16 84.128a6.4 6.4 0 0 1-9.024 0l-40.096-40.096a6.4 6.4 0 0 1 0-9.056l84.128-84.128a191.136 191.136 0 0 1 5.856-251.264l5.888-6.144 105.632-105.6a41.696 41.696 0 0 1 55.584-3.072l3.392 3.04 19.648 19.648 73.696-73.696zM299.52 510.592l-85.984 85.984a121.6 121.6 0 0 0-8.992 161.92l4.416 5.216 4.576 4.832 24.576 24.576a121.6 121.6 0 0 0 166.976 4.736l4.992-4.736 85.984-85.984L299.52 510.592zM915.392 68.48l40.096 40.096a6.4 6.4 0 0 1 0 9.056l-84.128 84.16a191.136 191.136 0 0 1-5.856 251.264l-5.888 6.144-105.632 105.632a41.696 41.696 0 0 1-55.584 3.04l-3.392-3.04-235.84-235.84a41.696 41.696 0 0 1-3.04-55.584l3.04-3.392L564.8 164.384a191.104 191.104 0 0 1 257.408-11.744l84.16-84.128a6.4 6.4 0 0 1 9.024 0zM618.944 208.736l-4.992 4.736-85.984 85.984L724.512 496l85.984-85.984a121.6 121.6 0 0 0 8.992-161.92l-4.416-5.216-4.576-4.8-24.576-24.608a121.6 121.6 0 0 0-166.976-4.736z" />
        </svg>
      );
    };
  },
});
