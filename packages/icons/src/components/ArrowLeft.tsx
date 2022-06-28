// 此文件自动生成，请勿编辑
import { defineComponent, SVGAttributes, isVue2 } from '@wakeadmin/demi';

// eslint-disable-next-line spaced-comment
export const ArrowLeft = /*#__PURE__*/ defineComponent<SVGAttributes>({
  name: 'WKSvgArrowLeft',
  inheritAttrs: true,
  render() {
    let fallthroughProps: any;

    if (isVue2) {
      fallthroughProps = {
        // @ts-expect-error
        on: this.$listeners,
      };
    }
    return (
      <svg {...fallthroughProps} viewBox="0 0 1024 1024" class="wk-svg">
        <path
          fill="currentColor"
          d="m711.392 916.48-389.76-370.56a47.104 47.104 0 0 1-3.392-64.256l3.392-3.552L711.36 107.52a3.2 3.2 0 0 1 5.408 2.304v86.4a6.4 6.4 0 0 1-1.984 4.608L387.616 512l327.2 311.136a6.4 6.4 0 0 1 1.984 4.64v86.4a3.2 3.2 0 0 1-5.408 2.304z"
        />
      </svg>
    );
  },
});
