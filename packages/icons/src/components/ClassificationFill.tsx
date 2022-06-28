// 此文件自动生成，请勿编辑
import { defineComponent, SVGAttributes, isVue2 } from '@wakeadmin/demi';

// eslint-disable-next-line spaced-comment
export const ClassificationFill = /*#__PURE__*/ defineComponent<SVGAttributes>({
  name: 'WKSvgClassificationFill',
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
          d="M464.64 527.36a32 32 0 0 1 32 32v152.32A184.32 184.32 0 0 1 312.32 896H160a32 32 0 0 1-32-32V711.68a184.32 184.32 0 0 1 184.32-184.32zm247.04 0A184.32 184.32 0 0 1 896 711.68V864a32 32 0 0 1-32 32H711.68a184.32 184.32 0 0 1-184.32-184.32V559.36a32 32 0 0 1 32-32h152.32zM312.32 128a184.32 184.32 0 0 1 184.32 184.32v152.32a32 32 0 0 1-32 32H312.32A184.32 184.32 0 0 1 128 312.32V160a32 32 0 0 1 32-32h152.32zM864 128a32 32 0 0 1 32 32v152.32a184.32 184.32 0 0 1-184.32 184.32H559.36a32 32 0 0 1-32-32V312.32A184.32 184.32 0 0 1 711.68 128z"
        />
      </svg>
    );
  },
});
