// 此文件自动生成，请勿编辑
import { defineComponent, SVGAttributes, isVue2 } from '@wakeadmin/demi';

// eslint-disable-next-line spaced-comment
export const Collage = /*#__PURE__*/ defineComponent<SVGAttributes>({
  name: 'WKSvgCollage',
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
        <path d="M828 196c55.232 0 100 44.8 100 100v533.344c0 55.232-44.8 100-100 100H228a100 100 0 0 1-100-100V296c0-55.232 44.8-100 100-100zm0 66.656H228c-18.4 0-33.344 14.944-33.344 33.344v533.344c0 18.4 14.944 33.312 33.344 33.312h600c18.4 0 33.344-14.912 33.344-33.312V296c0-18.4-14.944-33.344-33.344-33.344zM694.656 396c17.12 0 31.2 12.864 33.12 29.44l.224 3.904v27.776a200 200 0 0 1-399.872 7.488L328 457.12v-27.776a33.344 33.344 0 0 1 66.432-3.904l.224 3.904v27.776a133.344 133.344 0 0 0 266.528 6.656l.16-6.656v-27.776c0-18.432 14.912-33.344 33.312-33.344zM768 96a32 32 0 0 1 0 64H256a32 32 0 1 1 0-64h512z" />
      </svg>
    );
  },
});
