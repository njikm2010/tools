// 此文件自动生成，请勿编辑
import { defineComponent, SVGAttributes, isVue2 } from '@wakeadmin/demi';

// eslint-disable-next-line spaced-comment
export const VideoFill = /*#__PURE__*/ defineComponent<SVGAttributes>({
  name: 'WKSvgVideoFill',
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
        <path d="M736 160a64 64 0 0 1 64 64v135.712l114.336-70.848a6.4 6.4 0 0 1 9.632 5.536v425.728a6.4 6.4 0 0 1-9.6 5.504L800 654.752V800a64 64 0 0 1-64 64H160a64 64 0 0 1-64-64V224a64 64 0 0 1 64-64h576zM384 288H256a32 32 0 0 0-3.744 63.776L256 352h128a32 32 0 1 0 0-64z" />
      </svg>
    );
  },
});
