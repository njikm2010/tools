// 此文件自动生成，请勿编辑
import { defineComponent, SVGAttributes, isVue2 } from '@wakeadmin/demi';

// eslint-disable-next-line spaced-comment
export const CouponFill = /*#__PURE__*/ defineComponent<SVGAttributes>({
  name: 'WKSvgCouponFill',
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
        <path d="M864 160a96 96 0 0 1 96 96v160a32 32 0 0 1-32 32h-32c-33.92 0-61.952 26.496-63.84 59.296L832 512c0 33.92 26.496 61.952 59.296 63.84L896 576h32a32 32 0 0 1 32 32v160a96 96 0 0 1-96 96H160a96 96 0 0 1-96-96V608a32 32 0 0 1 32-32h32c33.92 0 61.952-26.496 63.84-59.296L192 512c0-33.92-26.496-61.952-59.296-63.84L128 448H96a32 32 0 0 1-32-32V256a96 96 0 0 1 96-96zM608 576H416a32 32 0 0 0 0 64h192a32 32 0 0 0 0-64zm0-192H416a32 32 0 0 0 0 64h192a32 32 0 0 0 0-64z" />
      </svg>
    );
  },
});
